'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { matchesStudyCard, normalizeSearch } from '../data/course-sections';
import { getExportedDataUrl } from '../data/exported-data-url';
import ReadingRoom from './reading-room';
import StudyCard from './study-card';

function readStored(key, fallback) {
  try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
}

function store(key, value) {
  try { localStorage.setItem(key, value); } catch {}
}

function matchesCard(card, query, language, pinyinLookup) {
  if (matchesStudyCard(card, query)) return true;
  if (language !== 'zh' || query.length < 2) return false;
  return Array.from(card.term || '').some(character =>
    (pinyinLookup?.[character] || []).some(reading => normalizeSearch(reading).includes(query)));
}

export default function StudyRoom({
  language,
  activeLesson,
  onSelectLesson,
  sections = [],
  loading = false,
  loadError = false,
  learnedWords = null,
  onToggleLearned = null,
  totalVocab = null
}) {
  const isChinese = language === 'zh';
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [collapsed, setCollapsed] = useState({});
  const [showSound, setShowSound] = useState(true);
  const [showMeaning, setShowMeaning] = useState(true);
  const [pinyinLookup, setPinyinLookup] = useState(null);
  const [layout, setLayout] = useState('vertical');
  const [fontStyle, setFontStyle] = useState('standard');
  const [topbarHidden, setTopbarHidden] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [renderLimit, setRenderLimit] = useState(40);
  const [pendingJump, setPendingJump] = useState('');
  const loadMoreRef = useRef(null);
  const previousLesson = useRef(activeLesson);
  const restoredCard = useRef(false);
  const savedCardId = useRef(null);
  const isJumpingRef = useRef(false);
  const jumpTimeoutRef = useRef(null);

  useEffect(() => {
    if (isChinese) {
      setLayout(readStored('chinese_course_layout_mode', 'vertical'));
      setFontStyle(readStored('chinese_course_font_style', 'standard'));
      setTopbarHidden(readStored('chinese_course_topbar', 'visible') === 'hidden');
    } else {
      setFontStyle(readStored('korean_course_font_style', 'standard'));
    }
    const character = new URLSearchParams(window.location.search).get('character');
    if (character && isChinese) {
      setQuery(Array.from(character).find(value => /[\u3400-\u9fff]/u.test(value)) || '');
      onSelectLesson('all');
    }
  }, [isChinese, onSelectLesson]);

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

  useEffect(() => {
    const root = document.querySelector(`[data-legacy-scope="${language}"]`);
    root?.classList.toggle('course-topbar-hidden', topbarHidden);
    return () => root?.classList.remove('course-topbar-hidden');
  }, [language, topbarHidden]);

  useEffect(() => {
    if (previousLesson.current === activeLesson) return;
    previousLesson.current = activeLesson;
    setActiveCard(0);
    setQuery('');
    setCollapsed({});
    const frame = requestAnimationFrame(() => document.querySelector('.course-section:not([hidden])')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    return () => cancelAnimationFrame(frame);
  }, [activeLesson]);

  const normalized = normalizeSearch(query);
  useEffect(() => {
    if (!isChinese || !normalized || pinyinLookup) return;
    let active = true;
    const source = getExportedDataUrl('pinyin-lookup.json');
    fetch(source).then(response => {
      if (!response.ok) throw new Error('Pinyin lookup is unavailable');
      return response.json();
    }).then(data => {
      if (active) setPinyinLookup(data);
    }).catch(() => {
      if (active) setPinyinLookup({});
    });
    return () => { active = false; };
  }, [isChinese, normalized, pinyinLookup]);
  const visibleSections = useMemo(() => sections
    .filter(section => activeLesson === 'all' || activeLesson === section.id)
    .map(section => ({ ...section, filtered: section.items.filter(card => matchesCard(card, normalized, language, pinyinLookup)) }))
    .filter(section => section.filtered.length > 0), [activeLesson, language, normalized, pinyinLookup, sections]);
  const visibleCards = useMemo(() => visibleSections
    .filter(section => !collapsed[section.id])
    .flatMap(section => section.filtered.filter(card => !collapsed[`${section.id}-${card.group}`])),
    [collapsed, visibleSections]);
  const renderedCards = useMemo(() => visibleCards.slice(0, renderLimit), [renderLimit, visibleCards]);
  const renderedIds = useMemo(() => new Set(renderedCards.map(card => card.id)), [renderedCards]);
  useEffect(() => setRenderLimit(40), [activeLesson, normalized]);
  useEffect(() => {
    if (!pendingJump || !renderedIds.has(pendingJump)) return;
    document.getElementById(`study-card-${pendingJump}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setPendingJump('');
  }, [pendingJump, renderedIds]);
  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target || renderedCards.length >= visibleCards.length || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) setRenderLimit(limit => Math.min(limit + 40, visibleCards.length));
    }, { rootMargin: '800px' });
    observer.observe(target);
    return () => observer.disconnect();
  }, [renderedCards.length, visibleCards.length]);
  useEffect(() => setActiveCard(index => Math.min(index, Math.max(visibleCards.length - 1, 0))), [visibleCards.length]);
  const focusedCard = visibleCards[Math.min(activeCard, visibleCards.length - 1)];
  const exactCharacter = isChinese && Array.from(query.trim()).length === 1 ? pinyinLookup?.[query.trim()] : null;

  const jumpTo = useCallback(card => {
    if (!card) return;
    const index = visibleCards.findIndex(item => item.id === card.id);
    if (index < 0) return;
    isJumpingRef.current = true;
    if (jumpTimeoutRef.current) clearTimeout(jumpTimeoutRef.current);
    jumpTimeoutRef.current = setTimeout(() => {
      isJumpingRef.current = false;
    }, 800);
    setActiveCard(index);
    if (index >= renderLimit) {
      setPendingJump(card.id);
      setRenderLimit(Math.min(index + 1, visibleCards.length));
    } else {
      document.getElementById(`study-card-${card.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (isChinese) store('chinese_course_last_card', card.id);
  }, [isChinese, renderLimit, visibleCards]);

  useEffect(() => {
    return () => {
      if (jumpTimeoutRef.current) clearTimeout(jumpTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isChinese || restoredCard.current || query || !visibleCards.length) return;
    if (savedCardId.current === null) savedCardId.current = readStored('chinese_course_last_card', '');
    const saved = savedCardId.current;
    const index = visibleCards.findIndex(card => card.id === saved);
    if (index < 0) return;
    restoredCard.current = true;
    setActiveCard(index);
    if (index >= renderLimit) {
      setPendingJump(saved);
      setRenderLimit(index + 1);
    } else {
      const frame = requestAnimationFrame(() => document.getElementById(`study-card-${saved}`)?.scrollIntoView({ block: 'center' }));
      return () => cancelAnimationFrame(frame);
    }
  }, [isChinese, query, renderLimit, visibleCards]);

  useEffect(() => {
    const nodes = document.querySelectorAll('.course-study-card');
    if (!nodes.length || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(entries => {
      if (isJumpingRef.current) return;
      const first = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!first) return;
      const index = visibleCards.findIndex(card => `study-card-${card.id}` === first.target.id);
      if (index >= 0) {
        setActiveCard(index);
        if (isChinese && (restoredCard.current || !savedCardId.current)) store('chinese_course_last_card', visibleCards[index].id);
      }
    }, { rootMargin: '-18% 0px -62% 0px' });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [isChinese, visibleCards]);

  function selectLesson(id) {
    onSelectLesson(id);
    setQuery('');
    setCollapsed({});
  }

  function lookupCharacter(value) {
    const character = Array.from(value || '').find(item => /[\u3400-\u9fff]/u.test(item));
    if (!character) return;
    setQuery(character);
    onSelectLesson('all');
    setCollapsed({});
    requestAnimationFrame(() => searchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  function toggleLayout() {
    setLayout(value => {
      const next = value === 'horizontal' ? 'vertical' : 'horizontal';
      if (isChinese) store('chinese_course_layout_mode', next);
      return next;
    });
  }

  function toggleFont() {
    const targetFont = isChinese ? 'kaiti' : 'batang';
    const next = fontStyle === targetFont ? 'standard' : targetFont;
    setFontStyle(next);
    store(isChinese ? 'chinese_course_font_style' : 'korean_course_font_style', next);
    if (typeof window !== 'undefined') {
      if (isChinese) {
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

  function toggleTopbar() {
    setTopbarHidden(value => {
      if (isChinese) store('chinese_course_topbar', value ? 'visible' : 'hidden');
      return !value;
    });
  }

  useEffect(() => {
    function onKeyDown(event) {
      const target = document.activeElement;
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(target?.tagName || '') || target?.isContentEditable;
      if (event.key === 'Escape' && target === searchRef.current) {
        if (query) setQuery('');
        else searchRef.current.blur();
        return;
      }
      if (typing) return;
      if (event.key === '/' || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k')) {
        event.preventDefault(); searchRef.current?.focus(); searchRef.current?.select();
      }
      if (!event.altKey && event.key.toLowerCase() === 'h') { event.preventDefault(); toggleTopbar(); }
      if (event.altKey && event.key.toLowerCase() === 't') {
        event.preventDefault(); window.dispatchEvent(new CustomEvent('course-theme-toggle-bw', { detail: language }));
      }
      if (event.altKey && event.key.toLowerCase() === 'm') {
        event.preventDefault(); window.dispatchEvent(new CustomEvent('course-theme-next', { detail: language }));
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [language, query]);

  return <main className={`migrated-study migrated-study--${language} migrated-study--${layout} migrated-study--${fontStyle}`}>
    {topbarHidden && <button type="button" className="course-topbar-restore" onClick={toggleTopbar}>Zobrazit horní lištu</button>}
    <section className="migrated-toolbar surface" aria-label="Ovládání studia">
      <div className="migrated-search">
        <label htmlFor={`course-search-${language}`}>Hledat {isChinese ? 'znak, pinyin nebo význam' : 'Hangul, přepis nebo význam'}</label>
        <div><input id={`course-search-${language}`} value={query} onChange={event => { setQuery(event.target.value); if (event.target.value) onSelectLesson('all'); }}
          placeholder={isChinese ? 'Zadejte znak nebo pinyin' : 'Zadejte slovo nebo význam'} ref={searchRef} />
          {query && <button type="button" onClick={() => { setQuery(''); searchRef.current?.focus(); }} aria-label="Vymazat hledání">×</button>}</div>
      </div>
      <div className="migrated-toolbar-actions">
        {!isChinese && totalVocab !== null && (
          <div className="migrated-learned-counter surface" title="Počet naučených nových slov">
            <span>✓ Naučených slov:</span>
            <strong>{learnedWords?.size || 0} / {totalVocab}</strong>
          </div>
        )}
        <label><input type="checkbox" checked={showSound} onChange={event => setShowSound(event.target.checked)} /> Výslovnost</label>
        <label><input type="checkbox" checked={showMeaning} onChange={event => setShowMeaning(event.target.checked)} /> Význam</label>
        <button type="button" onClick={toggleLayout}>{layout === 'vertical' ? 'Karty vodorovně' : 'Karty svisle'}</button>
        <button type="button" onClick={toggleFont}>
          {isChinese
            ? (fontStyle === 'kaiti' ? 'Běžné písmo' : 'Písmo KaiTi')
            : (fontStyle === 'batang' ? 'Běžné písmo' : 'Písmo Batang')}
        </button>
        <button type="button" onClick={toggleTopbar}>{topbarHidden ? 'Zobrazit lištu' : 'Skrýt lištu'}</button>
        <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('course-theme-toggle-bw', { detail: language }))}>Bílý / černý motiv</button>
        <button type="button" onClick={() => window.print()}>Tisk</button>
      </div>
      {exactCharacter && <div className="migrated-character-lookup" aria-live="polite">
        <strong lang="zh-Hans">{query.trim()}</strong><span>{exactCharacter.join(' / ')}</span>
      </div>}
      <div className="migrated-lesson-filters" aria-label="Lekce">
        <button type="button" className={activeLesson === 'all' ? 'is-active' : ''} onClick={() => selectLesson('all')}>Vše</button>
        {sections.map(section => <button type="button" key={section.id} className={activeLesson === section.id ? 'is-active' : ''} onClick={() => selectLesson(section.id)}>{section.title}</button>)}
      </div>
    </section>
    <ReadingRoom language={language} embedded onLookup={isChinese ? lookupCharacter : undefined} />
    {visibleCards.length > 0 && <nav className="migrated-card-nav surface" aria-label="Navigace kartami">
      <button type="button" onClick={() => jumpTo(visibleCards[Math.max(0, activeCard - 1)])} disabled={activeCard === 0}>‹ Předchozí</button>
      <span>{Math.min(activeCard + 1, visibleCards.length)} / {visibleCards.length} · {focusedCard?.term}</span>
      <button type="button" onClick={() => jumpTo(visibleCards[Math.min(visibleCards.length - 1, activeCard + 1)])} disabled={activeCard >= visibleCards.length - 1}>Další ›</button>
    </nav>}
    {loading ? <p className="course-no-results surface" role="status">Načítám studijní data…</p>
      : loadError ? <p className="course-no-results surface" role="alert">Studijní data se nepodařilo načíst: {loadError}</p>
      : visibleSections.length ? <div className="migrated-sections">
      {visibleSections.map(section => <section className="course-section" key={section.id} aria-labelledby={`heading-${section.id}`}>
        <header className="course-section-header"><h2 id={`heading-${section.id}`}>{section.title} <small>{section.filtered.length}</small></h2>
          <button type="button" aria-expanded={!collapsed[section.id]} onClick={() => setCollapsed(value => ({ ...value, [section.id]: !value[section.id] }))}>
            {collapsed[section.id] ? 'Rozbalit' : 'Sbalit'}</button>
        </header>
        {!collapsed[section.id] && <div className="course-card-list">{section.filtered.map((card, index) => {
          const showGroup = index === 0 || card.group !== section.filtered[index - 1].group;
          const groupKey = `${section.id}-${card.group}`;
          if (!renderedIds.has(card.id) && !(showGroup && collapsed[groupKey])) return null;
          return <div key={card.id} className="course-card-entry">
            {showGroup && section.filtered.some(item => item.group !== section.filtered[0].group) &&
              <div className="course-subgroup-heading"><h3>{card.group}</h3><button type="button" aria-expanded={!collapsed[groupKey]}
                onClick={() => setCollapsed(value => ({ ...value, [groupKey]: !value[groupKey] }))}>{collapsed[groupKey] ? 'Rozbalit' : 'Sbalit'}</button></div>}
            {!collapsed[groupKey] && renderedIds.has(card.id) && <StudyCard card={card} language={language} sectionId={section.id} number={index + 1}
              showSound={showSound} showMeaning={showMeaning} onLookup={lookupCharacter}
              isLearned={Boolean(learnedWords?.has(card.id))} onToggleLearned={onToggleLearned} />}
          </div>;
        })}</div>}
      </section>)}
    </div> : <p className="course-no-results surface">Nic nenalezeno. Zkuste jiný výraz nebo lekci.</p>}
    {visibleCards.length > renderedCards.length && <div className="course-load-more" ref={loadMoreRef}>
      <span>Zobrazeno {renderedCards.length} z {visibleCards.length} karet</span>
      <button type="button" onClick={() => setRenderLimit(limit => Math.min(limit + 40, visibleCards.length))}>Načíst dalších {Math.min(40, visibleCards.length - renderedCards.length)} karet</button>
    </div>}
  </main>;
}
