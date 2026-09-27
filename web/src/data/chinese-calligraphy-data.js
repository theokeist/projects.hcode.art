// =========================================================================
// CHINESE CLASSICAL CALLIGRAPHY & PHILOSOPHICAL MASTERPIECES
// =========================================================================
// Authentic stroke geometries where "not a single line is straight":
// Each stroke is modeled as continuous organic Bezier / Catmull-Rom splines
// with entry press (起筆 Qǐbǐ), flexing travel (行筆 Xíngbǐ), dynamic width,
// and recoil / hook release (收筆 Shōubǐ).

export const CHINESE_CATEGORIES = [
  { id: 'all', label: 'Všechna díla', icon: '🌟' },
  { id: 'daoism', label: 'Taoismus & Laozi', icon: '☯️' },
  { id: 'confucian', label: 'Konfuciánství & Učení', icon: '📜' },
  { id: 'wisdom', label: 'Mistrovství ducha & Klid', icon: '🍵' },
  { id: 'chengyu', label: 'Přísloví & Chéngyǔ', icon: '🏮' },
  { id: 'poetry', label: 'Dynastie Tang & Poezie', icon: '🌸' }
];

export const CHINESE_CALLIGRAPHY_PASSAGES = [
  // -----------------------------------------------------------------------
  // 1. 上善若水 - Laozi (Tao Te Ching kap. 8)
  // -----------------------------------------------------------------------
  {
    id: 'shang-shan-ruo-shui',
    category: 'daoism',
    title: '上善若水',
    pinyin: 'Shàng shàn ruò shuǐ',
    source: '《道德經》Laozi · Tao Te Ching (cca 4. stol. př. n. l., kap. 8)',
    originEra: 'Starověká Čína · Období Válčících států',
    scriptStyle: 'Tradiční štětcový polokurzívní styl (Xíngshū 行書)',
    summaryCz: 'Nejvyšší dobro je jako voda',
    translationCz: 'Nejvyšší dobro je jako voda. Voda prospívá všemu tvorstvu a s ničím nesoutěží. Spočívá na místech, kterými všichni lidé pohrdají, a právě proto je tak blízko samotné Cestě (Dào).',
    translationEn: 'The supreme good is like water. Water nourishes all things without contending with them. It rests in places that all people disdain; thus it is near to the Tao.',
    philosophyCz: 'Základní princip taoistického uvažování: pravá síla nespočívá v tvrdém odporu a nátlaku, nýbrž v pružné přizpůsobivosti, pokoře a tiché vytrvalosti, která v průběhu věků překoná i nejtvrdší skálu.',
    quoteLines: [
      { hanzi: '上善若水', pinyin: 'Shàng shàn ruò shuǐ', cz: 'Nejvyšší dobro je jako voda.' },
      { hanzi: '水善利萬物而不爭', pinyin: 'Shuǐ shàn lì wànwù ér bù zhēng', cz: 'Voda prospívá veškerému bytí a o nic nesoupeří.' },
      { hanzi: '處眾人之所惡', pinyin: 'Chù zhòngrén zhī suǒ wù', cz: 'Zůstává tam, kde nikdo jiný nechce dlít.' },
      { hanzi: '故幾於道', pinyin: 'Gù jī yú Dào', cz: 'Proto je nejblíže věčné Cestě.' }
    ],
    characters: [
      {
        char: '上',
        pinyin: 'shàng',
        tone: '4. klesavý tón',
        meaningCz: 'Nejvyšší, povznesený, svrchovaný',
        radical: '一 (jeden / základna)',
        strokeCount: 3,
        etymology: 'Starověké orakulní písmo (甲骨文) znázorňovalo vodorovnou základní linii, nad níž byla umístěna tečka či svislý ukazatel směřující k nebi a výšinám.',
        strokes: [
          { name: 'shù (svislice)', baseWidth: 9.5, taper: 'both', hasBristles: true, pts: [{ x: 48, y: 16, w: 0.65 }, { x: 50, y: 32, w: 1.15 }, { x: 51, y: 56, w: 1.05 }, { x: 49, y: 72, w: 0.85 }] },
          { name: 'duǎn héng (horní švih)', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 52, y: 44, w: 0.75 }, { x: 62, y: 41, w: 1.1 }, { x: 74, y: 43, w: 0.82 }] },
          { name: 'cháng héng (spodní základ)', baseWidth: 10.2, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 79, w: 0.6 }, { x: 26, y: 73, w: 1.18 }, { x: 50, y: 71, w: 0.9 }, { x: 74, y: 75, w: 1.25 }, { x: 86, y: 74, w: 0.55 }] }
        ]
      },
      {
        char: '善',
        pinyin: 'shàn',
        tone: '4. klesavý tón',
        meaningCz: 'Dobro, ctnost, harmonická dokonalost',
        radical: '口 (ústa / slovo)',
        strokeCount: 12,
        etymology: 'Původně složeno ze znaku pro ovci (羊 - posvátná čistota a mír) a slov (言 - rozmluva). Značí urovnání sporu v laskavosti a harmonii.',
        strokes: [
          { name: 'zuǒ diǎn', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 38, y: 13, w: 0.7 }, { x: 42, y: 19, w: 1.2 }, { x: 44, y: 24, w: 0.5 }] },
          { name: 'yòu piě', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 62, y: 12, w: 0.75 }, { x: 57, y: 20, w: 1.15 }, { x: 52, y: 24, w: 0.55 }] },
          { name: 'héng', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 28, y: 26, w: 0.6 }, { x: 50, y: 24, w: 1.05 }, { x: 72, y: 26, w: 0.65 }] },
          { name: 'héng', baseWidth: 8.0, taper: 'both', hasBristles: false, pts: [{ x: 32, y: 36, w: 0.65 }, { x: 50, y: 35, w: 0.95 }, { x: 68, y: 37, w: 0.6 }] },
          { name: 'cháng héng', baseWidth: 10.5, taper: 'both', hasBristles: true, pts: [{ x: 16, y: 46, w: 0.6 }, { x: 32, y: 43, w: 1.1 }, { x: 52, y: 42, w: 0.88 }, { x: 70, y: 45, w: 1.22 }, { x: 86, y: 44, w: 0.5 }] },
          { name: 'shù', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 50, y: 26, w: 1.1 }, { x: 51, y: 40, w: 1.05 }, { x: 49, y: 55, w: 0.65 }] },
          { name: 'kǒu zuǒ shù', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 32, y: 62, w: 0.7 }, { x: 31, y: 74, w: 1.05 }, { x: 29, y: 84, w: 0.55 }] },
          { name: 'kǒu héng zhé', baseWidth: 8.8, taper: 'both', hasBristles: true, pts: [{ x: 31, y: 64, w: 0.9 }, { x: 54, y: 61, w: 0.95 }, { x: 72, y: 63, w: 1.25 }, { x: 69, y: 75, w: 1.0 }, { x: 66, y: 83, w: 0.55 }] },
          { name: 'kǒu héng', baseWidth: 7.2, taper: 'both', hasBristles: false, pts: [{ x: 30, y: 83, w: 0.6 }, { x: 49, y: 81, w: 0.9 }, { x: 68, y: 82, w: 0.65 }] }
        ]
      },
      {
        char: '若',
        pinyin: 'ruò',
        tone: '4. klesavý tón',
        meaningCz: 'Jako, podobající se, jemně poddajný',
        radical: '艸 (tráva / byliny)',
        strokeCount: 8,
        etymology: 'Zobrazuje trávu (艹) vyrůstající nad klečící postavou upravující si vlasy. Znamená přirozenou poddajnost stébla trávy sklánějícího se ve větru.',
        strokes: [
          { name: 'cǎo héng', baseWidth: 9.0, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 23, w: 0.55 }, { x: 35, y: 20, w: 1.1 }, { x: 58, y: 19, w: 0.95 }, { x: 80, y: 22, w: 0.6 }] },
          { name: 'cǎo shù zuǒ', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 34, y: 13, w: 0.7 }, { x: 35, y: 22, w: 1.15 }, { x: 33, y: 31, w: 0.5 }] },
          { name: 'cǎo shù yòu', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 65, y: 12, w: 0.75 }, { x: 64, y: 22, w: 1.1 }, { x: 62, y: 30, w: 0.55 }] },
          { name: 'zhōng héng', baseWidth: 9.5, taper: 'both', hasBristles: true, pts: [{ x: 22, y: 44, w: 0.65 }, { x: 48, y: 40, w: 1.15 }, { x: 74, y: 42, w: 0.7 }] },
          { name: 'piě', baseWidth: 9.2, taper: 'tail', hasBristles: true, pts: [{ x: 49, y: 41, w: 1.2 }, { x: 38, y: 55, w: 1.05 }, { x: 22, y: 72, w: 0.75 }, { x: 12, y: 84, w: 0.4 }] },
          { name: 'kǒu shù', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 42, y: 58, w: 0.7 }, { x: 41, y: 72, w: 1.05 }, { x: 39, y: 85, w: 0.55 }] },
          { name: 'kǒu zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 42, y: 60, w: 0.85 }, { x: 62, y: 57, w: 0.95 }, { x: 78, y: 60, w: 1.2 }, { x: 75, y: 74, w: 1.0 }, { x: 72, y: 84, w: 0.5 }] },
          { name: 'kǒu héng', baseWidth: 7.2, taper: 'both', hasBristles: false, pts: [{ x: 40, y: 84, w: 0.6 }, { x: 57, y: 82, w: 0.9 }, { x: 74, y: 83, w: 0.6 }] }
        ]
      },
      {
        char: '水',
        pinyin: 'shuǐ',
        tone: '3. klesavě-stoupavý tón',
        meaningCz: 'Voda, proud, tekutost, pokora',
        radical: '水 (voda)',
        strokeCount: 4,
        etymology: 'Zobrazuje plynoucí meandrující řeku se čtyřmi kapkami vířící vody po stranách. V kaligrafii je symbolem naprosté volnosti a dynamické rovnováhy.',
        strokes: [
          { name: 'shù gōu (svislý hák)', baseWidth: 11.5, taper: 'tail', hasBristles: true, pts: [{ x: 50, y: 12, w: 0.7 }, { x: 52, y: 26, w: 1.2 }, { x: 50, y: 52, w: 1.05 }, { x: 48, y: 78, w: 1.3 }, { x: 43, y: 84, w: 1.45 }, { x: 34, y: 77, w: 0.45 }] },
          { name: 'héng piě', baseWidth: 8.8, taper: 'both', hasBristles: true, pts: [{ x: 23, y: 36, w: 0.6 }, { x: 33, y: 32, w: 1.1 }, { x: 38, y: 35, w: 1.25 }, { x: 29, y: 46, w: 0.95 }, { x: 18, y: 55, w: 0.45 }] },
          { name: 'tí (vzestupná kapka)', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 15, y: 75, w: 0.65 }, { x: 25, y: 68, w: 1.15 }, { x: 36, y: 58, w: 0.4 }] },
          { name: 'piě', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 74, y: 31, w: 0.7 }, { x: 67, y: 40, w: 1.15 }, { x: 55, y: 48, w: 0.5 }] },
          { name: 'nà (pravá vlna)', baseWidth: 12.8, taper: 'tail', hasBristles: true, pts: [{ x: 52, y: 46, w: 0.75 }, { x: 62, y: 58, w: 1.05 }, { x: 74, y: 72, w: 1.45 }, { x: 84, y: 78, w: 1.1 }, { x: 92, y: 77, w: 0.35 }] }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 2. 道法自然 - Laozi (Tao Te Ching kap. 25)
  // -----------------------------------------------------------------------
  {
    id: 'dao-fa-zi-ran',
    category: 'daoism',
    title: '道法自然',
    pinyin: 'Dào fǎ zì rán',
    source: '《道德經》Laozi · Tao Te Ching (kapitola 25)',
    originEra: 'Starověká Čína · Období Válčících států',
    scriptStyle: 'Monumentální štětcové písmo (Kǎishū 楷書 s prvky Xíngshū)',
    summaryCz: 'Cesta následuje svou přirozenost',
    translationCz: 'Člověk se řídí Zemí, Země se řídí Nebem, Nebe se řídí Cestou (Dào) a Cesta se řídí svou vlastní přirozeností (Zìrán – tím, co je samo od sebe takové, jaké jest).',
    translationEn: 'Man follows the Earth; Earth follows Heaven; Heaven follows the Tao; and the Tao follows Nature (its own spontaneous being).',
    philosophyCz: 'Základní zákon spontaneity (Zìrán). Veškerenstvo funguje nejlépe bez umělého znásilňování a manipulace. Mistrovství spočívá v plynutí s proudem reality, nikoli v boji proti němu.',
    quoteLines: [
      { hanzi: '人法地', pinyin: 'Rén fǎ Dì', cz: 'Člověk se řídí Zemí.' },
      { hanzi: '地法天', pinyin: 'Dì fǎ Tiān', cz: 'Země se řídí Nebem.' },
      { hanzi: '天法道', pinyin: 'Tiān fǎ Dào', cz: 'Nebe se řídí Cestou.' },
      { hanzi: '道法自然', pinyin: 'Dào fǎ Zìrán', cz: 'A Cesta se řídí svou přirozeností.' }
    ],
    characters: [
      {
        char: '道',
        pinyin: 'dào',
        tone: '4. klesavý tón',
        meaningCz: 'Cesta, kosmický řád, prapodstata veškerého bytí',
        radical: '辵 / 辶 (pohyb / chůze)',
        strokeCount: 12,
        etymology: 'Znak složený z hlavy (首 - vůdce, vědomí, oko) a chůze (辶). Znamená kráčet s vědomím a otevřenýma očima po posvátné stezce vesmíru.',
        strokes: [
          { name: 'shǒu zuǒ diǎn', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 44, y: 15, w: 0.7 }, { x: 47, y: 22, w: 1.2 }, { x: 48, y: 27, w: 0.5 }] },
          { name: 'shǒu yòu piě', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 67, y: 14, w: 0.75 }, { x: 62, y: 21, w: 1.15 }, { x: 58, y: 26, w: 0.5 }] },
          { name: 'shǒu héng', baseWidth: 9.0, taper: 'both', hasBristles: true, pts: [{ x: 38, y: 30, w: 0.6 }, { x: 55, y: 28, w: 1.1 }, { x: 74, y: 31, w: 0.65 }] },
          { name: 'mù shù', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 45, y: 36, w: 0.7 }, { x: 44, y: 52, w: 1.1 }, { x: 43, y: 64, w: 0.55 }] },
          { name: 'mù zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 45, y: 37, w: 0.8 }, { x: 64, y: 35, w: 0.95 }, { x: 73, y: 37, w: 1.2 }, { x: 71, y: 51, w: 1.0 }, { x: 69, y: 63, w: 0.55 }] },
          { name: 'mù nèi héng', baseWidth: 6.8, taper: 'both', hasBristles: false, pts: [{ x: 45, y: 46, w: 0.6 }, { x: 57, y: 45, w: 0.9 }, { x: 70, y: 47, w: 0.6 }] },
          { name: 'mù dǐ héng', baseWidth: 6.8, taper: 'both', hasBristles: false, pts: [{ x: 44, y: 55, w: 0.6 }, { x: 57, y: 54, w: 0.9 }, { x: 70, y: 56, w: 0.6 }] },
          { name: 'chuò diǎn', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 22, y: 22, w: 0.65 }, { x: 26, y: 27, w: 1.25 }, { x: 27, y: 33, w: 0.5 }] },
          { name: 'chuò zhé', baseWidth: 8.8, taper: 'both', hasBristles: true, pts: [{ x: 16, y: 38, w: 0.7 }, { x: 26, y: 36, w: 1.1 }, { x: 21, y: 46, w: 0.95 }, { x: 28, y: 54, w: 1.2 }, { x: 19, y: 62, w: 0.6 }] },
          { name: 'píng nà', baseWidth: 14.5, taper: 'tail', hasBristles: true, pts: [{ x: 15, y: 63, w: 0.65 }, { x: 23, y: 74, w: 1.05 }, { x: 44, y: 80, w: 1.15 }, { x: 68, y: 84, w: 1.55 }, { x: 86, y: 85, w: 1.1 }, { x: 95, y: 83, w: 0.35 }] }
        ]
      },
      {
        char: '法',
        pinyin: 'fǎ',
        tone: '3. klesavě-stoupavý tón',
        meaningCz: 'Řídit se, následovat princip, přirozený zákon',
        radical: '氵 (tři kapky vody)',
        strokeCount: 8,
        etymology: 'Znak složený z vody (氵) a odcházet (去). Význam: to, co je spravedlivé a rovné jako klidná vodní hladina plynoucí bez nucení.',
        strokes: [
          { name: 'diǎn 1', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 22, y: 22, w: 0.6 }, { x: 26, y: 28, w: 1.2 }, { x: 24, y: 34, w: 0.5 }] },
          { name: 'diǎn 2', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 19, y: 44, w: 0.6 }, { x: 23, y: 49, w: 1.15 }, { x: 22, y: 55, w: 0.5 }] },
          { name: 'tí', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 16, y: 78, w: 0.7 }, { x: 23, y: 71, w: 1.15 }, { x: 31, y: 62, w: 0.4 }] },
          { name: 'héng', baseWidth: 8.8, taper: 'both', hasBristles: true, pts: [{ x: 42, y: 32, w: 0.6 }, { x: 60, y: 30, w: 1.05 }, { x: 78, y: 33, w: 0.65 }] },
          { name: 'shù', baseWidth: 9.0, taper: 'both', hasBristles: false, pts: [{ x: 60, y: 16, w: 0.75 }, { x: 59, y: 32, w: 1.15 }, { x: 58, y: 48, w: 0.6 }] },
          { name: 'cháng héng', baseWidth: 10.2, taper: 'both', hasBristles: true, pts: [{ x: 36, y: 48, w: 0.6 }, { x: 60, y: 46, w: 1.1 }, { x: 86, y: 49, w: 0.65 }] },
          { name: 'piě zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 54, y: 52, w: 0.9 }, { x: 44, y: 66, w: 1.15 }, { x: 64, y: 65, w: 0.95 }, { x: 80, y: 64, w: 0.6 }] },
          { name: 'diǎn', baseWidth: 9.0, taper: 'tail', hasBristles: false, pts: [{ x: 68, y: 56, w: 0.7 }, { x: 74, y: 68, w: 1.25 }, { x: 76, y: 77, w: 0.5 }] }
        ]
      },
      {
        char: '自',
        pinyin: 'zì',
        tone: '4. klesavý tón',
        meaningCz: 'Sám, osobně, přirozeně, od počátku',
        radical: '自 (nos / já)',
        strokeCount: 6,
        etymology: 'Starověký piktogram lidského nosu. Když lidé v Asii ukazují na sebe („já sám“), tradičně ukazují na špičku nosu.',
        strokes: [
          { name: 'piě', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 53, y: 15, w: 0.75 }, { x: 47, y: 22, w: 1.15 }, { x: 42, y: 26, w: 0.5 }] },
          { name: 'shù', baseWidth: 8.5, taper: 'both', hasBristles: false, pts: [{ x: 36, y: 28, w: 0.7 }, { x: 35, y: 54, w: 1.1 }, { x: 33, y: 80, w: 0.55 }] },
          { name: 'héng zhé', baseWidth: 9.2, taper: 'both', hasBristles: true, pts: [{ x: 36, y: 29, w: 0.8 }, { x: 56, y: 27, w: 0.95 }, { x: 68, y: 29, w: 1.25 }, { x: 66, y: 55, w: 1.05 }, { x: 64, y: 80, w: 0.55 }] },
          { name: 'nèi héng 1', baseWidth: 7.0, taper: 'both', hasBristles: false, pts: [{ x: 36, y: 46, w: 0.6 }, { x: 50, y: 45, w: 0.9 }, { x: 65, y: 46, w: 0.6 }] },
          { name: 'nèi héng 2', baseWidth: 7.0, taper: 'both', hasBristles: false, pts: [{ x: 35, y: 63, w: 0.6 }, { x: 50, y: 62, w: 0.9 }, { x: 65, y: 63, w: 0.6 }] },
          { name: 'dǐ héng', baseWidth: 7.8, taper: 'both', hasBristles: true, pts: [{ x: 34, y: 80, w: 0.65 }, { x: 50, y: 79, w: 1.0 }, { x: 65, y: 80, w: 0.65 }] }
        ]
      },
      {
        char: '然',
        pinyin: 'rán',
        tone: '2. stoupavý tón',
        meaningCz: 'Takový, tak jest, přirozeně zářící',
        radical: '灬 (oheň)',
        strokeCount: 12,
        etymology: 'Zobrazuje maso (月/肉) psa (犬) opékané na posvátném ohni (灬). Význam se přenesl na to, co se přirozeně děje a prosvětluje.',
        strokes: [
          { name: 'yuè piě', baseWidth: 8.0, taper: 'tail', hasBristles: true, pts: [{ x: 34, y: 16, w: 0.75 }, { x: 31, y: 34, w: 1.1 }, { x: 26, y: 52, w: 0.5 }] },
          { name: 'yuè zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 34, y: 17, w: 0.8 }, { x: 46, y: 15, w: 0.95 }, { x: 49, y: 26, w: 1.05 }, { x: 47, y: 48, w: 0.55 }] },
          { name: 'quǎn héng', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 56, y: 22, w: 0.65 }, { x: 68, y: 20, w: 1.05 }, { x: 80, y: 23, w: 0.6 }] },
          { name: 'quǎn piě', baseWidth: 8.5, taper: 'tail', hasBristles: true, pts: [{ x: 68, y: 22, w: 1.1 }, { x: 60, y: 36, w: 1.0 }, { x: 52, y: 50, w: 0.5 }] },
          { name: 'quǎn nà', baseWidth: 9.5, taper: 'tail', hasBristles: true, pts: [{ x: 66, y: 26, w: 0.7 }, { x: 74, y: 38, w: 1.2 }, { x: 85, y: 48, w: 0.5 }] },
          { name: 'huǒ diǎn 1', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 20, y: 66, w: 0.7 }, { x: 18, y: 77, w: 1.25 }, { x: 16, y: 83, w: 0.45 }] },
          { name: 'huǒ diǎn 2', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 38, y: 68, w: 0.65 }, { x: 40, y: 78, w: 1.2 }, { x: 41, y: 83, w: 0.5 }] },
          { name: 'huǒ diǎn 3', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 60, y: 68, w: 0.65 }, { x: 62, y: 78, w: 1.2 }, { x: 63, y: 83, w: 0.5 }] },
          { name: 'huǒ diǎn 4', baseWidth: 9.0, taper: 'tail', hasBristles: true, pts: [{ x: 80, y: 66, w: 0.7 }, { x: 84, y: 77, w: 1.35 }, { x: 86, y: 84, w: 0.55 }] }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 3. 厚德載物 - I-ťing / Kniha proměn
  // -----------------------------------------------------------------------
  {
    id: 'hou-de-zai-wu',
    category: 'classics',
    title: '厚德載物',
    pinyin: 'Hòu dé zài wù',
    source: '《易經》I-ťing · Kniha proměn (Hexagram Kūn 坤卦 · Xiangzhuan)',
    originEra: 'Raná dynastie Zhou (cca 1000 př. n. l.)',
    scriptStyle: 'Klasické úřednické monumentální písmo (Lìshū 隸書)',
    summaryCz: 'Velká ctnost unese veškerenstvo',
    translationCz: 'Země je bezbřehá a hluboká ve svém přijetí. Ušlechtilý člověk kultivuje velkou a ryzí ctnost (Hòudé), aby dokázal obejmout, nést a podepřít všechny bytosti světa.',
    translationEn: 'Great virtue carries all things. With boundless depth like the Earth, the noble person sustains all creatures with quiet magnanimity.',
    philosophyCz: 'Princip hexagramu Kun (Země): pravá velkorysost spočívá v nezměrné trpělivosti a schopnosti unést břemena celého světa bez zatrpklosti a pýchy.',
    quoteLines: [
      { hanzi: '地勢坤', pinyin: 'Dì shì kūn', cz: 'Krajina má povahu Země.' },
      { hanzi: '君子以厚德載物', pinyin: 'Jūnzǐ yǐ hòudé zài wù', cz: 'Ušlechtilý člověk svou hlubokou ctností nese veškerenstvo.' }
    ],
    characters: [
      {
        char: '厚',
        pinyin: 'hòu',
        tone: '4. klesavý tón',
        meaningCz: 'Hluboký, velkorysý, pevný, laskavý',
        radical: '厂 (útes / přístřeší)',
        strokeCount: 9,
        etymology: 'Zobrazuje pevný skalní převis (厂), pod nímž je bezpečné obydlí. Vyjadřuje spolehlivost a hloubku ušlechtilého charakteru.',
        strokes: [
          { name: 'héng (střešní oblouk)', baseWidth: 9.0, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 19, w: 0.6 }, { x: 48, y: 16, w: 1.15 }, { x: 78, y: 20, w: 0.65 }] },
          { name: 'piě (ochranný útes)', baseWidth: 9.8, taper: 'tail', hasBristles: true, pts: [{ x: 26, y: 20, w: 1.1 }, { x: 23, y: 48, w: 1.05 }, { x: 16, y: 82, w: 0.45 }] },
          { name: 'héng (středový nosník)', baseWidth: 8.0, taper: 'both', hasBristles: false, pts: [{ x: 38, y: 32, w: 0.65 }, { x: 56, y: 30, w: 1.05 }, { x: 74, y: 33, w: 0.6 }] },
          { name: 'kǒu shù', baseWidth: 7.2, taper: 'both', hasBristles: false, pts: [{ x: 42, y: 41, w: 0.7 }, { x: 41, y: 53, w: 1.05 }, { x: 40, y: 64, w: 0.55 }] },
          { name: 'kǒu zhé', baseWidth: 8.0, taper: 'both', hasBristles: true, pts: [{ x: 42, y: 42, w: 0.8 }, { x: 62, y: 40, w: 0.95 }, { x: 74, y: 42, w: 1.15 }, { x: 72, y: 53, w: 1.0 }, { x: 70, y: 63, w: 0.55 }] },
          { name: 'kǒu héng', baseWidth: 6.8, taper: 'both', hasBristles: false, pts: [{ x: 41, y: 63, w: 0.6 }, { x: 56, y: 62, w: 0.9 }, { x: 71, y: 63, w: 0.6 }] },
          { name: 'zǐ héng piě', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 34, y: 72, w: 0.65 }, { x: 58, y: 69, w: 1.1 }, { x: 48, y: 80, w: 0.9 }, { x: 40, y: 87, w: 0.45 }] },
          { name: 'wān gōu (pružný hák)', baseWidth: 9.5, taper: 'tail', hasBristles: true, pts: [{ x: 52, y: 68, w: 0.75 }, { x: 57, y: 78, w: 1.2 }, { x: 53, y: 92, w: 1.35 }, { x: 44, y: 88, w: 0.4 }] },
          { name: 'héng (široká báze)', baseWidth: 9.2, taper: 'both', hasBristles: true, pts: [{ x: 26, y: 82, w: 0.6 }, { x: 54, y: 80, w: 1.15 }, { x: 82, y: 82, w: 0.55 }] }
        ]
      },
      {
        char: '德',
        pinyin: 'dé',
        tone: '2. stoupavý tón',
        meaningCz: 'Ctnost, mravní síla, vnitřní integrita',
        radical: '彳 (krok / chůze)',
        strokeCount: 15,
        etymology: 'Znak složený z chůze (彳), přímého pohledu (直) a srdce (心). Znamená kráčet životem s čistým pohledem a nerozpolceným srdcem.',
        strokes: [
          { name: 'chì piě 1', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 26, y: 18, w: 0.7 }, { x: 21, y: 28, w: 1.2 }, { x: 15, y: 35, w: 0.45 }] },
          { name: 'chì piě 2', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 28, y: 36, w: 0.75 }, { x: 21, y: 50, w: 1.25 }, { x: 14, y: 62, w: 0.45 }] },
          { name: 'chì shù', baseWidth: 9.0, taper: 'tail', hasBristles: true, pts: [{ x: 21, y: 52, w: 0.8 }, { x: 22, y: 72, w: 1.15 }, { x: 20, y: 86, w: 0.5 }] },
          { name: 'shí héng', baseWidth: 8.2, taper: 'both', hasBristles: false, pts: [{ x: 42, y: 22, w: 0.6 }, { x: 60, y: 20, w: 1.05 }, { x: 78, y: 23, w: 0.6 }] },
          { name: 'shí shù', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 60, y: 13, w: 0.75 }, { x: 60, y: 26, w: 1.2 }, { x: 59, y: 33, w: 0.55 }] },
          { name: 'mù shù', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 45, y: 35, w: 0.7 }, { x: 44, y: 48, w: 1.05 }, { x: 43, y: 58, w: 0.55 }] },
          { name: 'mù zhé', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 45, y: 36, w: 0.8 }, { x: 64, y: 34, w: 0.95 }, { x: 74, y: 36, w: 1.2 }, { x: 72, y: 48, w: 1.0 }, { x: 70, y: 58, w: 0.55 }] },
          { name: 'mù héng 1', baseWidth: 6.5, taper: 'both', hasBristles: false, pts: [{ x: 45, y: 44, w: 0.6 }, { x: 58, y: 43, w: 0.9 }, { x: 71, y: 45, w: 0.6 }] },
          { name: 'mù héng 2', baseWidth: 6.5, taper: 'both', hasBristles: false, pts: [{ x: 44, y: 52, w: 0.6 }, { x: 58, y: 51, w: 0.9 }, { x: 71, y: 53, w: 0.6 }] },
          { name: 'xīn wò gōu', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 40, y: 72, w: 0.7 }, { x: 52, y: 85, w: 1.35 }, { x: 72, y: 84, w: 1.25 }, { x: 82, y: 72, w: 0.4 }] },
          { name: 'xīn diǎn', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 58, y: 68, w: 0.7 }, { x: 62, y: 74, w: 1.2 }, { x: 64, y: 78, w: 0.5 }] }
        ]
      },
      {
        char: '載',
        pinyin: 'zài',
        tone: '4. klesavý tón',
        meaningCz: 'Nést, vézt, pojmout, zachytit',
        radical: '車 (vůz / kočár)',
        strokeCount: 10,
        etymology: 'Zobrazuje těžký vůz (車) nesoucí náklad s ochranným kopím (戈). Znamená schopnost unést velkou váhu osudu s klidem a odhodláním.',
        strokes: [
          { name: 'héng', baseWidth: 8.2, taper: 'both', hasBristles: false, pts: [{ x: 24, y: 22, w: 0.65 }, { x: 46, y: 20, w: 1.1 }, { x: 68, y: 23, w: 0.6 }] },
          { name: 'shù', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 44, y: 13, w: 0.75 }, { x: 45, y: 26, w: 1.15 }, { x: 43, y: 35, w: 0.55 }] },
          { name: 'chē héng', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 26, y: 35, w: 0.6 }, { x: 42, y: 34, w: 0.95 }, { x: 58, y: 36, w: 0.6 }] },
          { name: 'chē kǒu zhé', baseWidth: 7.8, taper: 'both', hasBristles: true, pts: [{ x: 28, y: 44, w: 0.75 }, { x: 44, y: 42, w: 0.9 }, { x: 56, y: 44, w: 1.15 }, { x: 54, y: 55, w: 0.95 }, { x: 52, y: 64, w: 0.5 }] },
          { name: 'chē cháng shù', baseWidth: 9.8, taper: 'tail', hasBristles: true, pts: [{ x: 42, y: 27, w: 0.8 }, { x: 41, y: 58, w: 1.25 }, { x: 38, y: 88, w: 0.45 }] },
          { name: 'gē xié gōu (šikmý oštěp)', baseWidth: 12.0, taper: 'tail', hasBristles: true, pts: [{ x: 62, y: 16, w: 0.75 }, { x: 68, y: 38, w: 1.15 }, { x: 76, y: 64, w: 1.4 }, { x: 84, y: 84, w: 1.25 }, { x: 88, y: 74, w: 0.4 }] },
          { name: 'piě', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 74, y: 46, w: 0.75 }, { x: 66, y: 62, w: 1.15 }, { x: 56, y: 74, w: 0.5 }] },
          { name: 'diǎn (pečeť)', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 78, y: 22, w: 0.7 }, { x: 83, y: 28, w: 1.25 }, { x: 85, y: 34, w: 0.5 }] }
        ]
      },
      {
        char: '物',
        pinyin: 'wù',
        tone: '4. klesavý tón',
        meaningCz: 'Bytosti, veškerenstvo, stvoření, věci',
        radical: '牛 (býk / síla)',
        strokeCount: 8,
        etymology: 'Znak složený z býka (牛 - posvátné zvíře plodnosti a země) a praporečníka (勿). Znamená rozmanitost a mnohost veškerého stvoření pod nebesy.',
        strokes: [
          { name: 'niú piě', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 26, y: 22, w: 0.75 }, { x: 21, y: 32, w: 1.2 }, { x: 16, y: 40, w: 0.45 }] },
          { name: 'niú héng', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 15, y: 40, w: 0.65 }, { x: 28, y: 38, w: 1.1 }, { x: 42, y: 41, w: 0.65 }] },
          { name: 'niú tí', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 14, y: 64, w: 0.7 }, { x: 25, y: 58, w: 1.15 }, { x: 38, y: 52, w: 0.4 }] },
          { name: 'niú shù', baseWidth: 9.5, taper: 'tail', hasBristles: true, pts: [{ x: 32, y: 18, w: 0.8 }, { x: 31, y: 48, w: 1.2 }, { x: 29, y: 82, w: 0.5 }] },
          { name: 'wù piě', baseWidth: 8.8, taper: 'tail', hasBristles: false, pts: [{ x: 58, y: 20, w: 0.75 }, { x: 52, y: 34, w: 1.2 }, { x: 44, y: 46, w: 0.5 }] },
          { name: 'wù zhé gōu', baseWidth: 9.8, taper: 'tail', hasBristles: true, pts: [{ x: 54, y: 24, w: 0.8 }, { x: 74, y: 22, w: 1.1 }, { x: 84, y: 24, w: 1.3 }, { x: 80, y: 56, w: 1.05 }, { x: 74, y: 84, w: 1.35 }, { x: 64, y: 78, w: 0.4 }] },
          { name: 'piě 1', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 62, y: 40, w: 0.7 }, { x: 55, y: 58, w: 1.15 }, { x: 48, y: 72, w: 0.45 }] },
          { name: 'piě 2', baseWidth: 8.2, taper: 'tail', hasBristles: true, pts: [{ x: 72, y: 42, w: 0.75 }, { x: 66, y: 62, w: 1.2 }, { x: 56, y: 80, w: 0.45 }] }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 4. 自強不息 - I-ťing / Kniha proměn (Qian)
  // -----------------------------------------------------------------------
  {
    id: 'zi-qiang-bu-xi',
    category: 'classics',
    title: '自強不息',
    pinyin: 'Zì qiáng bù xī',
    source: '《易經》I-ťing · Kniha proměn (Hexagram Qián 乾卦 · Xiangzhuan)',
    originEra: 'Raná dynastie Zhou',
    scriptStyle: 'Pevné a rytmické písmo (Kǎishū 楷書)',
    summaryCz: 'Neustále se vnitřně posiluj',
    translationCz: 'Pohyb nebes je rázný, mocný a nikdy neustává. Ušlechtilý člověk neúnavně posiluje svou mysl, vytrvale překonává překážky a nikdy se nevzdává malomyslnosti.',
    translationEn: 'As heaven maintains vigor through movement, so the noble person unceasingly strengthens the inner self.',
    philosophyCz: 'Princip hexagramu Qian (Nebe): kosmická tvořivá síla je neúnavná. Skutečné sebezdokonalování nezná prokrastinaci ani výmluvy; je každodenní tichou prací na vlastním charakteru.',
    quoteLines: [
      { hanzi: '天行健', pinyin: 'Tiān xíng jiàn', cz: 'Běh nebes je mocný a pevný.' },
      { hanzi: '君子以自強不息', pinyin: 'Jūnzǐ yǐ zìqiáng bù xī', cz: 'Ušlechtilý člověk se neúnavně posiluje a nikdy neustává.' }
    ],
    characters: [
      {
        char: '自',
        pinyin: 'zì',
        tone: '4. klesavý tón',
        meaningCz: 'Sám, osobně, přirozeně, od sebe',
        radical: '自 (nos / já)',
        strokeCount: 6,
        etymology: 'Zobrazuje nos jako střed lidské tváře a symbol vědomí sebe sama.',
        strokes: [
          { name: 'piě', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 53, y: 15, w: 0.75 }, { x: 47, y: 22, w: 1.15 }, { x: 42, y: 26, w: 0.5 }] },
          { name: 'shù', baseWidth: 8.5, taper: 'both', hasBristles: false, pts: [{ x: 36, y: 28, w: 0.7 }, { x: 35, y: 54, w: 1.1 }, { x: 33, y: 80, w: 0.55 }] },
          { name: 'héng zhé', baseWidth: 9.2, taper: 'both', hasBristles: true, pts: [{ x: 36, y: 29, w: 0.8 }, { x: 56, y: 27, w: 0.95 }, { x: 68, y: 29, w: 1.25 }, { x: 66, y: 55, w: 1.05 }, { x: 64, y: 80, w: 0.55 }] },
          { name: 'nèi héng 1', baseWidth: 7.0, taper: 'both', hasBristles: false, pts: [{ x: 36, y: 46, w: 0.6 }, { x: 50, y: 45, w: 0.9 }, { x: 65, y: 46, w: 0.6 }] },
          { name: 'nèi héng 2', baseWidth: 7.0, taper: 'both', hasBristles: false, pts: [{ x: 35, y: 63, w: 0.6 }, { x: 50, y: 62, w: 0.9 }, { x: 65, y: 63, w: 0.6 }] },
          { name: 'dǐ héng', baseWidth: 7.8, taper: 'both', hasBristles: true, pts: [{ x: 34, y: 80, w: 0.65 }, { x: 50, y: 79, w: 1.0 }, { x: 65, y: 80, w: 0.65 }] }
        ]
      },
      {
        char: '強',
        pinyin: 'qiáng',
        tone: '2. stoupavý tón',
        meaningCz: 'Silný, mocný, houževnatý, nepoddajný',
        radical: '弓 (luk)',
        strokeCount: 12,
        etymology: 'Složeno z napjatého tětivového luku (弓) a houževnatého hmyzu (虽/虫). Znamená pružnou vnitřní sílu, která se ohne, ale nikdy nezlomí.',
        strokes: [
          { name: 'gōng héng zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 20, w: 0.7 }, { x: 36, y: 18, w: 1.05 }, { x: 44, y: 21, w: 1.2 }, { x: 38, y: 32, w: 0.95 }, { x: 26, y: 38, w: 0.55 }] },
          { name: 'gōng héng', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 26, y: 39, w: 0.65 }, { x: 38, y: 37, w: 1.0 }, { x: 44, y: 39, w: 0.6 }] },
          { name: 'gōng gōu', baseWidth: 9.5, taper: 'tail', hasBristles: true, pts: [{ x: 44, y: 40, w: 0.75 }, { x: 24, y: 54, w: 1.1 }, { x: 34, y: 82, w: 1.35 }, { x: 22, y: 80, w: 0.4 }] },
          { name: 'kǒu zhé', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 54, y: 22, w: 0.75 }, { x: 76, y: 20, w: 1.05 }, { x: 74, y: 38, w: 0.8 }, { x: 52, y: 40, w: 0.6 }] },
          { name: 'chóng shù', baseWidth: 8.5, taper: 'tail', hasBristles: true, pts: [{ x: 66, y: 34, w: 0.8 }, { x: 67, y: 64, w: 1.25 }, { x: 65, y: 86, w: 0.5 }] },
          { name: 'chóng tí', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 52, y: 76, w: 0.7 }, { x: 66, y: 71, w: 1.2 }, { x: 82, y: 64, w: 0.4 }] },
          { name: 'chóng diǎn', baseWidth: 8.8, taper: 'tail', hasBristles: false, pts: [{ x: 76, y: 52, w: 0.7 }, { x: 82, y: 62, w: 1.3 }, { x: 85, y: 72, w: 0.5 }] }
        ]
      },
      {
        char: '不',
        pinyin: 'bù',
        tone: '4. klesavý tón',
        meaningCz: 'Ne, zápor, zastavení, překonání',
        radical: '一 (jeden)',
        strokeCount: 4,
        etymology: 'Starověký piktogram ptáka letícího k nebi, který se nechce vrátit na zem. Znamená odmítnutí ustrnutí a setrvání na místě.',
        strokes: [
          { name: 'héng (nebeský strop)', baseWidth: 9.8, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 22, w: 0.65 }, { x: 50, y: 19, w: 1.15 }, { x: 82, y: 23, w: 0.6 }] },
          { name: 'piě (letící křídlo)', baseWidth: 9.0, taper: 'tail', hasBristles: true, pts: [{ x: 48, y: 24, w: 1.15 }, { x: 36, y: 48, w: 1.05 }, { x: 18, y: 74, w: 0.45 }] },
          { name: 'shù (svislá osa)', baseWidth: 10.2, taper: 'tail', hasBristles: true, pts: [{ x: 50, y: 24, w: 0.85 }, { x: 51, y: 54, w: 1.25 }, { x: 49, y: 86, w: 0.5 }] },
          { name: 'diǎn (pečeť)', baseWidth: 9.2, taper: 'tail', hasBristles: false, pts: [{ x: 66, y: 44, w: 0.75 }, { x: 76, y: 58, w: 1.35 }, { x: 82, y: 70, w: 0.5 }] }
        ]
      },
      {
        char: '息',
        pinyin: 'xī',
        tone: '1. vysoký rovný tón',
        meaningCz: 'Dech, odpočinek, ustat, pulzování života',
        radical: '心 (srdce)',
        strokeCount: 10,
        etymology: 'Znak složený z nosu (自 - dýchání) a srdce (心 - tep). Znamená dech života, který proudí bez ustání od narození až do konce.',
        strokes: [
          { name: 'zì piě', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 52, y: 13, w: 0.75 }, { x: 47, y: 19, w: 1.15 }, { x: 42, y: 24, w: 0.5 }] },
          { name: 'zì shù', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 38, y: 25, w: 0.7 }, { x: 37, y: 44, w: 1.1 }, { x: 36, y: 58, w: 0.55 }] },
          { name: 'zì héng zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 38, y: 26, w: 0.8 }, { x: 54, y: 24, w: 0.95 }, { x: 64, y: 26, w: 1.2 }, { x: 62, y: 44, w: 1.0 }, { x: 60, y: 58, w: 0.55 }] },
          { name: 'zì héng', baseWidth: 6.8, taper: 'both', hasBristles: false, pts: [{ x: 38, y: 37, w: 0.6 }, { x: 50, y: 36, w: 0.9 }, { x: 62, y: 37, w: 0.6 }] },
          { name: 'xīn wò gōu', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 32, y: 71, w: 0.7 }, { x: 46, y: 86, w: 1.35 }, { x: 68, y: 84, w: 1.25 }, { x: 80, y: 73, w: 0.4 }] },
          { name: 'xīn diǎn', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 54, y: 68, w: 0.7 }, { x: 58, y: 74, w: 1.2 }, { x: 60, y: 79, w: 0.5 }] }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 5. 知足常樂 - Laozi & Lidová moudrost
  // -----------------------------------------------------------------------
  {
    id: 'zhi-zu-chang-le',
    category: 'daoism',
    title: '知足常樂',
    pinyin: 'Zhī zú cháng lè',
    source: '《道德經》Laozi (kap. 44) & Tradiční moudrost',
    originEra: 'Starověká Čína',
    scriptStyle: 'Harmonické plynutí štětce (Xíngshū 行書)',
    summaryCz: 'Kdo zná míru, je trvale šťasten',
    translationCz: 'Kdo zná své meze a umí se zastavit, vyhne se nebezpečí. Kdo dokáže být vděčný za přítomný okamžik a netouží po nekonečném hromadění pomíjivostí, nachází trvalou radost v srdci.',
    translationEn: 'He who knows contentment is always happy. Freedom from insatiable desire brings perpetual peace.',
    philosophyCz: 'Spokojenost (Zhīzú) není pasivní rezignace, nýbrž hluboké vnitřní osvobození od nenasytnosti mysli. Člověk, který nepotřebuje víc, je bohatší než ten, kdo vlastní všechno a stále strádá.',
    quoteLines: [
      { hanzi: '知足不辱', pinyin: 'Zhī zú bù rǔ', cz: 'Kdo zná míru, nedočká se potupy.' },
      { hanzi: '知止不殆', pinyin: 'Zhī zhǐ bù dài', cz: 'Kdo ví, kdy se zastavit, neocitne se v nebezpečí.' },
      { hanzi: '可以長久', pinyin: 'Kě yǐ cháng jiǔ', cz: 'Jen tak lze setrvat v míru a trvalosti.' }
    ],
    characters: [
      {
        char: '知',
        pinyin: 'zhī',
        tone: '1. vysoký tón',
        meaningCz: 'Vědět, poznat, uvědomovat si, moudrost',
        radical: '矢 (šíp)',
        strokeCount: 8,
        etymology: 'Znak složený ze šípu (矢) a úst (口). Znamená vyslovit pravdu přesně a přímo, jako šíp zasahující střed terče.',
        strokes: [
          { name: 'piě', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 34, y: 18, w: 0.75 }, { x: 26, y: 28, w: 1.15 }, { x: 18, y: 36, w: 0.45 }] },
          { name: 'héng', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 16, y: 38, w: 0.65 }, { x: 32, y: 35, w: 1.1 }, { x: 48, y: 38, w: 0.65 }] },
          { name: 'shù', baseWidth: 8.8, taper: 'tail', hasBristles: false, pts: [{ x: 30, y: 28, w: 0.8 }, { x: 29, y: 52, w: 1.15 }, { x: 26, y: 78, w: 0.5 }] },
          { name: 'diǎn', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 36, y: 46, w: 0.7 }, { x: 42, y: 54, w: 1.2 }, { x: 46, y: 62, w: 0.5 }] },
          { name: 'kǒu shù', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 56, y: 38, w: 0.7 }, { x: 55, y: 54, w: 1.05 }, { x: 54, y: 72, w: 0.55 }] },
          { name: 'kǒu zhé', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 56, y: 39, w: 0.8 }, { x: 74, y: 37, w: 0.95 }, { x: 84, y: 39, w: 1.2 }, { x: 82, y: 56, w: 1.0 }, { x: 80, y: 71, w: 0.55 }] },
          { name: 'kǒu héng', baseWidth: 7.0, taper: 'both', hasBristles: false, pts: [{ x: 55, y: 71, w: 0.6 }, { x: 68, y: 70, w: 0.9 }, { x: 81, y: 71, w: 0.6 }] }
        ]
      },
      {
        char: '足',
        pinyin: 'zú',
        tone: '2. stoupavý tón',
        meaningCz: 'Dostatek, plnost, chodidlo, stát pevně',
        radical: '足 (chodidlo)',
        strokeCount: 7,
        etymology: 'Zobrazuje lidské koleno (口) a chodidlo spočívající na zemi (止). Znamená stát pevně nohama na zemi a být plně nasycen.',
        strokes: [
          { name: 'kǒu shù', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 34, y: 18, w: 0.7 }, { x: 33, y: 32, w: 1.05 }, { x: 32, y: 44, w: 0.55 }] },
          { name: 'kǒu zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 34, y: 20, w: 0.8 }, { x: 54, y: 17, w: 0.95 }, { x: 68, y: 20, w: 1.2 }, { x: 66, y: 32, w: 1.0 }, { x: 64, y: 43, w: 0.55 }] },
          { name: 'kǒu héng', baseWidth: 7.2, taper: 'both', hasBristles: false, pts: [{ x: 33, y: 43, w: 0.6 }, { x: 50, y: 41, w: 0.9 }, { x: 65, y: 43, w: 0.6 }] },
          { name: 'shù', baseWidth: 9.0, taper: 'both', hasBristles: true, pts: [{ x: 50, y: 44, w: 0.8 }, { x: 50, y: 60, w: 1.2 }, { x: 48, y: 72, w: 0.6 }] },
          { name: 'piě', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 48, y: 56, w: 0.8 }, { x: 36, y: 68, w: 1.15 }, { x: 22, y: 78, w: 0.45 }] },
          { name: 'nà (pevné chodidlo)', baseWidth: 12.0, taper: 'tail', hasBristles: true, pts: [{ x: 48, y: 58, w: 0.75 }, { x: 62, y: 70, w: 1.2 }, { x: 78, y: 82, w: 1.45 }, { x: 88, y: 83, w: 0.35 }] }
        ]
      },
      {
        char: '常',
        pinyin: 'cháng',
        tone: '2. stoupavý tón',
        meaningCz: 'Trvalý, věčný, stálý, neměnný řád',
        radical: '巾 (roucha / šátek)',
        strokeCount: 11,
        etymology: 'Zobrazuje vznešenou střechu a oděv vlající ve větru. Významem je to, co zůstává stálé a neměnné uprostřed pomíjivých změn světa.',
        strokes: [
          { name: 'shù (vrcholová kapka)', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 50, y: 12, w: 0.7 }, { x: 51, y: 20, w: 1.25 }, { x: 49, y: 26, w: 0.5 }] },
          { name: 'diǎn zuǒ', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 32, y: 20, w: 0.7 }, { x: 28, y: 28, w: 1.15 }, { x: 26, y: 34, w: 0.45 }] },
          { name: 'piě yòu', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 68, y: 18, w: 0.75 }, { x: 72, y: 26, w: 1.15 }, { x: 74, y: 32, w: 0.45 }] },
          { name: 'míng héng gōu', baseWidth: 8.8, taper: 'tail', hasBristles: true, pts: [{ x: 22, y: 35, w: 0.7 }, { x: 52, y: 32, w: 1.05 }, { x: 80, y: 35, w: 1.25 }, { x: 74, y: 44, w: 0.4 }] },
          { name: 'kǒu zhé', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 38, y: 44, w: 0.7 }, { x: 52, y: 42, w: 0.9 }, { x: 64, y: 44, w: 1.1 }, { x: 62, y: 54, w: 0.55 }] },
          { name: 'jīn shù', baseWidth: 8.5, taper: 'both', hasBristles: false, pts: [{ x: 34, y: 62, w: 0.7 }, { x: 33, y: 74, w: 1.05 }, { x: 31, y: 84, w: 0.5 }] },
          { name: 'jīn zhé gōu', baseWidth: 9.0, taper: 'tail', hasBristles: true, pts: [{ x: 34, y: 63, w: 0.75 }, { x: 54, y: 61, w: 0.95 }, { x: 68, y: 63, w: 1.25 }, { x: 66, y: 76, w: 1.0 }, { x: 63, y: 84, w: 0.4 }] },
          { name: 'jīn zhōng shù', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 50, y: 56, w: 0.8 }, { x: 50, y: 76, w: 1.25 }, { x: 48, y: 92, w: 0.45 }] }
        ]
      },
      {
        char: '樂',
        pinyin: 'lè / yuè',
        tone: '4. klesavý tón',
        meaningCz: 'Radost, potěšení, harmonická hudba',
        radical: '木 (dřevo / strom)',
        strokeCount: 15,
        etymology: 'Zobrazuje strunný hudební nástroj (hedvábné struny 幺) položený na zvučném dřevěném podstavci (木). Značí hlubokou harmonii duše znějící jako píseň.',
        strokes: [
          { name: 'bá héng', baseWidth: 8.2, taper: 'both', hasBristles: false, pts: [{ x: 36, y: 16, w: 0.65 }, { x: 50, y: 15, w: 1.05 }, { x: 64, y: 17, w: 0.6 }] },
          { name: 'yāo piě 1', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 34, y: 26, w: 0.7 }, { x: 26, y: 36, w: 1.15 }, { x: 30, y: 44, w: 0.5 }] },
          { name: 'yāo piě 2', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 66, y: 25, w: 0.7 }, { x: 74, y: 35, w: 1.15 }, { x: 70, y: 43, w: 0.5 }] },
          { name: 'mù shù (centrální sloup)', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 50, y: 22, w: 0.85 }, { x: 51, y: 56, w: 1.25 }, { x: 49, y: 88, w: 0.45 }] },
          { name: 'mù héng', baseWidth: 9.0, taper: 'both', hasBristles: true, pts: [{ x: 20, y: 58, w: 0.6 }, { x: 50, y: 55, w: 1.15 }, { x: 80, y: 58, w: 0.6 }] },
          { name: 'mù piě', baseWidth: 8.5, taper: 'tail', hasBristles: true, pts: [{ x: 50, y: 58, w: 1.1 }, { x: 34, y: 72, w: 1.05 }, { x: 18, y: 84, w: 0.45 }] },
          { name: 'mù nà', baseWidth: 10.0, taper: 'tail', hasBristles: true, pts: [{ x: 51, y: 58, w: 0.8 }, { x: 66, y: 72, w: 1.25 }, { x: 84, y: 83, w: 0.4 }] }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 6. 寧靜致遠 - Zhuge Liang (Dopis synovi)
  // -----------------------------------------------------------------------
  {
    id: 'ning-jing-zhi-yuan',
    category: 'wisdom',
    title: '寧靜致遠',
    pinyin: 'Níng jìng zhì yuǎn',
    source: 'Zhuge Liang 諸葛亮 · 《誡子書》Dopis synovi (cca 234 n. l.)',
    originEra: 'Období Tří říší (三国时期)',
    scriptStyle: 'Vznešený kurzívní styl (Xíngshū 行書)',
    summaryCz: 'V tichu dohlédneš nejdále',
    translationCz: 'Bez vnitřního ztišení a oproštění od shonu nelze jasně spatřit svůj životní cíl; bez hlubokého klidu mysli nelze dohlédnout k dalekým a vznešeným horizontům.',
    translationEn: 'Only through inner stillness can one reach far. Without tranquility, clarity of vision cannot be achieved.',
    philosophyCz: 'Moudrost slavného vojevůdce a mudrce Žu-ke Lianga: skutečně velkých a dalekosáhlých činů dosáhne pouze ten, jehož mysl není zmítána povrchními vášněmi a neklidem.',
    quoteLines: [
      { hanzi: '非淡泊無以明志', pinyin: 'Fēi dànbó wú yǐ míng zhì', cz: 'Bez skromnosti a oproštěnosti nelze vyjasnit své odhodlání.' },
      { hanzi: '非寧靜無以致遠', pinyin: 'Fēi níngjìng wú yǐ zhì yuǎn', cz: 'Bez hlubokého ticha nelze dosáhnout dalekých cílů.' }
    ],
    characters: [
      {
        char: '寧',
        pinyin: 'níng',
        tone: '2. stoupavý tón',
        meaningCz: 'Mír, klid, pokoj, tiché bezpečí',
        radical: '宀 (střecha)',
        strokeCount: 14,
        etymology: 'Zobrazuje střechu domu (宀), pod níž je stůl s miskou pokrmu (皿) a srdce naplněné pokojem (心). Symbolizuje domov bezpečí a ticha.',
        strokes: [
          { name: 'diǎn (vrchol střechy)', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 50, y: 13, w: 0.7 }, { x: 51, y: 20, w: 1.25 }, { x: 49, y: 25, w: 0.5 }] },
          { name: 'mián piě', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 26, y: 23, w: 0.75 }, { x: 22, y: 31, w: 1.15 }, { x: 19, y: 37, w: 0.45 }] },
          { name: 'mián gōu', baseWidth: 8.8, taper: 'tail', hasBristles: true, pts: [{ x: 26, y: 24, w: 0.75 }, { x: 52, y: 22, w: 1.05 }, { x: 78, y: 25, w: 1.25 }, { x: 74, y: 34, w: 0.45 }] },
          { name: 'xīn gōu', baseWidth: 9.5, taper: 'tail', hasBristles: true, pts: [{ x: 34, y: 44, w: 0.7 }, { x: 48, y: 55, w: 1.25 }, { x: 68, y: 53, w: 1.15 }, { x: 76, y: 44, w: 0.4 }] },
          { name: 'mǐn héng', baseWidth: 8.5, taper: 'both', hasBristles: false, pts: [{ x: 26, y: 64, w: 0.65 }, { x: 50, y: 62, w: 1.05 }, { x: 74, y: 65, w: 0.65 }] },
          { name: 'mǐn shù zuǒ', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 32, y: 64, w: 0.7 }, { x: 31, y: 75, w: 1.05 }, { x: 30, y: 84, w: 0.55 }] },
          { name: 'mǐn zhé', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 32, y: 65, w: 0.8 }, { x: 52, y: 63, w: 0.95 }, { x: 68, y: 65, w: 1.2 }, { x: 66, y: 76, w: 1.0 }, { x: 64, y: 84, w: 0.55 }] },
          { name: 'mǐn dǐ héng', baseWidth: 9.5, taper: 'both', hasBristles: true, pts: [{ x: 22, y: 84, w: 0.6 }, { x: 50, y: 82, w: 1.2 }, { x: 78, y: 85, w: 0.55 }] }
        ]
      },
      {
        char: '靜',
        pinyin: 'jìng',
        tone: '4. klesavý tón',
        meaningCz: 'Ticho, klid, nehybnost, ztišená mysl',
        radical: '靑 (modrá/azurová barva čistoty)',
        strokeCount: 14,
        etymology: 'Znak složený z barvy čistého azurového nebe (青) a zápolení (爭). Značí utišení veškerého vnitřního boje v čistém blankytu mysli.',
        strokes: [
          { name: 'qīng héng 1', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 20, y: 22, w: 0.65 }, { x: 32, y: 20, w: 1.05 }, { x: 44, y: 23, w: 0.6 }] },
          { name: 'qīng shù', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 32, y: 13, w: 0.75 }, { x: 32, y: 32, w: 1.15 }, { x: 31, y: 44, w: 0.55 }] },
          { name: 'qīng héng 2', baseWidth: 7.2, taper: 'both', hasBristles: false, pts: [{ x: 18, y: 34, w: 0.6 }, { x: 32, y: 33, w: 0.95 }, { x: 44, y: 35, w: 0.6 }] },
          { name: 'qīng cháng héng', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 14, y: 46, w: 0.6 }, { x: 32, y: 44, w: 1.1 }, { x: 48, y: 47, w: 0.6 }] },
          { name: 'yuè shù', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 20, y: 55, w: 0.7 }, { x: 19, y: 72, w: 1.05 }, { x: 18, y: 86, w: 0.55 }] },
          { name: 'yuè zhé gōu', baseWidth: 8.5, taper: 'tail', hasBristles: true, pts: [{ x: 20, y: 56, w: 0.75 }, { x: 36, y: 54, w: 0.95 }, { x: 44, y: 56, w: 1.2 }, { x: 42, y: 74, w: 1.0 }, { x: 38, y: 86, w: 0.4 }] },
          { name: 'zhēng piě', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 68, y: 16, w: 0.75 }, { x: 60, y: 26, w: 1.2 }, { x: 54, y: 34, w: 0.45 }] },
          { name: 'zhēng zhé', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 56, y: 36, w: 0.7 }, { x: 74, y: 33, w: 1.05 }, { x: 82, y: 36, w: 1.2 }, { x: 76, y: 50, w: 0.8 }, { x: 58, y: 56, w: 0.55 }] },
          { name: 'zhēng cháng shù', baseWidth: 10.2, taper: 'tail', hasBristles: true, pts: [{ x: 68, y: 34, w: 0.8 }, { x: 68, y: 64, w: 1.25 }, { x: 66, y: 92, w: 0.45 }] }
        ]
      },
      {
        char: '致',
        pinyin: 'zhì',
        tone: '4. klesavý tón',
        meaningCz: 'Dosáhnout, dospět k cíli, věnovat',
        radical: '至 (dorazit / cíl)',
        strokeCount: 10,
        etymology: 'Zobrazuje ptáka slétajícího na zemský povrch (至) a kráčející nohy (攵). Znamená bezpečně a vytrvale dospět k vytčenému cíli.',
        strokes: [
          { name: 'zhì héng', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 18, y: 24, w: 0.65 }, { x: 34, y: 22, w: 1.1 }, { x: 48, y: 25, w: 0.6 }] },
          { name: 'zhì piě zhé', baseWidth: 8.0, taper: 'both', hasBristles: true, pts: [{ x: 34, y: 25, w: 0.8 }, { x: 26, y: 40, w: 1.15 }, { x: 40, y: 39, w: 0.9 }, { x: 48, y: 38, w: 0.55 }] },
          { name: 'zhì shù', baseWidth: 8.5, taper: 'both', hasBristles: false, pts: [{ x: 32, y: 41, w: 0.7 }, { x: 31, y: 60, w: 1.1 }, { x: 30, y: 76, w: 0.55 }] },
          { name: 'pū piě', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 68, y: 20, w: 0.75 }, { x: 60, y: 36, w: 1.2 }, { x: 52, y: 50, w: 0.45 }] },
          { name: 'pū nà (rozbíhající se tah)', baseWidth: 11.5, taper: 'tail', hasBristles: true, pts: [{ x: 58, y: 38, w: 0.75 }, { x: 68, y: 54, w: 1.2 }, { x: 82, y: 74, w: 1.45 }, { x: 92, y: 78, w: 0.35 }] }
        ]
      },
      {
        char: '遠',
        pinyin: 'yuǎn',
        tone: '3. klesavě-stoupavý tón',
        meaningCz: 'Daleký, hluboký, vznešený horizont',
        radical: '辵 / 辶 (chůze / pohyb)',
        strokeCount: 13,
        etymology: 'Zobrazuje roucho královského poutníka (袁) kráčejícího po nekonečné zemské stezce (辶) vstříc dalekým obzorům.',
        strokes: [
          { name: 'yuán héng', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 42, y: 20, w: 0.65 }, { x: 58, y: 18, w: 1.05 }, { x: 74, y: 21, w: 0.6 }] },
          { name: 'kǒu zhé', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 46, y: 28, w: 0.7 }, { x: 60, y: 26, w: 0.9 }, { x: 70, y: 28, w: 1.15 }, { x: 68, y: 38, w: 0.55 }] },
          { name: 'yuán piě', baseWidth: 8.0, taper: 'tail', hasBristles: true, pts: [{ x: 56, y: 42, w: 0.9 }, { x: 46, y: 56, w: 1.15 }, { x: 38, y: 68, w: 0.5 }] },
          { name: 'yuán nà', baseWidth: 8.8, taper: 'tail', hasBristles: true, pts: [{ x: 58, y: 46, w: 0.75 }, { x: 68, y: 56, w: 1.2 }, { x: 78, y: 66, w: 0.5 }] },
          { name: 'chuò diǎn', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 22, y: 22, w: 0.65 }, { x: 26, y: 28, w: 1.25 }, { x: 27, y: 34, w: 0.5 }] },
          { name: 'chuò zhé', baseWidth: 8.8, taper: 'both', hasBristles: true, pts: [{ x: 16, y: 40, w: 0.7 }, { x: 26, y: 38, w: 1.1 }, { x: 21, y: 48, w: 0.95 }, { x: 28, y: 56, w: 1.2 }, { x: 19, y: 64, w: 0.6 }] },
          { name: 'píng nà (nekonečná stezka)', baseWidth: 14.5, taper: 'tail', hasBristles: true, pts: [{ x: 15, y: 65, w: 0.65 }, { x: 23, y: 76, w: 1.05 }, { x: 44, y: 82, w: 1.15 }, { x: 68, y: 86, w: 1.55 }, { x: 88, y: 87, w: 1.1 }, { x: 96, y: 85, w: 0.35 }] }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 7. 海納百川 - Lin Zexu / Staré přísloví
  // -----------------------------------------------------------------------
  {
    id: 'hai-na-bai-chuan',
    category: 'chengyu',
    title: '海納百川',
    pinyin: 'Hǎi nà bǎi chuān',
    source: 'Lin Zexu 林則徐 (1785–1850) & Starobylá čínská moudrost',
    originEra: 'Klasické čínské písemnictví',
    scriptStyle: 'Rozmáchlé monumentální písmo (Lìshū / Xíngshū)',
    summaryCz: 'Moře pojme sto řek svou pokorou',
    translationCz: 'Moře dokáže pojmout stovky dravých řek ze všech koutů země, neboť jeho moudrost a velikost tkví v tom, že dokáže spočinout v nejnižším bodě krajiny. Velký duch přijímá všechny proudy světa.',
    translationEn: 'The ocean embraces hundreds of rivers because of its capacity to remain at the lowest point. Humility creates boundless greatness.',
    philosophyCz: 'Kulturní metafora tolerance a otevřenosti mysli. Člověk s velkým srdcem nesoupeří s odlišnými názory a proudy myšlení, nýbrž je s velkorysostí integruje do svého nekonečného oceánu moudrosti.',
    quoteLines: [
      { hanzi: '海納百川', pinyin: 'Hǎi nà bǎi chuān', cz: 'Moře pojme stovky řek.' },
      { hanzi: '有容乃大', pinyin: 'Yǒu róng nǎi dà', cz: 'Velikost člověka spočívá v jeho schopnosti velkoryse přijímat.' }
    ],
    characters: [
      {
        char: '海',
        pinyin: 'hǎi',
        tone: '3. klesavě-stoupavý tón',
        meaningCz: 'Moře, oceán, bezbřehá hloubka',
        radical: '氵 (voda)',
        strokeCount: 10,
        etymology: 'Znak složený z vody (氵) a matky (每). Moře je pradávnou matkou veškerého života na Zemi.',
        strokes: [
          { name: 'diǎn 1', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 22, y: 20, w: 0.6 }, { x: 26, y: 26, w: 1.2 }, { x: 24, y: 32, w: 0.5 }] },
          { name: 'diǎn 2', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 19, y: 42, w: 0.6 }, { x: 23, y: 48, w: 1.15 }, { x: 22, y: 54, w: 0.5 }] },
          { name: 'tí', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 16, y: 76, w: 0.7 }, { x: 23, y: 69, w: 1.15 }, { x: 31, y: 60, w: 0.4 }] },
          { name: 'piě', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 60, y: 16, w: 0.75 }, { x: 52, y: 26, w: 1.15 }, { x: 44, y: 34, w: 0.5 }] },
          { name: 'héng', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 40, y: 34, w: 0.6 }, { x: 62, y: 31, w: 1.1 }, { x: 82, y: 33, w: 0.65 }] },
          { name: 'wān gōu', baseWidth: 9.8, taper: 'tail', hasBristles: true, pts: [{ x: 48, y: 36, w: 0.8 }, { x: 46, y: 62, w: 1.15 }, { x: 76, y: 60, w: 1.35 }, { x: 72, y: 78, w: 0.45 }] },
          { name: 'diǎn 1', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 56, y: 44, w: 0.7 }, { x: 58, y: 50, w: 1.2 }, { x: 60, y: 54, w: 0.5 }] }
        ]
      },
      {
        char: '納',
        pinyin: 'nà',
        tone: '4. klesavý tón',
        meaningCz: 'Přijmout, pojmout, vstřebat, uskladnit',
        radical: '糹 / 纟(hedvábí / vlákno)',
        strokeCount: 7,
        etymology: 'Zobrazuje hedvábnou nit (纟) a vcházení dovnitř (內). Znamená hladce vplétat a přijímat věci do celistvého svazku.',
        strokes: [
          { name: 'piě zhé 1', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 26, y: 18, w: 0.7 }, { x: 19, y: 32, w: 1.15 }, { x: 32, y: 36, w: 0.6 }] },
          { name: 'piě zhé 2', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 24, y: 36, w: 0.7 }, { x: 17, y: 50, w: 1.15 }, { x: 33, y: 54, w: 0.6 }] },
          { name: 'tí', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 18, y: 72, w: 0.7 }, { x: 26, y: 65, w: 1.15 }, { x: 36, y: 56, w: 0.4 }] },
          { name: 'nèi shù', baseWidth: 8.5, taper: 'both', hasBristles: false, pts: [{ x: 52, y: 22, w: 0.7 }, { x: 51, y: 52, w: 1.1 }, { x: 49, y: 82, w: 0.55 }] },
          { name: 'nèi héng zhé gōu', baseWidth: 9.2, taper: 'tail', hasBristles: true, pts: [{ x: 52, y: 23, w: 0.8 }, { x: 72, y: 20, w: 1.05 }, { x: 82, y: 22, w: 1.25 }, { x: 80, y: 54, w: 1.05 }, { x: 76, y: 82, w: 1.35 }, { x: 67, y: 77, w: 0.45 }] },
          { name: 'nèi piě', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 66, y: 32, w: 0.75 }, { x: 62, y: 48, w: 1.15 }, { x: 58, y: 62, w: 0.5 }] }
        ]
      },
      {
        char: '百',
        pinyin: 'bǎi',
        tone: '3. klesavě-stoupavý tón',
        meaningCz: 'Sto, stovky, nesčetné množství',
        radical: '白 (bílý / čistý)',
        strokeCount: 6,
        etymology: 'Znak složený z jedničky (一) a bílého světla (白). Symbolizuje plnost a nespočetnost paprsků vycházejících z jednoho pramene.',
        strokes: [
          { name: 'cháng héng', baseWidth: 9.5, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 20, w: 0.6 }, { x: 50, y: 17, w: 1.15 }, { x: 82, y: 21, w: 0.6 }] },
          { name: 'piě', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 50, y: 22, w: 1.15 }, { x: 42, y: 34, w: 1.0 }, { x: 36, y: 44, w: 0.5 }] },
          { name: 'shù', baseWidth: 8.5, taper: 'both', hasBristles: false, pts: [{ x: 32, y: 44, w: 0.7 }, { x: 31, y: 64, w: 1.1 }, { x: 29, y: 84, w: 0.55 }] },
          { name: 'héng zhé', baseWidth: 9.0, taper: 'both', hasBristles: true, pts: [{ x: 32, y: 45, w: 0.8 }, { x: 56, y: 42, w: 0.95 }, { x: 72, y: 45, w: 1.2 }, { x: 70, y: 65, w: 1.0 }, { x: 68, y: 84, w: 0.55 }] },
          { name: 'nèi héng', baseWidth: 7.0, taper: 'both', hasBristles: false, pts: [{ x: 32, y: 63, w: 0.6 }, { x: 50, y: 62, w: 0.9 }, { x: 69, y: 63, w: 0.6 }] },
          { name: 'dǐ héng', baseWidth: 7.8, taper: 'both', hasBristles: true, pts: [{ x: 30, y: 84, w: 0.65 }, { x: 50, y: 83, w: 1.0 }, { x: 69, y: 84, w: 0.65 }] }
        ]
      },
      {
        char: '川',
        pinyin: 'chuān',
        tone: '1. vysoký tón',
        meaningCz: 'Řeka, proudící toky, plynulost',
        radical: '川 (řeka)',
        strokeCount: 3,
        etymology: 'Starověký piktogram tří plynoucích ramen dravé řeky mezi dvěma břehy. Symbolizuje nekonečné a svobodné plynutí.',
        strokes: [
          { name: 'zuǒ piě shù', baseWidth: 9.0, taper: 'tail', hasBristles: true, pts: [{ x: 28, y: 18, w: 0.75 }, { x: 27, y: 48, w: 1.15 }, { x: 20, y: 78, w: 0.45 }] },
          { name: 'zhōng shù', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 50, y: 26, w: 0.75 }, { x: 50, y: 50, w: 1.1 }, { x: 49, y: 72, w: 0.5 }] },
          { name: 'yòu cháng shù', baseWidth: 11.0, taper: 'tail', hasBristles: true, pts: [{ x: 74, y: 14, w: 0.8 }, { x: 75, y: 50, w: 1.3 }, { x: 72, y: 88, w: 0.4 }] }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 8. 溫故知新 - Konfucius (Hovory)
  // -----------------------------------------------------------------------
  {
    id: 'wen-gu-zhi-xin',
    category: 'confucian',
    title: '溫故知新',
    pinyin: 'Wēn gù zhī xīn',
    source: '《論語》Konfucius · Hovory (kapitola Wei Zheng 為政)',
    originEra: 'Období Jar a podzimů (cca 500 př. n. l.)',
    scriptStyle: 'Klasické kultivované písmo (Kǎishū 楷書)',
    summaryCz: 'Oživovat staré a poznávat nové',
    translationCz: 'Mistr pravil: Kdo oživuje a hluboce promýšlí to staré, a přitom v něm neustále objevuje nové a svěží pravdy, ten může býti opravdovým učitelem lidí.',
    translationEn: 'Reviewing the old so as to learn the new, a person may indeed become a teacher of others.',
    philosophyCz: 'Základní konfuciánská metoda poznání: Tradice není mrtvým popelem minulosti, nýbrž živým ohněm. Hluboké pochopení kořenů umožňuje tvořit inovace, které mají smysl a trvalou hodnotu.',
    quoteLines: [
      { hanzi: '溫故而知新', pinyin: 'Wēn gù ér zhī xīn', cz: 'Oživuj staré poznání a objevuj v něm nové.' },
      { hanzi: '可以為師矣', pinyin: 'Kě yǐ wéi shī yǐ', cz: 'Teprve pak můžeš být skutečným mistrem a učitelem.' }
    ],
    characters: [
      {
        char: '溫',
        pinyin: 'wēn',
        tone: '1. vysoký tón',
        meaningCz: 'Zahřívat, oživovat, laskavý, vlažný',
        radical: '氵 (voda)',
        strokeCount: 12,
        etymology: 'Znak složený z vody (氵) a slunce zahřívajícího nádobu (昷). Znamená vřelým srdcem a trpělivým teplem oživovat staré vědění.',
        strokes: [
          { name: 'diǎn 1', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 20, y: 22, w: 0.6 }, { x: 24, y: 28, w: 1.2 }, { x: 22, y: 34, w: 0.5 }] },
          { name: 'diǎn 2', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 17, y: 44, w: 0.6 }, { x: 21, y: 49, w: 1.15 }, { x: 20, y: 55, w: 0.5 }] },
          { name: 'tí', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 15, y: 78, w: 0.7 }, { x: 22, y: 71, w: 1.15 }, { x: 30, y: 62, w: 0.4 }] },
          { name: 'rì shù', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 44, y: 20, w: 0.7 }, { x: 43, y: 35, w: 1.05 }, { x: 42, y: 48, w: 0.55 }] },
          { name: 'rì zhé', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 44, y: 21, w: 0.8 }, { x: 62, y: 19, w: 0.95 }, { x: 74, y: 21, w: 1.2 }, { x: 72, y: 35, w: 1.0 }, { x: 70, y: 47, w: 0.55 }] },
          { name: 'mǐn héng', baseWidth: 8.5, taper: 'both', hasBristles: false, pts: [{ x: 36, y: 58, w: 0.65 }, { x: 58, y: 56, w: 1.1 }, { x: 80, y: 59, w: 0.65 }] },
          { name: 'mǐn dǐ héng', baseWidth: 9.5, taper: 'both', hasBristles: true, pts: [{ x: 32, y: 84, w: 0.6 }, { x: 58, y: 82, w: 1.2 }, { x: 84, y: 85, w: 0.55 }] }
        ]
      },
      {
        char: '故',
        pinyin: 'gù',
        tone: '4. klesavý tón',
        meaningCz: 'Starý, dřívější, původní, příčina',
        radical: '攴 / 攵 (úder / konání)',
        strokeCount: 9,
        etymology: 'Zobrazuje starou nádobu (古) a ruku s pisátkem či holí (攵). Znamená dotýkat se minulosti a přezkoumávat původní příčiny.',
        strokes: [
          { name: 'shí héng', baseWidth: 8.2, taper: 'both', hasBristles: false, pts: [{ x: 18, y: 32, w: 0.65 }, { x: 34, y: 30, w: 1.1 }, { x: 50, y: 33, w: 0.6 }] },
          { name: 'shí shù', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 34, y: 16, w: 0.75 }, { x: 34, y: 34, w: 1.2 }, { x: 33, y: 48, w: 0.55 }] },
          { name: 'kǒu zhé', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 22, y: 52, w: 0.75 }, { x: 38, y: 50, w: 0.95 }, { x: 46, y: 52, w: 1.15 }, { x: 44, y: 68, w: 0.55 }] },
          { name: 'pū piě', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 72, y: 18, w: 0.75 }, { x: 64, y: 36, w: 1.2 }, { x: 54, y: 52, w: 0.45 }] },
          { name: 'pū nà', baseWidth: 11.5, taper: 'tail', hasBristles: true, pts: [{ x: 60, y: 38, w: 0.75 }, { x: 70, y: 56, w: 1.2 }, { x: 84, y: 78, w: 1.45 }, { x: 92, y: 82, w: 0.35 }] }
        ]
      },
      {
        char: '知',
        pinyin: 'zhī',
        tone: '1. vysoký tón',
        meaningCz: 'Poznat, vědět, moudrost',
        radical: '矢 (šíp)',
        strokeCount: 8,
        etymology: 'Znak složený ze šípu (矢) a úst (口). Mluvit přesně k jádru věci.',
        strokes: [
          { name: 'piě', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 34, y: 18, w: 0.75 }, { x: 26, y: 28, w: 1.15 }, { x: 18, y: 36, w: 0.45 }] },
          { name: 'héng', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 16, y: 38, w: 0.65 }, { x: 32, y: 35, w: 1.1 }, { x: 48, y: 38, w: 0.65 }] },
          { name: 'shù', baseWidth: 8.8, taper: 'tail', hasBristles: false, pts: [{ x: 30, y: 28, w: 0.8 }, { x: 29, y: 52, w: 1.15 }, { x: 26, y: 78, w: 0.5 }] },
          { name: 'kǒu zhé', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 56, y: 39, w: 0.8 }, { x: 74, y: 37, w: 0.95 }, { x: 84, y: 39, w: 1.2 }, { x: 82, y: 56, w: 1.0 }, { x: 80, y: 71, w: 0.55 }] },
          { name: 'kǒu héng', baseWidth: 7.0, taper: 'both', hasBristles: false, pts: [{ x: 55, y: 71, w: 0.6 }, { x: 68, y: 70, w: 0.9 }, { x: 81, y: 71, w: 0.6 }] }
        ]
      },
      {
        char: '新',
        pinyin: 'xīn',
        tone: '1. vysoký tón',
        meaningCz: 'Nové, čerstvé, svěží, obnova',
        radical: '斤 (sekera / obnova dřeva)',
        strokeCount: 13,
        etymology: 'Zobrazuje kácení stromu sekerou (斤) k získání vonného čerstvého dřeva (亲). Symbolizuje neustálou duchovní obnovu.',
        strokes: [
          { name: 'lì diǎn', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 34, y: 14, w: 0.7 }, { x: 35, y: 22, w: 1.2 }, { x: 33, y: 28, w: 0.5 }] },
          { name: 'lì héng', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 30, w: 0.6 }, { x: 34, y: 28, w: 1.1 }, { x: 50, y: 31, w: 0.65 }] },
          { name: 'mù shù', baseWidth: 9.0, taper: 'tail', hasBristles: true, pts: [{ x: 34, y: 46, w: 0.85 }, { x: 34, y: 68, w: 1.2 }, { x: 32, y: 88, w: 0.45 }] },
          { name: 'jīn piě 1', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 82, y: 16, w: 0.75 }, { x: 74, y: 28, w: 1.15 }, { x: 64, y: 38, w: 0.45 }] },
          { name: 'jīn piě 2', baseWidth: 8.8, taper: 'tail', hasBristles: true, pts: [{ x: 64, y: 40, w: 0.8 }, { x: 63, y: 62, w: 1.2 }, { x: 56, y: 84, w: 0.45 }] },
          { name: 'jīn cháng shù', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 84, y: 36, w: 0.8 }, { x: 85, y: 64, w: 1.3 }, { x: 82, y: 92, w: 0.4 }] }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 9. 床前明月光 - Li Bai (Noční ztišení)
  // -----------------------------------------------------------------------
  {
    id: 'chuang-qian-ming-yue-guang',
    category: 'poetry',
    title: '床前明月光',
    pinyin: 'Chuáng qián míng yuè guāng',
    source: 'Li Bai 李白 (701–762) · 《靜夜思》Noční ztišení',
    originEra: 'Zlatý věk dynastie Tang (唐代)',
    scriptStyle: 'Vlající poetické písmo (Xíngcǎo 行草)',
    summaryCz: 'Jasný měsíční svit před lůžkem',
    translationCz: 'Před mým lůžkem leží jasný měsíční svit; zdá se mi, jako by na zemi ležela bílá jinovatka. Pozvedám hlavu a hledím na zářící lunu, skláním hlavu a vzpomínám na domovinu.',
    translationEn: 'Moonlight pools before my bed, like frost upon the ground. Raising my head, I gaze at the bright moon; bowing my head, I long for home.',
    philosophyCz: 'Nejslavnější báseň čínských dějin. V geniální prostotě zachycuje okamžik nočního probuzení poutníka: chladné měsíční světlo spojuje vzdálený domov s osamělým pokojem cizince.',
    quoteLines: [
      { hanzi: '床前明月光', pinyin: 'Chuáng qián míng yuè guāng', cz: 'Před mým lůžkem leží jasný měsíční svit.' },
      { hanzi: '疑是地上霜', pinyin: 'Yí shì dì shàng shuāng', cz: 'Zdá se, jakoby na zemi ležela jinovatka.' },
      { hanzi: '舉頭望明月', pinyin: 'Jǔ tóu wàng míng yuè', cz: 'Pozvedám hlavu a hledím k jasnému měsíci.' },
      { hanzi: '低頭思故鄉', pinyin: 'Dī tóu sī gù xiāng', cz: 'Skláním hlavu ve vzpomínce na domovinu.' }
    ],
    characters: [
      {
        char: '床',
        pinyin: 'chuáng',
        tone: '2. stoupavý tón',
        meaningCz: 'Lůžko, zábradlí u studny, klidné spočinutí',
        radical: '广 (přístřeší)',
        strokeCount: 7,
        etymology: 'Zobrazuje dřevěné lůžko (木) umístěné pod ochrannou střechou (广). Místo nočního snění a básnického rozjímání.',
        strokes: [
          { name: 'guǎng diǎn', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 50, y: 13, w: 0.7 }, { x: 51, y: 22, w: 1.25 }, { x: 49, y: 28, w: 0.5 }] },
          { name: 'guǎng héng', baseWidth: 9.0, taper: 'both', hasBristles: true, pts: [{ x: 22, y: 30, w: 0.6 }, { x: 50, y: 28, w: 1.1 }, { x: 78, y: 31, w: 0.65 }] },
          { name: 'guǎng piě', baseWidth: 9.5, taper: 'tail', hasBristles: true, pts: [{ x: 30, y: 32, w: 1.1 }, { x: 26, y: 56, w: 1.05 }, { x: 16, y: 84, w: 0.45 }] },
          { name: 'mù shù', baseWidth: 9.8, taper: 'tail', hasBristles: true, pts: [{ x: 52, y: 36, w: 0.8 }, { x: 53, y: 64, w: 1.25 }, { x: 50, y: 88, w: 0.45 }] },
          { name: 'mù piě', baseWidth: 8.2, taper: 'tail', hasBristles: true, pts: [{ x: 52, y: 52, w: 1.05 }, { x: 38, y: 68, w: 1.15 }, { x: 26, y: 80, w: 0.4 }] },
          { name: 'mù nà', baseWidth: 9.8, taper: 'tail', hasBristles: true, pts: [{ x: 53, y: 54, w: 0.75 }, { x: 68, y: 68, w: 1.25 }, { x: 84, y: 80, w: 0.4 }] }
        ]
      },
      {
        char: '前',
        pinyin: 'qián',
        tone: '2. stoupavý tón',
        meaningCz: 'Vpředu, předem, vstříc budoucnosti',
        radical: '刀 / 刂 (nůž / směr)',
        strokeCount: 9,
        etymology: 'Původně zobrazovalo loďku na vodě směřující kupředu (舟) s veslem. Vyjadřuje postupování vpřed.',
        strokes: [
          { name: 'diǎn', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 38, y: 15, w: 0.7 }, { x: 42, y: 22, w: 1.2 }, { x: 44, y: 28, w: 0.5 }] },
          { name: 'piě', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 62, y: 14, w: 0.75 }, { x: 57, y: 23, w: 1.15 }, { x: 52, y: 28, w: 0.5 }] },
          { name: 'héng', baseWidth: 9.5, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 32, w: 0.6 }, { x: 50, y: 30, w: 1.15 }, { x: 82, y: 33, w: 0.6 }] },
          { name: 'yuè shù', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 28, y: 44, w: 0.7 }, { x: 27, y: 64, w: 1.05 }, { x: 26, y: 82, w: 0.55 }] },
          { name: 'dāo shù', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 64, y: 44, w: 0.75 }, { x: 64, y: 56, w: 1.1 }, { x: 63, y: 66, w: 0.5 }] },
          { name: 'dāo shù gōu', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 80, y: 40, w: 0.8 }, { x: 81, y: 66, w: 1.3 }, { x: 78, y: 86, w: 1.35 }, { x: 68, y: 82, w: 0.4 }] }
        ]
      },
      {
        char: '明',
        pinyin: 'míng',
        tone: '2. stoupavý tón',
        meaningCz: 'Jasný, zářící, průzračný, zřetelný',
        radical: '日 (slunce)',
        strokeCount: 8,
        etymology: 'Geniální spojení slunce (日) a měsíce (月). Dva největší nebeské zdroje světla spojené v jediném znaku pro dokonalý jas.',
        strokes: [
          { name: 'rì shù', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 20, y: 28, w: 0.7 }, { x: 19, y: 50, w: 1.1 }, { x: 18, y: 72, w: 0.55 }] },
          { name: 'rì zhé', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 20, y: 29, w: 0.8 }, { x: 34, y: 27, w: 0.95 }, { x: 42, y: 29, w: 1.2 }, { x: 40, y: 50, w: 1.0 }, { x: 38, y: 71, w: 0.55 }] },
          { name: 'rì héng 1', baseWidth: 6.8, taper: 'both', hasBristles: false, pts: [{ x: 20, y: 43, w: 0.6 }, { x: 30, y: 42, w: 0.9 }, { x: 40, y: 43, w: 0.6 }] },
          { name: 'yuè piě', baseWidth: 8.5, taper: 'tail', hasBristles: true, pts: [{ x: 56, y: 18, w: 0.75 }, { x: 55, y: 52, w: 1.15 }, { x: 49, y: 84, w: 0.5 }] },
          { name: 'yuè zhé gōu', baseWidth: 9.8, taper: 'tail', hasBristles: true, pts: [{ x: 56, y: 19, w: 0.8 }, { x: 74, y: 17, w: 1.0 }, { x: 84, y: 19, w: 1.25 }, { x: 82, y: 54, w: 1.05 }, { x: 78, y: 84, w: 1.35 }, { x: 68, y: 79, w: 0.45 }] },
          { name: 'yuè nèi héng 1', baseWidth: 6.8, taper: 'both', hasBristles: false, pts: [{ x: 56, y: 38, w: 0.6 }, { x: 68, y: 37, w: 0.9 }, { x: 80, y: 39, w: 0.6 }] },
          { name: 'yuè nèi héng 2', baseWidth: 6.8, taper: 'both', hasBristles: false, pts: [{ x: 55, y: 56, w: 0.6 }, { x: 67, y: 55, w: 0.9 }, { x: 79, y: 57, w: 0.6 }] }
        ]
      },
      {
        char: '月',
        pinyin: 'yuè',
        tone: '4. klesavý tón',
        meaningCz: 'Měsíc, luna, měsíční svit, čas',
        radical: '月 (měsíc)',
        strokeCount: 4,
        etymology: 'Starověký srpkovitý piktogram dorůstajícího měsíce na noční obloze s jemnými mráčky.',
        strokes: [
          { name: 'yuè piě (měsíční luk)', baseWidth: 9.5, taper: 'tail', hasBristles: true, pts: [{ x: 38, y: 16, w: 0.75 }, { x: 37, y: 50, w: 1.2 }, { x: 31, y: 86, w: 0.5 }] },
          { name: 'yuè zhé gōu (měsíční roh)', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 38, y: 17, w: 0.8 }, { x: 62, y: 15, w: 1.05 }, { x: 74, y: 17, w: 1.3 }, { x: 72, y: 52, w: 1.1 }, { x: 68, y: 84, w: 1.4 }, { x: 58, y: 79, w: 0.4 }] },
          { name: 'yuè nèi héng 1', baseWidth: 7.2, taper: 'both', hasBristles: false, pts: [{ x: 38, y: 38, w: 0.6 }, { x: 53, y: 37, w: 0.95 }, { x: 71, y: 39, w: 0.6 }] },
          { name: 'yuè nèi héng 2', baseWidth: 7.2, taper: 'both', hasBristles: false, pts: [{ x: 37, y: 58, w: 0.6 }, { x: 52, y: 57, w: 0.95 }, { x: 70, y: 59, w: 0.6 }] }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 10. 水滴石穿 - Hanshu (Kniha Hanů)
  // -----------------------------------------------------------------------
  {
    id: 'shui-di-shi-chuan',
    category: 'chengyu',
    title: '水滴石穿',
    pinyin: 'Shuǐ dī shí chuān',
    source: '《漢書》Dějiny dynastie Han (cca 1. stol. př. n. l.)',
    originEra: 'Dynastie Západní Han (西漢)',
    scriptStyle: 'Úřednické a kurzívní písmo (Lìshū / Xíngshū)',
    summaryCz: 'Kapka po kapce provrtá kámen',
    translationCz: 'I drobná kapka padající vytrvale na totéž místo dokáže v průběhu věků provrtat nejtvrdší balvan. Žádný lidský cíl není nedosažitelný, pokračuje-li člověk krok za krokem bez ustání.',
    translationEn: 'Constant dripping wears away stone. Relentless patience and small consistent efforts overcome the insurmountable.',
    philosophyCz: 'Zákon kumulativní síly vytrvalosti. Voda je měkká a tvárná, zatímco kámen je nepoddajný a tvrdý – a přesto voda kámen přemůže. Tichá pravidelnost vítězí nad prudkými, leč krátkými záchvaty síly.',
    quoteLines: [
      { hanzi: '水滴石穿', pinyin: 'Shuǐ dī shí chuān', cz: 'Kapky vody provrtají skálu.' },
      { hanzi: '繩鋸木斷', pinyin: 'Shéng jù mù duàn', cz: 'Třením provazu se přeřízne kmen stromu.' }
    ],
    characters: [
      {
        char: '水',
        pinyin: 'shuǐ',
        tone: '3. tón',
        meaningCz: 'Voda, trpělivý proud',
        radical: '水 (voda)',
        strokeCount: 4,
        etymology: 'Meandrující řeka se čtyřmi vířícími kapkami.',
        strokes: [
          { name: 'shù gōu', baseWidth: 11.5, taper: 'tail', hasBristles: true, pts: [{ x: 50, y: 12, w: 0.7 }, { x: 52, y: 26, w: 1.2 }, { x: 50, y: 52, w: 1.05 }, { x: 48, y: 78, w: 1.3 }, { x: 43, y: 84, w: 1.45 }, { x: 34, y: 77, w: 0.45 }] },
          { name: 'héng piě', baseWidth: 8.8, taper: 'both', hasBristles: true, pts: [{ x: 23, y: 36, w: 0.6 }, { x: 33, y: 32, w: 1.1 }, { x: 38, y: 35, w: 1.25 }, { x: 29, y: 46, w: 0.95 }, { x: 18, y: 55, w: 0.45 }] },
          { name: 'tí', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 15, y: 75, w: 0.65 }, { x: 25, y: 68, w: 1.15 }, { x: 36, y: 58, w: 0.4 }] },
          { name: 'nà', baseWidth: 12.8, taper: 'tail', hasBristles: true, pts: [{ x: 52, y: 46, w: 0.75 }, { x: 62, y: 58, w: 1.05 }, { x: 74, y: 72, w: 1.45 }, { x: 84, y: 78, w: 1.1 }, { x: 92, y: 77, w: 0.35 }] }
        ]
      },
      {
        char: '滴',
        pinyin: 'dī',
        tone: '1. vysoký tón',
        meaningCz: 'Kapka, kanout, dopadat rytmicky',
        radical: '氵 (voda)',
        strokeCount: 14,
        etymology: 'Znak složený z vody (氵) a hrotu (啇). Jednotlivá dopadající kapka vody jako ostrý hrot soustředěné pozornosti.',
        strokes: [
          { name: 'diǎn 1', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 20, y: 22, w: 0.6 }, { x: 24, y: 28, w: 1.2 }, { x: 22, y: 34, w: 0.5 }] },
          { name: 'diǎn 2', baseWidth: 7.5, taper: 'tail', hasBristles: false, pts: [{ x: 17, y: 44, w: 0.6 }, { x: 21, y: 49, w: 1.15 }, { x: 20, y: 55, w: 0.5 }] },
          { name: 'tí', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 15, y: 78, w: 0.7 }, { x: 22, y: 71, w: 1.15 }, { x: 30, y: 62, w: 0.4 }] },
          { name: 'lì diǎn', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 58, y: 15, w: 0.7 }, { x: 59, y: 22, w: 1.2 }, { x: 57, y: 28, w: 0.5 }] },
          { name: 'lì héng', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 42, y: 29, w: 0.6 }, { x: 60, y: 27, w: 1.1 }, { x: 80, y: 30, w: 0.65 }] },
          { name: 'shāng kǒu', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 48, y: 42, w: 0.7 }, { x: 62, y: 40, w: 0.95 }, { x: 74, y: 42, w: 1.15 }, { x: 72, y: 55, w: 0.55 }] },
          { name: 'dǐ kǒu zhé', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 46, y: 65, w: 0.75 }, { x: 62, y: 63, w: 0.95 }, { x: 76, y: 65, w: 1.2 }, { x: 74, y: 78, w: 1.0 }, { x: 72, y: 86, w: 0.5 }] }
        ]
      },
      {
        char: '石',
        pinyin: 'shí',
        tone: '2. stoupavý tón',
        meaningCz: 'Kámen, skála, pevnost',
        radical: '石 (kámen)',
        strokeCount: 5,
        etymology: 'Zobrazuje skalní převis (厂) a balvan pod ním ležící (口). Symbol neoblomnosti.',
        strokes: [
          { name: 'héng', baseWidth: 9.2, taper: 'both', hasBristles: true, pts: [{ x: 22, y: 24, w: 0.6 }, { x: 50, y: 22, w: 1.15 }, { x: 78, y: 25, w: 0.6 }] },
          { name: 'piě', baseWidth: 9.8, taper: 'tail', hasBristles: true, pts: [{ x: 44, y: 26, w: 1.15 }, { x: 34, y: 52, w: 1.05 }, { x: 18, y: 82, w: 0.45 }] },
          { name: 'kǒu shù', baseWidth: 8.0, taper: 'both', hasBristles: false, pts: [{ x: 42, y: 50, w: 0.7 }, { x: 41, y: 66, w: 1.05 }, { x: 40, y: 82, w: 0.55 }] },
          { name: 'kǒu zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 42, y: 52, w: 0.8 }, { x: 62, y: 49, w: 0.95 }, { x: 78, y: 52, w: 1.2 }, { x: 75, y: 68, w: 1.0 }, { x: 72, y: 82, w: 0.55 }] },
          { name: 'kǒu héng', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 41, y: 82, w: 0.6 }, { x: 56, y: 81, w: 0.9 }, { x: 73, y: 82, w: 0.6 }] }
        ]
      },
      {
        char: '穿',
        pinyin: 'chuān',
        tone: '1. vysoký tón',
        meaningCz: 'Provrtat, proniknout, projít skrz',
        radical: '穴 (jeskyně / otvor)',
        strokeCount: 9,
        etymology: 'Znak složený z jeskynního otvoru (穴) a zubů (牙). Znamená vytrvale se prokousávat a proniknout i tou nejtvrdší překážkou.',
        strokes: [
          { name: 'xuè diǎn', baseWidth: 8.2, taper: 'tail', hasBristles: false, pts: [{ x: 50, y: 13, w: 0.7 }, { x: 51, y: 21, w: 1.25 }, { x: 49, y: 26, w: 0.5 }] },
          { name: 'xuè héng gōu', baseWidth: 8.8, taper: 'tail', hasBristles: true, pts: [{ x: 26, y: 26, w: 0.75 }, { x: 52, y: 24, w: 1.05 }, { x: 78, y: 27, w: 1.25 }, { x: 72, y: 36, w: 0.45 }] },
          { name: 'yá héng', baseWidth: 8.0, taper: 'both', hasBristles: false, pts: [{ x: 30, y: 48, w: 0.65 }, { x: 50, y: 46, w: 1.05 }, { x: 72, y: 49, w: 0.6 }] },
          { name: 'yá shù gōu', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 50, y: 46, w: 0.85 }, { x: 50, y: 70, w: 1.25 }, { x: 48, y: 88, w: 1.35 }, { x: 38, y: 84, w: 0.4 }] },
          { name: 'yá wān piě', baseWidth: 8.5, taper: 'tail', hasBristles: true, pts: [{ x: 50, y: 62, w: 1.0 }, { x: 64, y: 72, w: 1.2 }, { x: 78, y: 84, w: 0.4 }] }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 11. 大智若愚 - Laozi & Su Shi
  // -----------------------------------------------------------------------
  {
    id: 'da-zhi-ruo-yu',
    category: 'wisdom',
    title: '大智若愚',
    pinyin: 'Dà zhì ruò yú',
    source: '《道德經》Laozi (kap. 45) & Su Shi 蘇軾 (dynastie Song)',
    originEra: 'Starověká Čína & Dynastie Song',
    scriptStyle: 'Uvolněný zenový styl (Xíngshū 行書)',
    summaryCz: 'Nejvyšší moudrost působí jako prostota',
    translationCz: 'Nejvyšší moudrost navenek působí jako prostota a neobratnost; skutečný mistr nevystavuje své vědění na odiv ani se nepovyšuje nad druhé. Ten, kdo ví, zůstává tichý.',
    translationEn: 'Supreme wisdom resembles foolish simplicity. True mastery does not flaunt itself; it remains quiet, humble, and unpretentious.',
    philosophyCz: 'Laoziovská i zenová zásada: pýcha a předvádění intelektuální nadřazenosti jsou znakem povrchnosti. Hluboké poznání se projevuje dětskou bezelstností a schopností naslouchat.',
    quoteLines: [
      { hanzi: '大智若愚', pinyin: 'Dà zhì ruò yú', cz: 'Nejvyšší moudrost působí jako prostota.' },
      { hanzi: '大巧若拙', pinyin: 'Dà qiǎo ruò zhuō', cz: 'Nejvyšší obratnost navenek vyhlíží jako neumělost.' }
    ],
    characters: [
      {
        char: '大',
        pinyin: 'dà',
        tone: '4. klesavý tón',
        meaningCz: 'Velký, nesmírný, vznešený',
        radical: '大 (velký člověk)',
        strokeCount: 3,
        etymology: 'Zobrazuje dospělého člověka stojícího s doširoka rozpřaženýma rukama a nohama, objímajícího celý svět.',
        strokes: [
          { name: 'cháng héng', baseWidth: 10.5, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 34, w: 0.6 }, { x: 50, y: 31, w: 1.15 }, { x: 82, y: 35, w: 0.6 }] },
          { name: 'piě (levé křídlo)', baseWidth: 11.2, taper: 'tail', hasBristles: true, pts: [{ x: 50, y: 16, w: 1.15 }, { x: 44, y: 44, w: 1.25 }, { x: 30, y: 70, w: 1.0 }, { x: 14, y: 86, w: 0.4 }] },
          { name: 'nà (pravé křídlo)', baseWidth: 12.8, taper: 'tail', hasBristles: true, pts: [{ x: 48, y: 36, w: 0.8 }, { x: 62, y: 56, w: 1.25 }, { x: 76, y: 74, w: 1.5 }, { x: 90, y: 84, w: 0.35 }] }
        ]
      },
      {
        char: '智',
        pinyin: 'zhì',
        tone: '4. klesavý tón',
        meaningCz: 'Moudrost, vhled, projasněné vědomí',
        radical: '日 (slunce)',
        strokeCount: 12,
        etymology: 'Znak složený z vědění (知) ozářeného slunečním světlem (日). Znamená poznání projasněné laskavým světlem pravdy.',
        strokes: [
          { name: 'shǐ piě', baseWidth: 7.8, taper: 'tail', hasBristles: false, pts: [{ x: 32, y: 14, w: 0.75 }, { x: 25, y: 24, w: 1.15 }, { x: 18, y: 32, w: 0.45 }] },
          { name: 'shǐ héng', baseWidth: 8.0, taper: 'both', hasBristles: false, pts: [{ x: 16, y: 32, w: 0.6 }, { x: 30, y: 30, w: 1.05 }, { x: 44, y: 33, w: 0.6 }] },
          { name: 'kǒu zhé', baseWidth: 7.5, taper: 'both', hasBristles: true, pts: [{ x: 54, y: 22, w: 0.75 }, { x: 70, y: 20, w: 0.95 }, { x: 80, y: 22, w: 1.2 }, { x: 78, y: 38, w: 0.55 }] },
          { name: 'rì shù', baseWidth: 8.2, taper: 'both', hasBristles: false, pts: [{ x: 34, y: 52, w: 0.7 }, { x: 33, y: 68, w: 1.05 }, { x: 32, y: 84, w: 0.55 }] },
          { name: 'rì zhé', baseWidth: 9.0, taper: 'both', hasBristles: true, pts: [{ x: 34, y: 54, w: 0.8 }, { x: 54, y: 51, w: 0.95 }, { x: 70, y: 54, w: 1.25 }, { x: 68, y: 68, w: 1.0 }, { x: 66, y: 84, w: 0.55 }] },
          { name: 'rì héng', baseWidth: 7.2, taper: 'both', hasBristles: false, pts: [{ x: 34, y: 68, w: 0.6 }, { x: 50, y: 67, w: 0.9 }, { x: 68, y: 69, w: 0.6 }] },
          { name: 'rì dǐ héng', baseWidth: 8.0, taper: 'both', hasBristles: true, pts: [{ x: 32, y: 84, w: 0.65 }, { x: 50, y: 83, w: 1.05 }, { x: 68, y: 84, w: 0.65 }] }
        ]
      },
      {
        char: '若',
        pinyin: 'ruò',
        tone: '4. klesavý tón',
        meaningCz: 'Jako, zdánlivě, jemně podobný',
        radical: '艸 (tráva)',
        strokeCount: 8,
        etymology: 'Poddajná tráva sklánějící se ve větru.',
        strokes: [
          { name: 'cǎo héng', baseWidth: 9.0, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 23, w: 0.55 }, { x: 35, y: 20, w: 1.1 }, { x: 58, y: 19, w: 0.95 }, { x: 80, y: 22, w: 0.6 }] },
          { name: 'cǎo shù', baseWidth: 8.0, taper: 'tail', hasBristles: false, pts: [{ x: 34, y: 13, w: 0.7 }, { x: 35, y: 22, w: 1.15 }, { x: 33, y: 31, w: 0.5 }] },
          { name: 'zhōng héng', baseWidth: 9.5, taper: 'both', hasBristles: true, pts: [{ x: 22, y: 44, w: 0.65 }, { x: 48, y: 40, w: 1.15 }, { x: 74, y: 42, w: 0.7 }] },
          { name: 'piě', baseWidth: 9.2, taper: 'tail', hasBristles: true, pts: [{ x: 49, y: 41, w: 1.2 }, { x: 38, y: 55, w: 1.05 }, { x: 22, y: 72, w: 0.75 }, { x: 12, y: 84, w: 0.4 }] },
          { name: 'kǒu zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 42, y: 60, w: 0.85 }, { x: 62, y: 57, w: 0.95 }, { x: 78, y: 60, w: 1.2 }, { x: 75, y: 74, w: 1.0 }, { x: 72, y: 84, w: 0.5 }] },
          { name: 'kǒu héng', baseWidth: 7.2, taper: 'both', hasBristles: false, pts: [{ x: 40, y: 84, w: 0.6 }, { x: 57, y: 82, w: 0.9 }, { x: 74, y: 83, w: 0.6 }] }
        ]
      },
      {
        char: '愚',
        pinyin: 'yú',
        tone: '2. stoupavý tón',
        meaningCz: 'Prostota, bezelstnost, naivní čistota',
        radical: '心 (srdce)',
        strokeCount: 13,
        etymology: 'Znak složený z opičky/pole (禺) a srdce (心). Znamená nevinnou, nefalšovanou a nezáludnou čistotu mysli bez postranních úmyslů.',
        strokes: [
          { name: 'shù', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 30, y: 16, w: 0.7 }, { x: 29, y: 32, w: 1.05 }, { x: 28, y: 48, w: 0.55 }] },
          { name: 'héng zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 30, y: 17, w: 0.8 }, { x: 52, y: 15, w: 0.95 }, { x: 72, y: 17, w: 1.2 }, { x: 70, y: 34, w: 1.0 }, { x: 68, y: 48, w: 0.55 }] },
          { name: 'zhōng shù', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 50, y: 16, w: 0.8 }, { x: 50, y: 34, w: 1.2 }, { x: 49, y: 52, w: 0.5 }] },
          { name: 'xīn wò gōu', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 30, y: 66, w: 0.7 }, { x: 46, y: 84, w: 1.35 }, { x: 70, y: 82, w: 1.25 }, { x: 82, y: 70, w: 0.4 }] },
          { name: 'xīn diǎn', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 52, y: 62, w: 0.7 }, { x: 56, y: 68, w: 1.2 }, { x: 58, y: 73, w: 0.5 }] }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 12. 春眠不覺曉 - Meng Haoran (Jarní rozbřesk)
  // -----------------------------------------------------------------------
  {
    id: 'chun-mian-bu-jue-xiao',
    category: 'poetry',
    title: '春眠不覺曉',
    pinyin: 'Chūn mián bù jué xiǎo',
    source: 'Meng Haoran 孟浩然 (689–740) · 《春曉》Jarní rozbřesk',
    originEra: 'Dynastie Tang (唐代)',
    scriptStyle: 'Živý jarní polokurzívní styl (Xíngshū 行書)',
    summaryCz: 'V jarním spánku nevnímám rozbřesk',
    translationCz: 'V sladkém jarním spánku jsem ani nepostřehl, jak svitlo ráno; odevšad kolem mne se ozývá radostný zpěv probuzených ptáků. V noci se přehnal vítr a déšť – kdopak ví, kolik květů spadlo do trávy?',
    translationEn: 'In spring sleep, one is unaware of dawn; everywhere I hear the singing birds. Night brought the sound of wind and rain—who knows how many blossoms have fallen?',
    philosophyCz: 'Oslava bezprostředního splynutí člověka s přírodním cyklem jara. Čistá vnímavost přítomného okamžiku bez lítosti nad pomíjivostí okvětních lístků.',
    quoteLines: [
      { hanzi: '春眠不覺曉', pinyin: 'Chūn mián bù jué xiǎo', cz: 'V jarním spánku jsem nevnímal rozbřesk.' },
      { hanzi: '處處聞啼鳥', pinyin: 'Chù chù wén tí niǎo', cz: 'Odevšad ke mně doléhá zpěv ptáků.' },
      { hanzi: '夜來風雨聲', pinyin: 'Yè lái fēng yǔ shēng', cz: 'V noci zněl šum větru a deště.' },
      { hanzi: '花落知多少', pinyin: 'Huā luò zhī duō shǎo', cz: 'Kdopak ví, kolik květů opadalo?' }
    ],
    characters: [
      {
        char: '春',
        pinyin: 'chūn',
        tone: '1. vysoký tón',
        meaningCz: 'Jaro, probuzení přírody, svěžest',
        radical: '日 (slunce)',
        strokeCount: 9,
        etymology: 'Zobrazuje klíčící rostliny vyrůstající ze země vstříc hřejivému jarnímu slunci (日).',
        strokes: [
          { name: 'sān héng 1', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 30, y: 18, w: 0.65 }, { x: 50, y: 16, w: 1.05 }, { x: 70, y: 19, w: 0.6 }] },
          { name: 'sān héng 2', baseWidth: 7.2, taper: 'both', hasBristles: false, pts: [{ x: 32, y: 28, w: 0.65 }, { x: 50, y: 26, w: 1.0 }, { x: 68, y: 29, w: 0.6 }] },
          { name: 'cháng héng', baseWidth: 9.5, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 38, w: 0.6 }, { x: 50, y: 36, w: 1.2 }, { x: 82, y: 39, w: 0.6 }] },
          { name: 'piě', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 50, y: 14, w: 1.2 }, { x: 42, y: 44, w: 1.15 }, { x: 26, y: 68, w: 0.9 }, { x: 14, y: 84, w: 0.4 }] },
          { name: 'nà', baseWidth: 11.8, taper: 'tail', hasBristles: true, pts: [{ x: 48, y: 38, w: 0.8 }, { x: 64, y: 56, w: 1.25 }, { x: 78, y: 72, w: 1.45 }, { x: 88, y: 80, w: 0.35 }] },
          { name: 'rì zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 38, y: 56, w: 0.75 }, { x: 52, y: 54, w: 0.95 }, { x: 64, y: 56, w: 1.2 }, { x: 62, y: 72, w: 1.0 }, { x: 60, y: 86, w: 0.55 }] }
        ]
      },
      {
        char: '眠',
        pinyin: 'mián',
        tone: '2. stoupavý tón',
        meaningCz: 'Spánek, odpočinek, zavřít oči',
        radical: '目 (oko)',
        strokeCount: 10,
        etymology: 'Znak složený z oka (目) a pokoje lidu (民). Zavřít oči a ponořit se do hlubokého ozdravného spánku.',
        strokes: [
          { name: 'mù shù', baseWidth: 7.8, taper: 'both', hasBristles: false, pts: [{ x: 22, y: 22, w: 0.7 }, { x: 21, y: 48, w: 1.1 }, { x: 20, y: 74, w: 0.55 }] },
          { name: 'mù zhé', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 22, y: 23, w: 0.8 }, { x: 34, y: 21, w: 0.95 }, { x: 42, y: 23, w: 1.2 }, { x: 40, y: 48, w: 1.0 }, { x: 38, y: 73, w: 0.55 }] },
          { name: 'mín héng zhé', baseWidth: 8.5, taper: 'both', hasBristles: true, pts: [{ x: 52, y: 22, w: 0.7 }, { x: 74, y: 19, w: 1.1 }, { x: 82, y: 22, w: 1.2 }, { x: 68, y: 38, w: 0.6 }] },
          { name: 'mín xié gōu', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 64, y: 36, w: 0.8 }, { x: 74, y: 58, w: 1.35 }, { x: 86, y: 82, w: 1.4 }, { x: 78, y: 86, w: 0.4 }] }
        ]
      },
      {
        char: '不',
        pinyin: 'bù',
        tone: '4. tón',
        meaningCz: 'Ne, bez vědomí',
        radical: '一 (jeden)',
        strokeCount: 4,
        etymology: 'Pták letící vzhůru k nebesům.',
        strokes: [
          { name: 'héng', baseWidth: 9.8, taper: 'both', hasBristles: true, pts: [{ x: 18, y: 22, w: 0.65 }, { x: 50, y: 19, w: 1.15 }, { x: 82, y: 23, w: 0.6 }] },
          { name: 'piě', baseWidth: 9.0, taper: 'tail', hasBristles: true, pts: [{ x: 48, y: 24, w: 1.15 }, { x: 36, y: 48, w: 1.05 }, { x: 18, y: 74, w: 0.45 }] },
          { name: 'shù', baseWidth: 10.2, taper: 'tail', hasBristles: true, pts: [{ x: 50, y: 24, w: 0.85 }, { x: 51, y: 54, w: 1.25 }, { x: 49, y: 86, w: 0.5 }] },
          { name: 'diǎn', baseWidth: 9.2, taper: 'tail', hasBristles: false, pts: [{ x: 66, y: 44, w: 0.75 }, { x: 76, y: 58, w: 1.35 }, { x: 82, y: 70, w: 0.5 }] }
        ]
      },
      {
        char: '曉',
        pinyin: 'xiǎo',
        tone: '3. klesavě-stoupavý tón',
        meaningCz: 'Rozbřesk, svítání, procitnutí, pochopení',
        radical: '日 (slunce)',
        strokeCount: 16,
        etymology: 'Znak složený ze slunce (日) a vysoké záře (堯). Slunce vycházející nad zemský horizont a přinášející světlo a probuzení.',
        strokes: [
          { name: 'rì shù', baseWidth: 7.5, taper: 'both', hasBristles: false, pts: [{ x: 20, y: 28, w: 0.7 }, { x: 19, y: 50, w: 1.1 }, { x: 18, y: 72, w: 0.55 }] },
          { name: 'rì zhé', baseWidth: 8.2, taper: 'both', hasBristles: true, pts: [{ x: 20, y: 29, w: 0.8 }, { x: 34, y: 27, w: 0.95 }, { x: 42, y: 29, w: 1.2 }, { x: 40, y: 50, w: 1.0 }, { x: 38, y: 71, w: 0.55 }] },
          { name: 'yáo shàng héng', baseWidth: 8.0, taper: 'both', hasBristles: false, pts: [{ x: 52, y: 20, w: 0.65 }, { x: 68, y: 18, w: 1.1 }, { x: 84, y: 21, w: 0.6 }] },
          { name: 'yáo shù', baseWidth: 8.5, taper: 'tail', hasBristles: false, pts: [{ x: 68, y: 12, w: 0.75 }, { x: 68, y: 28, w: 1.2 }, { x: 67, y: 38, w: 0.5 }] },
          { name: 'yáo wān gōu', baseWidth: 10.5, taper: 'tail', hasBristles: true, pts: [{ x: 64, y: 56, w: 0.8 }, { x: 74, y: 74, w: 1.35 }, { x: 86, y: 84, w: 1.35 }, { x: 76, y: 88, w: 0.4 }] }
        ]
      }
    ]
  }
];

// Color palettes for authentic Asian calligraphy rendering
export const INK_PALETTES = {
  sumi: {
    id: 'sumi',
    name: 'Sumi-e (濃墨)',
    description: 'Tradiční borovicová a lampová čerň s hedvábným leskem na papíru Xuan',
    washRgb: { r: 18, g: 20, b: 24 },
    bodyRgb: { r: 10, g: 12, b: 15 },
    spineRgb: { r: 240, g: 245, b: 250 },
    sealRgb: { r: 200, g: 30, b: 45 },
    haloOpacity: 0.22,
    paperBg: 'radial-gradient(ellipse at 50% 50%, #f4eee2 0%, #e8dcbe 100%)',
    paperClass: 'paper-sumi'
  },
  cinnabar: {
    id: 'cinnabar',
    name: 'Rumělka (朱砂)',
    description: 'Císařská posvátná rumělka užívaná k pečetění a rituálnímu zápisu',
    washRgb: { r: 190, g: 35, b: 45 },
    bodyRgb: { r: 160, g: 20, b: 30 },
    spineRgb: { r: 255, g: 220, b: 225 },
    sealRgb: { r: 140, g: 15, b: 25 },
    haloOpacity: 0.28,
    paperBg: 'radial-gradient(ellipse at 50% 50%, #faf4ed 0%, #ebdcc9 100%)',
    paperClass: 'paper-cinnabar'
  },
  cyanJade: {
    id: 'cyanJade',
    name: 'Nefritové světlo (碧水)',
    description: 'Bioluminiscenční azurový nefrit spojující tradici se světem HCODE.ART',
    washRgb: { r: 0, g: 230, b: 180 },
    bodyRgb: { r: 0, g: 180, b: 150 },
    spineRgb: { r: 220, g: 255, b: 250 },
    sealRgb: { r: 0, g: 255, b: 204 },
    haloOpacity: 0.35,
    paperBg: 'radial-gradient(ellipse at 50% 50%, #0d1620 0%, #070b10 100%)',
    paperClass: 'paper-jade'
  },
  goldLeaf: {
    id: 'goldLeaf',
    name: 'Plátkové zlato (泥金)',
    description: 'Starobylý zápis zlatým prachem na tmavém indigovém hedvábí',
    washRgb: { r: 245, g: 190, b: 60 },
    bodyRgb: { r: 215, g: 150, b: 20 },
    spineRgb: { r: 255, g: 245, b: 200 },
    sealRgb: { r: 210, g: 45, b: 45 },
    haloOpacity: 0.32,
    paperBg: 'radial-gradient(ellipse at 50% 50%, #0c1222 0%, #050811 100%)',
    paperClass: 'paper-gold'
  }
};
