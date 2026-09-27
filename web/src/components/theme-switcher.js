'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const dualThemes = [
  ['cyber', 'Cyber Matrix (Dvojbarví)', 'Cyber'],
  ['noir', 'Black Noir (Dvojbarví)', 'Noir'],
  ['ming', 'Mingská dynastie (Dvojbarví)', 'Mingská'],
  ['qinghua', 'Mingský porcelán (Dvojbarví)', 'Porcelán'],
  ['jade', 'Císařský nefrit (Dvojbarví)', 'Nefrit'],
  ['tokyo', 'Tokijský západ (Dvojbarví)', 'Tokijský'],
  ['bloodmoon', 'Krvavý měsíc (Dvojbarví)', 'Krvavý'],
  ['solarpunk', 'Solární fúze (Dvojbarví)', 'Solární'],
  ['abyss', 'Hlubina propasti (Dvojbarví)', 'Propast']
];

const triThemes = [
  ['rgb', 'RGB Cyberpunk (Trojbarví)', 'RGB'],
  ['sancai', 'Mingské Sancai (Trojbarví)', 'Sancai'],
  ['synthwave', 'Synthwave Sunset (Trojbarví)', 'Synthwave'],
  ['aurora', 'Polární záře (Trojbarví)', 'Aurora'],
  ['inferno', 'Trojitý plamen (Trojbarví)', 'Inferno'],
  ['darkforce', 'DART.H FORCED (Trojbarví)', 'Dark Force']
];

const whiteTheme = ['white', 'Simple White (Čistý bílý)', 'White'];

const allThemes = [...dualThemes, ...triThemes, whiteTheme];

export default function ThemeSwitcher({ scope = 'portal' }) {
  const storageKey = scope === 'ko' ? 'hcode_korean_theme' : scope === 'zh' ? 'hcode_theme' : 'hcode_theme';
  const [theme, setTheme] = useState('cyber');
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const containerRef = useRef(null);
  const lastDarkThemeRef = useRef('cyber');

  const apply = useCallback(id => {
    const isWhite = id === 'white';
    const next = isWhite ? 'white' : (allThemes.some(([key]) => key === id) ? id : 'cyber');
    if (!isWhite) {
      lastDarkThemeRef.current = next;
    }
    setTheme(next);

    const root = document.querySelector(`[data-legacy-scope="${scope}"]`);
    root?.setAttribute('data-theme', next);
    const site = document.querySelector('.portal-site');
    site?.setAttribute('data-theme', next);
    document.documentElement.setAttribute('data-theme', next);
    document.body.setAttribute('data-theme', next);

    try { localStorage.setItem(storageKey, next); } catch {}
    window.dispatchEvent(new CustomEvent('hcode-theme-change', { detail: next }));
  }, [scope, storageKey]);

  useEffect(() => {
    let saved = '';
    try { saved = localStorage.getItem(storageKey) || localStorage.getItem('hcode_theme') || ''; } catch {}
    apply(saved || (scope === 'zh' ? 'ming' : 'cyber'));
  }, [apply, scope, storageKey]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCycleNext = useCallback(() => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 500);

    const darkList = [...dualThemes, ...triThemes];
    if (theme === 'white') {
      apply(lastDarkThemeRef.current || 'cyber');
      return;
    }
    const currentIndex = darkList.findIndex(([key]) => key === theme);
    const nextIndex = (currentIndex + 1) % darkList.length;
    apply(darkList[nextIndex][0]);
  }, [apply, theme]);

  const handleToggleBW = useCallback(() => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 500);

    if (theme === 'white') {
      apply(lastDarkThemeRef.current || 'cyber');
    } else {
      lastDarkThemeRef.current = theme;
      apply('white');
    }
  }, [apply, theme]);

  // Global hotkeys Alt+M (cycle theme) and Alt+T (toggle B/W)
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.altKey && (e.key === 'm' || e.key === 'M')) {
        e.preventDefault();
        handleCycleNext();
      } else if (e.altKey && (e.key === 't' || e.key === 'T')) {
        e.preventDefault();
        handleToggleBW();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleCycleNext, handleToggleBW]);

  // Cross-component communication listeners
  useEffect(() => {
    const nextListener = event => {
      if (event.detail && event.detail !== scope) return;
      handleCycleNext();
    };
    const toggleBWListener = event => {
      if (event.detail && event.detail !== scope) return;
      handleToggleBW();
    };
    window.addEventListener('course-theme-next', nextListener);
    window.addEventListener('course-theme-toggle-bw', toggleBWListener);
    return () => {
      window.removeEventListener('course-theme-next', nextListener);
      window.removeEventListener('course-theme-toggle-bw', toggleBWListener);
    };
  }, [handleCycleNext, handleToggleBW, scope]);

  const currentThemeObj = allThemes.find(([key]) => key === theme) || allThemes[0];
  const currentFullName = currentThemeObj[1];
  const shortLabel = currentThemeObj[2];

  return (
    <div className={`theme-switcher-unified theme-switcher-unified--${scope}`} ref={containerRef}>
      {/* Unified Single Theme Pill */}
      <div className="theme-unified-pill">
        <button
          type="button"
          className={`theme-pill-main ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(open => !open)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          title={`Barevný motiv: ${currentFullName} — Kliknutím vyberte ze seznamu motivů`}
        >
          <span className={`theme-pill-swatch ${isSpinning ? 'spinning' : ''}`} aria-hidden="true">
            <span className="theme-pill-dot" />
          </span>
          <span className="theme-pill-text">{shortLabel}</span>
          <span className="theme-pill-caret" aria-hidden="true">▾</span>
        </button>

        <button
          type="button"
          className="theme-pill-cycle"
          onClick={handleCycleNext}
          title="Další motiv v pořadí (Alt+M)"
          aria-label="Další motiv"
        >
          <span className={`theme-cycle-icon ${isSpinning ? 'spinning' : ''}`} aria-hidden="true">↻</span>
        </button>
      </div>

      {/* Simplified Dropdown Palette */}
      {isOpen && (
        <div className="theme-palette-popover" role="listbox" aria-label="Výběr motivu">
          <div className="theme-palette-header">
            <span>Barevné motivy</span>
            <button
              type="button"
              className="theme-palette-bw-toggle"
              onClick={() => { handleToggleBW(); setIsOpen(false); }}
              title="Přepnout Světlý / Tmavý režim (Alt+T)"
            >
              {theme === 'white' ? '🌙 Tmavý' : '☀️ Světlý'}
            </button>
          </div>

          <div className="theme-palette-group-title">Dvojbarví (Dual neon)</div>
          <div className="theme-palette-grid">
            {dualThemes.map(([id, fullName, label]) => (
              <button
                key={id}
                type="button"
                className={`theme-palette-item ${theme === id ? 'is-selected' : ''}`}
                onClick={() => { apply(id); setIsOpen(false); }}
                role="option"
                aria-selected={theme === id}
                title={fullName}
              >
                <span className={`theme-color-dot theme-color-dot--${id}`} />
                <span className="theme-item-name">{label}</span>
                {theme === id && <span className="theme-item-check" aria-hidden="true">✓</span>}
              </button>
            ))}
          </div>

          <div className="theme-palette-group-title">Trojbarví (Tri-color neon)</div>
          <div className="theme-palette-grid">
            {triThemes.map(([id, fullName, label]) => (
              <button
                key={id}
                type="button"
                className={`theme-palette-item ${theme === id ? 'is-selected' : ''}`}
                onClick={() => { apply(id); setIsOpen(false); }}
                role="option"
                aria-selected={theme === id}
                title={fullName}
              >
                <span className={`theme-color-dot theme-color-dot--${id}`} />
                <span className="theme-item-name">{label}</span>
                {theme === id && <span className="theme-item-check" aria-hidden="true">✓</span>}
              </button>
            ))}
          </div>

          <div className="theme-palette-group-title">Světlý režim</div>
          <div className="theme-palette-grid">
            <button
              type="button"
              className={`theme-palette-item ${theme === 'white' ? 'is-selected' : ''}`}
              onClick={() => { apply('white'); setIsOpen(false); }}
              role="option"
              aria-selected={theme === 'white'}
              title="Simple White (Čistý bílý)"
            >
              <span className="theme-color-dot theme-color-dot--white" />
              <span className="theme-item-name">Simple White</span>
              {theme === 'white' && <span className="theme-item-check" aria-hidden="true">✓</span>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
