// ═══════════════════════════════════════════════════════
// SENTENCE STRIP & ONLINE SOURCE SWITCHER ENGINE
// ═══════════════════════════════════════════════════════

(function() {
  let activeSource = localStorage.getItem('chinese_course_sentence_source') || 'course';
  let currentIndex = 0;
  let seenCount = 0;
  let totalCards = 0;

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
          div.className = 'sent-tile' + (isPunct ? ' punct' : '') + (t.cls ? ' ' + t.cls : '');
          div.innerHTML = `
            <div class="t-hanzi">${t.h || ''}</div>
            ${t.p ? `<div class="t-pinyin">${t.p}</div>` : ''}
          `;
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
})();
