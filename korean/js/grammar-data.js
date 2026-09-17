// ═══════════════════════════════════════════════════════════
// HCODE.ART • EXPANDED KOREAN GRAMMAR & PARTICLES (32 MODULES)
// Essential Structure, Irregular Verbs, Honorifics & Conjugations
// ═══════════════════════════════════════════════════════════

window.KOREAN_GRAMMAR_DATA = [
  // ─── 1. VĚTNÁ STRUKTURA & ZÁKLADY ───
  {
    id: "g1",
    title: "SOV Pořádek slov (Slovosled)",
    korean: "주어 (S) + 목적어 (O) + 동사 (V)",
    category: "structure",
    summary: "V korejštině stojí sloveso (či přídavné jméno) VŽDY až na samotném konci věty! Čeština používá SVO (Já piji vodu), korejština striktně SOV (Já vodu piji).",
    formula: "[Podmět] + [Předmět] + [Sloveso na konci]",
    examples: [
      { ko: "저는 사과를 먹어요.", ro: "Jeoneun sagwareul meogeoyo.", cz: "Já (S) jablko (O) jím (V)." },
      { ko: "마르틴이 한국어를 공부해요.", ro: "Martini hangugeoreul gongbuhaeyo.", cz: "Martin (S) korejštinu (O) studuje (V)." }
    ],
    tip: "Korejci poslouchají až do úplného konce věty, protože teprve poslední sloveso určuje čas, otázku i míru zdvořilosti."
  },
  {
    id: "g2",
    title: "Spona být: 이다 (이에요 / 예요 / 입니다)",
    korean: "명사 + 이다 (rovnítko identity)",
    category: "structure",
    summary: "Vyjadřuje 'být někým / něčím' (A je B). Připojuje se přímo za podstatné jméno bez mezery!",
    formula: "Po souhlásce: ~이에요 / Po samohlásce: ~예요 (Formálně: ~입니다)",
    examples: [
      { ko: "저는 체코 사람이에요.", ro: "Jeoneun Cheko saram-ieyo.", cz: "Jsem Čech (사람 končí souhláskou -> 이에요)." },
      { ko: "이것은 사과예요.", ro: "Igeoseun sagwayeyo.", cz: "Tohle je jablko (사과 končí samohláskou -> 예요)." },
      { ko: "학생입니다.", ro: "Haksaeng-imnida.", cz: "Jsem student (formální styl)." }
    ],
    tip: "Zápor 'nebýt něčím' se tvoří pomocí: [Podstatné jméno] + 이/가 아니다 (např. 학생이 아니에요 = Nejsem student)."
  },

  // ─── 2. ČÁSTICE (조사) ───
  {
    id: "g3",
    title: "Částice tématu: 은 / 는 (Topic Markers)",
    korean: "은 (po souhlásce) / 는 (po samohlásce)",
    category: "particles",
    summary: "Vymezuje hlavní téma rozhovoru: 'Pokud jde o mě / Pokud jde o toto téma...'. Používá se také pro vytvoření kontrastu.",
    formula: "Souhláska + 은 / Samohláska + 는",
    examples: [
      { ko: "저는 학생이에요.", ro: "Jeoneun haksaeng-ieyo.", cz: "Pokud jde o mě, jsem student." },
      { ko: "한국은 작지만 아름다워요.", ro: "Hangugeun jakjiman areumdawoyo.", cz: "Korea je sice malá, ale krásná." }
    ],
    tip: "Jakmile je téma jednou stanoveno, v dalších větách se zájmeno 'já' či 'on' obvykle úplně vynechává!"
  },
  {
    id: "g4",
    title: "Částice podmětu: 이 / 가 (Subject Markers)",
    korean: "이 (po souhlásce) / 가 (po samohlásce)",
    category: "particles",
    summary: "Označuje gramatického činitele děje (Kdo? Co?). Používá se při představení zbrusu nové informace, nebo při zdůraznění konkrétní osoby/věci.",
    formula: "Souhláska + 이 / Samohláska + 가",
    examples: [
      { ko: "비가 와요.", ro: "Biga wayo.", cz: "Prší (Déšť přichází - nová informace)." },
      { ko: "제가 했어요.", ro: "Jega haesseoyo.", cz: "Já jsem to udělal (Já osobně [저 + 가 -> 제가])." }
    ],
    tip: "Zájmena mění tvar před 가: 저 -> 제가 (já zdvořile), 나 -> 내가 (já familiárně), 너 -> 네가/니가 (ty)."
  },
  {
    id: "g5",
    title: "Částice předmětu: 을 / 를 (Object Markers)",
    korean: "을 (po souhlásce) / 를 (po samohlásce)",
    category: "particles",
    summary: "Připojuje se k přímému předmětu slovesa (odpovídá 4. pádu: Koho? Co?).",
    formula: "Souhláska + 을 / Samohláska + 를",
    examples: [
      { ko: "책을 읽어요.", ro: "Chaegeul ilgeo-yo.", cz: "Čtu knihu (책 končí souhláskou -> 책을)." },
      { ko: "커피를 마셔요.", ro: "Keopireul masyeoyo.", cz: "Piji kávu (커피 končí samohláskou -> 커피를)." }
    ],
    tip: "V běžné hovorové mluvě se 을/를 často vynechává, pokud je význam jasný."
  },
  {
    id: "g6",
    title: "Částice místa a času: 에 (Location / Time)",
    korean: "명사 + 에",
    category: "particles",
    summary: "Multifunkční částice pro statickou existenci (být v/na), cíl pohybu (jít do) a přesný časový bod (v kolik hodin).",
    formula: "[Místo/Čas] + 에",
    examples: [
      { ko: "학교에 가요.", ro: "Hakgyo-e gayo.", cz: "Jdu do školy (cíl pohybu)." },
      { ko: "집에 있어요.", ro: "Jib-e isseoyo.", cz: "Jsem doma (statická existence s 있다)." },
      { ko: "7시에 만나요.", ro: "Ilgop si-e mannayo.", cz: "Potkáme se v 7 hodin (časový bod)." }
    ],
    tip: "Pozor: slova jako 오늘 (dnes), 내일 (zítra), 어제 (včera), 지금 (teď) částici 에 NEPŘIBÍRAJÍ!"
  },
  {
    id: "g7",
    title: "Částice děje a původu: 에서 (Action Location / From)",
    korean: "장소 + 에서",
    category: "particles",
    summary: "Označuje místo, kde se odehrává nějaká aktivita (pracovat, jíst, studovat v...), nebo výchozí bod (odkud / z).",
    formula: "[Místo aktivity] + 에서",
    examples: [
      { ko: "도서관에서 공부해요.", ro: "Doseogwan-eseo gongbuhaeyo.", cz: "Učím se v knihovně (probíhá tam akce)." },
      { ko: "체코에서 왔어요.", ro: "Cheko-eseo wasseoyo.", cz: "Přijel jsem z České republiky (výchozí bod)." }
    ],
    tip: "Rozdíl: 에 = statické bytí (집에 있어요), 에서 = dynamická akce (집에서 쉬어요 = odpočívám doma)."
  },
  {
    id: "g8",
    title: "Nástrojová & směrová částice: (으)로 (By / Towards)",
    korean: "(으)로",
    category: "particles",
    summary: "Vyjadřuje nástroj či způsob (čím/jak: perem, autem, korejsky) nebo obecný směr pohybu (směrem k).",
    formula: "Souhláska + 으로 / Samohláska nebo ㄹ + 로",
    examples: [
      { ko: "버스로 가요.", ro: "Beoseu-ro gayo.", cz: "Jedu autobusem (dopravní prostředek)." },
      { ko: "한국어로 말해요.", ro: "Hangugeo-ro malhaeyo.", cz: "Mluvím korejsky (prostředek komunikace)." },
      { ko: "오른쪽으로 가세요.", ro: "Oreunjjogeuro gaseyo.", cz: "Jděte směrem doprava." }
    ],
    tip: "Pokud slovo končí na ㄹ (např. 지하철 = metro), připojí se pouze '로' (지하철로)!"
  },
  {
    id: "g9",
    title: "Částice také/i: 도 (Also / Too)",
    korean: "명사 + 도",
    category: "particles",
    summary: "Nahrazuje částice 은/는 a 이/가 a znamená 'také', 'rovněž', 'i'.",
    formula: "[Podstatné jméno] + 도",
    examples: [
      { ko: "저도 가고 싶어요.", ro: "Jeodo gago sipeoyo.", cz: "Já chci také jít." },
      { ko: "사과도 맛있어요.", ro: "Sagwado masisseoyo.", cz: "I jablko je chutné." }
    ],
    tip: "Nahrazuje podmětovou i tématickou částici (저 + 는 + 도 -> 저도)."
  },
  {
    id: "g10",
    title: "Částice pouze: 만 (Only / Just)",
    korean: "명사 + 만",
    category: "particles",
    summary: "Vyjadřuje exkluzivitu: 'pouze', 'jen', 'jedině'.",
    formula: "[Podstatné jméno] + 만",
    examples: [
      { ko: "물만 마셨어요.", ro: "Mulman masyeosseoyo.", cz: "Pili jsme pouze vodu." },
      { ko: "너만 사랑해.", ro: "Neoman saranghae.", cz: "Miluji jen tebe." }
    ],
    tip: "Lze kombinovat s místní částicí: 집에서만 (pouze doma)."
  },
  {
    id: "g11",
    title: "Spojky 'A / S': 하고, 와/과, (이)랑",
    korean: "하고 / 와,과 / (이)랑",
    category: "particles",
    summary: "Tři způsoby vyjádření spojky 'a' nebo předložky 's':\n1. 하고 (univerzální hovorové)\n2. (이)랑 (velmi neformální a přátelské)\n3. 와/과 (spisovné, noviny a knihy)",
    formula: "하고 / (이)랑 / 와(po samohlásce), 과(po souhlásce)",
    examples: [
      { ko: "빵하고 우유를 샀어요.", ro: "Ppang-hago uyu-reul sasseoyo.", cz: "Koupil jsem chléb a mléko." },
      { ko: "친구랑 영화를 봐요.", ro: "Chingu-rang yeonghwa-reul bwayo.", cz: "Dívám se s kamarádem na film." }
    ],
    tip: "V mluvené korejštině uslyšíte nejčastěji '하고' nebo '랑'."
  },
  {
    id: "g12",
    title: "Od - Do: 에서 ~ 까지 & 부터 ~ 까지",
    korean: "공간 (에서~까지) vs. 시간 (부터~까지)",
    category: "particles",
    summary: "Rozlišení prostoru a času:\n- 에서 ~ 까지 = Z místa A do místa B (prostor)\n- 부터 ~ 까지 = Od času A do času B (čas)",
    formula: "[Místo] 에서 [Místo] 까지 / [Čas] 부터 [Čas] 까지",
    examples: [
      { ko: "서울에서 부산까지 (Korejský prostor)", ro: "Seoul-eseo Busan-kkaji", cz: "Ze Soulu do Pusanu." },
      { ko: "아침 9시부터 저녁 6시까지 (Čas)", ro: "Achim ahop-si-buteo jeonyeok yeoseot-si-kkaji", cz: "Od 9 ráno do 6 večer." }
    ],
    tip: "Nikdy neříkejte '9시에서' pro čas – pro čas vždy začínejte '부터'!"
  },

  // ─── 3. ČASOVÁNÍ & NEPRAVIDELNÁ SLOVESA ───
  {
    id: "g13",
    title: "Přítomný čas: -아요 / -어요 / -여요 (해요체)",
    korean: "해요체 (Základní uctivý standard)",
    category: "conjugation",
    summary: "Korejská samohlásková harmonie kořene slovesa:\n1. Kořen má ㅏ nebo ㅗ -> -아요\n2. Všechny ostatní samohlásky -> -어요\n3. Slovesa na 하다 se mění na -> 해요",
    formula: "Kořen ㅏ/ㅗ + 아요 / Ostatní + 어요 / 하다 -> 해요",
    examples: [
      { ko: "가다 -> 가요 (가 + 아요 = 가요)", ro: "gada -> gayo", cz: "jít -> jdu / jde" },
      { ko: "먹다 -> 먹어요 (ㅓ nepatří k ㅏ/ㅗ)", ro: "meokda -> meogeoyo", cz: "jíst -> jím / jí" },
      { ko: "공부하다 -> 공부해요", ro: "gongbuhada -> gongbuhaeyo", cz: "učit se -> učím se" }
    ],
    tip: "Univerzální tvar pro každodenní konverzaci s kýmkoliv v Koreji."
  },
  {
    id: "g14",
    title: "Minulý čas: -았어요 / -었어요 / -했어요",
    korean: "과거 시제 (-았/었/했-)",
    category: "conjugation",
    summary: "Vložením infixu ㅆ do přítomného kořene vytvoříte minulý čas.",
    formula: "Kořen ㅏ/ㅗ + 았어요 / Ostatní + 었어요 / 하다 -> 했어요",
    examples: [
      { ko: "보다 -> 봤어요.", ro: "Boda -> bwasseoyo.", cz: "Vidět -> viděl jsem." },
      { ko: "먹다 -> 먹었어요.", ro: "Meokda -> meogeosseoyo.", cz: "Jíst -> jedl jsem." },
      { ko: "일하다 -> 일했어요.", ro: "Ilhada -> ilhaesseoyo.", cz: "Pracovat -> pracoval jsem." }
    ],
    tip: "Otázka v minulém čase se tvoří zvednutím tónu: '밥 먹었어요?' (Jedl jsi?)."
  },
  {
    id: "g15",
    title: "Budoucí čas: -(으)ㄹ 거예요",
    korean: "미래 시제 (-(으)ㄹ 거예요)",
    category: "conjugation",
    summary: "Vyjadřuje budoucí záměr nebo pravděpodobnost ('Udělám...', 'Stane se...').",
    formula: "Kořen bez batchimu + ㄹ 거예요 / S batchimem + 을 거예요",
    examples: [
      { ko: "내일 갈 거예요.", ro: "Naeil gal geoyeyo.", cz: "Zítra půjdu (가다 + ㄹ 거예요)." },
      { ko: "책을 읽을 거예요.", ro: "Chaegeul ilgeul geoyeyo.", cz: "Budu číst knihu (읽다 + 을 거예요)." }
    ],
    tip: "Vyslovuje se měkce [거예요]."
  },
  {
    id: "g16",
    title: "ㅂ Nepravidelnost (ㅂ 불규칙)",
    korean: "ㅂ se mění na 우 (nebo 오)",
    category: "irregular",
    summary: "Když se ke kořeni končícímu na ㅂ připojí samohláska, ㅂ odpadne a nahradí se '우'!",
    formula: "ㅂ + samohláska -> 우 (např. 춥 + 어요 -> 추 + 우 + 어요 = 추워요)",
    examples: [
      { ko: "춥다 (být zima) -> 추워요 (nikoliv 춥어요!)", ro: "chupda -> chuwoyo", cz: "Dnes je zima." },
      { ko: "어렵다 (být těžký) -> 어려워요", ro: "eoryeopda -> eoryeowoyo", cz: "Je to těžké." },
      { ko: "고맙다 (děkovat) -> 고마워요", ro: "gomapda -> gomawoyo", cz: "Děkuji." },
      { ko: "돕다 (pomáhat) -> 도와요 (výjimka s 오)", ro: "dopda -> dowayo", cz: "Pomáhám." }
    ],
    tip: "Téměř všechna přídavná jména na ㅂ (krásný, studený, horký, těžký, snadný, vděčný) podléhají tomuto pravidlu!"
  },
  {
    id: "g17",
    title: "ㄷ Nepravidelnost (ㄷ 불규칙)",
    korean: "ㄷ se mění na ㄹ před samohláskou",
    category: "irregular",
    summary: "Některá slovesa s koncovým ㄷ mění toto ㄷ na 'ㄹ', když následuje samohláska.",
    formula: "ㄷ + samohláska -> ㄹ",
    examples: [
      { ko: "듣다 (poslouchat) -> 들어요 (들 + 어요)", ro: "deutda -> deureoyo", cz: "Poslouchám hudbu." },
      { ko: "걷다 (kráčet) -> 걸어요", ro: "geotda -> georeoyo", cz: "Kráčím / jdu pěšky." },
      { ko: "묻다 (ptát se) -> 물어봐요", ro: "mutda -> mureobwayo", cz: "Ptám se." }
    ],
    tip: "Pozor na pravidelná slovesa jako 받다 (obdržet) -> 받아요, 닫다 (zavřít) -> 닫아요 (ta se nemění!)."
  },
  {
    id: "g18",
    title: "ㅡ Nepravidelnost (ㅡ 탈락)",
    korean: "ㅡ odpadá před samohláskou",
    category: "irregular",
    summary: "Pokud kořen slova končí na samohlásku ㅡ, tato samohláska při časování zcela ZMIZÍ. O výběru -아요/-어요 pak rozhoduje předchozí samohláska!",
    formula: "ㅡ + samohláska -> ㅡ odpadne",
    examples: [
      { ko: "크다 (velký) -> 커요 (ㅋ + 어요 = 커요)", ro: "keuda -> keoyo", cz: "Je to velké." },
      { ko: "예쁘다 (hezký) -> 예뻐요 (ㅃ + 어요 = 예뻐요)", ro: "yeppeuda -> yeppeoyo", cz: "Je hezká." },
      { ko: "바쁘다 (zaneprázdněný) -> 바빠요 (před ㅡ je ㅏ -> 바 + ㅃ + 아요)", ro: "bappeuda -> bappayo", cz: "Mám moc práce." },
      { ko: "쓰다 (psát) -> 써요", ro: "sseuda -> sseoyo", cz: "Píšu." }
    ],
    tip: "Jedno z nejčastějších pravidel v celé korejštině!"
  },
  {
    id: "g19",
    title: "르 Nepravidelnost (르 불규칙)",
    korean: "ㅡ odpadá a přidá se zdvojené ㄹ",
    category: "irregular",
    summary: "Když slovo končí na slabiku 르 a následuje samohláska, ㅡ odpadne a na konec předchozí slabiky se vloží ㄹ (vznikne zdvojené ㄹㄹ).",
    formula: "르 + samohláska -> ㄹㄹ + 아/어",
    examples: [
      { ko: "모르다 (nevědět) -> 몰라요 (몰 + 라요)", ro: "moreuda -> mollayo", cz: "Nevím." },
      { ko: "빠르다 (rychlý) -> 빨라요 (빨 + 라요)", ro: "ppareuda -> ppallayo", cz: "Je to rychlé." },
      { ko: "다르다 (jiný) -> 달라요 (달 + 라요)", ro: "dareuda -> dallayo", cz: "Je to jiné." }
    ],
    tip: "Znalost fráze '잘 몰라요' (Nevím) zachrání každého studenta."
  },
  {
    id: "g20",
    title: "ㅅ Nepravidelnost (ㅅ 불규칙)",
    korean: "ㅅ odpadá před samohláskou",
    category: "irregular",
    summary: "U vybraných sloves koncový batchim ㅅ před samohláskou zcela zmizí, ale nevytvoří se stažený tvar.",
    formula: "ㅅ + samohláska -> ㅅ odpadne",
    examples: [
      { ko: "낫다 (uzdravit se / být lepší) -> 나아요 (나 + 아요)", ro: "natda -> naayo", cz: "Uzdrav se brzy (빨리 나아요)." },
      { ko: "짓다 (stavět / vařit rýži) -> 지어요 (지 + 어요)", ro: "jitda -> jieoyo", cz: "Stavím dům / vařím rýži." }
    ],
    tip: "Pozor: slovesa 웃다 (smát se) -> 웃어요 a 씻다 (mýt se) -> 씻어요 jsou pravidelná!"
  },

  // ─── 4. HONORIFIKA & SPOLEČENSKÁ ÚCTA ───
  {
    id: "g21",
    title: "Honorifická přípona: -(으)시- (Honorific Infix)",
    korean: "동사 어간 + -(으)시-",
    category: "honorifics",
    summary: "Vkládá se do slovesa, pokud mluvíte O někom, komu prokazujete úctu (rodiče, prarodiče, učitel, zákazník, šéf).",
    formula: "Kořen bez batchimu + 시 / S batchimem + 으시",
    examples: [
      { ko: "가다 -> 가세요 (가 + 시 + 어요 = 가세요)", ro: "gada -> gaseyo", cz: "Jděte / On jde (uctivě)." },
      { ko: "읽다 -> 읽으세요", ro: "ikda -> ilgeuseyo", cz: "Čtěte / Pan učitel čte." },
      { ko: "선생님이 오셨어요 (minulý čas: 시 + 었 -> 셨)", ro: "Seonsaengnim-i osyeosseoyo", cz: "Pan učitel přišel." }
    ],
    tip: "Nikdy nepoužívejte -(으)시- o sobě samém! Úctu prokazujete pouze druhé nebo třetí osobě."
  },
  {
    id: "g22",
    title: "Zvláštní honorifická slovesa (특수 높임 동사)",
    korean: "Zcela nová uctivá slova",
    category: "honorifics",
    summary: "Korejština má pro základní lidské činnosti speciální vznešená slova vyjadřující hlubokou úctu:",
    formula: "Běžné slovo -> Vznešené uctivé slovo",
    examples: [
      { ko: "먹다/마시다 (jíst/pít) -> 드시다 / 잡수시다", ro: "meokda -> deusida", cz: "Jezte / Dejte si (맛있게 드세요)." },
      { ko: "자다 (spát) -> 주무시다", ro: "jada -> jumusida", cz: "Spát uctivě (안녕히 주무세요)." },
      { ko: "있다 (být přítomen) -> 계시다", ro: "itda -> gyesida", cz: "Být doma (안녕히 계세요)." },
      { ko: "말하다 (mluvit) -> 말씀하시다", ro: "malhada -> malsseumhasida", cz: "Říkat / promluvit uctivě." },
      { ko: "죽다 (zemřít) -> 돌아가시다", ro: "jukda -> doragasida", cz: "Zesnout / odejít na věčnost." }
    ],
    tip: "Když babička spí, neříkáte '할머니가 자요', ale '할머니께서 주무세요'!"
  },

  // ─── 5. MODALITA, SPOJKY & PODMÍNKY ───
  {
    id: "g23",
    title: "Nutnost a povinnost: -아/어야 하다 / 되다 (Must / Have to)",
    korean: "동사 어간 + -아/어야 하다/되다",
    category: "modality",
    summary: "Vyjadřuje nutnost: 'musím', 'je třeba'.",
    formula: "Přítomný tvar (bez 요) + 야 해요 / 돼요",
    examples: [
      { ko: "지금 가야 해요.", ro: "Jigeum gaya haeyo.", cz: "Musím teď jít (가다 + 야 해요)." },
      { ko: "매일 공부해야 돼요.", ro: "Mae-il gongbuhaeya dwaeyo.", cz: "Musím studovat každý den." }
    ],
    tip: "하다 i 되다 mají stejný význam, '되다' je o něco běžnější v hovoru."
  },
  {
    id: "g24",
    title: "Svolení a zákaz: -아/어도 되다 vs. -(으)면 안 되다",
    korean: "허락 (smět) vs. 금지 (nesmět)",
    category: "modality",
    summary: "-아/어도 되다 = smět / je v pořádku, když...\n-(으)면 안 되다 = nesmět / není dovoleno!",
    formula: "-아/어도 돼요 (smím?) vs. -(으)면 안 돼요 (nesmíš!)",
    examples: [
      { ko: "여기 앉아도 돼요? (Svolení)", ro: "Yeogi anjado dwaeyo?", cz: "Mohu si sem sednout?" },
      { ko: "여기서 담배를 피우면 안 돼요! (Zákaz)", ro: "Yeogiseo dambaereul piumyeon an dwaeyo!", cz: "Zde se nesmí kouřit!" }
    ],
    tip: "Otázka '-도 돼요?' je nejpřirozenější způsob, jak v Koreji požádat o svolení."
  },
  {
    id: "g25",
    title: "Důvod a příčina: -아/어서 vs. -(으)니까",
    korean: "이유 & 원인 (Because)",
    category: "clauses",
    summary: "Klíčový rozdíl:\n1. -아/어서: přirozená příčina, NESMÍ se pojit s rozkazem ani pozváním!\n2. -(으)니까: osobní odůvodnění, MŮŽE se pojit s rozkazem (Pojďme..., Udělej...!).",
    formula: "Důvod + 어서 (nebo 니까) + následek",
    examples: [
      { ko: "비가 와서 집에 있었어요. (-아서: faktický stav)", ro: "Biga waseo jibe isseosseoyo.", cz: "Pršelo, a tak jsem byl doma." },
      { ko: "비가 오니까 우산을 쓰세요! (-니까: rozkaz/rada!)", ro: "Biga onikka usaneul sseuseyo!", cz: "Jelikož prší, vezměte si deštník!" }
    ],
    tip: "Nikdy neříkejte '비가 와서 우산을 쓰세요' – to je závažná gramatická chyba!"
  },
  {
    id: "g26",
    title: "Podmínka: -(으)면 (If / When)",
    korean: "동사 어간 + -(으)면",
    category: "clauses",
    summary: "Vyjadřuje podmínku nebo časový předpoklad ('když...', 'pokud...').",
    formula: "Kořen bez batchimu + 면 / S batchimem + 으면",
    examples: [
      { ko: "시간이 있으면 커피 마셔요.", ro: "Sigani isseumyeon keopi masyeoyo.", cz: "Pokud budeš mít čas, dáme si kávu." },
      { ko: "한국에 가면 연락해!", ro: "Hanguge gamyeon yeollak-hae!", cz: "Až pojedeš do Koreje, ozvi se mi!" }
    ],
    tip: "Pro zdůraznění 'pokud' se na začátek věty může přidat slovo '만약' (manyak)."
  },
  {
    id: "g27",
    title: "Průběhový čas: -고 있다 (Currently doing)",
    korean: "동사 어간 + -고 있다",
    category: "aspect",
    summary: "Vyjadřuje činnost, která právě v tomto okamžiku probíhá (anglické -ing).",
    formula: "[Kořen slovesa] + 고 있어요",
    examples: [
      { ko: "지금 밥을 먹고 있어요.", ro: "Jigeum babeul meokgo isseoyo.", cz: "Právě teď jím jídlo." },
      { ko: "음악을 듣고 있어요.", ro: "Eum-ageul deutgo isseoyo.", cz: "Zrovna poslouchám hudbu." }
    ],
    tip: "Otázka: '지금 뭐 하고 있어요?' (Co právě teď děláš?)."
  },
  {
    id: "g28",
    title: "Zkušenost: -(으)ㄴ 적이 있다 / 없다 (Have ever done)",
    korean: "경험 (-(으)ㄴ 적이 있다/없다)",
    category: "aspect",
    summary: "Vyjadřuje životní zkušenost: 'Už jsem někdy...' / 'Ještě nikdy jsem...'.",
    formula: "Kořen + ㄴ 적이 있어요 (mám zkušenost) / 없어요 (nemám zkušenost)",
    examples: [
      { ko: "한국에 간 적이 있어요.", ro: "Hanguge gan jeogi isseoyo.", cz: "Už jsem někdy byl v Koreji." },
      { ko: "김치를 먹은 적이 없어요.", ro: "Gimchireul meogeun jeogi eopseoyo.", cz: "Ještě nikdy jsem nejedl kimči." }
    ],
    tip: "Často se kombinuje s -아/어 보다: '한국에 가 본 적이 있어요' (Už jsem vyzkoušel jet do Koreje)."
  },
  {
    id: "g29",
    title: "Vyzkoušení něčeho: -아/어 보다 (Try doing)",
    korean: "동사 어간 + -아/어 보다",
    category: "aspect",
    summary: "Doslova 'udělat a uvidět' = vyzkoušet si nějakou činnost poprvé nebo na zkoušku.",
    formula: "Přítomný kořen + 보세요 (zkuste!) / 봤어요 (vyzkoušel jsem)",
    examples: [
      { ko: "이 음식 한번 먹어 보세요!", ro: "I eumsik hanbeon meogeo boseyo!", cz: "Ochutnejte jednou toto jídlo!" },
      { ko: "한복을 입어 봤어요.", ro: "Hanbokeul ibeo bwasseoyo.", cz: "Vyzkoušel jsem si obléci hanbok." }
    ],
    tip: "Slovíčko '한번' (hanbeon = jednou / na zkoušku) se s tímto obratem pojí téměř vždy."
  },
  {
    id: "g30",
    title: "Kontrast: -지만 vs. -(으)ㄴ/는데",
    korean: "대조 & 배경 (But / Background)",
    category: "clauses",
    summary: "1. -지만: přímý, ostrý kontrast ('ale', 'ačkoliv')\n2. -(으)ㄴ/는데: jemný úvod do situace, pozadí příběhu s lehkým protikladem.",
    formula: "[Kořen] + 지만 / [Přídavné jméno] + ㄴ/은데 / [Sloveso] + 는데",
    examples: [
      { ko: "비싸지만 맛있어요. (-지만)", ro: "Bissajiman masisseoyo.", cz: "Je to drahé, ale chutné." },
      { ko: "지금 바쁜데 나중에 이야기해요. (-는데)", ro: "Jigeum bappeunde najung-e iyagihaeyo.", cz: "Teď jsem zaneprázdněný, promluvme si později." }
    ],
    tip: "-(으)ㄴ/는데 je v mluvené korejštině mnohem oblíbenější než ostré -지만."
  },
  {
    id: "g31",
    title: "Tázací dovětek: -지요? / -죠? (Right? Isn't it?)",
    korean: "-지요? (hovorově -죠?)",
    category: "nuance",
    summary: "Ujištění se u posluchače, zda souhlasí s tím, co už oba tuší ('Že ano?', 'Není-liž pravda?').",
    formula: "[Kořen slovesa/přídavného jména] + 죠?",
    examples: [
      { ko: "오늘 날씨 좋지요? (좋죠?)", ro: "Oneul nalssi jotjiyo?", cz: "Dnes je krásné počasí, že ano?" },
      { ko: "한국어 재미있죠?", ro: "Hangugeo jaemi-itjyo?", cz: "Korejština je zábavná, viďte?" }
    ],
    tip: "Zkrácená forma '-죠' je naprosto dominantní v každodenní mluvě."
  },
  {
    id: "g32",
    title: "Připomenutí známého faktu: -잖아요 (As you know)",
    korean: "-잖아요 (Vždyť přece...)",
    category: "nuance",
    summary: "Připomíná posluchači fakt, který už dávno zná nebo by si ho měl uvědomit ('Vždyť přece víš, že...').",
    formula: "[Kořen] + 잖아요",
    examples: [
      { ko: "어제 말했잖아요!", ro: "Eoje malhaetjanayo!", cz: "Vždyť jsem ti to včera říkal!" },
      { ko: "한국 음식이 맵잖아요.", ro: "Hanguk eumsig-i maepjanayo.", cz: "Vždyť víš, že korejské jídlo je pálivé." }
    ],
    tip: "Dodává konverzaci velmi přirozený, živý a lidský tón."
  }
];
