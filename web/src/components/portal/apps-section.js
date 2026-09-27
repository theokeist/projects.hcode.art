'use client';

export default function AppsSection() {
  return (
    <section id="apps" className="portal-section page-section apps-page-section">
      <div className="content-block intersect-target apps-container visible" style={{ marginRight: 'auto' }}>
        <div className="section-highlight-line" aria-hidden="true">
          <span className="section-hash-rule" />
        </div>

        <h2 className="portal-section-title">
          <span className="title-main">WEBOVÉ </span><span className="accent-text">APLIKACE</span>
        </h2>
        <p className="apps-lead">
          Katalog nezávislých webových aplikací a interaktivních modulů. Každá aplikace funguje samostatně jako blesková podstránka (SPA) s přímým spuštěním, bez zbytečného balastu a bez nutnosti cokoliv instalovat.
        </p>

        <div className="apps-grid">
          {/* Aplikace 1: Čínština */}
          <div className="app-card chinese-app-card">
            <div className="app-card-content">
              {/* Nice Chinese Logo + Title */}
              <div className="chinese-logo-header">
                <div className="chinese-logo-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
                    <defs>
                      <linearGradient id="appBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#220a17" />
                        <stop offset="50%" stopColor="#0f1124" />
                        <stop offset="100%" stopColor="#060913" />
                      </linearGradient>
                      <linearGradient id="appNeonBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ffcc" />
                        <stop offset="50%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                      <linearGradient id="appGoldBorder" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="50%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#fef08a" />
                      </linearGradient>
                      <linearGradient id="appSealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e11d48" />
                        <stop offset="100%" stopColor="#9f1239" />
                      </linearGradient>
                    </defs>
                    <rect x="10" y="10" width="100" height="100" rx="24" fill="url(#appBgGrad)" stroke="url(#appNeonBorder)" strokeWidth="2.5" />
                    <rect x="18" y="18" width="84" height="84" rx="16" fill="none" stroke="rgba(0, 255, 204, 0.45)" strokeWidth="1.2" strokeDasharray="6 3" />
                    <path d="M 22 28 L 22 22 L 28 22" fill="none" stroke="#00ffcc" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M 98 28 L 98 22 L 92 22" fill="none" stroke="#00ffcc" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M 22 92 L 22 98 L 28 98" fill="none" stroke="#00ffcc" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M 98 92 L 98 98 L 92 98" fill="none" stroke="#00ffcc" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="60" cy="60" r="32" fill="url(#appSealGrad)" opacity="0.9" />
                    <circle cx="60" cy="60" r="32" fill="none" stroke="url(#appGoldBorder)" strokeWidth="1.5" />
                    <circle cx="60" cy="60" r="27" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" strokeDasharray="3 2" />
                    <text x="60" y="72" fontFamily="'Noto Serif SC', 'Songti SC', 'STSong', 'KaiTi', 'SimSun', 'Microsoft YaHei', serif" fontSize="38" fontWeight="900" fill="#ffffff" textAnchor="middle" dominantBaseline="alphabetic">漢</text>
                  </svg>
                </div>
                <div className="chinese-title-group">
                  <h3>Čínština: Vztahová síť znaků</h3>
                  <span className="chinese-subtitle">HANZI &bull; GRAMATIKA &bull; RADIKÁLY</span>
                </div>
              </div>

              {/* Description */}
              <p className="chinese-app-desc">
                Kompletní interaktivní webová aplikace pro studium a rozbor čínštiny. Zahrnuje propojenou síť znaků Hanzi, všech 204 moderních radikálů se slovní zásobou, vizuální paměťové emoji kotvy a krokového průvodce s bleskovým vyhledáváním.
              </p>
            </div>

            {/* Actions */}
            <div className="app-actions">
              <a href="./zh/study/" className="app-btn app-btn-open glitch-hover">
                <span>Otevřít aplikaci</span> <span>➔</span>
              </a>
              <a href="./zh/read/" className="app-btn secondary glitch-hover">
                <span>Čítárna</span> <span>📖</span>
              </a>
            </div>
          </div>

          {/* Aplikace 2: Korejština */}
          <div className="app-card korean-app-card">
            <div className="app-card-content">
              {/* Korean Logo + Title */}
              <div className="chinese-logo-header">
                <div className="chinese-logo-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
                    <defs>
                      <linearGradient id="hubKorBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#120c22" />
                        <stop offset="50%" stopColor="#0c102b" />
                        <stop offset="100%" stopColor="#050714" />
                      </linearGradient>
                      <linearGradient id="hubKorNeonBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00f0ff" />
                        <stop offset="50%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#ff2a85" />
                      </linearGradient>
                      <linearGradient id="hubTaegeukRed" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff3b5c" />
                        <stop offset="100%" stopColor="#c8102e" />
                      </linearGradient>
                      <linearGradient id="hubTaegeukBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0072ce" />
                        <stop offset="100%" stopColor="#003594" />
                      </linearGradient>
                      <linearGradient id="hubKorGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fde047" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>
                    <rect x="10" y="10" width="100" height="100" rx="24" fill="url(#hubKorBgGrad)" stroke="url(#hubKorNeonBorder)" strokeWidth="2.5" />
                    <rect x="18" y="18" width="84" height="84" rx="16" fill="none" stroke="rgba(0, 240, 255, 0.45)" strokeWidth="1.2" strokeDasharray="6 3" />
                    <g stroke="#00f0ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
                      <line x1="22" y1="23" x2="30" y2="23" /><line x1="22" y1="26" x2="30" y2="26" /><line x1="22" y1="29" x2="30" y2="29" />
                    </g>
                    <g stroke="#ff2a85" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
                      <line x1="90" y1="23" x2="98" y2="23" /><line x1="90" y1="26" x2="93" y2="26" /><line x1="95" y1="26" x2="98" y2="26" /><line x1="90" y1="29" x2="98" y2="29" />
                    </g>
                    <g stroke="#00f0ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
                      <line x1="22" y1="89" x2="25" y2="89" /><line x1="27" y1="89" x2="30" y2="89" /><line x1="22" y1="92" x2="30" y2="92" /><line x1="22" y1="95" x2="25" y2="95" /><line x1="27" y1="95" x2="30" y2="95" />
                    </g>
                    <g stroke="#ff2a85" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
                      <line x1="90" y1="89" x2="93" y2="89" /><line x1="95" y1="89" x2="98" y2="89" /><line x1="90" y1="92" x2="93" y2="92" /><line x1="95" y1="92" x2="98" y2="92" /><line x1="90" y1="95" x2="93" y2="95" /><line x1="95" y1="95" x2="98" y2="95" />
                    </g>
                    <g transform="translate(60, 54)">
                      <circle cx="0" cy="0" r="30" fill="#003594" />
                      <path d="M 0,-30 A 30,30 0 0,1 0,30 A 15,15 0 0,1 0,0 A 15,15 0 0,0 0,-30 Z" fill="url(#hubTaegeukRed)" />
                      <path d="M 0,30 A 30,30 0 0,1 0,-30 A 15,15 0 0,1 0,0 A 15,15 0 0,0 0,30 Z" fill="url(#hubTaegeukBlue)" />
                      <circle cx="0" cy="0" r="30" fill="none" stroke="url(#hubKorGoldGrad)" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="26" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" strokeDasharray="3 2" />
                      <text x="0" y="11" fontFamily="'Pretendard', 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif" fontSize="33" fontWeight="900" fill="#ffffff" textAnchor="middle" dominantBaseline="alphabetic">한</text>
                    </g>
                    <g transform="translate(60, 99)">
                      <rect x="-35" y="-7" width="70" height="13" rx="6.5" fill="#0b0f19" stroke="url(#hubKorNeonBorder)" strokeWidth="1" />
                      <text x="0" y="2.5" fontFamily="monospace" fontSize="7.5" fontWeight="800" fill="#00f0ff" textAnchor="middle" dominantBaseline="middle" letterSpacing="1.8">KOREAN</text>
                    </g>
                  </svg>
                </div>
                <div className="chinese-title-group">
                  <h3>Korejština: Kompletní Hangul &amp; Slovník</h3>
                  <span className="chinese-subtitle" style={{ color: '#00f0ff' }}>HANGUL &bull; BATCHIM &bull; KONVERZACE</span>
                </div>
              </div>

              {/* Description */}
              <p className="chinese-app-desc">
                Kompletní interaktivní webová aplikace pro studium korejštiny a Hangulu. Zahrnuje všech 40 hlásek (19 souhlásek, 21 samohlásek), pravidla Batchim a fonetické asimilace, duální číselné systémy s počítadly a 350+ slovník s audio výslovností.
              </p>
            </div>

            {/* Actions */}
            <div className="app-actions">
              <a href="./ko/study/" className="app-btn app-btn-open glitch-hover">
                <span>Otevřít aplikaci</span> <span>➔</span>
              </a>
              <a href="./ko/read/" className="app-btn secondary glitch-hover">
                <span>Čítárna</span> <span>📰</span>
              </a>
            </div>
          </div>

          {/* Karta 3: Budoucí aplikace & nástroje */}
          <div className="app-card future-app-card">
            <div className="app-card-content">
              <div className="future-card-header">
                <h3>Budoucí aplikace &amp; nástroje</h3>
                <span className="future-status-badge">✦ Ve vývoji</span>
              </div>

              {/* Čistý otazník na blured kartě */}
              <div className="future-qmark-stage">
                <span className="clean-hero-qmark">?</span>
              </div>
            </div>

            <p className="future-card-desc">
              Nové samostatné webové nástroje a experimentální moduly jsou ve vývoji.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
