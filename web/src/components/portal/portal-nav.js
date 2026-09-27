'use client';

import { useEffect, useRef, useState } from 'react';
import ThemeSwitcher from '../theme-switcher';

export default function PortalNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <header className="portal-header">
    <a href="./" className="portal-brand glitch-hover" aria-label="HCODE.ART home" data-value="HCODE.ART">
      <span><span className="brand-name">HCODE</span><span className="brand-dot-art accent-text">.ART</span></span>
    </a>

    <nav className="portal-nav" aria-label="Hlavní navigace">
      <a href="#hero"><span>01</span>START</a>
      <a href="#calligraphy"><span>02</span>KALIGRAFIE</a>
      <a href="#architecture"><span>03</span>ARCHITEKTURA</a>
      <a href="#evolution"><span>04</span>VÝVOJ</a>

      {/* Dropdown seamlessly integrated as part of nav */}
      <div
        className={`portal-nav-dropdown ${dropdownOpen ? 'is-open' : ''}`}
        ref={dropdownRef}
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button
          type="button"
          className="portal-dropdown-trigger"
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
          onClick={() => setDropdownOpen(open => !open)}
        >
          <span>05</span> APLIKACE &amp; STRÁNKY <span className="portal-dropdown-caret" aria-hidden="true">▾</span>
        </button>

        {dropdownOpen && (
          <div
            className="portal-dropdown-backdrop"
            onClick={() => setDropdownOpen(false)}
            aria-hidden="true"
          />
        )}

        <div className="portal-dropdown-panel" role="menu">
          <div className="portal-dropdown-grid">
            {/* Apps Column: Chinese */}
            <div className="portal-dropdown-col">
              <div className="portal-dropdown-header">
                <span className="portal-dropdown-flag" aria-hidden="true">🇨🇳</span>
                <div>
                  <strong>Čínština</strong>
                  <small>Hanzi &amp; kontextový rozbor</small>
                </div>
              </div>
              <ul className="portal-dropdown-list">
                <li>
                  <a href="./zh/study/" onClick={() => setDropdownOpen(false)}>
                    <span className="item-icon" aria-hidden="true">📖</span>
                    <div>
                      <strong>Studium čínštiny</strong>
                      <span>1 252 znaků, 204 radikálů, L1–L4</span>
                    </div>
                    <span className="item-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
                <li>
                  <a href="./zh/read/" onClick={() => setDropdownOpen(false)}>
                    <span className="item-icon" aria-hidden="true">📰</span>
                    <div>
                      <strong>Čítanka čínštiny</strong>
                      <span>Odstupňované texty, zprávy, audio</span>
                    </div>
                    <span className="item-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
                <li>
                  <a href="./app/index.html" onClick={() => setDropdownOpen(false)}>
                    <span className="item-icon" aria-hidden="true">🕸️</span>
                    <div>
                      <strong>Vztahová síť znaků</strong>
                      <span>Původní interaktivní graf &amp; karty</span>
                    </div>
                    <span className="item-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Apps Column: Korean */}
            <div className="portal-dropdown-col">
              <div className="portal-dropdown-header">
                <span className="portal-dropdown-flag" aria-hidden="true">🇰🇷</span>
                <div>
                  <strong>Korejština</strong>
                  <small>Hangul &amp; slovní zásoba</small>
                </div>
              </div>
              <ul className="portal-dropdown-list">
                <li>
                  <a href="./ko/study/" onClick={() => setDropdownOpen(false)}>
                    <span className="item-icon" aria-hidden="true">📖</span>
                    <div>
                      <strong>Studium korejštiny</strong>
                      <span>Hangul, batchim, 162 slov, sidebar</span>
                    </div>
                    <span className="item-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
                <li>
                  <a href="./ko/read/" onClick={() => setDropdownOpen(false)}>
                    <span className="item-icon" aria-hidden="true">📰</span>
                    <div>
                      <strong>Čítanka korejštiny</strong>
                      <span>KBS zprávy, kultura, přísloví</span>
                    </div>
                    <span className="item-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
                <li>
                  <a href="./korean/index.html" onClick={() => setDropdownOpen(false)}>
                    <span className="item-icon" aria-hidden="true">🎯</span>
                    <div>
                      <strong>Interaktivní korejština</strong>
                      <span>Původní samostatná aplikace</span>
                    </div>
                    <span className="item-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Portal Pages Column */}
            <div className="portal-dropdown-col portal-dropdown-col--pages">
              <div className="portal-dropdown-header">
                <span className="portal-dropdown-flag" aria-hidden="true">⚡</span>
                <div>
                  <strong>Sekce portálu</strong>
                  <small>Rychlé skoky po stránce</small>
                </div>
              </div>
              <ul className="portal-dropdown-list portal-dropdown-list--pages">
                <li>
                  <a href="#hero" onClick={() => setDropdownOpen(false)}>
                    <span className="item-num" aria-hidden="true">01</span>
                    <div>
                      <strong>Start / Úvod</strong>
                      <span>Holografický přehled</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#architecture" onClick={() => setDropdownOpen(false)}>
                    <span className="item-num" aria-hidden="true">02</span>
                    <div>
                      <strong>Architektura</strong>
                      <span>Návrh lehkého jádra</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#evolution" onClick={() => setDropdownOpen(false)}>
                    <span className="item-num" aria-hidden="true">03</span>
                    <div>
                      <strong>Vývojová osa</strong>
                      <span>Evoluce projektu od 2024</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#apps" onClick={() => setDropdownOpen(false)}>
                    <span className="item-num" aria-hidden="true">04</span>
                    <div>
                      <strong>Přehled aplikací</strong>
                      <span>Jazykové karty &amp; čítárny</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#terminal" onClick={() => setDropdownOpen(false)}>
                    <span className="item-num" aria-hidden="true">05</span>
                    <div>
                      <strong>Spustit / Začít</strong>
                      <span>Přímý start do výuky</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <a href="#terminal"><span>05</span>ZAČÍT</a>
    </nav>

    <div className="portal-header-actions">
      <ThemeSwitcher scope="portal" />
      <a className="portal-header-cta" href="#apps">Prozkoumat aplikace <span aria-hidden="true">↘</span></a>
    </div>
  </header>;
}
