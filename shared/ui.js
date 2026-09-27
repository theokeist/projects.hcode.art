/* Shared, dependency-free UI primitives for the Chinese and Korean courses. */
(function (global) {
  'use strict';

  const TAB_SETS = {
    zh: [
      { id: 'course', label: '📚 Course' },
      { id: 'basics', label: '🌱 Beginner' },
      { id: 'news', label: '📰 News' },
      { id: 'culture', label: '🏛 Culture' },
      { id: 'chengyu', label: '📖 Classical' }
    ],
    ko: [
      { id: 'course', label: '📚 Course' },
      { id: 'news', label: '📰 News' },
      { id: 'culture', label: '🎎 Culture' },
      { id: 'sokdam', label: '📜 Proverbs' }
    ]
  };

  function createText(tag, text, className) {
    const element = document.createElement(tag || 'span');
    if (className) element.className = className;
    element.textContent = text == null ? '' : String(text);
    return element;
  }

  function createButton({ text, className, type, label, onClick } = {}) {
    const button = document.createElement('button');
    button.type = type || 'button';
    if (className) button.className = className;
    if (label) button.setAttribute('aria-label', label);
    button.textContent = text == null ? '' : String(text);
    if (onClick) button.addEventListener('click', onClick);
    return button;
  }

  function createSurface({ as, className, label } = {}) {
    const surface = document.createElement(as || 'section');
    surface.className = ['hcode-surface', className || ''].filter(Boolean).join(' ');
    if (label) surface.setAttribute('aria-label', label);
    return surface;
  }

  function mountTabs(root, { items, active, label, onSelect, variant } = {}) {
    if (!root) return null;
    const tabs = items || TAB_SETS[root.dataset.uiLocale] || [];
    const selected = active || tabs[0]?.id;
    root.classList.add('hcode-tabs');
    if (variant) root.classList.add(`hcode-tabs--${variant}`);
    root.setAttribute('role', 'tablist');
    if (label) root.setAttribute('aria-label', label);
    root.replaceChildren();

    tabs.forEach(item => {
      const button = createButton({ text: item.label, className: 'source-tab' });
      button.dataset.source = item.id;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', String(item.id === selected));
      button.classList.toggle('active', item.id === selected);
      button.addEventListener('click', () => {
        root.querySelectorAll('[role="tab"]').forEach(tab => {
          const isActive = tab === button;
          tab.classList.toggle('active', isActive);
          tab.setAttribute('aria-selected', String(isActive));
        });
        if (onSelect) onSelect(item.id, button);
        else if (typeof global.switchSentenceSource === 'function') global.switchSentenceSource(item.id, button);
      });
      root.appendChild(button);
    });
    return root;
  }

  function mountReaderTabs() {
    document.querySelectorAll('[data-ui-component="reader-tabs"]').forEach(root => {
      const locale = root.dataset.uiLocale;
      const storageKey = locale === 'ko' ? 'korean_course_sentence_source' : 'chinese_course_sentence_source';
      let saved = '';
      try { saved = localStorage.getItem(storageKey) || ''; } catch (error) {}
      const validIds = (TAB_SETS[locale] || []).map(tab => tab.id);
      mountTabs(root, {
        active: validIds.includes(saved) ? saved : 'course',
        label: locale === 'ko' ? 'Korean reading collections' : 'Chinese reading collections'
      });
    });
  }

  global.HcodeUI = Object.freeze({ createText, createButton, createSurface, mountTabs, mountReaderTabs });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountReaderTabs);
  } else {
    mountReaderTabs();
  }
})(window);
