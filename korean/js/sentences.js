// ═══════════════════════════════════════════════════════════
// HCODE.ART • KOREAN SENTENCE TILES & STREAM ENGINE
// Word Tiles, Authentic Online Source Switching, Web Speech API
// ═══════════════════════════════════════════════════════════

(function() {
  let activeSource = localStorage.getItem('korean_course_sentence_source') || 'course';
  let currentIndex = 0;

  function initReaderPin() {
    const panel = document.getElementById('stepperStrip');
    const button = document.getElementById('readerPinBtn');
    if (!panel || !button) return;

    const applyPinState = function(pinned) {
      panel.classList.toggle('is-pinned', pinned);
      button.setAttribute('aria-pressed', String(pinned));
      button.textContent = pinned ? '\u{1F4CC} P\u0159ipnuto' : '\u{1F4CD} P\u0159ipnout';
      button.title = pinned ? 'Odepnout \u010dte\u010dku' : 'P\u0159ipnout \u010dte\u010dku';
      try { localStorage.setItem('korean_course_reader_pin', pinned ? 'pinned' : 'free'); } catch (e) {}
    };

    window.toggleReaderPin = function() {
      applyPinState(!panel.classList.contains('is-pinned'));
    };

    try {
      if (localStorage.getItem('korean_course_reader_pin') === 'free') applyPinState(false);
    } catch (e) {}
  }

  function getActiveSentences() {
    if (!window.KOREAN_SENTENCE_COLLECTIONS) return [];
    return window.KOREAN_SENTENCE_COLLECTIONS[activeSource] || window.KOREAN_SENTENCE_COLLECTIONS.course || [];
  }

  // Render a specific sentence index from current active stream
  window.renderSentence = function(idx) {
    const list = getActiveSentences();
    if (!list.length) return;

    if (idx < 0) idx = list.length - 1;
    if (idx >= list.length) idx = 0;
    currentIndex = idx;

    const s = list[currentIndex];
    const tilesEl = document.getElementById('sentenceTiles');
    const czechEl = document.getElementById('sentenceCzech');
    const progEl = document.getElementById('stripProgress');
    const onlineLinkEl = document.getElementById('sentenceOnlineLink');
    const sourceBadgeEl = document.getElementById('sentenceSourceBadge');

    if (!tilesEl) return;

    tilesEl.innerHTML = '';

    // Render interactive word tiles
    if (Array.isArray(s.tiles)) {
      s.tiles.forEach(t => {
        const div = document.createElement('div');
        const isPunct = /^[，。！？、：；“”‘’—… .!?]+$/.test((t.h || '').trim());
        div.className = 'sent-tile' + (isPunct ? ' punct' : '') + (t.cls ? ' ' + t.cls : '');
        div.innerHTML = `
          <div class="t-hangul">${t.h || ''}</div>
          ${t.r ? `<div class="t-roman">${t.r}</div>` : ''}
          ${t.c ? `<div class="t-cz">${t.c}</div>` : ''}
        `;
        if (!isPunct) {
          div.tabIndex = 0;
          div.setAttribute('role', 'button');
          div.setAttribute('aria-label', `Poslechnout ${t.h}${t.r ? `, ${t.r}` : ''}${t.c ? `, ${t.c}` : ''}`);
          div.setAttribute('title', `Klikněte pro poslech: ${t.h} (${t.c || ''})`);
          const playTile = function() {
            if (window.playKoreanAudio) window.playKoreanAudio(t.h);
          };
          div.onclick = playTile;
          div.onkeydown = function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              playTile();
            }
          };
        }
        tilesEl.appendChild(div);
      });
    }

    if (czechEl) {
      czechEl.textContent = s.czech || '';
      czechEl.title = s.czech || '';
    }

    if (progEl) {
      progEl.textContent = `${currentIndex + 1} / ${list.length}`;
    }

    if (sourceBadgeEl) {
      sourceBadgeEl.textContent = s.topic || 'Autentický zdroj';
    }

    if (onlineLinkEl) {
      onlineLinkEl.href = s.sourceUrl || 'https://korean.dict.naver.com/';
      onlineLinkEl.innerHTML = `🌐 ${s.sourceName || 'Online'} ↗`;
      onlineLinkEl.title = `Otevřít původní online zdroj: ${s.sourceName || 'Online'}`;
    }
  };

  // Step sentence manually (+1 or -1)
  window.stepSentence = function(delta) {
    window.renderSentence(currentIndex + delta);
  };

  // Play audio of the whole active sentence
  window.playCurrentSentenceAudio = function() {
    const list = getActiveSentences();
    if (!list.length || !list[currentIndex]) return;
    const fullHangul = list[currentIndex].tiles ? list[currentIndex].tiles.map(t => t.h || '').join(' ') : '';
    if (window.playKoreanAudio) window.playKoreanAudio(fullHangul);
  };

  // Switch between sources ('course', 'news', 'culture', 'sokdam')
  window.switchSentenceSource = function(sourceKey, btn) {
    activeSource = sourceKey;
    try {
      localStorage.setItem('korean_course_sentence_source', activeSource);
    } catch(e) {}

    document.querySelectorAll('.source-tab').forEach(t => {
      const isTarget = (t.dataset.source === sourceKey) || (t === btn);
      t.classList.toggle('active', isTarget);
    });

    currentIndex = 0;
    window.renderSentence(0);
  };

  // Initialize
  function initSentences() {
    initReaderPin();
    const saved = localStorage.getItem('korean_course_sentence_source') || 'course';
    activeSource = saved;
    const targetTab = document.querySelector(`.source-tab[data-source="${saved}"]`);
    if (targetTab) {
      document.querySelectorAll('.source-tab').forEach(t => t.classList.remove('active'));
      targetTab.classList.add('active');
    }
    window.renderSentence(0);
  }

  // Keyboard navigation shortcuts
  window.addEventListener('keydown', function(e) {
    if (e.altKey && e.key === 'ArrowRight') {
      e.preventDefault();
      window.stepSentence(1);
    } else if (e.altKey && e.key === 'ArrowLeft') {
      e.preventDefault();
      window.stepSentence(-1);
    } else if (e.altKey && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      window.playCurrentSentenceAudio();
    }
  });

  document.addEventListener('DOMContentLoaded', initSentences);
  setTimeout(initSentences, 250);
})();
