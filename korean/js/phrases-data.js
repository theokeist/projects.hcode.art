// ═══════════════════════════════════════════════════════════
// HCODE.ART • 100 REAL KOREAN PHRASES & CONVERSATIONS
// Token breakdown, Politeness level, Czech gloss & Cultural tips
// ═══════════════════════════════════════════════════════════

window.KOREAN_PHRASES_DATA = [
  // ─── 1. POZDRAVY & SPOLEČENSKÁ ETIKETA ───
  {
    id: "p1",
    hangul: "안녕하세요!",
    roman: "Annyeonghaseyo!",
    cz: "Dobrý den! / Ahoj! (univerzální zdvořilý pozdrav)",
    cat: "greetings",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "안녕", role: "klid / pokoj / mír (安寧)" },
      { w: "하", role: "kořen slovesa 'dělat'" },
      { w: "세요", role: "zdvořilá žádací/oznamovací koncovka" }
    ],
    note: "Při pozdravu se mírně ukloňte (cca 15–30 stupňů) s rukama podél těla nebo sepnutýma před sebou."
  },
  {
    id: "p2",
    hangul: "반갑습니다!",
    roman: "Bangapseumnida!",
    cz: "Rád vás poznávám!",
    cat: "greetings",
    formality: "하십시오체 (Formální styl)",
    tokens: [
      { w: "반갑", role: "kořen slovesa 'být potěšen'" },
      { w: "습니다", role: "vysoká formální koncovka" }
    ],
    note: "Používá se zejména při prvním setkání nebo v oficiálním kontextu. Často ve spojení '만나서 반갑습니다'."
  },
  {
    id: "p3",
    hangul: "감사합니다!",
    roman: "Gamsahamnida!",
    cz: "Děkuji vám!",
    cat: "greetings",
    formality: "하십시오체 (Formální styl)",
    tokens: [
      { w: "감사", role: "vděčnost / díky (感謝)" },
      { w: "합", role: "sloveso 'dělat'" },
      { w: "니다", role: "formální koncovka" }
    ],
    note: "Univerzální standardní poděkování. Rodilou alternativou je '고맙습니다' (Gomapseumnida)."
  },
  {
    id: "p4",
    hangul: "죄송합니다!",
    roman: "Joesonghamnida!",
    cz: "Velice se omlouvám! / Promiňte.",
    cat: "greetings",
    formality: "하십시오체 (Formální styl)",
    tokens: [
      { w: "죄송", role: "pocit viny / omluva (罪悚)" },
      { w: "합니다", role: "formální slovesný tvar" }
    ],
    note: "Hlubší a uctivější omluva než '미안합니다' (Mianhamnida). Použijte při šlápnutí na nohu, zpoždění či vážnější chybě."
  },
  {
    id: "p5",
    hangul: "안녕히 가세요!",
    roman: "Annyeonghi gaseyo!",
    cz: "Šťastnou cestu! / Na shledanou! (říkáte tomu, kdo odchází)",
    cat: "greetings",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "안녕히", role: "v míru / bezpečně (příslovce)" },
      { w: "가세요", role: "jděte / odejděte (가다 + 세요)" }
    ],
    note: "Klíčový rozdíl: '가세요' (od 가다 = jít) říkáte člověku, který ODCHÁZÍ ze setkání."
  },
  {
    id: "p6",
    hangul: "안녕히 계세요!",
    roman: "Annyeonghi gyeseyo!",
    cz: "Mějte se hezky! / Na shledanou! (říkáte tomu, kdo zůstává)",
    cat: "greetings",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "안녕히", role: "v míru / poklidu" },
      { w: "계세요", role: "zůstaňte / buďte přítomen (honorifikum od 있다)" }
    ],
    note: "Pokud odcházíte vy a hostitel či prodavač zůstává v obchodě/domě, řekněte '안녕히 계세요'."
  },
  {
    id: "p7",
    hangul: "잘 자요!",
    roman: "Jal jayo!",
    cz: "Dobrou noc! / Vyspi se do růžova.",
    cat: "greetings",
    formality: "해요체 (Neformálně uctivý)",
    tokens: [
      { w: "잘", role: "dobře (příslovce)" },
      { w: "자요", role: "spi / spěte (자다)" }
    ],
    note: "K rodičům či starším lidem se říká uctivější forma: '안녕히 주무세요' (Annyeonghi jumuseyo)."
  },
  {
    id: "p8",
    hangul: "수고하셨습니다!",
    roman: "Sugohasyeosseumnida!",
    cz: "Dobrá práce! / Děkuji za vaši námahu!",
    cat: "greetings",
    formality: "하십시오체 (Formální styl)",
    tokens: [
      { w: "수고", role: "námaha / úsilí (手苦)" },
      { w: "하셨", role: "vykonal jste (minulý čas + honorifikum)" },
      { w: "습니다", role: "formální koncovka" }
    ],
    note: "Nejoblíbenější fráze na konci pracovního dne, po tréninku, po natáčení či po skončení lekce."
  },

  // ─── 2. SEZNÁMENÍ & OSOBNÍ OTÁZKY ───
  {
    id: "p9",
    hangul: "이름이 뭐예요?",
    roman: "Ireumi mwoyeyo?",
    cz: "Jak se jmenuješ?",
    cat: "intro",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "이름", role: "jméno" },
      { w: "이", role: "podmětová částice" },
      { w: "뭐", role: "co?" },
      { w: "예요", role: "je / spona" }
    ],
    note: "U starších lidí se uctivě ptá: '성함이 어떻게 되세요?' (Seonghami eotteoke doeseyo?)."
  },
  {
    id: "p10",
    hangul: "저는 마르틴이에요.",
    roman: "Jeoneun Martine-ieyo.",
    cz: "Já jsem Martin.",
    cat: "intro",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "저", role: "já (skromné/zdvořilé)" },
      { w: "는", role: "tématická částice" },
      { w: "마르틴", role: "jméno Martin" },
      { w: "이에요", role: "jsem (po souhlásce)" }
    ],
    note: "Pokud vaše jméno končí na souhlásku, připojí se ~이에요, pokud na samohlásku, připojí se ~예요."
  },
  {
    id: "p11",
    hangul: "어느 나라 사람이에요?",
    roman: "Eoneu nara saram-ieyo?",
    cz: "Ze které země pocházíš?",
    cat: "intro",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "어느", role: "který / jaký" },
      { w: "나라", role: "země / stát" },
      { w: "사람", role: "člověk" },
      { w: "이에요", role: "jsi / je" }
    ],
    note: "Doslova: 'Člověk které země jsi?'."
  },
  {
    id: "p12",
    hangul: "체코 사람이에요.",
    roman: "Cheko saram-ieyo.",
    cz: "Jsem Čech / z České republiky.",
    cat: "intro",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "체코", role: "Česko" },
      { w: "사람", role: "člověk" },
      { w: "이에요", role: "jsem" }
    ],
    note: "Národnost se tvoří jednoduše: [Název země] + 사람 (člověk)."
  },
  {
    id: "p13",
    hangul: "몇 살이에요?",
    roman: "Myeot sarieyo?",
    cz: "Kolik je ti let?",
    cat: "intro",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "몇", role: "kolik? (tázací zájmeno)" },
      { w: "살", role: "roky věku (počítadlo)" },
      { w: "이에요", role: "je / jsi" }
    ],
    note: "V Koreji je věk důležitý pro volbu zdvořilostní roviny a hierarchie v rozhovoru."
  },

  // ─── 3. RESTAURACE, JÍDLO & OBJEDNÁVÁNÍ ───
  {
    id: "p14",
    hangul: "저기요!",
    roman: "Jeogiyo!",
    cz: "Prosím vás! / Promiňte! (přivolání obsluhy)",
    cat: "restaurant",
    formality: "Univerzální oslovení",
    tokens: [
      { w: "저기", role: "tamhle (místo)" },
      { w: "요", role: "zdvořilostní částice" }
    ],
    note: "V korejských restauracích je naprosto běžné a slušné zavolat na obsluhu nahlas '저기요!' nebo stisknout zvonek na stole."
  },
  {
    id: "p15",
    hangul: "이거 주세요.",
    roman: "Igeo juseyo.",
    cz: "Dejte mi prosím tohle.",
    cat: "restaurant",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "이거", role: "tato věc / tohle" },
      { w: "주세요", role: "dejte mi prosím (주다 + 세요)" }
    ],
    note: "Univerzální věta! Stačí ukázat prstem v menu nebo na pultu na cokoliv a říct '이거 주세요'."
  },
  {
    id: "p16",
    hangul: "물 좀 주세요.",
    roman: "Mul jom juseyo.",
    cz: "Dejte mi prosím trochu vody.",
    cat: "restaurant",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "물", role: "voda" },
      { w: "좀", role: "trochu / prosím (zjemňující slovo)" },
      { w: "주세요", role: "dejte prosím" }
    ],
    note: "Slovíčko '좀' (jom = trochu) se vkládá do proseb, aby věta zněla jemně a přátelsky."
  },
  {
    id: "p17",
    hangul: "메뉴판 좀 보여 주세요.",
    roman: "Menyupan jom boyeo juseyo.",
    cz: "Ukažte mi prosím jídelní lístek.",
    cat: "restaurant",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "메뉴판", role: "jídelní lístek (menu board)" },
      { w: "좀", role: "prosím / trochu" },
      { w: "보여 주세요", role: "ukažte prosím (보이다 + 주다)" }
    ],
    note: "V mnoha bistrech je menu vyvěšeno přímo na zdi nad pultem."
  },
  {
    id: "p18",
    hangul: "덜 맵게 해 주세요.",
    roman: "Deol maepge hae juseyo.",
    cz: "Udělejte to prosím méně pálivé.",
    cat: "restaurant",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "덜", role: "méně" },
      { w: "맵게", role: "pálivě (od 맵다)" },
      { w: "해 주세요", role: "udělejte prosím" }
    ],
    note: "Záchranná fráze pro cestovatele v Koreji, pokud nemáte rádi ostrá jídla!"
  },
  {
    id: "p19",
    hangul: "계산해 주세요.",
    roman: "Gyesanhae juseyo.",
    cz: "Účet, prosím. / Zaplatím.",
    cat: "restaurant",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "계산", role: "výpočet / účet (計算)" },
      { w: "해 주세요", role: "udělejte prosím" }
    ],
    note: "V Koreji se většinou neplatí u stolu, ale s účtenkou se jde k pokladně u východu."
  },
  {
    id: "p20",
    hangul: "맛있게 드세요!",
    roman: "Masitge deuseyo!",
    cz: "Dobrou chuť!",
    cat: "restaurant",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "맛있게", role: "chutně" },
      { w: "드세요", role: "jezte / dejte si (honorifikum)" }
    ],
    note: "Říká číšník nebo hostitel při podávání pokrmu."
  },
  {
    id: "p21",
    hangul: "잘 먹겠습니다!",
    roman: "Jal meokgetseumnida!",
    cz: "Budu jíst s vděčností! (korejské 'dobrou chuť' před jídlem)",
    cat: "restaurant",
    formality: "하십시오체 (Formální styl)",
    tokens: [
      { w: "잘", role: "dobře" },
      { w: "먹겠", role: "budu jíst (s odhodláním)" },
      { w: "습니다", role: "formální zakončení" }
    ],
    note: "Říkáte vždy před zahájením jídla jako výraz respektu kuchaři či tomu, kdo jídlo platí."
  },
  {
    id: "p22",
    hangul: "잘 먹었습니다!",
    roman: "Jal meogeotseumnida!",
    cz: "Děkuji za výborné jídlo! (po jídle)",
    cat: "restaurant",
    formality: "하십시오체 (Formální styl)",
    tokens: [
      { w: "잘", role: "dobře" },
      { w: "먹었", role: "jedl jsem (minulý čas)" },
      { w: "습니다", role: "formální zakončení" }
    ],
    note: "Říká se po dojedení hostiteli nebo při odchodu z restaurace."
  },

  // ─── 4. NAKUPOVÁNÍ & CENY ───
  {
    id: "p23",
    hangul: "이거 얼마예요?",
    roman: "Igeo eolmayeyo?",
    cz: "Kolik to stojí?",
    cat: "shopping",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "이거", role: "tohle" },
      { w: "얼마", role: "kolik (o ceně)" },
      { w: "예요", role: "je" }
    ],
    note: "Klíčová nákupní otázka. Odpovědí bude číslo + 원 (won, např. 만 원 = 10 000 wonů)."
  },
  {
    id: "p24",
    hangul: "너무 비싸요.",
    roman: "Neomu bissayo.",
    cz: "To je moc drahé.",
    cat: "shopping",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "너무", role: "příliš / moc" },
      { w: "비싸요", role: "je drahé (비싸다)" }
    ],
    note: "Používá se na tradičních trzích (např. Namdaemun nebo Dongdaemun)."
  },
  {
    id: "p25",
    hangul: "좀 깎아 주세요!",
    roman: "Jom kkakka juseyo!",
    cz: "Dejte mi prosím slevičku!",
    cat: "shopping",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "좀", role: "trochu" },
      { w: "깎아", role: "seřízněte / snižte cenu (깎다)" },
      { w: "주세요", role: "prosím" }
    ],
    note: "Oblíbená věta pro smlouvání na trhu. V supermarketech a nákupních centrech se nesmlouvá."
  },
  {
    id: "p26",
    hangul: "카드로 결제할게요.",
    roman: "Kadeuro gyeoljehalgeyo.",
    cz: "Zaplatím kartou.",
    cat: "shopping",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "카드", role: "karta" },
      { w: "로", role: "pomocí / nástroj" },
      { w: "결제할게요", role: "zaplatím / uhradím" }
    ],
    note: "Korea je téměř 100% bezhotovostní společnost, kartou zaplatíte i ten nejmenší nákup."
  },
  {
    id: "p27",
    hangul: "영수증 버려 주세요.",
    roman: "Yeongsujeung beoryeo juseyo.",
    cz: "Účtenku nepotřebuji, vyhoďte ji prosím.",
    cat: "shopping",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "영수증", role: "účtenka (領收證)" },
      { w: "버려 주세요", role: "vyhoďte prosím (버리다 + 주다)" }
    ],
    note: "Když vám pokladní v samoobsluze nabízí účtenku a vy ji nechcete."
  },

  // ─── 5. CESTOVÁNÍ, ORIENTACE & TAXI ───
  {
    id: "p28",
    hangul: "화장실이 어디예요?",
    roman: "Hwajang-siri eodiyeyo?",
    cz: "Kde je toaleta / WC?",
    cat: "travel",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "화장실", role: "toaleta (化粧室)" },
      { w: "이", role: "podmětová částice" },
      { w: "어디", role: "kde?" },
      { w: "예요", role: "je" }
    ],
    note: "Klíčová věta na jakékoliv cestě po Koreji."
  },
  {
    id: "p29",
    hangul: "지하철역이 어디에 있어요?",
    roman: "Jihacheol-yeogi eodie isseoyo?",
    cz: "Kde je stanice metra?",
    cat: "travel",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "지하철역", role: "stanice metra" },
      { w: "이", role: "podmětová částice" },
      { w: "어디에", role: "kde (na jakém místě)" },
      { w: "있어요", role: "nachází se (있다)" }
    ],
    note: "V Soulu má metro čísla linek s unikátními barvami (1 = modrá, 2 = zelená okružní atd.)."
  },
  {
    id: "p30",
    hangul: "오른쪽으로 가세요.",
    roman: "Oreunjjogeuro gaseyo.",
    cz: "Jděte doprava.",
    cat: "travel",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "오른쪽", role: "pravá strana" },
      { w: "으로", role: "směrem k (částice směru)" },
      { w: "가세요", role: "jděte (가다 + 세요)" }
    ],
    note: "Levá strana je '왼쪽' (Oenjjok), rovně je '직진' (Jikjin) nebo '똑바로' (Ttokbaro)."
  },
  {
    id: "p31",
    hangul: "여기서 세워 주세요.",
    roman: "Yeogiseo sewo juseyo.",
    cz: "Zastavte mi prosím tady (v taxi).",
    cat: "travel",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "여기서", role: "zde / na tomto místě" },
      { w: "세워 주세요", role: "zastavte prosím vozidlo (세우다 + 주다)" }
    ],
    note: "Praktická věta pro jízdu taxíkem, když se blížíte k cíli."
  },

  // ─── 6. KOMUNIKACE & DOROZUMĚNÍ ───
  {
    id: "p32",
    hangul: "한국어 조금 할 수 있어요.",
    roman: "Hangugeo jogeum hal su isseoyo.",
    cz: "Umím trochu korejsky.",
    cat: "help",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "한국어", role: "korejština" },
      { w: "조금", role: "trochu" },
      { w: "할 수 있어요", role: "mohu/dokážu dělat (-ㄹ 수 있다)" }
    ],
    note: "Korejci nesmírně ocení, když se pokusíte říct byť jen pár slov v jejich jazyce!"
  },
  {
    id: "p33",
    hangul: "천천히 말씀해 주세요.",
    roman: "Cheoncheonhi malsseumhae juseyo.",
    cz: "Mluvte prosím pomaleji.",
    cat: "help",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "천천히", role: "pomalu (příslovce)" },
      { w: "말씀해 주세요", role: "řekněte / mluvte uctivě prosím" }
    ],
    note: "'말씀' je uctivé slovo pro řeč/slova."
  },
  {
    id: "p34",
    hangul: "다시 한 번 말해 주세요.",
    roman: "Dasi han beon malhae juseyo.",
    cz: "Řekněte to prosím ještě jednou.",
    cat: "help",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "다시", role: "znovu / opět" },
      { w: "한 번", role: "jedenkrát" },
      { w: "말해 주세요", role: "řekněte prosím" }
    ],
    note: "Nepostradatelná věta při učení a tréninku poslechu."
  },
  {
    id: "p35",
    hangul: "영어 할 수 있어요?",
    roman: "Yeong-eo hal su isseoyo?",
    cz: "Mluvíte anglicky?",
    cat: "help",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "영어", role: "angličtina (英語)" },
      { w: "할 수 있어요?", role: "zvládnete mluvit?" }
    ],
    note: "Většina mladých Korejců v Soulu rozumí základní angličtině."
  },
  {
    id: "p36",
    hangul: "도와주세요!",
    roman: "Dowajuseyo!",
    cz: "Pomozte mi, prosím!",
    cat: "help",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "도와", role: "pomoci (돕다)" },
      { w: "주세요", role: "dejte / učiňte pro mě" }
    ],
    note: "Nouzová fráze při potřebě jakékoliv pomoci."
  },
  {
    id: "p37",
    hangul: "괜찮아요.",
    roman: "Gwaenchanhayo.",
    cz: "To je v pořádku. / Nic se neděje. / Jsem v pohodě.",
    cat: "help",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "괜찮", role: "být v pořádku (관계치 아니하다)" },
      { w: "아요", role: "oznamovací koncovka" }
    ],
    note: "Jedno z nejužitečnějších slov v korejštině. Jako otázka '괜찮아요?' znamená 'Jsi v pořádku?'."
  },
  {
    id: "p38",
    hangul: "화이팅! / 파이팅!",
    roman: "Hwaiting! / Paiting!",
    cz: "Do toho! / Hodně štěstí! / Drž se!",
    cat: "greetings",
    formality: "Povzbuzení",
    tokens: [
      { w: "화이팅", role: "korejské povzbuzení (z angl. fighting)" }
    ],
    note: "Korejský národní pokřik povzbuzení při zkouškách, sportu i v práci."
  },
  {
    id: "p39",
    hangul: "생일 축하합니다!",
    roman: "Saeng-il chukhahamnida!",
    cz: "Všechno nejlepší k narozeninám!",
    cat: "greetings",
    formality: "하십시오체 (Formální styl)",
    tokens: [
      { w: "생일", role: "narozeniny (生日)" },
      { w: "축하", role: "gratulace (祝賀)" },
      { w: "합니다", role: "vyjadřuji / dělám" }
    ],
    note: "Při narozeninách se v Koreji tradičně jí polévka z mořských řas (미역국 - Miyeokguk)."
  },
  {
    id: "p40",
    hangul: "만나서 반가웠어요, 다음에 또 봐요!",
    roman: "Mannaseo bangaweosseoyo, da-eume tto bwayo!",
    cz: "Rád jsem tě viděl, uvidíme se příště!",
    cat: "greetings",
    formality: "해요체 (Uctivý styl)",
    tokens: [
      { w: "만나서", role: "protože jsme se setkali" },
      { w: "반가웠어요", role: "byl jsem potěšen" },
      { w: "다음에", role: "příště" },
      { w: "또 봐요", role: "zase na viděnou" }
    ],
    note: "Přátelské rozloučení na závěr hezkého setkání."
  }
];
