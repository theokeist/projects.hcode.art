'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { CALLIGRAPHY_PASSAGES, INK_PALETTES } from '../../data/calligraphy-data';

// Helper: Catmull-Rom spline interpolation to ensure zero straight lines
function getSplinePoint(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;

  const f0 = -0.5 * t3 + t2 - 0.5 * t;
  const f1 = 1.5 * t3 - 2.5 * t2 + 1.0;
  const f2 = -1.5 * t3 + 2.0 * t2 + 0.5 * t;
  const f3 = 0.5 * t3 - 0.5 * t2;

  const x = p0.x * f0 + p1.x * f1 + p2.x * f2 + p3.x * f3;
  const y = p0.y * f0 + p1.y * f1 + p2.y * f2 + p3.y * f3;
  const w = p0.w * f0 + p1.w * f1 + p2.w * f2 + p3.w * f3;

  return { x, y, w: Math.max(0.2, w) };
}

// Generate smooth dense spline nodes along stroke points
function interpolateStrokeNodes(pts, samplesPerSegment = 24) {
  if (!pts || pts.length < 2) return [];

  const extended = [pts[0], ...pts, pts[pts.length - 1]];
  const nodes = [];

  for (let i = 1; i < extended.length - 2; i += 1) {
    const p0 = extended[i - 1];
    const p1 = extended[i];
    const p2 = extended[i + 1];
    const p3 = extended[i + 2];

    const steps = samplesPerSegment;
    for (let s = 0; s < steps; s += 1) {
      const t = s / steps;
      nodes.push(getSplinePoint(p0, p1, p2, p3, t));
    }
  }
  nodes.push({ x: pts[pts.length - 1].x, y: pts[pts.length - 1].y, w: pts[pts.length - 1].w });
  return nodes;
}

export default function CalligraphySection() {
  const [selectedPassageId, setSelectedPassageId] = useState(CALLIGRAPHY_PASSAGES[0].id);
  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const [activePaletteKey, setActivePaletteKey] = useState('sumi');
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [interactiveMode, setInteractiveMode] = useState(false);
  const [strokeProgress, setStrokeProgress] = useState(0); // 0 to 1 across all strokes

  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const progressRef = useRef(0);
  const userStrokesRef = useRef([]);
  const currentUserStrokeRef = useRef(null);
  const lastTimeRef = useRef(null);

  const activePassage = CALLIGRAPHY_PASSAGES.find(p => p.id === selectedPassageId) || CALLIGRAPHY_PASSAGES[0];
  const activeChar = activePassage.characters[selectedCharIndex] || activePassage.characters[0];
  const activePalette = INK_PALETTES[activePaletteKey] || INK_PALETTES.sumi;

  // Reset animation when character or passage changes
  useEffect(() => {
    progressRef.current = 0;
    setStrokeProgress(0);
    setIsPlaying(true);
  }, [selectedPassageId, selectedCharIndex]);

  // Main canvas render loop
  const renderCanvas = useCallback((progressRatio) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const scale = Math.min(width, height) / 100;
    const offsetX = (width - 100 * scale) * 0.5;
    const offsetY = (height - 100 * scale) * 0.5;

    ctx.clearRect(0, 0, width, height);

    // 1. Draw subtle rice paper texture and border guidelines
    ctx.save();
    // Soft rice paper grid (Mǐzìgé 米字格 guide for traditional calligraphy)
    ctx.strokeStyle = activePaletteKey === 'sumi' || activePaletteKey === 'cinnabar'
      ? 'rgba(180, 140, 90, 0.14)'
      : 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    const boxSize = 88 * scale;
    const boxX = (width - boxSize) * 0.5;
    const boxY = (height - boxSize) * 0.5;

    // Outer framing square
    ctx.strokeRect(boxX, boxY, boxSize, boxSize);

    // Diagonal and cross guidelines (米 shape)
    ctx.beginPath();
    ctx.moveTo(boxX, boxY);
    ctx.lineTo(boxX + boxSize, boxY + boxSize);
    ctx.moveTo(boxX + boxSize, boxY);
    ctx.lineTo(boxX, boxY + boxSize);
    ctx.moveTo(boxX + boxSize * 0.5, boxY);
    ctx.lineTo(boxX + boxSize * 0.5, boxY + boxSize);
    ctx.moveTo(boxX, boxY + boxSize * 0.5);
    ctx.lineTo(boxX + boxSize, boxY + boxSize * 0.5);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    const { washRgb, bodyRgb, spineRgb, haloOpacity } = activePalette;

    // 2. Render ancient masterstrokes
    if (!interactiveMode) {
      const strokes = activeChar.strokes || [];
      const totalStrokes = strokes.length;
      if (totalStrokes > 0) {
        // Calculate which stroke we are on and its local progress
        const globalProgress = Math.max(0, Math.min(1, progressRatio));
        const totalUnits = totalStrokes;
        const currentStrokeExact = globalProgress * totalUnits;

        let activeBrushTip = null;

        for (let sIdx = 0; sIdx < totalStrokes; sIdx += 1) {
          if (currentStrokeExact < sIdx) break; // Not started yet

          const strokeDef = strokes[sIdx];
          const localProgress = Math.min(1, currentStrokeExact - sIdx);
          const rawNodes = interpolateStrokeNodes(strokeDef.pts, 32);
          if (rawNodes.length < 2) continue;

          // Convert normalized coordinates to canvas space
          const screenNodes = rawNodes.map(n => ({
            x: offsetX + n.x * scale,
            y: offsetY + n.y * scale,
            w: n.w * (strokeDef.baseWidth || 8.0) * (scale / 8.0)
          }));

          const visibleCount = Math.max(2, Math.floor(screenNodes.length * localProgress));
          const activeNodes = screenNodes.slice(0, visibleCount);
          if (activeNodes.length < 2) continue;

          // Compute normals for ribbon rendering
          for (let i = 0; i < activeNodes.length; i += 1) {
            let dx, dy;
            if (i === 0) {
              dx = activeNodes[1].x - activeNodes[0].x;
              dy = activeNodes[1].y - activeNodes[0].y;
            } else if (i === activeNodes.length - 1) {
              dx = activeNodes[activeNodes.length - 1].x - activeNodes[activeNodes.length - 2].x;
              dy = activeNodes[activeNodes.length - 1].y - activeNodes[activeNodes.length - 2].y;
            } else {
              dx = activeNodes[i + 1].x - activeNodes[i - 1].x;
              dy = activeNodes[i + 1].y - activeNodes[i - 1].y;
            }
            const len = Math.hypot(dx, dy) || 1;
            activeNodes[i].nx = -dy / len;
            activeNodes[i].ny = dx / len;
            activeNodes[i].dx = dx / len;
            activeNodes[i].dy = dy / len;
          }

          // Remember tip location if currently actively drawing this stroke
          if (localProgress < 1 && localProgress > 0) {
            const tipNode = activeNodes[activeNodes.length - 1];
            activeBrushTip = {
              x: tipNode.x,
              y: tipNode.y,
              nx: tipNode.nx,
              ny: tipNode.ny,
              dx: tipNode.dx,
              dy: tipNode.dy,
              width: tipNode.w
            };
          }

          // PASS A: Soft Outer Xuan-paper Ink Bleed (Bokuteki 墨滴)
          ctx.save();
          ctx.beginPath();
          const l0 = activeNodes[0];
          ctx.moveTo(l0.x + l0.nx * l0.w * 0.95, l0.y + l0.ny * l0.w * 0.95);
          for (let i = 1; i < activeNodes.length; i += 1) {
            const cur = activeNodes[i];
            ctx.lineTo(cur.x + cur.nx * cur.w * 0.95, cur.y + cur.ny * cur.w * 0.95);
          }
          for (let i = activeNodes.length - 1; i >= 0; i -= 1) {
            const cur = activeNodes[i];
            ctx.lineTo(cur.x - cur.nx * cur.w * 0.95, cur.y - cur.ny * cur.w * 0.95);
          }
          ctx.closePath();
          ctx.fillStyle = `rgba(${washRgb.r}, ${washRgb.g}, ${washRgb.b}, ${haloOpacity})`;
          ctx.filter = 'blur(3.5px)';
          ctx.fill();
          ctx.restore();

          // PASS B: Dense Saturated Ink Body (Belly of the stroke)
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(l0.x + l0.nx * l0.w * 0.65, l0.y + l0.ny * l0.w * 0.65);
          for (let i = 1; i < activeNodes.length; i += 1) {
            const cur = activeNodes[i];
            ctx.lineTo(cur.x + cur.nx * cur.w * 0.65, cur.y + cur.ny * cur.w * 0.65);
          }
          for (let i = activeNodes.length - 1; i >= 0; i -= 1) {
            const cur = activeNodes[i];
            ctx.lineTo(cur.x - cur.nx * cur.w * 0.65, cur.y - cur.ny * cur.w * 0.65);
          }
          ctx.closePath();
          ctx.fillStyle = `rgba(${bodyRgb.r}, ${bodyRgb.g}, ${bodyRgb.b}, 0.94)`;
          ctx.fill();

          // PASS C: Dry Brush Bristle Hair Striations (Kasure / Feibai 飛白)
          if (strokeDef.hasBristles !== false) {
            const bristleFractions = [-0.35, -0.15, 0.15, 0.35];
            ctx.lineWidth = Math.max(0.6, 0.9 * (scale / 8.0));
            ctx.strokeStyle = `rgba(${washRgb.r}, ${washRgb.g}, ${washRgb.b}, 0.68)`;

            for (const bFrac of bristleFractions) {
              ctx.beginPath();
              ctx.moveTo(l0.x + l0.nx * l0.w * bFrac, l0.y + l0.ny * l0.w * bFrac);
              for (let i = 1; i < activeNodes.length; i += 1) {
                const cur = activeNodes[i];
                ctx.lineTo(cur.x + cur.nx * cur.w * bFrac, cur.y + cur.ny * cur.w * bFrac);
              }
              ctx.stroke();
            }
          }

          // PASS D: Inner Luminous Calligraphic Spine
          ctx.beginPath();
          ctx.moveTo(l0.x, l0.y);
          for (let i = 1; i < activeNodes.length; i += 1) {
            ctx.lineTo(activeNodes[i].x, activeNodes[i].y);
          }
          ctx.lineWidth = Math.max(0.8, l0.w * 0.16);
          ctx.strokeStyle = `rgba(${spineRgb.r}, ${spineRgb.g}, ${spineRgb.b}, 0.85)`;
          ctx.stroke();

          ctx.restore();
        }

        // 3. Draw Living Calligraphy Brush Tip moving along stroke
        if (activeBrushTip) {
          ctx.save();
          const { x, y, dx, dy, width: tipW } = activeBrushTip;
          const angle = Math.atan2(dy, dx);

          ctx.translate(x, y);
          ctx.rotate(angle);

          // Ink puddle at point of contact
          ctx.beginPath();
          ctx.ellipse(0, 0, tipW * 0.7, tipW * 0.45, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${bodyRgb.r}, ${bodyRgb.g}, ${bodyRgb.b}, 0.95)`;
          ctx.fill();

          // Brush hair cone (Fude tip)
          ctx.beginPath();
          ctx.moveTo(-tipW * 0.4, -tipW * 0.6);
          ctx.lineTo(tipW * 0.6, 0); // Tip touching paper
          ctx.lineTo(-tipW * 0.4, tipW * 0.6);
          ctx.lineTo(-tipW * 1.8, tipW * 0.3);
          ctx.lineTo(-tipW * 1.8, -tipW * 0.3);
          ctx.closePath();

          const tipGrad = ctx.createLinearGradient(-tipW * 1.8, 0, tipW * 0.6, 0);
          tipGrad.addColorStop(0, '#5a4632'); // Brown bamboo hair ferrule
          tipGrad.addColorStop(0.35, '#221e1a');
          tipGrad.addColorStop(1, `rgba(${bodyRgb.r}, ${bodyRgb.g}, ${bodyRgb.b}, 1)`);
          ctx.fillStyle = tipGrad;
          ctx.fill();

          // Bamboo brush handle extending upward-left
          ctx.beginPath();
          ctx.rect(-tipW * 5.2, -tipW * 0.28, tipW * 3.4, tipW * 0.56);
          ctx.fillStyle = '#b8860b'; // Aged bamboo golden shaft
          ctx.fill();

          ctx.restore();
        }
      }
    } else {
      // User Interactive Brush strokes
      ctx.save();
      const allUserStrokes = [...userStrokesRef.current];
      if (currentUserStrokeRef.current) allUserStrokes.push(currentUserStrokeRef.current);

      for (const stroke of allUserStrokes) {
        if (!stroke.pts || stroke.pts.length < 2) continue;
        const nodes = stroke.pts;

        // Render user stroke as continuous curving ribbon
        ctx.beginPath();
        ctx.moveTo(nodes[0].x, nodes[0].y);
        for (let i = 1; i < nodes.length - 1; i += 1) {
          const cx = (nodes[i].x + nodes[i + 1].x) * 0.5;
          const cy = (nodes[i].y + nodes[i + 1].y) * 0.5;
          ctx.quadraticCurveTo(nodes[i].x, nodes[i].y, cx, cy);
        }
        ctx.lineTo(nodes[nodes.length - 1].x, nodes[nodes.length - 1].y);
        ctx.lineWidth = Math.max(3, stroke.baseWidth || 10);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = `rgba(${bodyRgb.r}, ${bodyRgb.g}, ${bodyRgb.b}, 0.88)`;
        ctx.stroke();

        // Inner highlight
        ctx.lineWidth = Math.max(1, (stroke.baseWidth || 10) * 0.25);
        ctx.strokeStyle = `rgba(${spineRgb.r}, ${spineRgb.g}, ${spineRgb.b}, 0.72)`;
        ctx.stroke();
      }
      ctx.restore();
    }
  }, [activeChar, activePalette, activePaletteKey, interactiveMode]);

  // Animation frame loop
  useEffect(() => {
    let active = true;

    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!interactiveMode && isPlaying) {
        const strokeDuration = 1800 / speedMultiplier;
        const totalDuration = (activeChar.strokes?.length || 1) * strokeDuration;
        const progressIncrement = delta / totalDuration;

        progressRef.current += progressIncrement;
        if (progressRef.current >= 1.0) {
          progressRef.current = 1.0;
          setIsPlaying(false);
        }
        setStrokeProgress(progressRef.current);
      }

      renderCanvas(progressRef.current);

      if (active) {
        animFrameRef.current = window.requestAnimationFrame(animate);
      }
    };

    animFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      active = false;
      if (animFrameRef.current) window.cancelAnimationFrame(animFrameRef.current);
    };
  }, [interactiveMode, isPlaying, speedMultiplier, activeChar, renderCanvas]);

  // Handle canvas sizing on resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      renderCanvas(progressRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderCanvas]);

  // Interactive user brush events
  const handlePointerDown = (e) => {
    if (!interactiveMode) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const x = (e.clientX - rect.left) * dpr;
    const y = (e.clientY - rect.top) * dpr;

    currentUserStrokeRef.current = {
      baseWidth: 12 * (canvas.width / 400),
      pts: [{ x, y }]
    };
  };

  const handlePointerMove = (e) => {
    if (!interactiveMode || !currentUserStrokeRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const x = (e.clientX - rect.left) * dpr;
    const y = (e.clientY - rect.top) * dpr;

    const stroke = currentUserStrokeRef.current;
    const lastPt = stroke.pts[stroke.pts.length - 1];
    const dist = Math.hypot(x - lastPt.x, y - lastPt.y);

    if (dist > 4) {
      stroke.pts.push({ x, y });
    }
  };

  const handlePointerUp = () => {
    if (!interactiveMode || !currentUserStrokeRef.current) return;
    userStrokesRef.current.push(currentUserStrokeRef.current);
    currentUserStrokeRef.current = null;
  };

  const restartAnimation = () => {
    progressRef.current = 0;
    setStrokeProgress(0);
    setIsPlaying(true);
    setInteractiveMode(false);
  };

  const clearCanvas = () => {
    userStrokesRef.current = [];
    currentUserStrokeRef.current = null;
    renderCanvas(progressRef.current);
  };

  return (
    <section id="calligraphy" className="portal-section calligraphy-showcase-section" aria-labelledby="calligraphy-title">
      <div className="portal-section-inner">
        {/* Section Header */}
        <div className="section-highlight-line" aria-hidden="true">
          <span className="section-hash-rule" />
        </div>

        <h2 id="calligraphy-title" className="portal-section-title">
          <span className="title-main">STAROVĚKÉ </span>
          <span className="accent-text">PÍSMO V POHYBU</span>
        </h2>

        <p className="portal-section-lead">
          Ponořte se do dokonalosti asijského kaligrafického umění (Shūfǎ 書法 / Shodō 書道 / Seoye 書藝).
          V tradiční kaligrafii <strong>neexistuje jediná rovná čára</strong> – každý tah dýchá, ohýbá se jako luk,
          sleduje přirozené zrychlení ruky a nechává inkoust vpíjet do rýžového papíru.
        </p>

        {/* Masterpiece Carousel / Tabs */}
        <div className="calligraphy-passage-nav" role="tablist" aria-label="Výběr starověkého díla">
          {CALLIGRAPHY_PASSAGES.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={p.id === selectedPassageId}
              className={`passage-tab-btn ${p.id === selectedPassageId ? 'is-active' : ''}`}
              onClick={() => {
                setSelectedPassageId(p.id);
                setSelectedCharIndex(0);
              }}
            >
              <span className="passage-tab-hanzi">{p.title}</span>
              <span className="passage-tab-cz">{p.summaryCz}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Stage Grid */}
        <div className="calligraphy-stage-grid">
          {/* LEFT: Authentic Calligraphy Canvas Theater */}
          <div className="calligraphy-canvas-card">
            <div className="calligraphy-canvas-header">
              <div className="canvas-header-left">
                <span className="canvas-badge-era">{activePassage.originEra}</span>
                <span className="canvas-badge-script">{activePassage.scriptStyle}</span>
              </div>
              <div className="palette-picker-row" aria-label="Volba kaligrafického inkoustu">
                {Object.entries(INK_PALETTES).map(([key, pal]) => (
                  <button
                    key={key}
                    type="button"
                    className={`palette-chip ${activePaletteKey === key ? 'is-selected' : ''}`}
                    onClick={() => setActivePaletteKey(key)}
                    title={pal.description}
                  >
                    <span className="palette-color-dot" style={{ backgroundColor: `rgb(${pal.bodyRgb.r}, ${pal.bodyRgb.g}, ${pal.bodyRgb.b})` }} />
                    <span className="palette-chip-name">{pal.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* The Rice Paper Canvas Scroll */}
            <div className={`calligraphy-scroll-frame ${activePalette.paperClass}`}>
              <canvas
                ref={canvasRef}
                className="calligraphy-stage-canvas"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
              />

              {/* Watermark character in background */}
              <div className="calligraphy-watermark" aria-hidden="true">
                {activeChar.char}
              </div>

              {/* Interactive mode overlay badge */}
              {interactiveMode && (
                <div className="interactive-mode-badge">
                  🖌️ Vlastní štětec: Kreslete volně po plátně myší nebo dotykem
                </div>
              )}
            </div>

            {/* Animation Controls Row */}
            <div className="calligraphy-controls-bar">
              <div className="controls-group-left">
                <button
                  type="button"
                  className="calligraphy-ctrl-btn btn-play"
                  onClick={() => {
                    if (interactiveMode) setInteractiveMode(false);
                    if (strokeProgress >= 1) restartAnimation();
                    else setIsPlaying(!isPlaying);
                  }}
                  title={isPlaying ? 'Pozastavit štětec' : 'Spustit psaní'}
                >
                  {isPlaying ? '⏸ Pozastavit' : '▶ Pokračovat'}
                </button>
                <button
                  type="button"
                  className="calligraphy-ctrl-btn"
                  onClick={restartAnimation}
                  title="Spustit animaci znovu od prvního tahu"
                >
                  ↺ Znovu
                </button>
                <button
                  type="button"
                  className={`calligraphy-ctrl-btn ${interactiveMode ? 'btn-active' : ''}`}
                  onClick={() => setInteractiveMode(!interactiveMode)}
                  title="Přepnout na volné kreslení vlastním kaligrafickým štětcem"
                >
                  {interactiveMode ? '📜 Zpět k textu' : '✍️ Vyzkoušet štětec'}
                </button>
                {interactiveMode && (
                  <button
                    type="button"
                    className="calligraphy-ctrl-btn btn-clear"
                    onClick={clearCanvas}
                  >
                    🗑️ Smazat
                  </button>
                )}
              </div>

              {/* Speed & Scrubbing Controls */}
              <div className="controls-group-right">
                <div className="speed-selector">
                  <span className="speed-label">Rychlost:</span>
                  {[0.5, 1, 1.75].map((spd) => (
                    <button
                      key={spd}
                      type="button"
                      className={`speed-btn ${speedMultiplier === spd ? 'is-active' : ''}`}
                      onClick={() => setSpeedMultiplier(spd)}
                    >
                      {spd === 0.5 ? '0.5×' : spd === 1 ? '1×' : '1.8×'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Character Selector for this passage */}
            <div className="passage-chars-bar">
              <span className="chars-bar-label">Znaky v textu:</span>
              <div className="chars-btn-group">
                {activePassage.characters.map((c, i) => (
                  <button
                    key={c.char}
                    type="button"
                    className={`char-select-btn ${i === selectedCharIndex ? 'is-active' : ''}`}
                    onClick={() => {
                      setSelectedCharIndex(i);
                      setInteractiveMode(false);
                    }}
                  >
                    <span className="btn-hanzi">{c.char}</span>
                    <span className="btn-pinyin">{c.pinyin}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Complete Translated Section & Ancient Philosophy */}
          <div className="calligraphy-translation-card">
            {/* Ancient Source Citation */}
            <div className="translation-citation">
              <span className="citation-icon" aria-hidden="true">📜</span>
              <div>
                <h3 className="citation-title">{activePassage.title} — {activePassage.summaryCz}</h3>
                <p className="citation-source">{activePassage.source}</p>
              </div>
            </div>

            {/* Poetic Literary Translation Panel */}
            <div className="translation-body">
              <div className="translation-box translation-cz">
                <div className="translation-box-label">ČESKÝ PŘEKLAD (LITERÁRNÍ)</div>
                <blockquote className="translation-quote">
                  „{activePassage.translationCz}“
                </blockquote>
              </div>

              <div className="translation-box translation-en">
                <div className="translation-box-label">ENGLISH TRANSLATION</div>
                <p className="translation-en-text">
                  “{activePassage.translationEn}”
                </p>
              </div>

              {/* Verses Breakdown */}
              <div className="original-verses-breakdown">
                <div className="translation-box-label">PŮVODNÍ ZNĚNÍ PO ŘÁDCÍCH</div>
                <div className="verses-list">
                  {activePassage.quoteLines.map((line, idx) => (
                    <div key={idx} className="verse-item">
                      <span className="verse-hanzi">{line.hanzi}</span>
                      <span className="verse-pinyin">{line.pinyin}</span>
                      <span className="verse-cz">{line.cz}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deep Philosophical Commentary */}
              <div className="philosophy-box">
                <div className="philosophy-header">
                  <span className="philosophy-icon" aria-hidden="true">☯</span>
                  <h4>Filozofická podstata a mistrovství štětce</h4>
                </div>
                <p className="philosophy-text">{activePassage.philosophyCz}</p>
              </div>

              {/* Active Character Anatomy Inspector */}
              <div className="active-char-anatomy">
                <div className="char-anatomy-badge">ANATOMIE ZNAKU: {activeChar.char} ({activeChar.pinyin})</div>
                <div className="anatomy-details-grid">
                  <div className="anatomy-col">
                    <span className="anatomy-label">Význam:</span>
                    <span className="anatomy-val">{activeChar.meaningCz}</span>
                  </div>
                  <div className="anatomy-col">
                    <span className="anatomy-label">Klíč (Radikál):</span>
                    <span className="anatomy-val">{activeChar.radical}</span>
                  </div>
                  <div className="anatomy-col">
                    <span className="anatomy-label">Počet tahů:</span>
                    <span className="anatomy-val">{activeChar.strokeCount} tahů</span>
                  </div>
                  <div className="anatomy-col">
                    <span className="anatomy-label">Fonologie:</span>
                    <span className="anatomy-val">{activeChar.tone}</span>
                  </div>
                </div>
                <p className="etymology-description">{activeChar.etymology}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
