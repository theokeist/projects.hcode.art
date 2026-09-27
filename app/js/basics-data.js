// Beginner path: common characters, high-value words, and a graded reading.
(function () {
  const characters = [
    ['我', 'wǒ', 'I; me'], ['你', 'nǐ', 'you'], ['他', 'tā', 'he; him'], ['她', 'tā', 'she; her'],
    ['是', 'shì', 'to be'], ['不', 'bù', 'not; no'], ['有', 'yǒu', 'to have; there is'], ['在', 'zài', 'at; in'],
    ['人', 'rén', 'person'], ['大', 'dà', 'big'], ['小', 'xiǎo', 'small'], ['好', 'hǎo', 'good; well'],
    ['中', 'zhōng', 'middle; China'], ['国', 'guó', 'country'], ['学', 'xué', 'to learn; study'], ['生', 'shēng', 'life; student'],
    ['日', 'rì', 'day; sun'], ['月', 'yuè', 'month; moon'], ['水', 'shuǐ', 'water'], ['家', 'jiā', 'home; family'],
    ['吃', 'chī', 'to eat'], ['喝', 'hē', 'to drink'], ['看', 'kàn', 'to look; read'], ['书', 'shū', 'book']
  ];
  const words = [
    ['你好', 'nǐ hǎo', 'hello'], ['我们', 'wǒmen', 'we; us'], ['他们', 'tāmen', 'they; them'], ['不是', 'bú shì', 'is not'],
    ['中国', 'Zhōngguó', 'China'], ['中国人', 'Zhōngguó rén', 'Chinese person'], ['学生', 'xuésheng', 'student'], ['学习', 'xuéxí', 'to study'],
    ['今天', 'jīntiān', 'today'], ['明天', 'míngtiān', 'tomorrow'], ['月亮', 'yuèliang', 'moon'], ['喝水', 'hē shuǐ', 'drink water'],
    ['吃饭', 'chī fàn', 'eat a meal'], ['看书', 'kàn shū', 'read a book'], ['家人', 'jiārén', 'family'], ['好人', 'hǎorén', 'good person']
  ];
  const readings = [
    {
      title: '1 · Meet 我 and 你',
      pinyin: 'Wǒ shì xuésheng. Nǐ yě shì xuésheng. Wǒmen zài Zhōngguó xuéxí.',
      tiles: [['我','wǒ'],['是','shì'],['学','xué'],['生','sheng'],['。',''],['你','nǐ'],['也','yě'],['是','shì'],['学','xué'],['生','sheng'],['。',''],['我','wǒ'],['们','men'],['在','zài'],['中','zhōng'],['国','guó'],['学','xué'],['习','xí'],['。','']],
      meaning: 'I am a student. You are a student too. We study in China.',
      note: '是 links a person to what they are. 也 means “too”; 们 makes a pronoun plural.'
    },
    {
      title: '2 · A day at home',
      pinyin: 'Jīntiān wǒ zài jiā. Wǒ hē shuǐ, chī fàn, hái kàn shū. Wǒ de jiārén yě zài jiā.',
      tiles: [['今','jīn'],['天','tiān'],['我','wǒ'],['在','zài'],['家','jiā'],['。',''],['我','wǒ'],['喝','hē'],['水','shuǐ'],['，',''],['吃','chī'],['饭','fàn'],['，',''],['还','hái'],['看','kàn'],['书','shū'],['。',''],['我','wǒ'],['的','de'],['家','jiā'],['人','rén'],['也','yě'],['在','zài'],['家','jiā'],['。','']],
      meaning: 'Today I am at home. I drink water, eat a meal, and read a book. My family is at home too.',
      note: '在 marks a place. 的 connects a person with something belonging to them. 还 means “also; in addition”.'
    },
    {
      title: '3 · Today and tomorrow',
      pinyin: 'Jīntiān wǒmen zài Zhōngguó. Wǒmen xuéxí, kàn shū, yě hē shuǐ. Míngtiān tāmen zài jiā chī fàn.',
      tiles: [['今','jīn'],['天','tiān'],['我','wǒ'],['们','men'],['在','zài'],['中','zhōng'],['国','guó'],['。',''],['我','wǒ'],['们','men'],['学','xué'],['习','xí'],['，',''],['看','kàn'],['书','shū'],['，',''],['也','yě'],['喝','hē'],['水','shuǐ'],['。',''],['明','míng'],['天','tiān'],['他','tā'],['们','men'],['在','zài'],['家','jiā'],['吃','chī'],['饭','fàn'],['。','']],
      meaning: 'Today we are in China. We study, read books, and drink water too. Tomorrow they will eat at home.',
      note: 'Time words often come before the verb. Chinese verbs do not change form for “will”; 明天 gives the future time.'
    }
  ];

  const container = document.getElementById('cardsContainer');
  if (!container || document.getElementById('card-basic-1')) return;
  const fragment = document.createDocumentFragment();
  let index = 0;

  function addCard(item, kind, label) {
    index += 1;
    const card = document.createElement('article');
    card.className = 'course-card basic';
    card.dataset.lesson = 'basic';
    card.id = 'card-basic-' + index;
    card.dataset.text = ['basic', label, item[0], item[1], item[2]].join(' ');
    card.style.borderLeft = '5px solid #0d9488';
    card.innerHTML = '<div class="left-panel">' +
      '<span class="basic-overline">Start here · ' + label + ' ' + String(index).padStart(2, '0') + '</span>' +
      '<div class="hanzi-text" style="color:#0f766e">' + item[0] + '</div>' +
      '<div class="pinyin-text pinyin-target" style="color:#14b8a6">' + item[1] + '</div>' +
      '<div class="czech-text czech-target">' + item[2] + '</div>' +
      '</div><div class="right-panel"><div class="panel-header"><span style="font-weight:700;color:#334155">' + kind + '</span>' +
      '<span class="basic-progress">Beginner path · ' + index + ' / 43</span></div>' +
      '<div class="char-grid"><div class="char-item new-item"><div class="char-symbol" style="color:#0f766e">' + item[0] + '</div>' +
      '<div class="char-desc"><div class="char-pinyin" style="color:#14b8a6">' + item[1] + '</div><div class="char-meaning">' + item[2] + '</div></div></div></div>' +
      '<p style="margin:12px 0 0;color:#475569;font-size:13px">Tap or click the Chinese text in the reader to look up an exact character.</p></div>';
    fragment.appendChild(card);
  }

  characters.forEach(item => addCard(item, 'Essential character', 'Character'));
  words.forEach(item => addCard(item, 'Useful combination', 'Word'));
  readings.forEach(reading => {
    addCard([reading.title, reading.pinyin, reading.meaning], 'Graded reading', 'Reading');
  });
  const basicDivider = document.getElementById('section-basic');
  container.insertBefore(fragment, basicDivider ? basicDivider.nextSibling : container.firstElementChild);

  window.SENTENCE_COLLECTIONS = window.SENTENCE_COLLECTIONS || {};
  window.SENTENCE_COLLECTIONS.basics = readings.map(reading => ({
    tiles: reading.tiles.map(([h, p]) => ({ h, p, cls: /^[，。,.!?]$/.test(h) ? 'punct' : 'l1' })),
    czech: reading.title + ' — ' + reading.meaning + ' ' + reading.note
  }));
})();
