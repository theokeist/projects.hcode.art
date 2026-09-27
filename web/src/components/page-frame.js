'use client';

import { useEffect, useState } from 'react';
import { PageHeader } from './ui';
import StudyExperience from './study-experience';
import ReadingRoom from './reading-room';
import ChineseCalligraphySection from './chinese-calligraphy-section';
import { createCourseSections } from '../data/course-sections';
import chineseBasics from '../data/chinese-basics.json';
import chineseCards from '../data/chinese-course-cards.json';
import korean from '../data/korean-study.json';
import sentences from '../data/sentence-collections.json';

export default function PageFrame({ language, current, title, description }) {
  const fontKey = language === 'zh' ? 'chinese_course_font_style' : 'korean_course_font_style';
  const [fontStyle, setFontStyle] = useState('standard');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(fontKey) || 'standard';
      setFontStyle(saved);
      if (language === 'zh') {
        document.body.classList.toggle('font-kaiti', saved === 'kaiti');
      } else if (language === 'ko') {
        document.body.classList.toggle('font-batang', saved === 'batang');
      }
    } catch {}

    const onFontChange = (e) => {
      const next = e.detail?.fontStyle;
      if (next && (!e.detail.language || e.detail.language === language)) {
        setFontStyle(prev => (prev === next ? prev : next));
        if (typeof document !== 'undefined') {
          if (language === 'zh') {
            document.body.classList.toggle('font-kaiti', next === 'kaiti');
          } else if (language === 'ko') {
            document.body.classList.toggle('font-batang', next === 'batang');
          }
        }
      }
    };

    window.addEventListener('hcode-font-change', onFontChange);
    return () => {
      window.removeEventListener('hcode-font-change', onFontChange);
      document.body.classList.remove('font-kaiti', 'font-batang');
    };
  }, [fontKey, language]);

  const initialSections = current === 'study'
    ? language === 'zh'
      ? createCourseSections('zh', { chineseBasics, chineseCards, sentences })
      : createCourseSections('ko', { korean, sentences })
    : null;

  return (
    <div
      className={`course-page font-${fontStyle}`}
      data-theme="cyber"
      data-legacy-scope={language}
      data-font-style={fontStyle}
    >
      <PageHeader language={language} current={current} title={title} description={description} />
      {current === 'read' ? (
        <>
          <ReadingRoom language={language} />
          {language === 'zh' && <ChineseCalligraphySection />}
        </>
      ) : (
        <StudyExperience language={language} initialSections={initialSections} />
      )}
    </div>
  );
}
