'use client';

import { useCallback, useEffect, useState } from 'react';
import LessonStepper from './lesson-stepper';
import StudyRoom from './study-room';
import { createCourseSections } from '../data/course-sections';
import { getExportedDataUrl } from '../data/exported-data-url';

export default function StudyExperience({ language, initialSections = null }) {
  const key = `hcode-${language}-last-lesson`;
  const initial = language === 'zh' ? 'l1' : 'all';
  const [current, setCurrent] = useState(initial);
  const [sections, setSections] = useState(initialSections || []);
  const [loading, setLoading] = useState(!initialSections);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (initialSections) {
      setSections(initialSections);
      setLoading(false);
      setLoadError(false);
      return;
    }
    let active = true;
    setLoading(true);
    setLoadError(false);
    const files = language === 'zh'
      ? ['chinese-basics.json', 'chinese-course-cards.json', 'sentence-collections.json']
      : ['korean-study.json', 'sentence-collections.json'];
    Promise.all(files.map(filename => {
      const url = getExportedDataUrl(filename);
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 15000);
      return fetch(url, { signal: controller.signal }).then(response => {
        if (!response.ok) throw new Error(`Unable to load ${response.url} (HTTP ${response.status})`);
        if (response.headers.get('content-type')?.includes('text/html')) {
          throw new Error(`Expected JSON at ${response.url}, but the server returned HTML.`);
        }
        return response.json();
      }).catch(error => {
        if (error.name === 'AbortError') throw new Error(`Timed out loading ${url.pathname} after 15 seconds.`);
        throw error;
      }).finally(() => window.clearTimeout(timeout));
    })).then(data => {
      if (!active) return;
      const payload = language === 'zh'
        ? { chineseBasics: data[0], chineseCards: data[1], sentences: data[2] }
        : { korean: data[0], sentences: data[1] };
      const next = createCourseSections(language, payload);
      setSections(next);
      setLoading(false);
    }).catch(error => {
      if (!active) return;
      console.error(`[HCODE ${language}] Study data failed to load:`, error);
      setLoadError(error.message || 'Unknown data loading error');
      setLoading(false);
    });
    return () => { active = false; };
  }, [initialSections, language]);

  useEffect(() => {
    if (loading || !sections.length) return;
    try {
      if (language === 'zh' && new URLSearchParams(window.location.search).has('character')) {
        setCurrent('all');
        return;
      }
      const saved = localStorage.getItem(key);
      const valid = ['all', ...sections.map(section => section.id)];
      if (valid.includes(saved)) setCurrent(saved);
      else if (language === 'zh') {
        const lastCard = localStorage.getItem('chinese_course_last_card') || '';
        const match = /^card-(basic|num|rad|l[1-4])-/.exec(lastCard);
        const mapped = { basic: 'basic', num: 'numbers', rad: 'radicals' };
        if (match) setCurrent(mapped[match[1]] || match[1]);
      }
    } catch {}
  }, [key, language, loading, sections]);

  const selectLesson = useCallback(id => {
    setCurrent(id);
    try { localStorage.setItem(key, id); } catch {}
  }, [key]);

  const [learnedWords, setLearnedWords] = useState(() => new Set());

  useEffect(() => {
    if (language !== 'ko' || typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem('korean_learned_words');
      if (stored) setLearnedWords(new Set(JSON.parse(stored)));
    } catch {}
  }, [language]);

  const toggleLearned = useCallback(id => {
    setLearnedWords(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem('korean_learned_words', JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  }, []);

  const vocabSection = sections.find(s => s.id === 'vocabulary');
  const totalVocab = vocabSection ? vocabSection.items.length : 162;

  return <>
    <LessonStepper language={language} current={current} onSelect={selectLesson} sections={sections} learnedCount={learnedWords.size} totalVocab={totalVocab} />
    <StudyRoom language={language} activeLesson={current} onSelectLesson={selectLesson} sections={sections} loading={loading} loadError={loadError} learnedWords={learnedWords} onToggleLearned={toggleLearned} totalVocab={totalVocab} />
  </>;
}
