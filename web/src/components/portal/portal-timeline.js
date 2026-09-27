'use client';

import { useEffect, useState } from 'react';

const sections = ['hero', 'calligraphy', 'architecture', 'evolution', 'apps', 'terminal'];

export default function PortalTimeline() {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const sectionEls = sections.map(id => document.getElementById(id)).filter(Boolean);
    if (!sectionEls.length) return;

    function updateTimeline() {
      const marker = window.innerHeight * 0.38;
      let active = sectionEls[0];
      for (const section of sectionEls) {
        if (section.getBoundingClientRect().top <= marker) {
          active = section;
        }
      }
      if (active && active.id) {
        setActiveId(active.id);
      }
    }

    window.addEventListener('scroll', updateTimeline, { passive: true });
    window.addEventListener('resize', updateTimeline);
    updateTimeline();

    return () => {
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
    };
  }, []);

  return (
    <nav className="portal-timeline" aria-label="Page sections">
      {sections.map((id, index) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={`Go to section ${index + 1}`}
          aria-current={activeId === id ? 'step' : undefined}
          data-timeline-link={id}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          <i />
        </a>
      ))}
    </nav>
  );
}
