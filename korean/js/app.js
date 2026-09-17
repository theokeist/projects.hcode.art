// ═══════════════════════════════════════════════════════════
// HCODE.ART • KOREAN MASTER APP CONTROLLER
// Card generation, Filtering, Realtime Search, Theme Engine
// ═══════════════════════════════════════════════════════════

(function() {
  let currentLesson = 'all';
  let activeTheme = 'cyber';

  const themes = {
    cyber: { name: 'Cyber Matrix', accent: '#00ffcc' },
    white: { name: 'Simple White', accent: '#2563eb' },
    noir: { name: 'Black Noir', accent: '#ffffff' },
    ming: { name: 'Joseon Royal', accent: '#f59e0b' },
    qinghua: { name: 'Seoul Cobalt', accent: '#38bdf8' },
    jade: { name: 'Jade Celadon', accent: '#10b981' },
    tokyo: { name: 'Gangnam Sunset', accent: '#f43f5e' },
    bloodmoon: { name: 'Blood Moon', accent: '#ff1744' },
    solarpunk: { name: 'Solarpunk Gold', accent: '#ff7a00' },
    abyss: { name: 'Deep Abyss', accent: '#06b6d4' },
    rgb: { name: 'RGB Cyberpunk', accent: '#00ffcc' },
    synthwave: { name: 'Synthwave Neon', accent: '#ff2a85' },
    aurora: { name: 'Aurora Borealis', accent: '#00ff87' }
  };
  const themeKeys = Object.keys(themes);

  // 1. CARD GENERATION & INJECTION
  function buildAllCards() {
    const container = document.getElementById('cardsContainer');
    if (!container) return;

    let html = '';

    // A. Consonants
    if (window.KOREAN_HANGUL_DATA && window.KOREAN_HANGUL_DATA.consonants) {
      window.KOREAN_HANGUL_DATA.consonants.forEach((c, idx) => {
        html += `
          <div class="course-card" id="card-${c.id}" data-lesson="consonant" data-search="${c.letter} ${c.name} ${c.roman} ${c.desc}">
            <div class="card-hero-panel">
              <div class="card-top-meta">
                <span class="card-badge">Hangul • Souhláska #${idx + 1}</span>
                <button type="button" class="audio-btn" onclick="playKoreanAudio('${c.letter}')" title="Poslechnout výslovnost">🔊 Přehrát</button>
              </div>
              <div class="card-main-hangul">
                <span class="hangul-display">${c.letter}</span>
                <span class="hangul-sub-name">${c.name}</span>
              </div>
              <div class="card-roman-gloss">
                <span class="card-roman">${c.roman}</span>
                <span class="card-czech">${c.type}</span>
              </div>
            </div>
            <div class="card-body-panel">
              <div class="section-label">🎯 Fonetický popis & Artikulace</div>
              <p style="font-size: 13px; line-height: 1.6; color: var(--text-muted);">${c.desc}</p>
              <div class="section-label">📚 Příkladová slova</div>
              <div class="words-sample-list">
                ${c.examples.map(ex => `
                  <div class="word-pill" onclick="playKoreanAudio('${ex.hangul}')" title="Klikněte pro poslech">
                    <span class="word-hangul">${ex.hangul}</span>
                    <span class="word-roman">${ex.roman}</span>
                    <span class="word-cz">${ex.cz}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      });
    }

    // B. Vowels
    if (window.KOREAN_HANGUL_DATA && window.KOREAN_HANGUL_DATA.vowels) {
      window.KOREAN_HANGUL_DATA.vowels.forEach((v, idx) => {
        html += `
          <div class="course-card" id="card-${v.id}" data-lesson="vowel" data-search="${v.letter} ${v.roman} ${v.desc}">
            <div class="card-hero-panel">
              <div class="card-top-meta">
                <span class="card-badge">Hangul • Samohláska #${idx + 1}</span>
                <button type="button" class="audio-btn" onclick="playKoreanAudio('ㅇ${v.letter}')" title="Poslechnout výslovnost">🔊 Přehrát</button>
              </div>
              <div class="card-main-hangul">
                <span class="hangul-display">ㅇ${v.letter}</span>
                <span class="hangul-sub-name">${v.type}</span>
              </div>
              <div class="card-roman-gloss">
                <span class="card-roman">${v.roman}</span>
                <span class="card-czech">${v.philosophy || ''}</span>
              </div>
            </div>
            <div class="card-body-panel">
              <div class="section-label">✨ Výslovnost & Tvoření</div>
              <p style="font-size: 13px; line-height: 1.6; color: var(--text-muted);">${v.desc}</p>
              <div class="section-label">📚 Příkladová slova</div>
              <div class="words-sample-list">
                ${v.examples.map(ex => `
                  <div class="word-pill" onclick="playKoreanAudio('${ex.hangul}')" title="Klikněte pro poslech">
                    <span class="word-hangul">${ex.hangul}</span>
                    <span class="word-roman">${ex.roman}</span>
                    <span class="word-cz">${ex.cz}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      });
    }

    // C. Batchim
    if (window.KOREAN_HANGUL_DATA && window.KOREAN_HANGUL_DATA.batchimRules) {
      window.KOREAN_HANGUL_DATA.batchimRules.forEach((b, idx) => {
        html += `
          <div class="course-card" id="card-${b.id}" data-lesson="batchim" data-search="${b.target} ${b.representative} ${b.sound} ${b.rule}">
            <div class="card-hero-panel">
              <div class="card-top-meta">
                <span class="card-badge">Batchim • Zvuk #${idx + 1}</span>
                <span class="card-badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981;">${b.representative}</span>
              </div>
              <div class="card-main-hangul">
                <span class="hangul-display">${b.target}</span>
                <span class="hangul-sub-name">Zní jako ${b.sound}</span>
              </div>
              <div class="card-roman-gloss">
                <span class="card-roman">${b.representative}</span>
                <span class="card-czech">${b.sound}</span>
              </div>
            </div>
            <div class="card-body-panel">
              <div class="section-label">📐 Pravidlo neutralizace</div>
              <p style="font-size: 13px; line-height: 1.6; color: var(--text-muted);">${b.rule}</p>
              <div class="section-label">📚 Ukázková slova s výslovností v závorkách</div>
              <div class="words-sample-list">
                ${b.examples.map(ex => `
                  <div class="word-pill" onclick="playKoreanAudio('${ex.hangul}')" title="Klikněte pro poslech">
                    <span class="word-hangul">${ex.hangul} <small style="color:var(--accent);">${ex.read}</small></span>
                    <span class="word-roman">${ex.roman}</span>
                    <span class="word-cz">${ex.cz}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      });
    }

    // D. Numbers & Counters
    if (window.KOREAN_NUMBERS_DATA) {
      // Sino-Korean
      if (window.KOREAN_NUMBERS_DATA.sinoKorean) {
        window.KOREAN_NUMBERS_DATA.sinoKorean.forEach(n => {
          html += `
            <div class="course-card" data-lesson="numbers" data-search="${n.hangul} ${n.num} ${n.roman} ${n.cz} ${n.note} sino">
              <div class="card-hero-panel">
                <div class="card-top-meta">
                  <span class="card-badge">Sino-korejské číslo • #${n.num}</span>
                  <button type="button" class="audio-btn" onclick="playKoreanAudio('${n.hangul}')">🔊 Přehrát</button>
                </div>
                <div class="card-main-hangul">
                  <span class="hangul-display">${n.hangul}</span>
                  <span class="hangul-sub-name">${n.hanja || ''}</span>
                </div>
                <div class="card-roman-gloss">
                  <span class="card-roman">${n.roman}</span>
                  <span class="card-czech">${n.cz}</span>
                </div>
              </div>
              <div class="card-body-panel">
                <div class="section-label">💡 Použití & Pravidla</div>
                <p style="font-size: 13px; line-height: 1.6; color: var(--text-muted);">${n.note}</p>
              </div>
            </div>
          `;
        });
      }

      // Native Korean
      if (window.KOREAN_NUMBERS_DATA.nativeKorean) {
        window.KOREAN_NUMBERS_DATA.nativeKorean.forEach(n => {
          html += `
            <div class="course-card" data-lesson="numbers" data-search="${n.hangul} ${n.num} ${n.roman} ${n.cz} ${n.note} rodilé native">
              <div class="card-hero-panel">
                <div class="card-top-meta">
                  <span class="card-badge">Rodilé korejské číslo • #${n.num}</span>
                  <button type="button" class="audio-btn" onclick="playKoreanAudio('${n.hangul}')">🔊 Přehrát</button>
                </div>
                <div class="card-main-hangul">
                  <span class="hangul-display">${n.hangul}</span>
                  <span class="hangul-sub-name">Před počítadlem: <strong>${n.short}</strong></span>
                </div>
                <div class="card-roman-gloss">
                  <span class="card-roman">${n.roman}</span>
                  <span class="card-czech">${n.cz}</span>
                </div>
              </div>
              <div class="card-body-panel">
                <div class="section-label">💡 Použití & Počítání</div>
                <p style="font-size: 13px; line-height: 1.6; color: var(--text-muted);">${n.note}</p>
              </div>
            </div>
          `;
        });
      }

      // Counters
      if (window.KOREAN_NUMBERS_DATA.counters) {
        window.KOREAN_NUMBERS_DATA.counters.forEach((c, idx) => {
          html += `
            <div class="course-card" data-lesson="numbers" data-search="${c.hangul} ${c.target} ${c.examples} počítadlo classifier">
              <div class="card-hero-panel">
                <div class="card-top-meta">
                  <span class="card-badge">Počítadlo (Klasifikátor) #${idx + 1}</span>
                  <span style="font-size: 20px;">${c.icon}</span>
                </div>
                <div class="card-main-hangul">
                  <span class="hangul-display">${c.hangul}</span>
                </div>
                <div class="card-roman-gloss">
                  <span class="card-roman">${c.system}</span>
                  <span class="card-czech">${c.target}</span>
                </div>
              </div>
              <div class="card-body-panel">
                <div class="section-label">🎯 Příklady v praxi</div>
                <div class="example-box">
                  <div class="example-hangul">${c.examples}</div>
                </div>
              </div>
            </div>
          `;
        });
      }
    }

    // E. Phrases (L1)
    if (window.KOREAN_PHRASES_DATA) {
      window.KOREAN_PHRASES_DATA.forEach((p, idx) => {
        html += `
          <div class="course-card" id="card-phrase-${p.id}" data-lesson="phrases" data-search="${p.hangul} ${p.roman} ${p.cz} ${p.note}">
            <div class="card-hero-panel">
              <div class="card-top-meta">
                <span class="card-badge">L1 • Fráze #${idx + 1}</span>
                <button type="button" class="audio-btn" onclick="playKoreanAudio('${escapeQuotes(p.hangul)}')">🔊 Přehrát</button>
              </div>
              <div class="card-main-hangul">
                <span class="hangul-display" style="font-size: 32px;">${p.hangul}</span>
              </div>
              <div class="card-roman-gloss">
                <span class="card-roman">${p.roman}</span>
                <span class="card-czech">${p.cz}</span>
              </div>
            </div>
            <div class="card-body-panel">
              <div class="section-label">🧩 Gramatický rozbor po tokenech</div>
              <div class="grammar-breakdown">
                <div class="grammar-tokens-row">
                  ${p.tokens.map(t => `
                    <div class="grammar-token">
                      <strong>${t.w}</strong>: <span>${t.role}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
              <div class="section-label">💡 Společenská etiketa & Tipy</div>
              <p style="font-size: 13px; line-height: 1.5; color: var(--text-muted);">${p.note}</p>
            </div>
          </div>
        `;
      });
    }

    // F. Vocabulary (L2)
    if (window.KOREAN_VOCAB_DATA) {
      window.KOREAN_VOCAB_DATA.forEach((w, idx) => {
        html += `
          <div class="course-card" data-lesson="vocab" data-search="${w.hangul} ${w.roman} ${w.cz} ${w.ex} ${w.decomp} ${w.hanja || ''}">
            <div class="card-hero-panel">
              <div class="card-top-meta">
                <span class="card-badge">L2 • Slovní zásoba #${idx + 1}</span>
                <span style="font-size: 24px;">${w.emoji}</span>
              </div>
              <div class="card-main-hangul">
                <span class="hangul-display">${w.hangul}</span>
                ${w.hanja ? `<span class="hangul-sub-name" title="Hanja kořen">${w.hanja}</span>` : ''}
              </div>
              <div class="card-roman-gloss">
                <span class="card-roman">${w.roman}</span>
                <span class="card-czech">${w.cz}</span>
              </div>
            </div>
            <div class="card-body-panel">
              <div class="section-label">🔬 Dekompozice Hangulu</div>
              <div class="jamo-grid">
                <div class="jamo-item">
                  <span class="jamo-char">${w.decomp}</span>
                </div>
              </div>
              <div class="section-label">📖 Vzorová věta</div>
              <div class="example-box" onclick="playKoreanAudio('${escapeQuotes(w.ex.split(' (')[0])}')" title="Klikněte pro poslech věty">
                <div class="example-hangul">${w.ex}</div>
              </div>
            </div>
          </div>
        `;
      });
    }

    // G. Grammar (L3)
    if (window.KOREAN_GRAMMAR_DATA) {
      window.KOREAN_GRAMMAR_DATA.forEach((g, idx) => {
        html += `
          <div class="course-card" data-lesson="grammar" data-search="${g.title} ${g.korean} ${g.summary} ${g.formula} ${g.tip}">
            <div class="card-hero-panel">
              <div class="card-top-meta">
                <span class="card-badge">L3 • Gramatika #${idx + 1}</span>
                <span class="card-badge" style="background:rgba(255, 0, 127, 0.15); color:#ff007f;">${g.category}</span>
              </div>
              <div class="card-main-hangul">
                <span class="hangul-display" style="font-size: 28px;">${g.korean}</span>
              </div>
              <div class="card-roman-gloss">
                <span class="card-roman" style="color:var(--text);">${g.title}</span>
              </div>
            </div>
            <div class="card-body-panel">
              <div class="section-label">⚡ Pravidlo & Vzorec</div>
              <div class="grammar-breakdown">
                <pre style="font-family:inherit; white-space:pre-wrap; font-size:12px; color:var(--accent); font-weight:700;">${g.formula}</pre>
                <p style="font-size: 13px; color:var(--text-muted); margin-top: 6px;">${g.summary}</p>
              </div>
              <div class="section-label">📚 Příklady použití</div>
              ${g.examples.map(ex => `
                <div class="example-box" onclick="playKoreanAudio('${escapeQuotes(ex.ko)}')" title="Klikněte pro poslech">
                  <div class="example-hangul">${ex.ko}</div>
                  <div class="example-roman">${ex.ro}</div>
                  <div class="example-cz">${ex.cz}</div>
                </div>
              `).join('')}
              <div class="section-label">💡 Důležitý tip</div>
              <p style="font-size: 12px; color: var(--text-muted);">${g.tip}</p>
            </div>
          </div>
        `;
      });
    }

    // H. Online Texts & Reading Collections (L4)
    if (window.KOREAN_SENTENCE_COLLECTIONS) {
      const streams = ['news', 'culture', 'sokdam'];
      streams.forEach(streamKey => {
        const streamList = window.KOREAN_SENTENCE_COLLECTIONS[streamKey] || [];
        streamList.forEach((item, idx) => {
          const fullText = item.tiles ? item.tiles.map(t => t.h || '').join(' ') : '';
          html += `
            <div class="course-card" data-lesson="reading" data-search="${fullText} ${item.czech} ${item.sourceName} ${item.topic}">
              <div class="card-hero-panel">
                <div class="card-top-meta">
                  <span class="card-badge">L4 • ${item.topic}</span>
                  <div style="display:flex; gap:6px; align-items:center;">
                    <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-web-link" style="color:var(--accent); font-size:11px; text-decoration:none; font-weight:700;">🌐 ${item.sourceName} ↗</a>
                    <button type="button" class="audio-btn" onclick="playKoreanAudio('${escapeQuotes(fullText)}')">🔊 Přehrát</button>
                  </div>
                </div>
                <div class="card-main-hangul">
                  <span class="hangul-display" style="font-size: 24px; line-height: 1.4;">${fullText}</span>
                </div>
                <div class="card-roman-gloss">
                  <span class="card-czech" style="color:#ffffff;">${item.czech}</span>
                </div>
              </div>
              <div class="card-body-panel">
                <div class="section-label">🧩 Rozbor po slovech (klikněte pro poslech slova)</div>
                <div class="words-sample-list">
                  ${item.tiles ? item.tiles.filter(t => !/^[，。！？、：；“”‘’—… .!?]+$/.test(t.h)).map(t => `
                    <div class="word-pill" onclick="playKoreanAudio('${escapeQuotes(t.h)}')" title="Klikněte pro poslech: ${t.h} (${t.c})">
                      <span class="word-hangul">${t.h}</span>
                      <span class="word-roman">${t.r || ''}</span>
                      <span class="word-cz">${t.c || ''}</span>
                    </div>
                  `).join('') : ''}
                </div>
              </div>
            </div>
          `;
        });
      });
    }

    container.innerHTML = html;
  }

  function escapeQuotes(str) {
    return str.replace(/'/g, "\\'");
  }

  // 2. LESSON SWITCHING
  window.switchLesson = function(lessonId) {
    currentLesson = lessonId;
    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => {
      if (lessonId === 'all' || card.getAttribute('data-lesson') === lessonId) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });

    // Update active dropdown items
    document.querySelectorAll('#lecturesDropdownMenu .dropdown-item').forEach(item => {
      const match = item.getAttribute('onclick') && item.getAttribute('onclick').includes(`'${lessonId}'`);
      item.classList.toggle('active', !!match);
    });

    // Update side stepper
    document.querySelectorAll('.stepper-node').forEach(node => {
      const match = node.getAttribute('onclick') && node.getAttribute('onclick').includes(`'${lessonId}'`);
      node.classList.toggle('active', !!match);
    });

    const labels = {
      'all': '📚 Vše',
      'consonant': '🔠 Souhlásky',
      'vowel': '🔤 Samohlásky',
      'batchim': '🧱 Batchim',
      'numbers': '🔢 Čísla',
      'phrases': '📖 L1: Fráze',
      'vocab': '🎯 L2: Slovník',
      'grammar': '⚡ L3: Gramatika',
      'reading': '🌐 L4: Online texty'
    };
    const curLabel = document.getElementById('curLectureLabel');
    if (curLabel && labels[lessonId]) {
      curLabel.textContent = labels[lessonId];
    }
  };

  // 3. REALTIME SEARCH
  window.handleSearchInput = function(query) {
    const rawQ = (query || '').toLowerCase().trim();
    const clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) clearBtn.style.display = rawQ ? 'block' : 'none';

    const normQ = rawQ.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    document.querySelectorAll('.course-card').forEach(card => {
      if (currentLesson !== 'all' && card.getAttribute('data-lesson') !== currentLesson) {
        card.style.display = 'none';
        return;
      }

      if (!rawQ) {
        card.style.display = '';
        return;
      }

      const rawTxt = (card.textContent + ' ' + (card.getAttribute('data-search') || '')).toLowerCase();
      const normTxt = rawTxt.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

      if (rawTxt.includes(rawQ) || normTxt.includes(normQ)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  };

  window.clearSearch = function() {
    const input = document.getElementById('searchInput');
    if (input) {
      input.value = '';
      window.handleSearchInput('');
      input.focus();
    }
  };

  // 4. DROPDOWN TOGGLING
  window.toggleAppDropdown = function(wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;
    const menu = wrapper.querySelector('.dropdown-menu');
    const wasShown = menu.classList.contains('show');
    window.closeAllDropdowns();
    if (!wasShown) {
      menu.classList.add('show');
    }
  };

  window.closeAllDropdowns = function() {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
  };

  // 5. THEME SYSTEM
  window.applyTheme = function(themeId) {
    if (!themes[themeId]) themeId = 'cyber';
    activeTheme = themeId;
    document.documentElement.setAttribute('data-theme', themeId);
    document.body.setAttribute('data-theme', themeId);

    const morphCircle = document.getElementById('themeMorphBtn');
    if (morphCircle) {
      morphCircle.title = `Barevný motiv: ${themes[themeId].name} (Alt+M)`;
    }

    try {
      localStorage.setItem('hcode_korean_theme', themeId);
    } catch(e) {}
  };

  window.cycleToNextTheme = function() {
    let idx = themeKeys.indexOf(activeTheme);
    let nextIdx = (idx + 1) % themeKeys.length;
    window.applyTheme(themeKeys[nextIdx]);
  };

  window.toggleWhiteBlackTheme = function() {
    if (activeTheme === 'white') {
      window.applyTheme('noir');
    } else {
      window.applyTheme('white');
    }
  };

  // 6. VISIBILITY TOGGLES
  window.toggleRomanization = function() {
    const romans = document.querySelectorAll('.card-roman, .word-roman, .example-roman, .strip-roman');
    romans.forEach(el => {
      el.style.display = (el.style.display === 'none') ? '' : 'none';
    });
  };

  window.toggleCzechGloss = function() {
    const czechs = document.querySelectorAll('.card-czech, .word-cz, .example-cz, .strip-czech');
    czechs.forEach(el => {
      el.style.display = (el.style.display === 'none') ? '' : 'none';
    });
  };

  window.toggleCardLayoutMode = function() {
    const container = document.getElementById('cardsContainer');
    if (!container) return;
    container.classList.toggle('horizontal-scroll-mode');
  };

  window.toggleTopBar = function(forceShow) {
    const isHidden = document.body.classList.contains('topbar-hidden');
    const makeHidden = (forceShow !== undefined) ? !forceShow : !isHidden;
    document.body.classList.toggle('topbar-hidden', makeHidden);
  };

  // Keyboard Shortcuts
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      window.closeAllDropdowns();
    } else if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key === 'k')) {
      const input = document.getElementById('searchInput');
      if (input && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
        input.select();
      }
    } else if (e.altKey && (e.key === 'm' || e.key === 'M')) {
      e.preventDefault();
      window.cycleToNextTheme();
    } else if (e.altKey && (e.key === 't' || e.key === 'T')) {
      e.preventDefault();
      window.toggleWhiteBlackTheme();
    } else if (e.key === 'h' || e.key === 'H') {
      if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
      window.toggleTopBar();
    }
  });

  // Close dropdown on outside click
  window.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-wrapper')) {
      window.closeAllDropdowns();
    }
  });

  // Initialize
  document.addEventListener('DOMContentLoaded', function() {
    buildAllCards();
    try {
      const savedTheme = localStorage.getItem('hcode_korean_theme');
      if (savedTheme && themes[savedTheme]) {
        window.applyTheme(savedTheme);
      }
    } catch(e) {}
  });

  setTimeout(buildAllCards, 150);
})();
