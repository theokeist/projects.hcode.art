// ═══════════════════════════════════════════════════════
  // EXPANDED SIDE STEPPER CONTROLLER
  // ═══════════════════════════════════════════════════════
  (function() {
    const MILESTONES = [
      {
        id: 'num',
        label: 'Čísla',
        icon: '🔢',
        firstCardId: 'card-num-1',
        count: 15,
        notches: [
          { num: 1, cardId: 'card-num-1', hanzi: '零–三', label: '0 až 3 (Základní)' },
          { num: 5, cardId: 'card-num-5', hanzi: '四–六', label: '4 až 6' },
          { num: 8, cardId: 'card-num-8', hanzi: '七–十', label: '7 až 10' },
          { num: 12, cardId: 'card-num-12', hanzi: '百–万', label: 'Sto až deset tisíc' },
          { num: 15, cardId: 'card-num-15', hanzi: '亿', label: 'Sto milionů' }
        ]
      },
      {
        id: 'rad',
        label: '204 Radikálů',
        icon: '🏮',
        firstCardId: 'card-rad-1',
        count: 204,
        notches: [
          { num: 1, cardId: 'card-rad-1', hanzi: '一 / 丨 / 丿', label: '1 tah (Základní čáry)' },
          { num: 7, cardId: 'card-rad-7', hanzi: '十 / 人 / 刀', label: '2 tahy (Člověk, nože, ohrady)' },
          { num: 36, cardId: 'card-rad-36', hanzi: '口 / 土 / 女', label: '3 tahy (Ústa, země, žena)' },
          { num: 67, cardId: 'card-rad-67', hanzi: '木 / 水 / 手', label: '4 tahy (Dřevo, voda, ruka)' },
          { num: 115, cardId: 'card-rad-115', hanzi: '石 / 目 / 禾', label: '5 tahů (Kámen, oko, obilí)' },
          { num: 149, cardId: 'card-rad-149', hanzi: '竹 / 米 / 虫', label: '6 tahů (Bambus, rýže, hmyz)' },
          { num: 178, cardId: 'card-rad-178', hanzi: '言 / 走 / 酉', label: '7 tahů (Řeč, chůze, víno)' },
          { num: 192, cardId: 'card-rad-192', hanzi: '金 / 雨 / 鱼', label: '8 tahů (Kov, déšť, ryba)' },
          { num: 199, cardId: 'card-rad-199', hanzi: '革 / 骨 / 鼻', label: '9–14 tahů (Kůže, kost, nos)' }
        ]
      },
      {
        id: 'l1',
        label: 'L1: 200 vět & gramatika',
        icon: '📖',
        firstCardId: 'card-l1-1',
        count: 199,
        notches: [
          { num: 1, cardId: 'card-l1-1', hanzi: '你好！', label: 'Ahoj! (Základ)' },
          { num: 15, cardId: 'card-l1-15', hanzi: '你爱我吗？', label: 'Miluješ mě?' },
          { num: 30, cardId: 'card-l1-30', hanzi: '你多大？', label: 'Kolik ti je let?' },
          { num: 50, cardId: 'card-l1-50', hanzi: '说慢点儿', label: 'Mluv pomaleji' },
          { num: 75, cardId: 'card-l1-75', hanzi: '一杯咖啡', label: 'Dám si kávu' },
          { num: 100, cardId: 'card-l1-100', hanzi: '想买什么？', label: 'Co si přeješ koupit?' },
          { num: 125, cardId: 'card-l1-125', hanzi: '工作太多', label: 'Moc práce' },
          { num: 150, cardId: 'card-l1-150', hanzi: '有个主意', label: 'Mám nápad' },
          { num: 175, cardId: 'card-l1-175', hanzi: '你去哪儿？', label: 'Kam jdeš?' },
          { num: 199, cardId: 'card-l1-199', hanzi: '很抱歉', label: 'Závěr L1' }
        ]
      },
      {
        id: 'l2',
        label: 'L2: 100 frází & komplimenty',
        icon: '💬',
        firstCardId: 'card-l2-1',
        count: 100,
        notches: [
          { num: 1, cardId: 'card-l2-1', hanzi: '很美', label: 'Vypadáš nádherně' },
          { num: 25, cardId: 'card-l2-25', hanzi: '真正的朋友', label: 'Opravdový přítel' },
          { num: 50, cardId: 'card-l2-50', hanzi: '高兴见到你', label: 'Rád tě vidím' },
          { num: 75, cardId: 'card-l2-75', hanzi: '你的幸福', label: 'Štěstí a radost' },
          { num: 100, cardId: 'card-l2-100', hanzi: '感谢观看', label: 'Závěr L2' }
        ]
      },
      {
        id: 'l3',
        label: 'L3: 400 slov s Emoji',
        icon: '🎯',
        firstCardId: 'card-l3-1',
        count: 400,
        notches: [
          { num: 1, cardId: 'card-l3-1', hanzi: '👤 孩子', label: 'Lidé a rodina' },
          { num: 50, cardId: 'card-l3-50', hanzi: '🍲 巧克力', label: 'Jídlo a sladkosti' },
          { num: 100, cardId: 'card-l3-100', hanzi: '🚗 交通灯', label: 'Doprava a cesty' },
          { num: 150, cardId: 'card-l3-150', hanzi: '🌋 指南针', label: 'Příroda a živly' },
          { num: 200, cardId: 'card-l3-200', hanzi: '👗 芭蕾舞鞋', label: 'Oblečení a móda' },
          { num: 250, cardId: 'card-l3-250', hanzi: '🏠 一滴血', label: 'Domov a zdraví' },
          { num: 300, cardId: 'card-l3-300', hanzi: '🦁 猩猩', label: 'Divoká zvířata' },
          { num: 350, cardId: 'card-l3-350', hanzi: '🦅 天鹅', label: 'Ptáci a příroda' },
          { num: 400, cardId: 'card-l3-400', hanzi: '🧙 假肢', label: 'Závěr L3' }
        ]
      },
      {
        id: 'l4',
        label: 'L4: Přídavná jména & spojky',
        icon: '⚡',
        firstCardId: 'card-l4-1',
        count: 109,
        notches: [
          { num: 1, cardId: 'card-l4-1', hanzi: '新 / 好', label: 'Základní přídavná jména' },
          { num: 25, cardId: 'card-l4-25', hanzi: '咸 / 辣', label: 'Chutě a vlastnosti' },
          { num: 47, cardId: 'card-l4-47', hanzi: '因为 / 所以', label: 'Příčinné spojky' },
          { num: 66, cardId: 'card-l4-66', hanzi: '不但 / 而且', label: 'Stupňovací spojky' },
          { num: 86, cardId: 'card-l4-86', hanzi: '只要 / 就', label: 'Podmínkové spojky' },
          { num: 101, cardId: 'card-l4-101', hanzi: '学而时习之', label: 'Konfuciovy citáty' },
          { num: 109, cardId: 'card-l4-109', hanzi: '知之为知之', label: 'Závěr L4' }
        ]
      }
    ];

    let allCards = [];
    let activeCardIndex = 0;
    let allAccordionsOpen = true;

    let cachedVisibleCards = null;
    let lastRailCardId = null;

    function invalidateVisibleCache() {
      cachedVisibleCards = null;
    }

    // Helper: get currently visible cards
    function getVisibleCards() {
      if (cachedVisibleCards && cachedVisibleCards.length) {
        return cachedVisibleCards;
      }
      if (!allCards.length || allCards.length < 200) {
        allCards = Array.from(document.querySelectorAll('.course-card'));
      }
      cachedVisibleCards = allCards.filter(c => c.style.display !== 'none');
      return cachedVisibleCards;
    }

    // Render Milestones Rail
    function renderMilestones() {
      const container = document.getElementById('stepperSectionsList');
      if (!container) return;
      container.innerHTML = '';

      MILESTONES.forEach(m => {
        const group = document.createElement('div');
        group.className = 'stepper-lesson-group open';
        group.dataset.lesson = m.id;

        const header = document.createElement('div');
        header.className = 'stepper-lesson-header';
        header.dataset.lesson = m.id;
        header.innerHTML = `
          <div class="stepper-lesson-left">
            <span class="stepper-chevron">▸</span>
            <span class="stepper-lesson-dot"></span>
            <span>${m.icon} ${m.label}</span>
          </div>
          <span class="stepper-lesson-count">${m.count}</span>
        `;
        
        // Clicking row toggles accordion, double clicking or clicking title jumps
        header.onclick = (e) => {
          if (e.target.closest('.stepper-lesson-count')) {
            window.scrollToCardId(m.firstCardId);
          } else {
            group.classList.toggle('open');
          }
        };
        group.appendChild(header);

        const notchesDiv = document.createElement('div');
        notchesDiv.className = 'stepper-notches-list';
        m.notches.forEach(n => {
          const notchBtn = document.createElement('button');
          notchBtn.type = 'button';
          notchBtn.className = 'stepper-notch-btn';
          notchBtn.dataset.cardId = n.cardId;
          notchBtn.innerHTML = `
            <div class="stepper-notch-left">
              <span class="stepper-notch-num">#${n.num}</span>
              <span class="stepper-notch-hanzi">${n.hanzi}</span>
            </div>
            <span class="stepper-notch-gloss">${n.label}</span>
          `;
          notchBtn.onclick = () => {
            window.scrollToCardId(n.cardId);
          };
          notchesDiv.appendChild(notchBtn);
        });
        group.appendChild(notchesDiv);
        container.appendChild(group);
      });
    }

    // Toggle All Accordions
    window.toggleAllMilestones = function() {
      allAccordionsOpen = !allAccordionsOpen;
      document.querySelectorAll('.stepper-lesson-group').forEach(g => {
        g.classList.toggle('open', allAccordionsOpen);
      });
      const btn = document.getElementById('stepperToggleAllBtn');
      if (btn) {
        btn.textContent = allAccordionsOpen ? 'Sbalit vše' : 'Rozbalit vše';
      }
    };

    // Toggle Stepper Width (Standard 236px <-> Expanded 356px)
    window.toggleStepperWidth = function() {
      const stepper = document.getElementById('sideStepper');
      if (!stepper) return;
      const isExpanded = stepper.classList.toggle('expanded');
      const btn = document.getElementById('stepperExpandWidthBtn');
      if (btn) {
        btn.textContent = isExpanded ? '⤡' : '⛶';
        btn.title = isExpanded ? 'Zúžit stepper (236px)' : 'Rozbalit do šířky (356px)';
      }
      localStorage.setItem('chinese_course_stepper_width', isExpanded ? 'expanded' : 'standard');
    };

    
    // ── Font Style Toggle (KaiTi Calligraphy vs Sans-serif) ──────────────────
    window.toggleFontStyle = function() {
      const isKaiTi = document.body.classList.toggle('font-kaiti');
      localStorage.setItem('chinese_course_font_style', isKaiTi ? 'kaiti' : 'standard');
      const icon = document.getElementById('fontToggleIcon');
      const label = document.getElementById('fontToggleLabel');
      if (icon) icon.textContent = isKaiTi ? '✍️' : '🔤';
      if (label) label.textContent = isKaiTi ? 'Písmo: KaiTi' : 'Písmo: Tiskací';
    };

    
    // ── Sentence Strip Toggle (Hide / Show) ───────────────────────────────────
    window.toggleSentenceStrip = function() {
      const strip = document.getElementById('sentenceStrip');
      const btn = document.getElementById('sentenceToggleBtn');
      if (!strip) return;
      const isHidden = strip.classList.toggle('hidden-strip');
      localStorage.setItem('chinese_course_sentence_strip', isHidden ? 'hidden' : 'visible');
      if (btn) {
        btn.style.opacity = isHidden ? '0.5' : '1';
        btn.title = isHidden ? 'Zobrazit doplňování vět (Alt+V)' : 'Skrýt doplňování vět (Alt+V)';
      }
    };

    // ── Stepper Docking Toggle (Left ⇋ Right) ────────────────────────────────
    window.toggleStepperDock = function() {
      const stepper = document.getElementById('sideStepper');
      if (!stepper) return;
      const isCurrentlyLeft = stepper.classList.contains('dock-left');
      const newDock = isCurrentlyLeft ? 'right' : 'left';

      stepper.classList.toggle('dock-left', newDock === 'left');
      stepper.classList.toggle('dock-right', newDock === 'right');
      localStorage.setItem('chinese_course_stepper_dock', newDock);

      updateDockUI(newDock);
    };

    function updateDockUI(dock) {
      const isLeft = dock === 'left';
      const dockBtn = document.getElementById('stepperDockBtn');
      if (dockBtn) {
        dockBtn.title = isLeft ? 'Přesunout průvodce doprava (Alt+D)' : 'Přesunout průvodce doleva (Alt+D)';
        dockBtn.textContent = isLeft ? '⇥' : '⇤';
      }
      const navDockLabel = document.getElementById('navDockLabel');
      if (navDockLabel) {
        navDockLabel.textContent = isLeft ? 'Průvodce: Vlevo' : 'Průvodce: Vpravo';
      }
      const miniArrow = document.querySelector('.stepper-toggle-arrow');
      if (miniArrow) {
        miniArrow.textContent = isLeft ? '›' : '‹';
      }
    }

    // ── Search helpers ───────────────────────────────────────────────────────
    window.handleSearchInput = function(query) {
      const clearBtn = document.getElementById('searchClearBtn');
      if (clearBtn) {
        clearBtn.style.display = query ? 'block' : 'none';
      }
      if (typeof window.filterCards === 'function') {
        window.filterCards(query);
      }
    };

    window.clearSearch = function() {
      const input = document.getElementById('searchInput');
      if (input) {
        input.value = '';
        window.handleSearchInput('');
        input.focus();
      }
    };

    // Scroll to specific Card ID
    window.scrollToCardId = function(cardId, smooth = true) {
      const card = document.getElementById(cardId);
      if (!card) return;

      // If hidden by lesson tab, switch to its lesson tab first
      const lesson = card.dataset.lesson;
      if (card.style.display === 'none' && lesson) {
        const targetTab = document.querySelector(`.nav-tab[onclick*="'${lesson}'"]`);
        if (typeof window.switchLesson === 'function') {
          window.switchLesson(lesson, targetTab);
        }
      }

      const scrollContainer = document.getElementById('cardsContainer');
      const isHoriz = scrollContainer && scrollContainer.classList.contains('horizontal-scroll-mode');
      const farAway = isHoriz && Math.abs(card.offsetLeft - scrollContainer.scrollLeft) > window.innerWidth * 2;
      const behavior = (smooth && !farAway) ? 'smooth' : 'auto';
      card.scrollIntoView({ behavior, block: 'center', inline: 'center' });

      // Offscreen cards render with placeholder sizes (content-visibility),
      // so re-align until the card truly sits at the target position
      if (behavior === 'auto') {
        let passes = 0;
        const settle = () => {
          passes++;
          const rect = card.getBoundingClientRect();
          const cont = document.getElementById('cardsContainer');
          const horiz = cont && cont.classList.contains('horizontal-scroll-mode');
          let delta;
          if (horiz) {
            const cr = cont.getBoundingClientRect();
            delta = (rect.left + rect.width / 2) - (cr.left + cont.clientWidth / 2);
            if (Math.abs(delta) > 2) cont.scrollBy({ left: delta, behavior: 'auto' });
          } else {
            delta = (rect.top + rect.height / 2) - window.innerHeight / 2;
            if (Math.abs(delta) > 2) window.scrollBy({ top: delta, behavior: 'auto' });
          }
          if (Math.abs(delta) > 2 && passes < 6) requestAnimationFrame(settle);
        };
        requestAnimationFrame(settle);
      }

      // Trigger highlight glow
      card.classList.remove('stepper-highlight');
      void card.offsetWidth;
      card.classList.add('stepper-highlight');
      setTimeout(() => card.classList.remove('stepper-highlight'), 1600);
    };

    // Fast active card finder (O(1) elementFromPoint with O(log N) binary search fallback)
    function findActiveCard(visible, isHorizontal) {
      if (!visible || !visible.length) return null;
      if (visible.length === 1) return visible[0];

      // 1. Fast path: elementFromPoint hit test
      const viewX = window.innerWidth / 2;
      const viewY = isHorizontal ? window.innerHeight / 2 : Math.max(80, window.innerHeight * 0.38);

      const testOffsets = isHorizontal
        ? [[0, 0], [-60, 0], [60, 0], [-140, 0], [140, 0]]
        : [[0, 0], [0, -40], [0, 40], [0, -100], [0, 100]];

      for (let i = 0; i < testOffsets.length; i++) {
        const px = viewX + testOffsets[i][0];
        const py = viewY + testOffsets[i][1];
        if (px < 0 || py < 0 || px >= window.innerWidth || py >= window.innerHeight) continue;
        const el = document.elementFromPoint(px, py);
        if (el) {
          const card = el.closest('.course-card');
          if (card && card.style.display !== 'none') {
            return card;
          }
        }
      }

      // Fast check for top and bottom of page
      if (!isHorizontal) {
        if (window.scrollY < 200) return visible[0];
        if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 200)) {
          return visible[visible.length - 1];
        }
      }

      // 2. Binary search fallback over visible array (max 10 comparisons instead of 1,027!)
      let low = 0;
      let high = visible.length - 1;
      let closestCard = visible[0];
      let minDiff = Infinity;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const card = visible[mid];
        const rect = card.getBoundingClientRect();

        if (isHorizontal) {
          const cardCenter = rect.left + rect.width / 2;
          const diff = Math.abs(viewX - cardCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closestCard = card;
          }
          if (cardCenter < viewX) {
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        } else {
          const cardCenter = rect.top + rect.height / 2;
          const diff = Math.abs(viewY - cardCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closestCard = card;
          }
          if (rect.bottom < viewY) {
            low = mid + 1;
          } else if (rect.top > viewY) {
            high = mid - 1;
          } else {
            return card;
          }
        }
      }

      return closestCard;
    }

    // Step by delta (-1 or +1)
    window.stepCard = function(delta) {
      const visible = getVisibleCards();
      if (!visible.length) return;

      const container = document.getElementById('cardsContainer');
      const isHorizontal = container && container.classList.contains('horizontal-scroll-mode');

      let currentIdx = visible.indexOf(allCards[activeCardIndex]);
      if (currentIdx === -1) {
        const active = findActiveCard(visible, isHorizontal);
        currentIdx = visible.indexOf(active);
        if (currentIdx === -1) currentIdx = 0;
      }

      let targetIdx = Math.max(0, Math.min(visible.length - 1, currentIdx + delta));
      const targetCard = visible[targetIdx];
      if (targetCard) {
        window.scrollToCardId(targetCard.id);
      }
    };

    // Jump to card by input
    window.handleStepperJump = function(e) {
      if (e) e.preventDefault();
      const input = document.getElementById('stepperJumpInput');
      if (!input) return;
      const val = parseInt(input.value, 10);
      if (isNaN(val) || val <= 0) return;

      const visible = getVisibleCards();
      if (!visible.length) return;

      // If val <= visible count, jump to that 1-based index in visible cards
      if (val <= visible.length) {
        window.scrollToCardId(visible[val - 1].id);
        input.value = '';
        input.blur();
        return;
      }

      // Otherwise if val > visible.length, try finding card with that number
      let foundCard = allCards.find(c => {
        return c.id && c.id.endsWith('-' + val);
      });
      if (foundCard) {
        window.scrollToCardId(foundCard.id);
      } else {
        window.scrollToCardId(visible[visible.length - 1].id);
      }
      input.value = '';
      input.blur();
    };

    // Resume from Last Card
    window.resumeLastCard = function() {
      const lastId = localStorage.getItem('chinese_course_last_card');
      if (lastId) {
        window.scrollToCardId(lastId);
      }
    };

    // Toggle Stepper Collapse
    window.toggleSideStepper = function() {
      const stepper = document.getElementById('sideStepper');
      if (!stepper) return;
      const isCollapsed = stepper.classList.toggle('collapsed');
      stepper.classList.add('manually-expanded');
      if (isCollapsed) {
        stepper.classList.remove('manually-expanded');
      } else {
        lastRailCardId = null;
        updateScrollSpy();
      }
      localStorage.setItem('chinese_course_stepper_collapsed', isCollapsed ? '1' : '0');
    };

    // Open Mobile Stepper
    window.openMobileStepper = function() {
      const stepper = document.getElementById('sideStepper');
      if (stepper) {
        stepper.classList.remove('collapsed');
        lastRailCardId = null;
        updateScrollSpy();
      }
    };

    // Live ScrollSpy Updater
    let scrollTimeout = null;
    function updateScrollSpy() {
      const visible = getVisibleCards();
      if (!visible.length) return;

      const container = document.getElementById('cardsContainer');
      const isHorizontal = container && container.classList.contains('horizontal-scroll-mode');

      const activeCard = findActiveCard(visible, isHorizontal) || visible[0];

      if (!activeCard) return;
      activeCardIndex = allCards.indexOf(activeCard);
      const visibleIndex = visible.indexOf(activeCard);

      // Save to LocalStorage (debounced)
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (activeCard.id) {
          localStorage.setItem('chinese_course_last_card', activeCard.id);
        }
      }, 300);

      // Update UI elements
      const lesson = activeCard.dataset.lesson || 'l1';
      const badgeEl = document.getElementById('stepperLessonBadge');
      const cardNumEl = document.getElementById('stepperCardNum');
      const counterEl = document.getElementById('stepperCardCounter');
      const percentEl = document.getElementById('stepperPercent');
      const barEl = document.getElementById('stepperProgressBar');
      const miniPill = document.getElementById('stepperMiniPill');

      const lessonLabels = {
        'num': 'Čísla',
        'rad': '204 Radikálů',
        'l1': 'L1: 200 vět',
        'l2': 'L2: 100 frází',
        'l3': 'L3: 400 slov',
        'l4': 'L4: Přídavná jm.'
      };

      if (badgeEl) {
        badgeEl.textContent = lessonLabels[lesson] || lesson.toUpperCase();
        badgeEl.className = 'stepper-badge ' + lesson;
      }

      // Extract card sub-number from ID
      const cardSubNum = activeCard.id ? activeCard.id.split('-').pop() : (visibleIndex + 1);
      if (cardNumEl) cardNumEl.textContent = '#' + cardSubNum;

      const percent = Math.min(100, Math.max(0, Math.round(((visibleIndex + 1) / visible.length) * 100)));
      if (counterEl) counterEl.textContent = `Karta ${visibleIndex + 1} z ${visible.length}`;
      if (percentEl) percentEl.textContent = `${percent}%`;
      if (barEl) barEl.style.width = `${percent}%`;
      if (miniPill) miniPill.textContent = `${lessonLabels[lesson] || ''} #${cardSubNum} (${percent}%)`;

      // Update Mobile Swipe Dock indicator
      const mobileLessonEl = document.getElementById('mobileDockLesson');
      const mobileCardEl = document.getElementById('mobileDockCard');
      if (mobileLessonEl) {
        mobileLessonEl.textContent = (lessonLabels[lesson] || lesson).toUpperCase();
      }
      if (mobileCardEl) {
        mobileCardEl.textContent = `#${cardSubNum} / ${visible.length}`;
      }

      // Update active milestone in rail & auto-open current lesson accordion
      document.querySelectorAll('.stepper-lesson-group').forEach(g => {
        const isCurrent = g.dataset.lesson === lesson;
        g.classList.toggle('active', isCurrent);
        if (isCurrent && !g.classList.contains('open')) {
          g.classList.add('open');
        }
      });
      let activeNotchBtn = null;
      document.querySelectorAll('.stepper-notch-btn').forEach(nb => {
        const isExact = nb.dataset.cardId === activeCard.id;
        nb.classList.toggle('active', isExact);
        if (isExact) activeNotchBtn = nb;
      });
      if (!activeNotchBtn) {
        // Highlight nearest preceding milestone of the current lesson
        const curNum = parseInt(activeCard.id.split('-').pop(), 10);
        document.querySelectorAll(`.stepper-notch-btn[data-card-id^="card-${lesson}-"]`).forEach(nb => {
          if (parseInt(nb.dataset.cardId.split('-').pop(), 10) <= curNum) activeNotchBtn = nb;
        });
        if (activeNotchBtn) activeNotchBtn.classList.add('active');
      }

      // Keep the milestone rail scrolled to the active notch
      const rail = document.querySelector('.stepper-rail-wrapper');
      if (rail && rail.clientHeight && activeNotchBtn && activeNotchBtn.dataset.cardId !== lastRailCardId) {
        lastRailCardId = activeNotchBtn.dataset.cardId;
        const nr = activeNotchBtn.getBoundingClientRect();
        const rr = rail.getBoundingClientRect();
        const target = rail.scrollTop + (nr.top - rr.top) - rail.clientHeight / 2 + nr.height / 2;
        rail.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
      }
    }

    // Keyboard Shortcuts (J / K / Arrows / Alt+S / Alt+M / Alt+D / Alt+V)
    window.addEventListener('keydown', function(e) {
      const tag = (document.activeElement && document.activeElement.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
        return;
      }
      if (e.altKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        window.toggleSideStepper();
        return;
      }
      if (e.altKey && (e.key === 'm' || e.key === 'M')) {
        e.preventDefault();
        if (typeof window.toggleCardLayoutMode === 'function') {
          window.toggleCardLayoutMode();
        }
        return;
      }
      if (e.altKey && (e.key === 'd' || e.key === 'D')) {
        e.preventDefault();
        window.toggleStepperDock();
        return;
      }
      if (e.altKey && (e.key === 'v' || e.key === 'V')) {
        e.preventDefault();
        window.toggleSentenceStrip();
        return;
      }
      if (e.key === 'j' || e.key === 'J' || (!e.altKey && !e.ctrlKey && (e.key === 'ArrowDown' || e.key === 'ArrowRight'))) {
        e.preventDefault();
        window.stepCard(1);
      } else if (e.key === 'k' || e.key === 'K' || (!e.altKey && !e.ctrlKey && (e.key === 'ArrowUp' || e.key === 'ArrowLeft'))) {
        e.preventDefault();
        window.stepCard(-1);
      }
    });

    // Scroll listener with requestAnimationFrame
    let ticking = false;
    function onScrollUpdate() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateScrollSpy();
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScrollUpdate, { passive: true });

    // Also attach to cards container for horizontal swiping
    const cardsContainerEl = document.getElementById('cardsContainer');
    if (cardsContainerEl) {
      cardsContainerEl.addEventListener('scroll', onScrollUpdate, { passive: true });
    }

    // Initialize once cards are in DOM
    function init() {
      allCards = Array.from(document.querySelectorAll('.course-card'));
      renderMilestones();

      // Restore Font Style
      const savedFont = localStorage.getItem('chinese_course_font_style');
      if (savedFont === 'kaiti' || savedFont === null) {
        // Default to beautiful KaiTi font for Chinese writing!
        document.body.classList.add('font-kaiti');
        const icon = document.getElementById('fontToggleIcon');
        const label = document.getElementById('fontToggleLabel');
        if (icon) icon.textContent = '✍️';
        if (label) label.textContent = 'Písmo: KaiTi';
      } else {
        document.body.classList.remove('font-kaiti');
        const icon = document.getElementById('fontToggleIcon');
        const label = document.getElementById('fontToggleLabel');
        if (icon) icon.textContent = '🔤';
        if (label) label.textContent = 'Písmo: Tiskací';
      }

      // Restore Dock Position (Left / Right)
      const savedDock = localStorage.getItem('chinese_course_stepper_dock') || 'right';
      const stepperEl = document.getElementById('sideStepper');
      if (stepperEl) {
        stepperEl.classList.toggle('dock-left', savedDock === 'left');
        stepperEl.classList.toggle('dock-right', savedDock === 'right');
      }
      updateDockUI(savedDock);

      // Restore Sentence Strip visibility
      const savedStrip = localStorage.getItem('chinese_course_sentence_strip');
      if (savedStrip === 'hidden') {
        const strip = document.getElementById('sentenceStrip');
        const btn = document.getElementById('sentenceToggleBtn');
        if (strip) strip.classList.add('hidden-strip');
        if (btn) {
          btn.style.opacity = '0.5';
          btn.title = 'Zobrazit doplňování vět (Alt+V)';
        }
      }

      const stepper = document.getElementById('sideStepper');
      if (stepper) {
        // ALWAYS DEFAULT TO EXPANDED / OPEN unless user explicitly saved '1'
        // (on phones the stepper is a fullscreen drawer -> start collapsed)
        const savedCollapsed = localStorage.getItem('chinese_course_stepper_collapsed');
        const isMobileViewport = window.matchMedia('(max-width: 768px)').matches;
        if (savedCollapsed === '1' || (savedCollapsed === null && isMobileViewport)) {
          stepper.classList.add('collapsed');
        } else {
          stepper.classList.remove('collapsed');
        }

        // Check if user preferred wide expanded mode
        const savedWidth = localStorage.getItem('chinese_course_stepper_width');
        if (savedWidth === 'expanded' || window.innerWidth >= 1600) {
          stepper.classList.add('expanded');
          const btn = document.getElementById('stepperExpandWidthBtn');
          if (btn) btn.textContent = '⤡';
        }
      }

      // Check LocalStorage for last card
      const lastId = localStorage.getItem('chinese_course_last_card');
      const resumeBtn = document.getElementById('stepperResumeBtn');
      const resumeLabel = document.getElementById('stepperResumeLabel');
      if (lastId && document.getElementById(lastId) && resumeBtn && resumeLabel) {
        const sub = lastId.replace('card-', '').replace('-', ' #');
        resumeLabel.textContent = sub;
        resumeBtn.style.display = 'block';
      }

      // Initial ScrollSpy update
      updateScrollSpy();

      // Close mobile drawer when tapping outside stepper-panel
      if (stepperEl) {
        stepperEl.addEventListener('click', function(e) {
          if (window.innerWidth <= 768 && e.target === stepperEl) {
            stepperEl.classList.add('collapsed');
          }
        });
      }

      // Hook into tab changes to update stepper
      const origSwitchLesson = window.switchLesson;
      if (typeof origSwitchLesson === 'function') {
        window.switchLesson = function(lessonId, btn) {
          origSwitchLesson(lessonId, btn);
          invalidateVisibleCache();
          setTimeout(() => {
            const container = document.getElementById('cardsContainer');
            if (container && container.classList.contains('horizontal-scroll-mode')) {
              const firstVis = container.querySelector('.course-card:not([style*="display: none"])');
              if (firstVis) {
                firstVis.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
              }
            }
            updateScrollSpy();
          }, 60);
        };
      }

      const origFilterCards = window.filterCards;
      if (typeof origFilterCards === 'function') {
        window.filterCards = function(query) {
          origFilterCards(query);
          invalidateVisibleCache();
          setTimeout(() => {
            const container = document.getElementById('cardsContainer');
            if (container && container.classList.contains('horizontal-scroll-mode')) {
              const firstVis = container.querySelector('.course-card:not([style*="display: none"])');
              if (firstVis) {
                firstVis.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
              }
            }
            updateScrollSpy();
          }, 60);
        };
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      setTimeout(init, 120);
    }
  })();