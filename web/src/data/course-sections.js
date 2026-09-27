export function createCourseSections(language, { chineseBasics, chineseCards, korean, sentences }) {
  if (language === 'zh') {
  const zhBasics = [
    ...chineseBasics.characters.map((item, index) => {
      const isArr = Array.isArray(item);
      const term = isArr ? item[0] : item.term;
      const sound = isArr ? item[1] : item.sound;
      const meaning = isArr ? item[2] : item.meaning;
      return {
        id: `basic-character-${index}`,
        term, sound, meaning,
        kind: 'Základní znak',
        group: 'Znaky',
        progress: `Základní kurz • #${String(index + 1).padStart(2, '0')}`,
        characters: item.characters || [{ term, sound, meaning, known: false }],
        note: item.note,
        examples: item.examples,
        raw: item
      };
    }),
    ...chineseBasics.words.map((item, index) => {
      const isArr = Array.isArray(item);
      const term = isArr ? item[0] : item.term;
      const sound = isArr ? item[1] : item.sound;
      const meaning = isArr ? item[2] : item.meaning;
      return {
        id: `basic-word-${index}`,
        term, sound, meaning,
        kind: 'Spojení znaků',
        group: 'Slova',
        progress: `Základní kurz • #${String(index + 25).padStart(2, '0')}`,
        characters: item.characters,
        note: item.note,
        examples: item.examples,
        raw: item
      };
    }),
    ...chineseBasics.readings.map((reading, index) => ({
      id: `basic-reading-${index}`,
      term: reading.tiles.map(([character]) => character).join(''),
      sound: reading.pinyin,
      meaning: reading.meaning,
      kind: reading.title,
      group: 'Čtení',
      progress: `Čtení • #${index + 1} z ${chineseBasics.readings.length}`,
      note: reading.note,
      tiles: reading.tiles,
      characters: reading.characters,
      raw: reading
    }))
  ];

  const zhSections = [
    { id: 'basic', title: 'Základní znaky a čtení', items: zhBasics },
    { id: 'numbers', title: 'Čísla', items: chineseBasics.numbers.map((item, index) => ({
      id: `number-${index}`,
      term: item.hanzi || item.term,
      sound: item.pinyin || item.sound,
      meaning: item.czech || item.meaning,
      kind: 'Číslo',
      group: 'Čísla',
      progress: `Čísla • #${String(index + 1).padStart(2, '0')} (${index + 1} / ${chineseBasics.numbers.length})`,
      note: item.decomp || item.note,
      characters: item.characters,
      examples: item.examples,
      raw: item
    })) },
    { id: 'radicals', title: '204 radikálů', items: chineseBasics.radicals.map((item, index) => ({
      ...item, id: `radical-${index}`, group: 'Radikály'
    })) },
    ...['l1', 'l2', 'l3'].map((id, index) => ({
      id, title: ['L1: Věty a gramatika', 'L2: Fráze', 'L3: Slovní zásoba'][index],
      items: chineseCards.filter(card => card.lesson === id).map(card => ({
        ...card, kind: card.label || 'Výuková karta', group: id.toUpperCase()
      }))
    })),
    { id: 'l4', title: 'L4: Přídavná jména a spojky', items: chineseBasics.advanced.map((item, index) => ({
      ...item,
      id: `advanced-${index}`,
      group: 'L4',
      progress: `Lekce 4 • #${String(index + 1).padStart(3, '0')} (${index + 1} / ${chineseBasics.advanced.length})`,
      characters: item.characters,
      note: item.note,
      examples: item.examples
    })) }
  ];
    return zhSections;
  }

  const koreanReading = ['news', 'culture', 'sokdam'].flatMap(source =>
    (sentences.ko[source] || []).map((item, index) => ({
      id: `reading-${source}-${index}`, term: item.tiles.map(tile => tile.h).join(' '),
      meaning: item.czech, sound: '', kind: item.topic || 'Online text', group: source,
      raw: item, tiles: item.tiles
    }))
  );

  const koSections = [
    { id: 'consonants', title: 'Hangul: Souhlásky', items: korean.hangul.consonants.map((item, index) => ({
      id: item.id || `consonant-${index}`, term: item.letter, sound: item.roman, meaning: item.desc,
      kind: item.name, group: 'Souhlásky', progress: `Hangul • Souhláska #${String(index + 1).padStart(2, '0')} (${index + 1} / ${korean.hangul.consonants.length})`, raw: item
    })) },
    { id: 'vowels', title: 'Hangul: Samohlásky', items: korean.hangul.vowels.map((item, index) => ({
      id: item.id || `vowel-${index}`, term: item.letter, sound: item.roman, meaning: item.desc,
      kind: item.type, group: 'Samohlásky', progress: `Hangul • Samohláska #${String(index + 1).padStart(2, '0')} (${index + 1} / ${korean.hangul.vowels.length})`, raw: item
    })) },
    { id: 'batchim', title: 'Pravidla Batchim', items: korean.hangul.batchimRules.map((item, index) => ({
      id: item.id || `batchim-${index}`, term: item.target, sound: item.sound, meaning: item.rule,
      kind: 'Výslovnost', group: 'Batchim', progress: `Batchim • Pravidlo #${String(index + 1).padStart(2, '0')} (${index + 1} / ${korean.hangul.batchimRules.length})`, raw: item
    })) },
    { id: 'numbers', title: 'Čísla a počítadla', items: [
      ...korean.numbers.sinoKorean.map((item, index) => ({ id: `sino-${index}`, term: item.hangul, sound: item.roman, meaning: item.cz, kind: 'Sino-korejské číslo', group: 'Sino-korejská čísla', progress: `Sino-korejské číslo • #${String(index + 1).padStart(2, '0')} (${index + 1} / ${korean.numbers.sinoKorean.length})`, raw: item })),
      ...korean.numbers.nativeKorean.map((item, index) => ({ id: `native-${index}`, term: item.hangul, sound: item.roman, meaning: item.cz, kind: 'Rodilé číslo', group: 'Rodilá korejská čísla', progress: `Rodilé číslo • #${String(index + 1).padStart(2, '0')} (${index + 1} / ${korean.numbers.nativeKorean.length})`, raw: item })),
      ...korean.numbers.counters.map((item, index) => ({ id: `counter-${index}`, term: item.hangul, sound: item.system, meaning: item.target, kind: 'Počítadlo', group: 'Počítadla', progress: `Počítadlo • #${String(index + 1).padStart(2, '0')} (${index + 1} / ${korean.numbers.counters.length})`, raw: item }))
    ] },
    { id: 'phrases', title: 'L1: Konverzační fráze', items: korean.phrases.map((item, index) => ({
      id: item.id || `phrase-${index}`, term: item.hangul, sound: item.roman, meaning: item.cz,
      kind: 'Fráze', group: 'Fráze', progress: `L1: Fráze • #${String(index + 1).padStart(2, '0')} (${index + 1} / ${korean.phrases.length})`, raw: item
    })) },
    { id: 'vocabulary', title: 'L2: Slovní zásoba', items: korean.vocabulary.map((item, index) => ({
      id: item.id || `vocab-${index}`, term: item.hangul, sound: item.roman, meaning: item.cz,
      kind: 'Slovní zásoba', group: 'Slovní zásoba', progress: `L2: Slovní zásoba • #${String(index + 1).padStart(3, '0')} · Naučených nových slov: ${index + 1} / ${korean.vocabulary.length}`, raw: item
    })) },
    { id: 'grammar', title: 'L3: Gramatika', items: korean.grammar.map((item, index) => ({
      id: item.id || `grammar-${index}`, term: item.korean, sound: item.title, meaning: item.summary,
      kind: item.category, group: 'Gramatika', progress: `L3: Gramatika • #${String(index + 1).padStart(2, '0')} (${index + 1} / ${korean.grammar.length})`, raw: item
    })) },
    { id: 'reading', title: 'L4: Online texty a čítanka', items: koreanReading.map((item, index) => ({
      ...item,
      progress: `L4: Čítanka • #${String(index + 1).padStart(2, '0')} (${index + 1} / ${koreanReading.length})`
    })) }
  ];
  return koSections;
}

export function normalizeSearch(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().trim();
}

export function matchesStudyCard(card, query) {
  if (!query) return true;
  const searchable = [card.term, card.sound, card.meaning, card.kind, card.group, card.note, JSON.stringify(card.raw || {}), JSON.stringify(card.characters || [])].join(' ');
  return normalizeSearch(searchable).includes(query);
}
