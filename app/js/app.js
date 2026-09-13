// ═══════════════════════════════════════════════════════
// MAIN APPLICATION CONTROLLER
// Filters, search, lesson tabs, dark theme, and typography
// ═══════════════════════════════════════════════════════

// Switch between lesson views ('all', 'num', 'rad', 'l1', 'l2', 'l3', 'l4')
function switchLesson(lessonId, btn) {
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.toggle('active', b === btn));
  document.querySelectorAll('.course-card').forEach(c => c.style.display = 'none');
  if (lessonId === 'all') {
    document.querySelectorAll('.course-card').forEach(c => c.style.display = '');
  } else {
    document.querySelectorAll(`.course-card[data-lesson="${lessonId}"]`).forEach(c => c.style.display = '');
  }
  const radBtn = document.getElementById('radToggleBtn');
  if (radBtn) {
    radBtn.classList.toggle('active-filter', lessonId === 'rad');
  }

  // Update lectures dropdown trigger & active state
  const lessonLabelsMap = {
    'all': { icon: '📚', label: 'Vše' },
    'num': { icon: '🔢', label: 'Čísla' },
    'rad': { icon: '🏮', label: 'Radikály' },
    'l1':  { icon: '📖', label: 'L1: 200 vět' },
    'l2':  { icon: '💬', label: 'L2: 100 frází' },
    'l3':  { icon: '🎯', label: 'L3: 400 slov' },
    'l4':  { icon: '⚡', label: 'L4: Příd. jména' }
  };
  const info = lessonLabelsMap[lessonId];
  if (info) {
    const iconEl = document.getElementById('curLectureIcon');
    const labelEl = document.getElementById('curLectureLabel');
    if (iconEl) iconEl.textContent = info.icon;
    if (labelEl) labelEl.textContent = info.label;
  }
  document.querySelectorAll('#lecturesDropdownMenu .dropdown-item').forEach(item => {
    const isMatch = item.getAttribute('onclick') && item.getAttribute('onclick').includes(`'${lessonId}'`);
    item.classList.toggle('active', !!isMatch);
  });
}

// Toggle or switch directly to the Radicals lesson (204 modern radicals)
window.toggleRadicalLesson = function(btn) {
  const radItem = document.querySelector('#lecturesDropdownMenu .dropdown-item[onclick*="\'rad\'"]');
  const isCurrentlyRad = radItem && radItem.classList.contains('active');
  
  if (isCurrentlyRad) {
    switchLesson('all');
  } else {
    switchLesson('rad');
  }
};

// Instant search across cards (Hanzi, Pinyin with/without tones, Czech, numbers)
function filterCards(query) {
  const rawQ = (query || '').toLowerCase().trim();
  if (!rawQ) {
    document.querySelectorAll('.course-card').forEach(card => {
      card.style.display = '';
    });
    return;
  }
  const normQ = rawQ.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  document.querySelectorAll('.course-card').forEach(card => {
    const rawTxt = card.textContent.toLowerCase();
    const dataTxt = (card.getAttribute('data-text') || '').toLowerCase();
    const matchesRaw = rawTxt.includes(rawQ) || dataTxt.includes(rawQ);
    if (matchesRaw) {
      card.style.display = '';
      return;
    }
    const normTxt = rawTxt.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    card.style.display = normTxt.includes(normQ) ? '' : 'none';
  });
}

function handleSearchInput(query) {
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) {
    clearBtn.style.display = query ? 'flex' : 'none';
  }
  const kbdHint = document.querySelector('.search-kbd-hint');
  if (kbdHint) {
    kbdHint.style.display = query ? 'none' : '';
  }
  filterCards(query);
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = '';
    handleSearchInput('');
    input.focus();
  }
}

// Global search keyboard shortcuts ('/' or Ctrl+K / Cmd+K to focus, Escape to blur/clear)
window.addEventListener('keydown', function(e) {
  const sInput = document.getElementById('searchInput');
  const isSearchFocused = (sInput && document.activeElement === sInput);

  if (e.key === 'Escape') {
    if (isSearchFocused) {
      if (sInput.value) {
        clearSearch();
      } else {
        sInput.blur();
        window.closeAllDropdowns();
      }
    } else {
      window.closeAllDropdowns();
    }
    return;
  }

  const activeTag = (document.activeElement && document.activeElement.tagName) || '';
  if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') {
    return;
  }

  if (e.key === '/' || ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K'))) {
    if (!sInput) return;
    e.preventDefault();
    window.closeAllDropdowns();
    sInput.focus();
    sInput.select();
  }
});

// Visibility toggles
function togglePinyin() {
  document.querySelectorAll('.pinyin-target').forEach(el => {
    el.style.visibility = el.style.visibility === 'hidden' ? '' : 'hidden';
  });
}

function toggleCzech() {
  document.querySelectorAll('.czech-target').forEach(el => {
    el.style.visibility = el.style.visibility === 'hidden' ? '' : 'hidden';
  });
}

// ═══════════════════════════════════════════════════════
// BAREVNÁ TÉMATA & MORPHING THEME CIRCLE CONTROLLER
// ═══════════════════════════════════════════════════════
(function() {
  const THEME_KEY = 'hcode_theme';
  
  const themes = {
    cyber: { name: 'Cyber Matrix (Dvojbarví)', accent: '#00ffcc' },
    white: { name: 'Simple White (Čistý bílý)', accent: '#2563eb' },
    noir: { name: 'Black Noir (Dvojbarví)', accent: '#ffffff' },
    ming: { name: 'Mingská dynastie (Dvojbarví)', accent: '#f59e0b' },
    qinghua: { name: 'Mingský porcelán (Dvojbarví)', accent: '#38bdf8' },
    jade: { name: 'Císařský nefrit (Dvojbarví)', accent: '#10b981' },
    tokyo: { name: 'Tokijský západ (Dvojbarví)', accent: '#f43f5e' },
    bloodmoon: { name: 'Krvavý měsíc (Dvojbarví)', accent: '#ff1744' },
    solarpunk: { name: 'Solární fúze (Dvojbarví)', accent: '#ff7a00' },
    abyss: { name: 'Hlubina propasti (Dvojbarví)', accent: '#06b6d4' },
    rgb: { name: 'RGB Cyberpunk (Trojbarví)', accent: '#00ffcc' },
    sancai: { name: 'Mingské Sancai (Trojbarví)', accent: '#f59e0b' },
    synthwave: { name: 'Synthwave Sunset (Trojbarví)', accent: '#ff2a85' },
    aurora: { name: 'Polární záře (Trojbarví)', accent: '#00ff87' },
    inferno: { name: 'Trojitý plamen (Trojbarví)', accent: '#ff3b30' },
    darkforce: { name: 'DART.H FORCED (Trojbarví)', accent: '#ff0033' }
  };

  const themeKeys = [
    'cyber', 'noir', 'ming', 'qinghua', 'jade', 'tokyo', 'bloodmoon', 'solarpunk', 'abyss',
    'rgb', 'sancai', 'synthwave', 'aurora', 'inferno', 'darkforce'
  ];

  let currentThemeId = 'cyber';
  try {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme && themes[savedTheme]) {
      currentThemeId = savedTheme;
    }
  } catch(e) {}

  function updateMorphButtonTooltip(themeId) {
    const morphBtns = document.querySelectorAll('.theme-morph-circle, #themeMorphBtn');
    const selected = themes[themeId] || themes.cyber;
    let currentIndex = themeKeys.indexOf(themeId);
    if (currentIndex === -1) currentIndex = 0;
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    const nextTheme = themes[themeKeys[nextIndex]];
    
    morphBtns.forEach(btn => {
      btn.setAttribute('title', `Barevný motiv: ${selected.name} - Kliknutím přepnete na další (${nextTheme.name}) [Alt+M]`);
      btn.setAttribute('aria-label', `Barevný motiv: ${selected.name}, kliknutím přepnete na ${nextTheme.name}`);
    });

    // Update desktop navbar toggle button
    const darkIcon = document.getElementById('darkToggleIcon');
    const darkLabel = document.getElementById('darkToggleLabel');
    if (darkIcon) darkIcon.textContent = '🎨';
    if (darkLabel) darkLabel.textContent = `Motiv: ${selected.name.split(' (')[0]}`;
  }

  function applyTheme(themeId) {
    const selected = themes[themeId] || themes.cyber;
    currentThemeId = themeId;
    document.documentElement.setAttribute('data-theme', themeId);
    document.body.setAttribute('data-theme', themeId);
    
    const isWhite = (themeId === 'white');
    if (isWhite) {
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('hcode_prev_dark_theme', themeId);
    }

    // Update Bílo/Černý switch button state
    const switchBtns = document.querySelectorAll('.theme-bw-switch, #themeSwitchBtn');
    switchBtns.forEach(btn => {
      btn.classList.toggle('is-white', isWhite);
      btn.classList.toggle('is-dark', !isWhite);
      btn.setAttribute('title', isWhite 
        ? 'Aktivní: Bílý motiv - Kliknutím přepnete na Černý (Alt+T)' 
        : 'Aktivní: Černý motiv - Kliknutím přepnete na Bílý (Alt+T)');
      btn.setAttribute('aria-label', isWhite 
        ? 'Přepnout na černý motiv' 
        : 'Přepnout na bílý motiv');
    });

    // Update mobile dropdown toggle item
    const dropDarkIcon = document.getElementById('dropActionDarkIcon');
    const dropDarkLabel = document.getElementById('dropActionDarkLabel');
    if (dropDarkIcon) dropDarkIcon.textContent = isWhite ? '☀️' : '🌙';
    if (dropDarkLabel) dropDarkLabel.textContent = isWhite ? 'Motiv: Bílý (přepnout na černý)' : 'Motiv: Černý (přepnout na bílý)';
    
    try {
      localStorage.setItem(THEME_KEY, themeId);
      localStorage.setItem('darkMode', isWhite ? '0' : '1');
    } catch (err) {}

    updateMorphButtonTooltip(themeId);
  }

  function toggleWhiteBlackTheme() {
    const isCurrentlyWhite = (currentThemeId === 'white');
    const targetTheme = isCurrentlyWhite 
      ? (localStorage.getItem('hcode_prev_dark_theme') || 'cyber')
      : 'white';

    const switchBtns = document.querySelectorAll('.theme-bw-switch, #themeSwitchBtn');
    switchBtns.forEach(btn => {
      btn.classList.remove('spinning');
      void btn.offsetWidth;
      btn.classList.add('spinning');
    });

    applyTheme(targetTheme);
  }

  function cycleToNextTheme() {
    let currentIndex = themeKeys.indexOf(currentThemeId);
    if (currentIndex === -1) currentIndex = 0;
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    const nextThemeId = themeKeys[nextIndex];

    const morphBtns = document.querySelectorAll('.theme-morph-circle, #themeMorphBtn');
    morphBtns.forEach(btn => {
      btn.classList.remove('spinning');
      void btn.offsetWidth;
      btn.classList.add('spinning');
    });

    applyTheme(nextThemeId);
  }

  window.cycleToNextTheme = cycleToNextTheme;
  window.toggleWhiteBlackTheme = toggleWhiteBlackTheme;
  window.toggleDark = toggleWhiteBlackTheme;
  window.toggleSimpleWhiteTheme = toggleWhiteBlackTheme;

  window.setAppTheme = function(themeId) {
    if (themes[themeId]) {
      applyTheme(themeId);
    } else {
      cycleToNextTheme();
    }
  };

  // Keyboard shortcuts: Alt+T for White/Black switch, Alt+M for colorful palette cycle
  window.addEventListener('keydown', function(e) {
    if (e.altKey && (e.key === 't' || e.key === 'T')) {
      e.preventDefault();
      toggleWhiteBlackTheme();
    } else if (e.altKey && (e.key === 'm' || e.key === 'M')) {
      e.preventDefault();
      cycleToNextTheme();
    }
  });

  // Setup listeners when DOM is ready
  function initThemeUI() {
    applyTheme(currentThemeId);

    const switchBtns = document.querySelectorAll('.theme-bw-switch, #themeSwitchBtn');
    switchBtns.forEach(btn => {
      btn.addEventListener('animationend', function() {
        btn.classList.remove('spinning');
      });
    });

    const morphBtns = document.querySelectorAll('.theme-morph-circle, #themeMorphBtn');
    morphBtns.forEach(btn => {
      btn.addEventListener('animationend', function() {
        btn.classList.remove('spinning');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeUI);
  } else {
    initThemeUI();
  }
})();

// Font Style: Calligraphic KaiTi vs Standard Print
window.toggleFontStyle = function() {
  const isKaiTi = document.body.classList.toggle('font-kaiti');
  localStorage.setItem('chinese_course_font_style', isKaiTi ? 'kaiti' : 'standard');
  const icon = document.getElementById('fontToggleIcon');
  const label = document.getElementById('fontToggleLabel');
  if (icon) icon.textContent = isKaiTi ? '✍️' : '🔤';
  if (label) label.textContent = isKaiTi ? 'Písmo: KaiTi' : 'Písmo: Tiskací';

  const dropFontIcon = document.getElementById('dropActionFontIcon');
  const dropFontLabel = document.getElementById('dropActionFontLabel');
  if (dropFontIcon) dropFontIcon.textContent = isKaiTi ? '✍️' : '🔤';
  if (dropFontLabel) dropFontLabel.textContent = isKaiTi ? 'Písmo: KaiTi' : 'Písmo: Tiskací';
};

// Layout Mode: Horizontal Flashcards (Mobile Swiper) vs Vertical List
window.toggleCardLayoutMode = function(forceMode) {
  const container = document.getElementById('cardsContainer');
  const btn = document.getElementById('layoutModeToggleBtn');
  const icon = document.getElementById('layoutModeIcon');
  const label = document.getElementById('layoutModeLabel');
  if (!container) return;

  const isCurrentlyHorizontal = container.classList.contains('horizontal-scroll-mode');
  const targetHorizontal = (forceMode !== undefined) ? (forceMode === 'horizontal') : !isCurrentlyHorizontal;

  container.classList.toggle('horizontal-scroll-mode', targetHorizontal);
  document.body.classList.toggle('horizontal-cards-active', targetHorizontal);

  if (btn) btn.classList.toggle('horizontal-active', targetHorizontal);
  if (icon) icon.textContent = targetHorizontal ? '📱' : '📜';
  if (label) label.textContent = targetHorizontal ? 'Karty: Vodorovně' : 'Karty: Svisle';
  if (btn) {
    btn.title = targetHorizontal
      ? 'Přepnout na vertikální seznam (Alt+M)'
      : 'Přepnout na horizontální swipování karet (Alt+M)';
  }

  const dropLayoutIcon = document.getElementById('dropActionLayoutIcon');
  const dropLayoutLabel = document.getElementById('dropActionLayoutLabel');
  if (dropLayoutIcon) dropLayoutIcon.textContent = targetHorizontal ? '📱' : '📜';
  if (dropLayoutLabel) dropLayoutLabel.textContent = targetHorizontal ? 'Karty: Vodorovně' : 'Karty: Svisle';

  localStorage.setItem('chinese_course_layout_mode', targetHorizontal ? 'horizontal' : 'vertical');

  // Smooth scroll to current or last card in the new layout
  setTimeout(() => {
    if (typeof window.scrollToCardId === 'function') {
      const lastId = localStorage.getItem('chinese_course_last_card') || 'card-num-1';
      window.scrollToCardId(lastId, false);
    }
  }, 60);
};

// ═══════════════════════════════════════════════════════
// MOBILE DROPDOWNS CONTROLLER (Lectures & Actions)
// ═══════════════════════════════════════════════════════
window.toggleAppDropdown = function(wrapperId) {
  const target = document.getElementById(wrapperId);
  if (!target) return;
  const isAlreadyOpen = target.classList.contains('open');

  // Close other dropdowns
  window.closeAllDropdowns();

  if (!isAlreadyOpen) {
    target.classList.add('open');
  }
};

window.closeAllDropdowns = function() {
  document.querySelectorAll('.dropdown-wrapper.open').forEach(el => {
    el.classList.remove('open');
  });
};

window.selectDropdownLesson = function(lessonId, labelText) {
  const navTab = document.querySelector(`.nav-tab[onclick*="'${lessonId}'"]`);
  switchLesson(lessonId, navTab);
  window.closeAllDropdowns();
};

// Close dropdowns when clicking anywhere outside the menu and trigger
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown-menu') && !e.target.closest('.dropdown-trigger-btn')) {
    window.closeAllDropdowns();
  }
});

// Initialize layout mode on startup
(function() {
  function initLayout() {
    const savedLayout = localStorage.getItem('chinese_course_layout_mode');
    const defaultHorizontal = (window.innerWidth <= 768);
    const isHorizontal = savedLayout ? (savedLayout === 'horizontal') : defaultHorizontal;
    window.toggleCardLayoutMode(isHorizontal ? 'horizontal' : 'vertical');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
  } else {
    setTimeout(initLayout, 50);
  }
})();

