/*
 * Character lookup for the Chinese reader.
 * Data: guoyunhe/pinyin-json, hanzi-pinyin-table.json (GPL-3.0).
 * The original data and license are bundled in app/data for offline hosting.
 */
(function() {
  const DATA_URL = new URL('../data/pinyin-json-hanzi-pinyin-table.json', document.currentScript?.src || window.location.href);
  let hanziToPinyin = Object.create(null);
  let pinyinToHanzi = new Map();

  function normalizedPinyin(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f0-9\s]/g, '');
  }

  function firstHanzi(value) {
    return Array.from(String(value || '')).find(char => /\p{Script=Han}/u.test(char)) || '';
  }

  function pinyinForCharacter(character) {
    const readings = hanziToPinyin[character];
    return Array.isArray(readings) ? readings : [];
  }

  window.getPinyinForText = function(text) {
    return Array.from(String(text || ''))
      .map(character => pinyinForCharacter(character).join(' / '))
      .filter(Boolean)
      .join(' \u00b7 ');
  };

  // Reusable builder for a future lesson based on individual characters and phrases.
  window.createChineseLesson = function(config) {
    const characters = Array.from(new Set(Array.from(config.characters || '').filter(char => /\p{Script=Han}/u.test(char))));
    return {
      id: config.id,
      title: config.title,
      characters: characters.map(character => ({ character, pinyin: pinyinForCharacter(character) })),
      combinations: Array.from(config.combinations || [])
    };
  };

  window.findChineseCharacter = function(value) {
    const character = firstHanzi(value);
    if (!character) return;

    if (typeof window.switchLesson === 'function') {
      window.switchLesson('all');
    }

    const input = document.getElementById('searchInput');
    if (input) input.value = character;
    if (typeof window.handleSearchInput === 'function') window.handleSearchInput(character);

    const readings = pinyinForCharacter(character);
    const status = document.getElementById('characterLookup');
    if (status) status.textContent = readings.length ? `${character} \u00b7 ${readings.join(' / ')}` : character;

    requestAnimationFrame(function() {
      const firstMatch = Array.from(document.querySelectorAll('.course-card'))
        .find(card => card.style.display !== 'none');
      if (firstMatch) {
        const lesson = firstMatch.getAttribute('data-lesson');
        if (lesson && typeof window.ensureSectionExpanded === 'function') {
          window.ensureSectionExpanded(lesson);
        }
        if (typeof window.scrollToCardId === 'function') window.scrollToCardId(firstMatch.id);
      }
    });
  };

  document.addEventListener('click', function(event) {
    const characterEl = event.target.closest('.char-symbol');
    if (!characterEl) return;
    const character = firstHanzi(characterEl.textContent);
    if (character) window.findChineseCharacter(character);
  });

  function cardContainsAny(characters) {
    const set = new Set(characters);
    document.querySelectorAll('.course-card').forEach(card => {
      if (card.style.display !== 'none') return;
      const text = `${card.getAttribute('data-text') || ''} ${card.textContent || ''}`;
      if (Array.from(text).some(char => set.has(char))) card.style.display = '';
    });
  }

  function addPinyinSearch() {
    if (typeof window.filterCards !== 'function' || window.filterCards.__pinyinAware) return;
    const originalFilterCards = window.filterCards;
    const enhancedFilterCards = function(query) {
      originalFilterCards(query);
      const key = normalizedPinyin(query);
      const matches = key.length > 1 ? pinyinToHanzi.get(key) : null;
      if (matches && matches.size) cardContainsAny(matches);
    };
    enhancedFilterCards.__pinyinAware = true;
    window.filterCards = enhancedFilterCards;
  }

  fetch(DATA_URL)
    .then(response => {
      if (!response.ok) throw new Error(`Pinyin data could not be loaded (${response.status})`);
      return response.json();
    })
    .then(data => {
      hanziToPinyin = data || Object.create(null);
      Object.entries(hanziToPinyin).forEach(([character, readings]) => {
        (Array.isArray(readings) ? readings : []).forEach(reading => {
          const key = normalizedPinyin(reading);
          if (!key) return;
          if (!pinyinToHanzi.has(key)) pinyinToHanzi.set(key, new Set());
          pinyinToHanzi.get(key).add(character);
        });
      });
      addPinyinSearch();
      window.dispatchEvent(new CustomEvent('pinyin-ready'));
    })
    .catch(error => console.warn('Pinyin lookup is unavailable:', error));
})();
