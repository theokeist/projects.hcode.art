'use client';

import { useEffect, useState } from 'react';

export default function LessonStepper({ language, current, onSelect, sections = [], learnedCount = null, totalVocab = null }) {
  const storagePrefix = language === 'zh' ? 'chinese' : 'korean';
  const [dock, setDock] = useState('right');
  const [collapsed, setCollapsed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    try {
      setDock(localStorage.getItem(`${storagePrefix}_course_stepper_dock`) === 'left' ? 'left' : 'right');
      setCollapsed(localStorage.getItem(`${storagePrefix}_course_stepper_collapsed`) === '1');
      setExpanded(localStorage.getItem(`${storagePrefix}_course_stepper_width`) === 'expanded');
    } catch {}
  }, [storagePrefix]);

  const entries = [{ id: 'all', title: 'Všechny lekce', items: sections.flatMap(section => section.items) }, ...sections];
  const index = Math.max(0, entries.findIndex(entry => entry.id === current));
  const navigate = direction => onSelect(entries[(index + direction + entries.length) % entries.length].id);

  return <nav className={`lesson-stepper surface lesson-stepper--${language} dock-${dock}${collapsed ? ' collapsed' : ''}${expanded ? ' expanded' : ''}`} aria-label="Navigace lekcí">
    <button type="button" className="lesson-stepper-arrow" onClick={() => navigate(-1)} aria-label="Předchozí lekce">‹</button>
    <div className="lesson-stepper-current">
      <span className="lesson-stepper-caption">{language === 'zh' ? 'Čínština' : 'Korejština'} · studijní cesta</span>
      <strong>{entries[index].title}</strong>
      <span className="lesson-stepper-count">{index + 1} / {entries.length} · {entries[index].items.length} karet</span>
      {language === 'ko' && totalVocab !== null && (
        <span className="lesson-stepper-learned-badge" title="Počet naučených nových slov">
          ✓ Naučeno: <strong>{learnedCount ?? 0}</strong> / {totalVocab} slov
        </span>
      )}
    </div>
    <div className="lesson-stepper-dots">
      {entries.map(entry => <button key={entry.id} type="button" aria-label={`Otevřít ${entry.title}`}
        aria-current={entry.id === current ? 'step' : undefined} className={entry.id === current ? 'is-current' : ''}
        onClick={() => onSelect(entry.id)}>
        <span className="lesson-stepper-dot-title">{entry.title}</span>
        <span className="lesson-stepper-dot-count">{entry.items.length}</span>
      </button>)}
    </div>
    <button type="button" className="lesson-stepper-arrow" onClick={() => navigate(1)} aria-label="Další lekce">›</button>
    <div className="lesson-stepper-utilities">
      <button type="button" onClick={() => setDock(value => {
        const next = value === 'left' ? 'right' : 'left';
        try { localStorage.setItem(`${storagePrefix}_course_stepper_dock`, next); } catch {}
        return next;
      })}>{dock === 'left' ? 'Vpravo' : 'Vlevo'}</button>
      <button type="button" aria-expanded={!collapsed} onClick={() => setCollapsed(value => {
        try { localStorage.setItem(`${storagePrefix}_course_stepper_collapsed`, value ? '0' : '1'); } catch {}
        return !value;
      })}>{collapsed ? 'Rozbalit' : 'Sbalit'}</button>
      <button type="button" onClick={() => setExpanded(value => {
        try { localStorage.setItem(`${storagePrefix}_course_stepper_width`, value ? 'standard' : 'expanded'); } catch {}
        return !value;
      })}>{expanded ? 'Zúžit' : 'Rozšířit'}</button>
    </div>
  </nav>;
}
