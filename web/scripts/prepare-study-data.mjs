import { mkdir, readFile, writeFile, copyFile, rm } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CHARACTER_DEFS,
  ENRICHED_NUMBERS,
  BASIC_CHAR_NOTES,
  BASIC_CHAR_EXAMPLES,
  BASIC_WORD_NOTES,
  enrichAdvancedItem
} from './chinese-enrichments.mjs';

const webRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const projectRoot = resolve(webRoot, '..');
const output = resolve(webRoot, 'src/data');
const publicDir = resolve(webRoot, 'public');
await mkdir(output, { recursive: true });
await rm(resolve(publicDir, 'legacy'), { recursive: true, force: true });

function divEnd(markup, start, openingTag) {
  let depth = 1;
  const tags = /<div\b[^>]*>|<\/div\s*>/gi;
  tags.lastIndex = start + openingTag.length;
  let match;
  while ((match = tags.exec(markup))) {
    if (/^<\/div/i.test(match[0])) depth -= 1;
    else if (!/\/>$/.test(match[0])) depth += 1;
    if (depth === 0) return tags.lastIndex;
  }
  return markup.length;
}

function textContent(markup) {
  return markup
    .replace(/<\/[^>]+>/g, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'")
    .replace(/&bull;/gi, '•').replace(/&#(x[\da-f]+|\d+);/gi, (_, code) => String.fromCodePoint(code[0].toLowerCase() === 'x' ? parseInt(code.slice(1), 16) : Number(code)))
    .replace(/\s+/g, ' ').trim();
}

function classHtml(markup, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const start = new RegExp(`<([a-z][\\w:-]*)\\b[^>]*class=["'][^"']*\\b${escaped}\\b[^"']*["'][^>]*>`, 'i').exec(markup);
  if (!start) return '';
  const tag = start[1].toLowerCase();
  const endTag = new RegExp(`<\\/?${tag}\\b[^>]*>`, 'gi');
  endTag.lastIndex = start.index;
  let depth = 0;
  let match;
  while ((match = endTag.exec(markup))) {
    if (new RegExp(`^<\\/${tag}`, 'i').test(match[0])) depth -= 1;
    else if (!/\/>$/.test(match[0])) depth += 1;
    if (depth === 0) return markup.slice(start.index, endTag.lastIndex);
  }
  return '';
}

function classText(markup, name) {
  const outer = classHtml(markup, name);
  return outer ? textContent(outer.replace(/^<[^>]*>/, '').replace(/<\/[a-z][\w:-]*>$/i, '')) : '';
}

function divsByClass(markup, name) {
  const result = [];
  const starts = /<div\b[^>]*>/gi;
  let start;
  while ((start = starts.exec(markup))) {
    if (!new RegExp(`\\b${name}\\b`).test(start[0])) continue;
    const end = divEnd(markup, start.index, start[0]);
    result.push(markup.slice(start.index, end));
    starts.lastIndex = end;
  }
  return result;
}

function extractLegacyChineseCards(markup) {
  const items = [];
  const starts = /<div\b[^>]*class=["'][^"']*\bcourse-card\b[^"']*["'][^>]*>/gi;
  let start;
  while ((start = starts.exec(markup))) {
    const opening = start[0];
    const lesson = /\bdata-lesson=["']([^"']+)/i.exec(opening)?.[1] || /\bcourse-card\s+([\w-]+)/i.exec(opening)?.[1];
    const id = /\bid=["']([^"']+)/i.exec(opening)?.[1] || '';
    const end = divEnd(markup, start.index, opening);
    const card = markup.slice(start.index + opening.length, end - 6);
    starts.lastIndex = end;
    if (!['l1', 'l2', 'l3', 'l4'].includes(lesson)) continue;
    const characters = divsByClass(card, 'char-item').map(block => {
      const meaningMarkup = classHtml(block, 'char-meaning');
      const grammarMarkup = classHtml(block, 'grammar-expl-right');
      return {
      term: classText(block, 'char-symbol'),
      sound: classText(block, 'char-pinyin'),
      meaning: textContent(meaningMarkup.replace(grammarMarkup, '')),
      grammar: [classText(block, 'grammar-badge-right'), textContent(grammarMarkup.replace(/^<[^>]*>/, '').replace(/<\/div>$/, ''))].filter(Boolean).join(' '),
      known: /\bknown-item\b/.test(block)
      };
    }).filter(item => item.term);
    items.push({
      id,
      lesson,
      number: Number(/-(\d+)$/.exec(id)?.[1] || 0),
      label: classText(card, 'card-badge'),
      time: classText(card, 'card-time').replace(/^⏱️\s*/, ''),
      term: classText(card, 'hanzi-text'),
      sound: classText(card, 'pinyin-text'),
      meaning: classText(card, 'czech-text'),
      progress: classText(card, 'tracker-badge'),
      newLabel: classText(card, 'section-label new'),
      knownLabel: classText(card, 'section-label known'),
      knownNote: classText(card, 'empty-note'),
      characters
    });
  }
  return items;
}

const chineseHtml = await readFile(resolve(projectRoot, 'app/index.html'), 'utf8');
const chineseCourseCards = extractLegacyChineseCards(chineseHtml);
if (chineseCourseCards.length < 300) throw new Error(`Expected the Chinese lesson cards in app/index.html; found ${chineseCourseCards.length}.`);
await writeFile(resolve(output, 'chinese-course-cards.json'), JSON.stringify(chineseCourseCards));

const chineseSource = await readFile(resolve(projectRoot, 'app/js/basics-data.js'), 'utf8');
const capture = 'globalThis.__HCODE_CHINESE_BASICS__ = { characters, words, readings };\n  const container = document.getElementById';
if (!chineseSource.includes('const container = document.getElementById')) throw new Error('Could not locate Chinese beginner data capture point.');
const context = { document: { getElementById: () => null } };
context.window = context;
runInNewContext(chineseSource.replace('const container = document.getElementById', capture), context, { timeout: 5000 });
const chineseCardsSource = await readFile(resolve(projectRoot, 'app/js/cards-data.js'), 'utf8');
const numbersCapture = 'globalThis.__HCODE_CHINESE_NUMBERS__ = numberData;\n    var container = document.getElementById';
const lessonCapture = 'globalThis.__HCODE_CHINESE_LESSON4__ = lesson4Data;\n  const container = document.getElementById';
if (!chineseCardsSource.includes('var container = document.getElementById') || !chineseCardsSource.includes('const container = document.getElementById')) throw new Error('Could not locate Chinese course data capture points.');
const cardsContext = { document: { getElementById: () => null } };
cardsContext.window = cardsContext;
const cardsSourceWithCaptures = chineseCardsSource.replace('var container = document.getElementById', numbersCapture).replace('const container = document.getElementById', lessonCapture);
runInNewContext(cardsSourceWithCaptures, cardsContext, { timeout: 5000 });
const radicalsSource = await readFile(resolve(projectRoot, 'app/js/radicals-data.js'), 'utf8');
const radicalsCapture = 'globalThis.__HCODE_CHINESE_RADICALS__ = radicalsData;\n  function initRadicalCards()';
if (!radicalsSource.includes('function initRadicalCards()')) throw new Error('Could not locate Chinese radical data capture point.');
const radicalsContext = { document: { readyState: 'loading', addEventListener() {} } };
radicalsContext.window = radicalsContext;
runInNewContext(radicalsSource.replace('function initRadicalCards()', radicalsCapture), radicalsContext, { timeout: 5000 });
const enrichedCharacters = context.__HCODE_CHINESE_BASICS__.characters.map(([term, sound, meaning]) => {
  const czMeaning = CHARACTER_DEFS[term]?.meaning || meaning;
  return {
    term, sound, meaning: czMeaning,
    characters: [{ term, sound, meaning: czMeaning, known: false }],
    note: BASIC_CHAR_NOTES[term] || `Základní znak čínského písma (${czMeaning}).`,
    examples: BASIC_CHAR_EXAMPLES[term] || []
  };
});

const enrichedWords = context.__HCODE_CHINESE_BASICS__.words.map(([term, sound, meaning]) => {
  const characters = Array.from(term).filter(ch => ch >= '\u3400' && ch <= '\u9fff').map(ch => ({
    term: ch,
    sound: CHARACTER_DEFS[ch]?.sound || '',
    meaning: CHARACTER_DEFS[ch]?.meaning || '',
    known: false
  }));
  return {
    term, sound, meaning,
    characters,
    note: BASIC_WORD_NOTES[term] || `Slovo složené ze znaků: ${characters.map(c => c.term).join(' + ')}.`
  };
});

const enrichedReadings = context.__HCODE_CHINESE_BASICS__.readings.map(reading => {
  const readingChars = [];
  const seen = new Set();
  for (const [ch, py] of reading.tiles || []) {
    if (ch >= '\u3400' && ch <= '\u9fff' && !seen.has(ch)) {
      seen.add(ch);
      readingChars.push({
        term: ch,
        sound: CHARACTER_DEFS[ch]?.sound || py || '',
        meaning: CHARACTER_DEFS[ch]?.meaning || '',
        known: false
      });
    }
  }
  return {
    ...reading,
    characters: readingChars
  };
});

await writeFile(resolve(output, 'chinese-basics.json'), JSON.stringify({
  characters: enrichedCharacters,
  words: enrichedWords,
  readings: enrichedReadings,
  numbers: ENRICHED_NUMBERS,
  radicals: radicalsContext.__HCODE_CHINESE_RADICALS__.map(([number, strokes, character, variants, pinyin, meaning, description, words]) => ({
    term: variants ? `${character} (${variants})` : character,
    sound: pinyin,
    meaning,
    kind: `Radical ${number} · ${strokes} strokes`,
    note: description,
    examples: words?.map(word => `${word[0]} · ${word[1]} · ${word[2]}`)
  })),
  advanced: cardsContext.__HCODE_CHINESE_LESSON4__.map(item => enrichAdvancedItem(item))
}, null, 2));

const koreanFiles = {
  hangul: 'hangul-data.js',
  numbers: 'numbers-data.js',
  phrases: 'phrases-data.js',
  vocabulary: 'vocab-data.js',
  grammar: 'grammar-data.js'
};
const korean = {};
for (const [key, filename] of Object.entries(koreanFiles)) {
  const source = await readFile(resolve(projectRoot, 'korean/js', filename), 'utf8');
  const sandbox = {};
  sandbox.window = sandbox;
  runInNewContext(source, sandbox, { timeout: 5000 });
  const variable = Object.keys(sandbox).find(name => name.startsWith('KOREAN_'));
  if (!variable) throw new Error(`Could not load Korean study data: ${filename}`);
  korean[key] = sandbox[variable];
}
if (!korean.numbers?.counters?.length || !korean.phrases?.length || !korean.grammar?.length) {
  throw new Error('Korean counters, phrases, or grammar are missing from the source datasets.');
}
await writeFile(resolve(output, 'korean-study.json'), JSON.stringify(korean));

const sentenceCollections = {};
for (const [language, filename, globalName] of [
  ['zh', 'app/js/sentences-data.js', 'SENTENCE_COLLECTIONS'],
  ['ko', 'korean/js/sentences-data.js', 'KOREAN_SENTENCE_COLLECTIONS']
]) {
  const sandbox = { window: {} };
  runInNewContext(await readFile(resolve(projectRoot, filename), 'utf8'), sandbox, { timeout: 5000 });
  const collections = sandbox.window[globalName];
  if (!collections?.course?.length || !collections?.news?.length) {
    throw new Error(`Could not load ${language} sentence collections from ${filename}.`);
  }
  const required = language === 'zh' ? ['course', 'news', 'culture', 'chengyu'] : ['course', 'news', 'culture', 'sokdam'];
  if (required.some(key => !collections[key]?.length)) {
    throw new Error(`A ${language} reading source is empty in ${filename}.`);
  }
  sentenceCollections[language] = Object.fromEntries(
    Object.entries(collections).map(([key, items]) => [key, Array.from(items, item => ({
      tiles: Array.from(item.tiles || [], tile => ({ h: tile.h || '', p: tile.p || '', r: tile.r || '', c: tile.c || '' })),
      czech: item.czech || '',
      topic: item.topic || '',
      sourceName: item.sourceName || '',
      sourceUrl: item.sourceUrl || ''
    }))])
  );
}
sentenceCollections.zh.basics = context.__HCODE_CHINESE_BASICS__.readings.map(reading => ({
  tiles: reading.tiles.map(([h, p]) => ({ h, p })),
  czech: `${reading.title} — ${reading.meaning} ${reading.note}`,
  topic: reading.title,
  sourceName: '',
  sourceUrl: ''
}));
if (!sentenceCollections.zh.basics.length) throw new Error('Chinese beginner readings are missing.');
await writeFile(resolve(output, 'sentence-collections.json'), JSON.stringify(sentenceCollections));
await mkdir(resolve(publicDir, 'data'), { recursive: true });
await copyFile(resolve(projectRoot, 'app/data/pinyin-json-hanzi-pinyin-table.json'), resolve(publicDir, 'data/pinyin-lookup.json'));
for (const filename of ['chinese-basics.json', 'chinese-course-cards.json', 'korean-study.json', 'sentence-collections.json']) {
  await copyFile(resolve(output, filename), resolve(publicDir, 'data', filename));
}
await mkdir(resolve(publicDir, 'licenses'), { recursive: true });
await copyFile(resolve(projectRoot, 'app/data/pinyin-json-LICENSE.txt'), resolve(publicDir, 'licenses/pinyin-json-LICENSE.txt'));
console.log('Prepared Chinese and Korean study data and sentence collections for the Next.js routes.');
