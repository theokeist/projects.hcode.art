'use client';

import { useEffect } from 'react';
import PortalNav from './portal/portal-nav';
import PortalTimeline from './portal/portal-timeline';
import HeroSection from './portal/hero-section';
import CalligraphySection from './portal/calligraphy-section';
import ArchitectureSection from './portal/architecture-section';
import EvolutionSection from './portal/evolution-section';
import AppsSection from './portal/apps-section';
import TerminalSection from './portal/terminal-section';
import PortalFooter from './portal/portal-footer';
import PortalBackground from './portal/portal-background';

export default function PortalHome() {
  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*—+=';
    const glitchElements = document.querySelectorAll('.glitch-hover');
    const cleanups = [];

    glitchElements.forEach(el => {
      let glitchInterval = null;

      const getLeafSpans = () =>
        Array.from(el.querySelectorAll('span')).filter(
          s => s.children.length === 0 && s.textContent.trim().length > 0
        );

      const onMouseEnter = () => {
        const leafSpans = getLeafSpans();
        if (leafSpans.length > 0) {
          leafSpans.forEach(target => {
            const original = target.dataset.value || target.textContent;
            if (!target.dataset.value) target.dataset.value = original;
            let iter = 0;
            clearInterval(target._glitchInterval);
            target._glitchInterval = setInterval(() => {
              target.textContent = original
                .split('')
                .map((char, idx) => {
                  if (char === ' ' || char === '.' || char === ':') return char;
                  if (idx < iter) return original[idx];
                  return letters[Math.floor(Math.random() * letters.length)];
                })
                .join('');
              if (iter >= original.length) {
                clearInterval(target._glitchInterval);
                target.textContent = original;
              }
              iter += 1;
            }, 26);
          });
          return;
        }

        // Single text leaf or simple element without child tags
        if (el.children.length === 0 || el.dataset.value) {
          const original = el.dataset.value || el.textContent;
          if (!el.dataset.value) el.dataset.value = original;
          let iter = 0;
          clearInterval(glitchInterval);
          glitchInterval = setInterval(() => {
            el.textContent = original
              .split('')
              .map((char, idx) => {
                if (char === ' ' || char === '.' || char === ':') return char;
                if (idx < iter) return original[idx];
                return letters[Math.floor(Math.random() * letters.length)];
              })
              .join('');
            if (iter >= original.length) {
              clearInterval(glitchInterval);
              el.textContent = original;
            }
            iter += 1;
          }, 24);
        }
      };

      const onMouseLeave = () => {
        const leafSpans = getLeafSpans();
        if (leafSpans.length > 0) {
          leafSpans.forEach(target => {
            clearInterval(target._glitchInterval);
            if (target.dataset.value) target.textContent = target.dataset.value;
          });
          return;
        }
        clearInterval(glitchInterval);
        if (el.dataset.value) el.textContent = el.dataset.value;
      };

      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
      cleanups.push(() => {
        clearInterval(glitchInterval);
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    });

    // Activate blurred background on section scroll
    const sectionEls = Array.from(document.querySelectorAll('.portal-hero, .portal-section, .portal-footer'));

    let ticking = false;
    function updateScrollSections() {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const marker = viewportHeight * 0.38;
      const hasScrolled = scrollY > 40;

      let activeSection = null;

      if (hasScrolled) {
        // Check if scrolled near the bottom of the page
        const isNearBottom = (window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 70);
        if (isNearBottom) {
          activeSection = sectionEls[sectionEls.length - 1]; // footer
        } else {
          for (const sec of sectionEls) {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= marker && rect.bottom >= marker) {
              activeSection = sec;
              break;
            }
          }
        }
      }

      sectionEls.forEach(sec => {
        const isActive = Boolean(activeSection && sec === activeSection);
        if (isActive) {
          if (!sec.classList.contains('is-scrolled-active')) {
            sec.classList.add('is-scrolled-active');
            sec.setAttribute('data-scrolled-active', 'true');
          }
        } else {
          if (sec.classList.contains('is-scrolled-active')) {
            sec.classList.remove('is-scrolled-active');
            sec.removeAttribute('data-scrolled-active');
          }
        }
      });

      ticking = false;
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollSections);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScrollSections();

    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    });

    return () => {
      cleanups.forEach(fn => fn());
    };
  }, []);

  return (
    <div className="portal-site" data-theme="cyber" data-legacy-scope="portal">
      <PortalBackground />
      <PortalNav />
      <PortalTimeline />
      <main className="portal-main">
        <HeroSection />
        <CalligraphySection />
        <ArchitectureSection />
        <EvolutionSection />
        <AppsSection />
        <TerminalSection />
      </main>
      <PortalFooter />
    </div>
  );
}
