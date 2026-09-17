// ═══════════════════════════════════════════════════════════
// HCODE.ART • KOREAN INTERACTIVE STEPPER & AUDIO ENGINE
// Web Speech API (ko-KR), Milestones navigation, Keyboard shortcuts
// ═══════════════════════════════════════════════════════════

(function() {
  let currentPhraseIndex = 0;
  let phrasesList = [];

  // Initialize after datasets are loaded
  function initStepper() {
    phrasesList = window.KOREAN_PHRASES_DATA || [];
    if (phrasesList.length === 0) return;
    renderCurrentPhrase();
    buildMilestonesList();
  }

  // Render current sentence in the top strip
  function renderCurrentPhrase() {
    if (!phrasesList || phrasesList.length === 0) return;
    const item = phrasesList[currentPhraseIndex];
    if (!item) return;

    const hangulEl = document.getElementById('stripHangulText');
    const romanEl = document.getElementById('stripRomanText');
    const czechEl = document.getElementById('stripCzechText');
    const countEl = document.getElementById('stripCounter');
    const naverLink = document.getElementById('stripNaverLink');

    if (hangulEl) {
      hangulEl.innerHTML = `${item.hangul} <button type="button" class="audio-btn" onclick="playKoreanAudio('${escapeQuotes(item.hangul)}')" title="Poslechnout výslovnost (ko-KR)">🔊 Přehrát</button>`;
    }
    if (romanEl) romanEl.textContent = item.roman;
    if (czechEl) czechEl.textContent = item.cz;
    if (countEl) countEl.textContent = `#${currentPhraseIndex + 1} / ${phrasesList.length} • ${item.formality}`;

    if (naverLink) {
      const query = encodeURIComponent(item.hangul.replace(/[!?.]/g, ''));
      naverLink.href = `https://korean.dict.naver.com/koendict/#/search?query=${query}`;
    }
  }

  function escapeQuotes(str) {
    return str.replace(/'/g, "\\'");
  }

  // Step phrase forward or backward
  window.stepPhrase = function(delta) {
    if (!phrasesList || phrasesList.length === 0) return;
    currentPhraseIndex += delta;
    if (currentPhraseIndex < 0) currentPhraseIndex = phrasesList.length - 1;
    if (currentPhraseIndex >= phrasesList.length) currentPhraseIndex = 0;
    renderCurrentPhrase();
  };

  // Web Speech API Korean Synthesis Engine
  window.playKoreanAudio = function(text) {
    if (!('speechSynthesis' in window)) {
      alert("Váš prohlížeč nepodporuje syntézu řeči. Otevřete online slovník pro výslovnost.");
      return;
    }

    window.speechSynthesis.cancel(); // Cancel any ongoing speech

    const cleanText = text.replace(/[\(\)•#0-9]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.85; // Slightly slower for language learners
    utterance.pitch = 1.0;

    // Look for Korean voice
    const voices = window.speechSynthesis.getVoices();
    const koVoice = voices.find(v => v.lang === 'ko-KR' || v.lang.startsWith('ko'));
    if (koVoice) {
      utterance.voice = koVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  // Keyboard navigation shortcuts
  window.addEventListener('keydown', function(e) {
    if (e.altKey && e.key === 'ArrowRight') {
      e.preventDefault();
      window.stepPhrase(1);
    } else if (e.altKey && e.key === 'ArrowLeft') {
      e.preventDefault();
      window.stepPhrase(-1);
    } else if (e.altKey && (e.key === 'p' || e.key === 'P')) {
      e.preventDefault();
      if (phrasesList && phrasesList[currentPhraseIndex]) {
        window.playKoreanAudio(phrasesList[currentPhraseIndex].hangul);
      }
    }
  });

  // Build side milestone nodes
  function buildMilestonesList() {
    const listEl = document.getElementById('stepperMilestonesList');
    if (!listEl) return;

    const milestones = [
      { lesson: 'consonant', icon: '🔠', title: 'Hangul: Souhlásky', count: '19' },
      { lesson: 'vowel', icon: '🔤', title: 'Hangul: Samohlásky', count: '21' },
      { lesson: 'batchim', icon: '🧱', title: 'Pravidla Batchim', count: '7' },
      { lesson: 'numbers', icon: '🔢', title: 'Čísla & Počítadla', count: '42' },
      { lesson: 'phrases', icon: '📖', title: 'L1: Konverzace & Fráze', count: '40' },
      { lesson: 'vocab', icon: '🎯', title: 'L2: 350+ Slovní zásoba', count: '160+' },
      { lesson: 'grammar', icon: '⚡', title: 'L3: Gramatika & Částice', count: '32' },
      { lesson: 'reading', icon: '🌐', title: 'L4: Online texty & Čítanka', count: '14' }
    ];

    listEl.innerHTML = milestones.map(m => `
      <div class="stepper-node" onclick="switchLesson('${m.lesson}')" title="Přejít na ${m.title}">
        <span>${m.icon} ${m.title}</span>
        <span class="stepper-count">${m.count}</span>
      </div>
    `).join('');
  }

  // Pre-load voices
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {
      window.speechSynthesis.getVoices();
    };
  }

  document.addEventListener('DOMContentLoaded', initStepper);
  setTimeout(initStepper, 300);
})();
