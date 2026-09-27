// ═══════════════════════════════════════════════════════
// SENTENCE STRIP & ONLINE SOURCE SWITCHER ENGINE
// ═══════════════════════════════════════════════════════

(function() {
  let activeSource = localStorage.getItem('chinese_course_sentence_source') || 'course';
  let currentIndex = 0;
  let seenCount = 0;
  let totalCards = 0;

  function initReaderPin() {
    const panel = document.getElementById('sentenceStrip');
    const button = document.getElementById('readerPinBtn');
    if (!panel || !button) return;

    const applyPinState = function(pinned) {
      panel.classList.toggle('is-pinned', pinned);
      button.setAttribute('aria-pressed', String(pinned));
      button.textContent = pinned ? '\u{1F4CC} P\u0159ipnuto' : '\u{1F4CD} P\u0159ipnout';
      button.title = pinned ? 'Odepnout \u010dte\u010dku' : 'P\u0159ipnout \u010dte\u010dku';
      try { localStorage.setItem('chinese_course_reader_pin', pinned ? 'pinned' : 'free'); } catch (e) {}
    };

    window.toggleReaderPin = function() {
      applyPinState(!panel.classList.contains('is-pinned'));
    };

    try {
      if (localStorage.getItem('chinese_course_reader_pin') === 'free') applyPinState(false);
    } catch (e) {}
  }

  function getActiveSentences() {
    if (!window.SENTENCE_COLLECTIONS) return [];
    return window.SENTENCE_COLLECTIONS[activeSource] || window.SENTENCE_COLLECTIONS.course || [];
  }

  // Render a specific sentence index from current active stream
  window.renderSentence = function(idx) {
    const list = getActiveSentences();
    if (!list.length) return;
    
    // Clamp or wrap index
    if (idx < 0) idx = list.length - 1;
    if (idx >= list.length) idx = 0;
    currentIndex = idx;

    const s = list[currentIndex];
    const tilesEl = document.getElementById('sentenceTiles');
    const czechEl = document.getElementById('sentenceCzech');
    const progEl = document.getElementById('stripProgress');
    const sourceLabelEl = document.getElementById('sentenceSourceLabel');
    const originWrapper = document.getElementById('sentenceOriginWrapper');
    const box = document.querySelector('.sentence-inner-box');
    if (!tilesEl) return;

    // Smooth subtle transition
    if (box) {
      box.style.opacity = '0.4';
      box.style.transition = 'opacity 0.15s ease';
    }

    setTimeout(() => {
      tilesEl.innerHTML = '';

      // Render sentence word/char tiles in clear pure text form
      if (Array.isArray(s.tiles)) {
        s.tiles.forEach(t => {
          const div = document.createElement('div');
          const isPunct = /^[，。！？、：；“”‘’—… ]+$/.test((t.h || '').trim());
          const pinyin = t.p || (window.getPinyinForText ? window.getPinyinForText(t.h) : '');
          div.className = 'sent-tile' + (isPunct ? ' punct' : '') + (t.cls ? ' ' + t.cls : '');
          div.innerHTML = `
            <div class="t-hanzi">${t.h || ''}</div>
            ${pinyin ? `<div class="t-pinyin">${pinyin}</div>` : ''}
          `;
          if (!isPunct) {
            div.tabIndex = 0;
            div.setAttribute('role', 'button');
            div.setAttribute('aria-label', `Přehrát ${t.h || ''}${t.p ? `, ${t.p}` : ''}`);
            div.onclick = function() { window.findChineseCharacter(t.h || ''); };
            div.setAttribute('aria-label', `Find exact character ${t.h || ''}${pinyin ? `, ${pinyin}` : ''}`);
            div.title = `Find exact character: ${t.h || ''}${pinyin ? ` (${pinyin})` : ''}`;
            div.onkeydown = function(event) {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                window.findChineseCharacter(t.h || '');
              }
            };
          }
          tilesEl.appendChild(div);
        });
      }

      // Czech gloss
      if (czechEl) {
        czechEl.textContent = s.czech || '';
        czechEl.title = s.czech || '';
      }

      // Simple online link (official source URL or dictionary lookup)
      const onlineLinkEl = document.getElementById('sentenceOnlineLink');
      if (onlineLinkEl) {
        const fullHanzi = Array.isArray(s.tiles) ? s.tiles.map(t => t.h || '').join('') : '';
        const targetUrl = s.sourceUrl || ('https://translate.google.com/?sl=zh-CN&tl=cs&text=' + encodeURIComponent(fullHanzi) + '&op=translate');
        const targetLabel = s.sourceName ? `🌐 ${s.sourceName} ↗` : '🌐 Online ↗';
        onlineLinkEl.href = targetUrl;
        onlineLinkEl.innerHTML = targetLabel;
        onlineLinkEl.title = s.sourceName ? `Otevřít zdroj: ${s.sourceName}` : `Otevřít online překlad pro: ${fullHanzi}`;
      }

      // Progress counter
      if (progEl) {
        progEl.textContent = `${currentIndex + 1} / ${list.length}`;
      }

      if (sourceLabelEl) {
        sourceLabelEl.textContent = s.sourceName || s.topic || (activeSource === 'course' ? 'Výukový kurz' : 'Online zdroj');
      }

      // Origin & Live Web Link (if wrapper exists)
      if (originWrapper) {
        originWrapper.innerHTML = '';
        if (s.sourceName && s.sourceUrl) {
          const badge = document.createElement('span');
          badge.className = 'source-badge-tag';
          badge.textContent = s.topic || 'Oficiální zdroj';

          const link = document.createElement('a');
          link.className = 'source-web-link';
          link.href = s.sourceUrl;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.title = `Otevřít oficiální zdroj webu (${s.sourceName}) v novém okně`;
          link.innerHTML = `🌐 ${s.sourceName} <span style="font-size:9px;">↗</span>`;

          originWrapper.appendChild(badge);
          originWrapper.appendChild(link);
        } else if (activeSource === 'course') {
          const courseTag = document.createElement('span');
          courseTag.className = 'source-badge-tag';
          courseTag.textContent = '📚 Výukový kurz L1–L4';
          originWrapper.appendChild(courseTag);
        }
      }

      if (box) {
        box.style.opacity = '1';
      }
    }, 120);
  };

  // Step sentence manually (+1 or -1)
  window.stepSentence = function(delta) {
    window.renderSentence(currentIndex + delta);
  };

  window.playChineseAudio = function(text) {
    if (!text || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.82;
    const voice = window.speechSynthesis.getVoices().find(v => v.lang === 'zh-CN' || v.lang.startsWith('zh'));
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  };

  window.playCurrentSentenceAudio = function() {
    const list = getActiveSentences();
    const sentence = list[currentIndex];
    if (!sentence || !Array.isArray(sentence.tiles)) return;
    window.playChineseAudio(sentence.tiles.map(t => t.h || '').join(''));
  };

  // Switch between sources ('course', 'news', 'culture', 'chengyu', 'all')
  window.switchSentenceSource = function(sourceKey, btn) {
    activeSource = sourceKey;
    localStorage.setItem('chinese_course_sentence_source', activeSource);

    // Update active tab styling
    document.querySelectorAll('.source-tab').forEach(t => {
      const isTarget = t.dataset.source === sourceKey || t === btn;
      t.classList.toggle('active', isTarget);
    });

    currentIndex = 0;
    window.renderSentence(0);
  };

  // Toggle Sentence Strip visibility (Alt+V)
  window.toggleSentenceStrip = function() {
    const strip = document.getElementById('sentenceStrip');
    const btn = document.getElementById('sentenceToggleBtn');
    if (!strip) return;
    const isHidden = strip.classList.toggle('hidden-strip');
    localStorage.setItem('chinese_course_sentence_strip', isHidden ? 'hidden' : 'visible');
    if (btn) {
      btn.style.opacity = isHidden ? '0.5' : '1';
      btn.title = isHidden ? 'Zobrazit doplňování vět (Alt+V)' : 'Skrýt doplňování vět (Alt+V)';
    }
  };

  // Percentage-based advancement while scrolling cards
  function sentenceForCount(seen, total) {
    const list = getActiveSentences();
    if (!list.length || total === 0) return 0;
    const pct = Math.min(seen / total, 1);
    return Math.min(Math.floor(pct * list.length), list.length - 1);
  }

  const observer = new IntersectionObserver(function(entries) {
    let changed = false;
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      seenCount++;
      changed = true;
    });
    if (changed) {
      const idx = sentenceForCount(seenCount, totalCards);
      if (idx !== currentIndex) {
        window.renderSentence(idx);
      }
    }
  }, { threshold: 0.35 });

  // Init when DOM is loaded or already ready
  function initSentences() {
    initReaderPin();
    // Restore saved source tab
    const savedSource = localStorage.getItem('chinese_course_sentence_source') || 'course';
    const targetTab = document.querySelector(`.source-tab[data-source="${savedSource}"]`);
    if (targetTab) {
      document.querySelectorAll('.source-tab').forEach(t => t.classList.remove('active'));
      targetTab.classList.add('active');
    }
    activeSource = savedSource;

    // Restore hidden state
    const savedHidden = localStorage.getItem('chinese_course_sentence_strip');
    if (savedHidden === 'hidden') {
      const strip = document.getElementById('sentenceStrip');
      const btn = document.getElementById('sentenceToggleBtn');
      if (strip) strip.classList.add('hidden-strip');
      if (btn) {
        btn.style.opacity = '0.5';
        btn.title = 'Zobrazit doplňování vět (Alt+V)';
      }
    }

    // Connect observer to cards
    const cards = document.querySelectorAll('.course-card');
    totalCards = cards.length;
    cards.forEach(card => observer.observe(card));

    // Render initial sentence
    window.renderSentence(0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSentences);
  } else {
    setTimeout(initSentences, 50);
  }

  window.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'ArrowRight') {
      event.preventDefault();
      window.stepSentence(1);
    } else if (event.altKey && event.key === 'ArrowLeft') {
      event.preventDefault();
      window.stepSentence(-1);
    } else if (event.altKey && (event.key === 's' || event.key === 'S')) {
      event.preventDefault();
      window.playCurrentSentenceAudio();
    }
  });

  window.addEventListener('pinyin-ready', function() {
    window.renderSentence(currentIndex);
  });
})();
