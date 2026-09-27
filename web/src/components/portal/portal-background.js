'use client';

import { useEffect, useRef } from 'react';

function parseColorToRgb(colorStr, fallback = { r: 0, g: 230, b: 180 }) {
  if (!colorStr) return fallback;
  const hex = colorStr.trim();
  if (hex.startsWith('#')) {
    const clean = hex.slice(1);
    if (clean.length === 3) {
      return {
        r: parseInt(clean[0] + clean[0], 16),
        g: parseInt(clean[1] + clean[1], 16),
        b: parseInt(clean[2] + clean[2], 16)
      };
    }
    if (clean.length >= 6) {
      return {
        r: parseInt(clean.slice(0, 2), 16),
        g: parseInt(clean.slice(2, 4), 16),
        b: parseInt(clean.slice(4, 6), 16)
      };
    }
  }
  const rgbMatch = hex.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1], 10),
      g: parseInt(rgbMatch[2], 10),
      b: parseInt(rgbMatch[3], 10)
    };
  }
  return fallback;
}

// =========================================================================
// KEN PERLIN 3D NOISE & PHOTOREALISTIC FBM FOG GENERATOR
// =========================================================================
const PERM = new Uint8Array(512);
const P_SRC = [
  151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,
  8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,
  35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,
  134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,
  55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,
  18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,
  59,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,
  189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,
  172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,
  228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,
  107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,
  138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
];
for (let i = 0; i < 256; i += 1) {
  PERM[i] = P_SRC[i];
  PERM[i + 256] = P_SRC[i];
}

function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a, b, t) {
  return a + t * (b - a);
}

function grad3D(h, x, y, z) {
  const u = (h & 15) < 8 ? x : y;
  const v = (h & 15) < 4 ? y : ((h & 15) === 12 || (h & 15) === 14 ? x : z);
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

function perlin3D(x, y, z) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const Z = Math.floor(z) & 255;
  const xf = x - Math.floor(x);
  const yf = y - Math.floor(y);
  const zf = z - Math.floor(z);
  const u = fade(xf);
  const v = fade(yf);
  const w = fade(zf);
  const A = PERM[X] + Y, AA = PERM[A] + Z, AB = PERM[A + 1] + Z;
  const B = PERM[X + 1] + Y, BA = PERM[B] + Z, BB = PERM[B + 1] + Z;
  return lerp(
    lerp(
      lerp(grad3D(PERM[AA], xf, yf, zf), grad3D(PERM[BA], xf - 1, yf, zf), u),
      lerp(grad3D(PERM[AB], xf, yf - 1, zf), grad3D(PERM[BB], xf - 1, yf - 1, zf), u),
      v
    ),
    lerp(
      lerp(grad3D(PERM[AA + 1], xf, yf, zf - 1), grad3D(PERM[BA + 1], xf - 1, yf, zf - 1), u),
      lerp(grad3D(PERM[AB + 1], xf, yf - 1, zf - 1), grad3D(PERM[BB + 1], xf - 1, yf - 1, zf - 1), u),
      v
    ),
    w
  );
}

const FOG_TEX_W = 480;
const BILLOWS_TEX_H = 240;
const STREAMERS_TEX_H = 160;

let fogBillowsCanvas = null;
let fogStreamersCanvas = null;

function createRealisticFogTextures(accentRgb, secondaryRgb, tertiaryRgb = accentRgb) {
  if (typeof document === 'undefined') return;

  // 1. Fog Billows Canvas (Deep rolling cumulus/stratus cloud banks with 4-octave fractal density)
  if (!fogBillowsCanvas) {
    fogBillowsCanvas = document.createElement('canvas');
  }
  fogBillowsCanvas.width = FOG_TEX_W;
  fogBillowsCanvas.height = BILLOWS_TEX_H;
  const bCtx = fogBillowsCanvas.getContext('2d');
  if (bCtx) {
    const imgData = bCtx.createImageData(FOG_TEX_W, BILLOWS_TEX_H);
    const data = imgData.data;

    // Precompute cylindrical columns for 100% seamless horizontal wrap (no seams)
    const px1 = new Float32Array(FOG_TEX_W), pz1 = new Float32Array(FOG_TEX_W);
    const px2 = new Float32Array(FOG_TEX_W), pz2 = new Float32Array(FOG_TEX_W);
    const px3 = new Float32Array(FOG_TEX_W), pz3 = new Float32Array(FOG_TEX_W);
    const px4 = new Float32Array(FOG_TEX_W), pz4 = new Float32Array(FOG_TEX_W);
    for (let x = 0; x < FOG_TEX_W; x += 1) {
      const theta = (x / FOG_TEX_W) * Math.PI * 2;
      const c = Math.cos(theta), s = Math.sin(theta);
      px1[x] = c * 1.35 + 14.2;  pz1[x] = s * 1.35 + 42.1;
      px2[x] = c * 2.70 + 28.4;  pz2[x] = s * 2.70 + 84.2;
      px3[x] = c * 5.40 + 56.8;  pz3[x] = s * 5.40 + 168.4;
      px4[x] = c * 10.8 + 113.6; pz4[x] = s * 10.8 + 336.8;
    }

    let ptr = 0;
    for (let y = 0; y < BILLOWS_TEX_H; y += 1) {
      const ny1 = (y / BILLOWS_TEX_H) * 1.75;
      const ny2 = ny1 * 2.0;
      const ny3 = ny1 * 4.0;
      const ny4 = ny1 * 8.0;
      const yFalloff = Math.sin((y / BILLOWS_TEX_H) * Math.PI);

      for (let x = 0; x < FOG_TEX_W; x += 1) {
        const n1 = perlin3D(px1[x], ny1, pz1[x]);
        const n2 = perlin3D(px2[x], ny2, pz2[x]) * 0.5;
        const n3 = perlin3D(px3[x], ny3, pz3[x]) * 0.25;
        const n4 = perlin3D(px4[x], ny4, pz4[x]) * 0.125;
        let d = (n1 + n2 + n3 + n4 + 1.875) / 3.75;
        d = Math.max(0, Math.min(1, d));
        // Non-linear contrast curve: dense cloud cores, sharp crevices, delicate fringes
        d = d * d * (3 - 2 * d); // Smoothstep for organic cloud density
        d *= yFalloff;

        // Gradient blend between accent and secondary
        const u = x / FOG_TEX_W;
        const r = Math.round(lerp(accentRgb.r, secondaryRgb.r, u));
        const g = Math.round(lerp(accentRgb.g, secondaryRgb.g, u));
        const b = Math.round(lerp(accentRgb.b, secondaryRgb.b, u));

        data[ptr] = r;
        data[ptr + 1] = g;
        data[ptr + 2] = b;
        data[ptr + 3] = Math.round(d * 180);
        ptr += 4;
      }
    }
    bCtx.putImageData(imgData, 0, 0);
  }

  // 2. Fog Streamers Canvas (Wind-sheared, horizontally stretched vapor filaments)
  if (!fogStreamersCanvas) {
    fogStreamersCanvas = document.createElement('canvas');
  }
  fogStreamersCanvas.width = FOG_TEX_W;
  fogStreamersCanvas.height = STREAMERS_TEX_H;
  const sCtx = fogStreamersCanvas.getContext('2d');
  if (sCtx) {
    const sImgData = sCtx.createImageData(FOG_TEX_W, STREAMERS_TEX_H);
    const sData = sImgData.data;

    let sPtr = 0;
    for (let y = 0; y < STREAMERS_TEX_H; y += 1) {
      const ny = (y / STREAMERS_TEX_H) * 2.5;
      const yFade = Math.sin((y / STREAMERS_TEX_H) * Math.PI);
      for (let x = 0; x < FOG_TEX_W; x += 1) {
        const theta = (x / FOG_TEX_W) * Math.PI * 2;
        const cx = Math.cos(theta) * 0.8 + 5.5;
        const cz = Math.sin(theta) * 0.8 + 19.3;
        const sn1 = perlin3D(cx, ny, cz);
        const sn2 = perlin3D(cx * 2.2, ny * 3.0, cz * 2.2) * 0.45;
        let sd = (sn1 + sn2 + 1.45) / 2.9;
        sd = Math.max(0, Math.min(1, sd));
        sd = Math.pow(sd, 1.8) * yFade;

        const r = Math.round(lerp(secondaryRgb.r, tertiaryRgb.r, y / STREAMERS_TEX_H));
        const g = Math.round(lerp(secondaryRgb.g, tertiaryRgb.g, y / STREAMERS_TEX_H));
        const b = Math.round(lerp(secondaryRgb.b, tertiaryRgb.b, y / STREAMERS_TEX_H));

        sData[sPtr] = r;
        sData[sPtr + 1] = g;
        sData[sPtr + 2] = b;
        sData[sPtr + 3] = Math.round(sd * 140);
        sPtr += 4;
      }
    }
    sCtx.putImageData(sImgData, 0, 0);
  }
}

// =========================================================================
// MAIN PORTAL BACKGROUND COMPONENT
// Pure atmospheric mist & stratified vapor motes with natural browser cursor
// =========================================================================
export default function PortalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!context) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let frame = 0;
    let lastPaint = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    let accentRgb = { r: 0, g: 230, b: 180 };
    let secondaryRgb = { r: 167, g: 139, b: 250 };
    let tertiaryRgb = { r: 255, g: 230, b: 0 };
    let vaporMotes = [];

    const initVaporMotes = () => {
      vaporMotes = [];
      const moteCount = 64;
      const w = width || 1200;
      const h = height || 800;
      for (let i = 0; i < moteCount; i += 1) {
        const tier = Math.random();
        let size, baseAlpha, vx, vy;
        if (tier < 0.45) {
          size = 0.8 + Math.random() * 0.7;
          baseAlpha = 0.12 + Math.random() * 0.22;
          vx = 0.016 + Math.random() * 0.024;
          vy = (Math.random() - 0.5) * 0.008;
        } else if (tier < 0.82) {
          size = 1.6 + Math.random() * 1.2;
          baseAlpha = 0.18 + Math.random() * 0.28;
          vx = 0.028 + Math.random() * 0.038;
          vy = (Math.random() - 0.5) * 0.014;
        } else {
          size = 3.2 + Math.random() * 2.2;
          baseAlpha = 0.08 + Math.random() * 0.16;
          vx = 0.044 + Math.random() * 0.042;
          vy = (Math.random() - 0.5) * 0.020;
        }

        vaporMotes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx,
          vy,
          size,
          baseAlpha,
          tier,
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: 0.0010 + Math.random() * 0.0022
        });
      }
    };

    const renderRealisticFog = () => {
      if (width <= 0 || height <= 0) return;
      createRealisticFogTextures(accentRgb, secondaryRgb, tertiaryRgb);
    };

    const syncTheme = () => {
      const site = document.querySelector('.portal-site') || document.documentElement;
      const style = getComputedStyle(site);
      const rawAccent = style.getPropertyValue('--portal-accent').trim();
      const rawSecondary = style.getPropertyValue('--portal-violet').trim();
      const rawTertiary = (style.getPropertyValue('--portal-tertiary') || style.getPropertyValue('--accent-tertiary')).trim();
      accentRgb = parseColorToRgb(rawAccent, { r: 0, g: 230, b: 180 });
      secondaryRgb = parseColorToRgb(rawSecondary, { r: 167, g: 139, b: 250 });
      tertiaryRgb = parseColorToRgb(rawTertiary, accentRgb);
      renderRealisticFog();
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      initVaporMotes();
      renderRealisticFog();
    };

    const paint = (timestamp, force = false) => {
      if (width <= 0 || height <= 0) return;
      if (!force && timestamp - lastPaint < 16) return;
      lastPaint = timestamp;

      context.clearRect(0, 0, width, height);

      // 1. RENDER PHOTOREALISTIC FOG & MIST
      if (fogBillowsCanvas) {
        context.save();
        context.globalCompositeOperation = 'screen';

        // Deep rolling fog billows
        const billowScroll = (timestamp * 0.016) % width;
        const billowY = height * 0.32;
        const billowH = height * 0.68;
        context.globalAlpha = 0.38;
        context.drawImage(fogBillowsCanvas, -billowScroll, billowY, width, billowH);
        context.drawImage(fogBillowsCanvas, width - billowScroll, billowY, width, billowH);

        // Wind-sheared vapor streamers
        if (fogStreamersCanvas) {
          const streamerScroll = (timestamp * 0.038) % width;
          const streamerY = height * 0.12;
          const streamerH = height * 0.55;
          context.globalAlpha = 0.26;
          context.drawImage(fogStreamersCanvas, -streamerScroll, streamerY, width, streamerH);
          context.drawImage(fogStreamersCanvas, width - streamerScroll, streamerY, width, streamerH);
        }
        context.restore();
      }

      // 2. RENDER STRATIFIED VAPOR MOTES
      context.save();
      for (let i = 0; i < vaporMotes.length; i += 1) {
        const m = vaporMotes[i];
        m.x += m.vx;
        m.y += m.vy + Math.sin(timestamp * m.phaseSpeed + m.phase) * 0.18;
        if (m.x > width + 20) m.x = -20;
        if (m.y > height + 20) m.y = -20;
        if (m.y < -20) m.y = height + 20;

        const moteAlpha = m.baseAlpha * (0.8 + Math.sin(timestamp * 0.002 + m.phase) * 0.2);
        context.fillStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${moteAlpha.toFixed(3)})`;
        context.beginPath();
        context.arc(m.x, m.y, m.size, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();
    };

    const animate = (timestamp) => {
      paint(timestamp);
      if (!reducedMotion.matches) frame = window.requestAnimationFrame(animate);
    };

    const onScroll = () => {
      if (reducedMotion.matches) paint(performance.now(), true);
    };

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.querySelector('.portal-site') || document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    syncTheme();
    resize();
    frame = window.requestAnimationFrame(animate);

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="portal-background" aria-hidden="true" />;
}
