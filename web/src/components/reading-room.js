'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import sentenceCollections from '../data/sentence-collections.json';
import { readingCollections } from '../data/readings';

const sources = {
  zh: [['course', 'Kurz'], ['basics', 'Začátečník'], ['news', 'Zprávy'], ['culture', 'Kultura'], ['chengyu', 'Klasické texty'], ['short', 'Krátké texty']],
  ko: [['course', 'Kurz'], ['news', 'Zprávy'], ['culture', 'Kultura'], ['sokdam', 'Přísloví'], ['short', 'Krátké texty']]
};

function readStored(key, fallback) {
  try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
}

function store(key, value) {
  try { localStorage.setItem(key, value); } catch {}
}

export function speakText(value, language) {
  if (!value || typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(value);
  utterance.lang = language === 'zh' ? 'zh-CN' : 'ko-KR';
  utterance.rate = language === 'zh' ? 0.82 : 0.9;
  const voice = window.speechSynthesis.getVoices().find(item => item.lang.startsWith(language));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function shortReadings(language) {
  return readingCollections[language].map(reading => ({
    title: reading.title,
    topic: reading.level,
    tiles: language === 'zh' ? Array.from(reading.text).map(h => ({ h })) : reading.text.split(/(\s+)/).filter(Boolean).map(h => ({ h })),
    czech: reading.translation,
    pronunciation: reading.pinyin,
    note: reading.note,
    sourceName: '',
    sourceUrl: ''
  }));
}

function firstHanzi(value) {
  return Array.from(value || '').find(character => /[\u3400-\u9fff]/u.test(character));
}

export default function ReadingRoom({ language, embedded = false, onLookup }) {
  const sourceKey = language === 'zh' ? 'chinese_course_sentence_source' : 'korean_course_sentence_source';
  const pinKey = language === 'zh' ? 'chinese_course_reader_pin' : 'korean_course_reader_pin';
  const fontKey = language === 'zh' ? 'chinese_course_font_style' : 'korean_course_font_style';
  const hiddenKey = 'chinese_course_sentence_strip';
  const options = sources[language];
  const collections = useMemo(() => ({ ...sentenceCollections[language], short: shortReadings(language) }), [language]);
  const [source, setSource] = useState('course');
  const [index, setIndex] = useState(0);
  const [pinned, setPinned] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [fontStyle, setFontStyle] = useState('standard');
  const [showPronunciation, setShowPronunciation] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);

  useEffect(() => {
    const saved = readStored(sourceKey, 'course');
    if (options.some(([id]) => id === saved)) setSource(saved);
    setPinned(readStored(pinKey, 'pinned') !== 'free');
    if (embedded && language === 'zh') setHidden(readStored(hiddenKey, 'visible') === 'hidden');
    setFontStyle(readStored(fontKey, 'standard'));
  }, [embedded, fontKey, hiddenKey, language, options, pinKey, sourceKey]);

  useEffect(() => {
    function onFontChange(e) {
      const next = e.detail?.fontStyle;
      if (next && (!e.detail.language || e.detail.language === language)) {
        setFontStyle(prev => (prev === next ? prev : next));
      }
    }
    window.addEventListener('hcode-font-change', onFontChange);
    return () => window.removeEventListener('hcode-font-change', onFontChange);
  }, [language]);

  const items = collections[source] || collections.course;
  const activeIndex = Math.min(index, items.length - 1);
  const reading = items[activeIndex];
  const fullText = reading.tiles.map(tile => tile.h).join(language === 'ko' && source !== 'short' ? ' ' : '');
  const onlineHref = reading.sourceUrl || (language === 'zh'
    ? `https://translate.google.com/?sl=zh-CN&tl=cs&text=${encodeURIComponent(fullText)}&op=translate`
    : 'https://korean.dict.naver.com/');
  const onlineLabel = reading.sourceName || (language === 'zh' ? 'Online překlad' : 'Naver slovník');
  const move = useCallback(delta => setIndex(current => (current + delta + items.length) % items.length), [items.length]);
  const play = useCallback(() => speakText(fullText, language), [fullText, language]);

  useEffect(() => {
    function onKeyDown(event) {
      if (!event.altKey || /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || '')) return;
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      if (event.key.toLowerCase() === 's') { event.preventDefault(); play(); }
      if (embedded && language === 'zh' && event.key.toLowerCase() === 'v') {
        event.preventDefault();
        setHidden(value => { store(hiddenKey, value ? 'visible' : 'hidden'); return !value; });
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [embedded, hiddenKey, language, move, play]);

  function selectSource(id) {
    setSource(id);
    setIndex(0);
    store(sourceKey, id);
  }

  function lookup(value) {
    const character = firstHanzi(value);
    if (!character) return;
    if (onLookup) onLookup(character);
    else window.location.href = `../study/?character=${encodeURIComponent(character)}`;
  }

  function toggleFont() {
    const targetFont = language === 'zh' ? 'kaiti' : 'batang';
    const next = fontStyle === targetFont ? 'standard' : targetFont;
    setFontStyle(next);
    store(fontKey, next);
    if (typeof window !== 'undefined') {
      if (language === 'zh') {
        document.body.classList.toggle('font-kaiti', next === 'kaiti');
      } else {
        document.body.classList.toggle('font-batang', next === 'batang');
      }
      window.setTimeout(() => {
        window.dispatchEvent(new CustomEvent('hcode-font-change', {
          detail: { language, fontStyle: next }
        }));
      }, 0);
    }
  }

  if (embedded && hidden) {
    return <button type="button" className="reader-restore" onClick={() => { setHidden(false); store(hiddenKey, 'visible'); }}>Zobrazit čtečku</button>;
  }

  return <section className={`sentence-reader surface${pinned ? ' is-pinned' : ''}${embedded ? ' sentence-reader--embedded' : ''} reader-font--${fontStyle}`} aria-label="Čtečka vět">
    <div className="reader-topline">
      <div className="reader-source-tabs" role="tablist" aria-label="Zdroj vět">
        {options.map(([id, label]) => <button type="button" role="tab" aria-selected={source === id}
          className={source === id ? 'is-active' : ''} key={id} onClick={() => selectSource(id)}>{label}</button>)}
      </div>
      <div className="reader-top-actions">
        <span className="reader-progress" aria-live="polite">{activeIndex + 1} / {items.length}</span>
        {language === 'zh' && !embedded && (
          <a
            href="#calligraphy"
            className="reader-calligraphy-link"
            title="Přejít na starověkou kaligrafii s živým štětcem hned pod čítankou"
          >
            🖌️ Kaligrafie ↓
          </a>
        )}
        <button type="button" aria-pressed={pinned} onClick={() => setPinned(value => { store(pinKey, value ? 'free' : 'pinned'); return !value; })}>{pinned ? 'Připnuto' : 'Připnout'}</button>
        {embedded && language === 'zh' && <button type="button" onClick={() => { setHidden(true); store(hiddenKey, 'hidden'); }}>Skrýt</button>}
      </div>
    </div>
    <div className="reader-main">
      <button type="button" className="reader-arrow" onClick={() => move(-1)} aria-label="Předchozí věta">‹</button>
      <div className="reader-sentence">
        <div className="reader-source-line"><span>{reading.title || reading.topic || 'Výukový kurz'}</span>
          <a href={onlineHref} target="_blank" rel="noopener noreferrer">{onlineLabel} ↗</a>
        </div>
        <div className="reader-tiles" lang={language === 'zh' ? 'zh-Hans' : 'ko'}>
          {reading.tiles.map((tile, tileIndex) => {
            const punctuation = !/[\p{L}\p{N}]/u.test(tile.h);
            return punctuation
              ? <span className="reader-tile reader-tile--punct" key={tileIndex}>{tile.h}</span>
              : <button type="button" className="reader-tile" key={tileIndex}
                  onClick={() => language === 'zh' ? lookup(tile.h) : speakText(tile.h, language)}
                  title={language === 'zh' ? 'Vyhledat přesný znak' : 'Přehrát slovo'}>
                  <span className="reader-tile-text">{tile.h}</span>
                  {showPronunciation && (tile.p || tile.r) && <span className="reader-tile-sound">{tile.p || tile.r}</span>}
                  {showTranslation && tile.c && <span className="reader-tile-gloss">{tile.c}</span>}
                </button>;
          })}
        </div>
        {showPronunciation && reading.pronunciation && <p className="reader-full-pronunciation">{reading.pronunciation}</p>}
        {showTranslation && <p className="reader-translation">{reading.czech}</p>}
        {reading.note && <p className="reader-note">{reading.note}</p>}
      </div>
      <button type="button" className="reader-arrow" onClick={() => move(1)} aria-label="Další věta">›</button>
    </div>
    <div className="reader-bottomline">
      <div className="reader-options">
        <label><input type="checkbox" checked={showPronunciation} onChange={event => setShowPronunciation(event.target.checked)} /> Výslovnost</label>
        <label><input type="checkbox" checked={showTranslation} onChange={event => setShowTranslation(event.target.checked)} /> Překlad</label>
        <button
          type="button"
          className={`reader-font-btn${(language === 'zh' ? fontStyle === 'kaiti' : fontStyle === 'batang') ? ' is-active' : ''}`}
          onClick={toggleFont}
          title={language === 'zh' ? 'Přepnout mezi kaligrafickým písmem KaiTi a běžným písmem' : 'Přepnout mezi patkovým písmem Batang a Gothic'}
        >
          🔤 {language === 'zh'
            ? (fontStyle === 'kaiti' ? 'Písmo: KaiTi' : 'Písmo: Běžné')
            : (fontStyle === 'batang' ? 'Písmo: Batang' : 'Písmo: Běžné')}
        </button>
      </div>
      <button type="button" onClick={play}>Přehrát celou větu</button>
    </div>
    {!embedded && <nav className="reader-index-list" aria-label="Vybrat text">
      {items.map((item, itemIndex) => <button type="button" key={itemIndex} className={activeIndex === itemIndex ? 'is-active' : ''}
        aria-current={activeIndex === itemIndex ? 'true' : undefined} onClick={() => setIndex(itemIndex)}>
        <span>{String(itemIndex + 1).padStart(2, '0')}</span> {item.title || item.topic || item.sourceName || `Text ${itemIndex + 1}`}
      </button>)}
    </nav>}
  </section>;
}
