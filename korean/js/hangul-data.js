// ═══════════════════════════════════════════════════════════
// HCODE.ART • COMPLETE HANGUL (한글) ALPHABET DATA
// 14 Basic + 5 Tense Consonants, 10 Basic + 11 Complex Vowels,
// 7 Representative Batchim rules & 5 Sound Assimilation Laws.
// ═══════════════════════════════════════════════════════════

window.KOREAN_HANGUL_DATA = {
  consonants: [
    {
      id: "c1",
      letter: "ㄱ",
      name: "기역 (giyeok)",
      roman: "g / k",
      type: "Základní souhláska",
      articulation: "Měkkopatrová (jazyk se opírá o patro)",
      desc: "Na začátku slova zní jemně nezněle mezi 'k' a 'g'. Mezi dvěma samohláskami zní jako znělé české 'g'. Jako koncová souhláska (batchim) zní jako neexplozivní zakončené 'k'.",
      examples: [
        { hangul: "가구", roman: "gagu", cz: "nábytek 🪑" },
        { hangul: "고기", roman: "gogi", cz: "maso 🥩" },
        { hangul: "국", roman: "guk", cz: "polévka 🍲" },
        { hangul: "김치", roman: "kimchi", cz: "kimči 🥬" }
      ]
    },
    {
      id: "c2",
      letter: "ㄴ",
      name: "니은 (nieun)",
      roman: "n",
      type: "Základní souhláska",
      articulation: "Dásňová nosovka (špička jazyka na horním dásňovém oblouku)",
      desc: "Vyslovuje se zcela přirozeně jako české 'n' ve všech pozicích (na začátku, uprostřed i jako koncový batchim).",
      examples: [
        { hangul: "나라", roman: "nara", cz: "země / stát 🗺️" },
        { hangul: "나무", roman: "namu", cz: "strom 🌳" },
        { hangul: "눈", roman: "nun", cz: "oko 👁️ / sníh ❄️" },
        { hangul: "누나", roman: "nuna", cz: "starší sestra 👩" }
      ]
    },
    {
      id: "c3",
      letter: "ㄷ",
      name: "디귿 (digeut)",
      roman: "d / t",
      type: "Základní souhláska",
      articulation: "Dásňová závěrová",
      desc: "Na začátku slova zní jemně jako neznělé 't', mezi samohláskami jako české znělé 'd'. Jako batchim funguje jako neznělá zarážka [t].",
      examples: [
        { hangul: "다리", roman: "dari", cz: "noha 🦵 / most 🌉" },
        { hangul: "돈", roman: "don", cz: "peníze 💵" },
        { hangul: "달", roman: "dal", cz: "měsíc 🌙" },
        { hangul: "듣다", roman: "deutda", cz: "poslouchat 🎧" }
      ]
    },
    {
      id: "c4",
      letter: "ㄹ",
      name: "리을 (rieul)",
      roman: "r / l",
      type: "Základní souhláska",
      articulation: "Tekutá souhláska (kmitavá dásňová)",
      desc: "Mezi samohláskami se vyslovuje jako jednoúderové jemné 'r' (jako ve španělštině 'pero'). Na konci slabiky nebo vedle jiného ㄹ se vyslovuje jako jasné měkké 'l'.",
      examples: [
        { hangul: "라면", roman: "ramyeon", cz: "ramen 🍜" },
        { hangul: "라디오", roman: "radio", cz: "rádio 📻" },
        { hangul: "물", roman: "mul", cz: "voda 💧" },
        { hangul: "딸기", roman: "ttalgi", cz: "jahoda 🍓" }
      ]
    },
    {
      id: "c5",
      letter: "ㅁ",
      name: "미음 (mieum)",
      roman: "m",
      type: "Základní souhláska",
      articulation: "Retná nosovka (tvar zavřených úst)",
      desc: "Grafický symbol znázorňuje obrys úst. Zní vždy shodně s českým 'm' ve všech pozicích.",
      examples: [
        { hangul: "마음", roman: "ma-eum", cz: "srdce / mysl 💖" },
        { hangul: "모자", roman: "moja", cz: "čepice / klobouk 🧢" },
        { hangul: "엄마", roman: "eomma", cz: "maminka 👩‍🍼" },
        { hangul: "몸", roman: "mom", cz: "tělo 🏃" }
      ]
    },
    {
      id: "c6",
      letter: "ㅂ",
      name: "비읍 (bieup)",
      roman: "b / p",
      type: "Základní souhláska",
      articulation: "Obouretná závěrová",
      desc: "Na začátku slova zní lehce nezněle mezi 'p' a 'b'. Mezi dvěma samohláskami zní jako plné české 'b'. Jako batchim se rty pevně sevřou bez vypuštění vzduchu [p].",
      examples: [
        { hangul: "밥", roman: "bap", cz: "rýže / jídlo 🍚" },
        { hangul: "바다", roman: "bada", cz: "moře 🌊" },
        { hangul: "비", roman: "bi", cz: "déšť 🌧️" },
        { hangul: "바보", roman: "babo", cz: "hlupáček / trumbera 🤪" }
      ]
    },
    {
      id: "c7",
      letter: "ㅅ",
      name: "시옷 (siot)",
      roman: "s / sh",
      type: "Základní souhláska",
      articulation: "Zubní úžinová (tvar řezáku)",
      desc: "Před samohláskami (ㅏ, ㅓ, ㅗ, ㅜ, ㅡ) zní jako jemné 's'. Před samohláskami s 'i' nebo 'y' (ㅣ, ㅑ, ㅕ, ㅛ, ㅠ, ㅖ) se palatalizuje a vyslovuje se měkce jako 'š' (např. 시간 = šigan).",
      examples: [
        { hangul: "사람", roman: "saram", cz: "člověk 👤" },
        { hangul: "사랑", roman: "sarang", cz: "láska ❤️" },
        { hangul: "시간", roman: "sigan", cz: "čas / hodina ⏱️" },
        { hangul: "신문", roman: "sinmun", cz: "noviny 📰" }
      ]
    },
    {
      id: "c8",
      letter: "ㅇ",
      name: "이응 (ieung)",
      roman: "tiché / ng",
      type: "Základní souhláska",
      articulation: "Hrdelní kruhová",
      desc: "Na začátku slabiky je zcela TICHÉ (funguje jako grafická výplň před samohláskou, např. 아이 = ai). Na konci slabiky (jako batchim) se čte jako nosové 'ng' [ŋ] (jako v 'kankán' či angl. 'sing').",
      examples: [
        { hangul: "아이", roman: "a-i", cz: "dítě 👶" },
        { hangul: "우유", roman: "uyu", cz: "mléko 🥛" },
        { hangul: "강", roman: "gang", cz: "řeka 🏞️" },
        { hangul: "사랑", roman: "sarang", cz: "láska 💕" }
      ]
    },
    {
      id: "c9",
      letter: "ㅈ",
      name: "지읒 (jieut)",
      roman: "j / ch",
      type: "Základní souhláska",
      articulation: "Polodásňová afrikáta",
      desc: "Na začátku slova zní lehce nezněle mezi 'č' a 'dž'. Mezi samohláskami se mění na znělé české 'dž' (jako v džez). Jako batchim zní jako tichá zarážka [t].",
      examples: [
        { hangul: "지도", roman: "jido", cz: "mapa 🗺️" },
        { hangul: "집", roman: "jip", cz: "dům / domov 🏠" },
        { hangul: "친구", roman: "chingu", cz: "kamarád 🤝" },
        { hangul: "자동차", roman: "jadongcha", cz: "auto 🚗" }
      ]
    },
    {
      id: "c10",
      letter: "ㅊ",
      name: "치읓 (chieut)",
      roman: "ch (s přídechem)",
      type: "Aspirovaná souhláska",
      articulation: "Afrikáta s přídechem vzduchu",
      desc: "Vyslovuje se jako důrazné české 'č' s mocným výdechem vzduchu (aspirované ch'). Přiložte ruku k ústům – musíte ucítit silný vánek vzduchu.",
      examples: [
        { hangul: "친구", roman: "chingu", cz: "kamarád 👥" },
        { hangul: "차", roman: "cha", cz: "čaj 🍵 / auto 🚙" },
        { hangul: "치마", roman: "chima", cz: "sukně 👗" },
        { hangul: "춤", roman: "chum", cz: "tanec 💃" }
      ]
    },
    {
      id: "c11",
      letter: "ㅋ",
      name: "키읔 (kieuk)",
      roman: "k (s přídechem)",
      type: "Aspirovaná souhláska",
      articulation: "Zadopatrová s mocným výdechem",
      desc: "Silné aspirované 'kʰ'. Na rozdíl od běžného ㄱ má přidanou vodorovnou čárku značící proud vzduchu.",
      examples: [
        { hangul: "코", roman: "ko", cz: "nos 👃" },
        { hangul: "커피", roman: "keopi", cz: "káva ☕" },
        { hangul: "카메라", roman: "kamera", cz: "fotoaparát 📷" },
        { hangul: "카드", roman: "kadeu", cz: "karta 💳" }
      ]
    },
    {
      id: "c12",
      letter: "ㅌ",
      name: "티읕 (tieut)",
      roman: "t (s přídechem)",
      type: "Aspirovaná souhláska",
      articulation: "Dásňová s mocným výdechem",
      desc: "Silné aspirované 'tʰ' s explozí vzduchu (jako v angl. 'table').",
      examples: [
        { hangul: "토마토", roman: "tomato", cz: "rajče 🍅" },
        { hangul: "택시", roman: "taeksi", cz: "taxi 🚕" },
        { hangul: "태양", roman: "taeyang", cz: "slunce ☀️" },
        { hangul: "타다", roman: "tada", cz: "jet / nastoupit 🚴" }
      ]
    },
    {
      id: "c13",
      letter: "ㅍ",
      name: "피읖 (pieup)",
      roman: "p (s přídechem)",
      type: "Aspirovaná souhláska",
      articulation: "Obouretná s mocným výdechem",
      desc: "Důrazné aspirované 'pʰ' (podobně jako v angl. 'park').",
      examples: [
        { hangul: "포도", roman: "podo", cz: "hroznové víno 🍇" },
        { hangul: "피자", roman: "pija", cz: "pizza 🍕" },
        { hangul: "파", roman: "pa", cz: "jarní cibulka 🧅" },
        { hangul: "편지", roman: "pyeonji", cz: "dopis ✉️" }
      ]
    },
    {
      id: "c14",
      letter: "ㅎ",
      name: "히읗 (hieut)",
      roman: "h",
      type: "Základní souhláska",
      articulation: "Hlasivková úžinová",
      desc: "Jemné neznělé 'h' (podobně jako v angl. 'house'). Před samohláskami zní jemně, vedle jiných souhlásek způsobuje jejich aspiraci.",
      examples: [
        { hangul: "하늘", roman: "haneul", cz: "nebe ☁️" },
        { hangul: "하루", roman: "haru", cz: "den 📅" },
        { hangul: "호수", roman: "hosu", cz: "jezero 🏞️" },
        { hangul: "한글", roman: "hangeul", cz: "Hangul 🇰🇷" }
      ]
    },
    // 5 Tense Consonants
    {
      id: "tc1",
      letter: "ㄲ",
      name: "쌍기역 (ssang-giyeok)",
      roman: "kk",
      type: "Zdvojená (napjatá) souhláska",
      articulation: "Glosální tenzifikace bez výdechu vzduchu",
      desc: "Extrémně napjaté 'k'. Hlasivky se sevřou, nevypustí se žádný vzduch a vytvoří se ostrý, rázný tón.",
      examples: [
        { hangul: "꼬리", roman: "kkori", cz: "ocas 🦊" },
        { hangul: "꿈", roman: "kkum", cz: "sen 💭" },
        { hangul: "꽃", roman: "kkot", cz: "květina 🌸" },
        { hangul: "깎다", roman: "kkakda", cz: "krájet / slevit ✂️" }
      ]
    },
    {
      id: "tc2",
      letter: "ㄸ",
      name: "쌍디귿 (ssang-digeut)",
      roman: "tt",
      type: "Zdvojená (napjatá) souhláska",
      articulation: "Napjatá dásňová",
      desc: "Ostré, napjaté 't' s uzavřeným hrdlem bez vyfouknutí vzduchu.",
      examples: [
        { hangul: "딸", roman: "ttal", cz: "dcera 👧" },
        { hangul: "땀", roman: "ttam", cz: "pot 💦" },
        { hangul: "떡", roman: "tteok", cz: "rýžový koláček 🍡" },
        { hangul: "따뜻하다", roman: "ttatteuthada", cz: "být teplý / útulný ☀️" }
      ]
    },
    {
      id: "tc3",
      letter: "ㅃ",
      name: "쌍비읍 (ssang-bieup)",
      roman: "pp",
      type: "Zdvojená (napjatá) souhláska",
      articulation: "Napjatá obouretná",
      desc: "Napjaté, úderné 'p' s pevně stisknutými rty bez úniku dechu.",
      examples: [
        { hangul: "빵", roman: "ppang", cz: "chléb / pečivo 🍞" },
        { hangul: "빨간색", roman: "ppalgansaek", cz: "červená barva 🔴" },
        { hangul: "뽀뽀", roman: "ppoppo", cz: "pusinka / polibek 💋" },
        { hangul: "빠르다", roman: "ppareuda", cz: "být rychlý ⚡" }
      ]
    },
    {
      id: "tc4",
      letter: "ㅆ",
      name: "쌍시옷 (ssang-siot)",
      roman: "ss",
      type: "Zdvojená (napjatá) souhláska",
      articulation: "Napjatá zubní",
      desc: "Silné, ostré, syčivé 's' (jako syčení hada), s vyšším tónem.",
      examples: [
        { hangul: "쌀", roman: "ssal", cz: "nevařená rýže 🌾" },
        { hangul: "씨앗", roman: "ssiat", cz: "semínko 🌱" },
        { hangul: "싸다", roman: "ssada", cz: "být levný 🏷️" },
        { hangul: "쓰다", roman: "sseuda", cz: "psát ✍️ / hořký ☕" }
      ]
    },
    {
      id: "tc5",
      letter: "ㅉ",
      name: "쌍지읒 (ssang-jieut)",
      roman: "jj",
      type: "Zdvojená (napjatá) souhláska",
      articulation: "Napjatá afrikáta",
      desc: "Napjaté, ostré 'č' bez přídechu, s pevným sevřením jazyka o patro.",
      examples: [
        { hangul: "짜다", roman: "jjada", cz: "být slaný 🧂" },
        { hangul: "찌개", roman: "jjigae", cz: "hustý gulášový kotlík 🍲" },
        { hangul: "진짜", roman: "jinjja", cz: "opravdu / vážně? 😲" },
        { hangul: "쪽", roman: "jjok", cz: "směr / strana 🧭" }
      ]
    }
  ],

  vowels: [
    // 10 Basic Vowels
    {
      id: "v1",
      letter: "ㅏ",
      roman: "a",
      type: "Základní Yang samohláska",
      philosophy: "Světlá samohláska (člověk ㅣ + slunce/nebe ㆍ vpravo)",
      desc: "Otevřené jasné české 'a'. Svislá čára s tečkou/čárkou směřující ven (doprava = světlo Yang).",
      examples: [
        { hangul: "아이", roman: "a-i", cz: "dítě 👶" },
        { hangul: "바나나", roman: "banana", cz: "banán 🍌" },
        { hangul: "바다", roman: "bada", cz: "moře 🌊" }
      ]
    },
    {
      id: "v2",
      letter: "ㅑ",
      roman: "ya",
      type: "Jotovaná samohláska",
      philosophy: "Dvě čárky doprava = přidaný zvuk 'y'",
      desc: "Vyslovuje se jako české 'ja'.",
      examples: [
        { hangul: "야구", roman: "yagu", cz: "baseball ⚾" },
        { hangul: "약", roman: "yak", cz: "lék 💊" },
        { hangul: "야채", roman: "yachae", cz: "zelenina 🥦" }
      ]
    },
    {
      id: "v3",
      letter: "ㅓ",
      roman: "eo",
      type: "Základní Yin samohláska",
      philosophy: "Temná samohláska (čárka směřuje dovnitř / doleva)",
      desc: "Otevřené zadní 'o/e'. Ústa otevřete jako na 'a', ale v hrdle vyslovíte hluboké temné 'o' (v anglické fonetice [ʌ], jako v 'cup').",
      examples: [
        { hangul: "어머니", roman: "eomeoni", cz: "matka 👩" },
        { hangul: "얼굴", roman: "eolgul", cz: "obličej 🧑" },
        { hangul: "언니", roman: "eonni", cz: "starší sestra 👧" }
      ]
    },
    {
      id: "v4",
      letter: "ㅕ",
      roman: "yeo",
      type: "Jotovaná samohláska",
      philosophy: "Dvě čárky doleva",
      desc: "Vyslovuje se jako 'j' + otevřené 'eo' (jako v angl. 'young').",
      examples: [
        { hangul: "여자", roman: "yeoja", cz: "žena 👩" },
        { hangul: "여름", roman: "yeoreum", cz: "léto ☀️" },
        { hangul: "여행", roman: "yeohaeng", cz: "cestování ✈️" }
      ]
    },
    {
      id: "v5",
      letter: "ㅗ",
      roman: "o",
      type: "Základní Yang samohláska",
      philosophy: "Svislá čárka nahoru nad zemskou linii ㅡ (slunce vycházející nad zemí)",
      desc: "Uzavřené zakulacené české 'o'. Rty jsou pevně zaokrouhlené do malého kroužku.",
      examples: [
        { hangul: "오이", roman: "o-i", cz: "okurka 🥒" },
        { hangul: "오늘", roman: "oneul", cz: "dnes 📅" },
        { hangul: "오후", roman: "ohu", cz: "odpoledne 🕑" }
      ]
    },
    {
      id: "v6",
      letter: "ㅛ",
      roman: "yo",
      type: "Jotovaná samohláska",
      philosophy: "Dvě čárky nahoru",
      desc: "Vyslovuje se jako české 'jo' se zaokrouhlenými rty.",
      examples: [
        { hangul: "요리", roman: "yori", cz: "vaření 🍳" },
        { hangul: "요가", roman: "yoga", cz: "jóga 🧘" },
        { hangul: "요일", roman: "yoil", cz: "den v týdnu 🗓️" }
      ]
    },
    {
      id: "v7",
      letter: "ㅜ",
      roman: "u",
      type: "Základní Yin samohláska",
      philosophy: "Čárka směřuje dolů pod zemskou linii ㅡ (hlubina)",
      desc: "Zakulacené české 'u' s vystrčenými rty dopředu.",
      examples: [
        { hangul: "우산", roman: "usan", cz: "deštník ☂️" },
        { hangul: "우리", roman: "uri", cz: "my / náš 👥" },
        { hangul: "우주", roman: "uju", cz: "vesmír 🚀" }
      ]
    },
    {
      id: "v8",
      letter: "ㅠ",
      roman: "yu",
      type: "Jotovaná samohláska",
      philosophy: "Dvě čárky dolů",
      desc: "Vyslovuje se jako české 'ju'.",
      examples: [
        { hangul: "유리", roman: "yuri", cz: "sklo 🪟" },
        { hangul: "유명", roman: "yumyeong", cz: "slavný 🌟" },
        { hangul: "휴지", roman: "hyuji", cz: "kapesník / toaletní papír 🧻" }
      ]
    },
    {
      id: "v9",
      letter: "ㅡ",
      roman: "eu",
      type: "Země (horizontální základ)",
      philosophy: "Symbol ploché, stabilní země ㅡ",
      desc: "Nezaokrouhlené zadní 'u'. Roztáhněte koutky úst do širokého úsměvu a bez pohybu rtů vyslovte hluboké 'u/y'.",
      examples: [
        { hangul: "음악", roman: "eum-ak", cz: "hudba 🎵" },
        { hangul: "은행", roman: "eunhaeng", cz: "banka 🏦" },
        { hangul: "하늘", roman: "haneul", cz: "nebe ☁️" }
      ]
    },
    {
      id: "v10",
      letter: "ㅣ",
      roman: "i",
      type: "Člověk (vertikální most)",
      philosophy: "Symbol vzpřímeného člověka stojícího mezi nebem a zemí",
      desc: "Jasné české 'i'. Neutrální samohláska, která se může pojit s Yang i Yin samohláskami.",
      examples: [
        { hangul: "이름", roman: "ireum", cz: "jméno 🏷️" },
        { hangul: "이야기", roman: "iyagi", cz: "příběh 📖" },
        { hangul: "이", roman: "i", cz: "zub 🦷 / číslo dva (2)" }
      ]
    },

    // 11 Complex Diphthongs
    {
      id: "dv1",
      letter: "ㅐ",
      roman: "ae",
      type: "Složená samohláska (ㅏ + ㅣ)",
      desc: "Vyslovuje se jako otevřené široké české 'e' (jako v angl. 'apple'). V moderní hovorové korejštině zní téměř nerozeznatelně od ㅔ.",
      examples: [
        { hangul: "배", roman: "bae", cz: "hruška 🍐 / loď 🚢 / břicho" },
        { hangul: "새", roman: "sae", cz: "pták 🐦 / nový" }
      ]
    },
    {
      id: "dv2",
      letter: "ㅒ",
      roman: "yae",
      type: "Jotovaná spřežka (ㅑ + ㅣ)",
      desc: "Vyslovuje se jako 'je' s otevřeným vokálem.",
      examples: [
        { hangul: "얘기", roman: "yaegi", cz: "povídání / řeč 🗣️" }
      ]
    },
    {
      id: "dv3",
      letter: "ㅔ",
      roman: "e",
      type: "Složená samohláska (ㅓ + ㅣ)",
      desc: "Běžné české 'e'.",
      examples: [
        { hangul: "가게", roman: "gage", cz: "obchod 🏪" },
        { hangul: "세계", roman: "segye", cz: "svět 🌍" }
      ]
    },
    {
      id: "dv4",
      letter: "ㅖ",
      roman: "ye",
      type: "Jotovaná spřežka (ㅕ + ㅣ)",
      desc: "Vyslovuje se jako české 'je'.",
      examples: [
        { hangul: "예", roman: "ye", cz: "ano (zdvořile) / příklad" },
        { hangul: "시계", roman: "sigye", cz: "hodinky ⌚" }
      ]
    },
    {
      id: "dv5",
      letter: "ㅘ",
      roman: "wa",
      type: "Dvojhláska (ㅗ + ㅏ)",
      desc: "Vyslovuje se jako 'wa' (jako v angl. 'water').",
      examples: [
        { hangul: "사과", roman: "sagwa", cz: "jablko 🍎 / omluva" },
        { hangul: "화요일", roman: "hwayoil", cz: "úterý 📅" }
      ]
    },
    {
      id: "dv6",
      letter: "ㅙ",
      roman: "wae",
      type: "Dvojhláska (ㅗ + ㅐ)",
      desc: "Vyslovuje se jako 'we'.",
      examples: [
        { hangul: "왜", roman: "wae", cz: "proč? ❓" },
        { hangul: "돼지", roman: "dwaeji", cz: "prase 🐷" }
      ]
    },
    {
      id: "dv7",
      letter: "ㅚ",
      roman: "oe",
      type: "Dvojhláska (ㅗ + ㅣ)",
      desc: "Původně jako německé 'ö', v moderní korejštině se vyslovuje prakticky shodně jako [we].",
      examples: [
        { hangul: "회사", roman: "hoesa", cz: "firma / společnost 🏢" },
        { hangul: "외국", roman: "oeguk", cz: "zahraničí 🌐" }
      ]
    },
    {
      id: "dv8",
      letter: "ㅝ",
      roman: "wo",
      type: "Dvojhláska (ㅜ + ㅓ)",
      desc: "Vyslovuje se jako 'wo' (jako v angl. 'wonder').",
      examples: [
        { hangul: "뭐", roman: "mwo", cz: "co? ❓" },
        { hangul: "원", roman: "won", cz: "won (korejská měna ₩)" }
      ]
    },
    {
      id: "dv9",
      letter: "ㅞ",
      roman: "we",
      type: "Dvojhláska (ㅜ + ㅔ)",
      desc: "Vyslovuje se jako 'we' (používá se hlavně v přejatých slovech).",
      examples: [
        { hangul: "웨딩", roman: "weding", cz: "svatba 💒" },
        { hangul: "웹사이트", roman: "wepsaiteu", cz: "webová stránka 💻" }
      ]
    },
    {
      id: "dv10",
      letter: "ㅟ",
      roman: "wi",
      type: "Dvojhláska (ㅜ + ㅣ)",
      desc: "Vyslovuje se jako 'wi' (jako v angl. 'we').",
      examples: [
        { hangul: "위", roman: "wi", cz: "nahoře / žaludek ⬆️" },
        { hangul: "귀", roman: "gwi", cz: "ucho 👂" }
      ]
    },
    {
      id: "dv11",
      letter: "ㅢ",
      roman: "ui",
      type: "Dvojhláska (ㅡ + ㅣ)",
      desc: "Zvuk 'eu' plynule přecházející do 'i'. Jako přivlastňovací částice se často vyslovuje jako [e], na začátku slova jako [ui], po souhlásce jako [i].",
      examples: [
        { hangul: "의사", roman: "uisa", cz: "lékař 🩺" },
        { hangul: "의자", roman: "uija", cz: "židle 🪑" }
      ]
    }
  ],

  batchimRules: [
    {
      id: "b1",
      target: "ㄱ, ㅋ, ㄲ, ㄳ, ㄺ",
      representative: "[ㄱ]",
      sound: "Zakončené neznělé [k]",
      rule: "Všechny tyto souhlásky se na konci slabiky (před mezerou nebo další souhláskou) neutralizují do jednoho jediného zvuku: neexplozivního [k].",
      examples: [
        { hangul: "책", read: "[책]", roman: "chaek", cz: "kniha 📚" },
        { hangul: "부엌", read: "[부억]", roman: "bueok", cz: "kuchyně 🍳" },
        { hangul: "밖", read: "[박]", roman: "bak", cz: "venku 🏞️" },
        { hangul: "닭", read: "[닥]", roman: "dak", cz: "kuře / slepice 🍗" }
      ]
    },
    {
      id: "b2",
      target: "ㄴ, ㄵ, ㄶ",
      representative: "[ㄴ]",
      sound: "Nosové [n]",
      rule: "Zůstává čistým nosovým zvukem [n]. U dvojitého ㄵ se vyslovuje ㄴ, u ㄶ se ㅎ v případě samohlásky ztrácí.",
      examples: [
        { hangul: "눈", read: "[눈]", roman: "nun", cz: "oko / sníh 👁️" },
        { hangul: "앉다", read: "[안따]", roman: "anta", cz: "sednout si 🪑" },
        { hangul: "많다", read: "[만타]", roman: "manta", cz: "být mnoho 📈" }
      ]
    },
    {
      id: "b3",
      target: "ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ",
      representative: "[ㄷ]",
      sound: "Zakončené neznělé [t]",
      rule: "Velká neutralizace! Až 7 různých souhlásek se na konci slabiky vyslovuje identicky jako neexplozivní zarážka [t].",
      examples: [
        { hangul: "옷", read: "[옫]", roman: "ot", cz: "oblečení 👕" },
        { hangul: "꽃", read: "[꼳]", roman: "kkot", cz: "květina 🌸" },
        { hangul: "끝", read: "[끋]", roman: "kkeut", cz: "konec 🏁" },
        { hangul: "있 다", read: "[읻따]", roman: "itda", cz: "být / existovat" }
      ]
    },
    {
      id: "b4",
      target: "ㄹ, ㄼ, ㄽ, ㄾ, ㅀ",
      representative: "[ㄹ]",
      sound: "Boční měkké [l]",
      rule: "Jazyk se opře o horní patro a drží tón [l]. U ㄼ se většinou čte ㄹ (např. 넓다 -> [널따]).",
      examples: [
        { hangul: "달", read: "[달]", roman: "dal", cz: "měsíc 🌙" },
        { hangul: "넓다", read: "[널따]", roman: "neolda", cz: "být široký ↔️" },
        { hangul: "길", read: "[길]", roman: "gil", cz: "cesta 🛣️" }
      ]
    },
    {
      id: "b5",
      target: "ㅁ, ㄻ",
      representative: "[ㅁ]",
      sound: "Retné nosové [m]",
      rule: "Sevření rtů. U dvojitého batchimu ㄻ vítězí souhláska ㅁ (např. 삶 -> [삼]).",
      examples: [
        { hangul: "밤", read: "[밤]", roman: "bam", cz: "noc 🌃 / kaštan 🌰" },
        { hangul: "삶", read: "[삼]", roman: "sam", cz: "život 🌱" },
        { hangul: "봄", read: "[봄]", roman: "bom", cz: "jaro 🌸" }
      ]
    },
    {
      id: "b6",
      target: "ㅂ, ㅍ, ㄿ, ㅄ",
      representative: "[ㅂ]",
      sound: "Zakončené [p]",
      rule: "Rty se těsně semknou do tiché zarážky [p]. U ㅄ se čte ㅂ a ㅅ způsobí zpevnění následující slabiky.",
      examples: [
        { hangul: "집", read: "[집]", roman: "jip", cz: "dům 🏠" },
        { hangul: "잎", read: "[입]", roman: "ip", cz: "list 🍃" },
        { hangul: "없다", read: "[업따]", roman: "eopda", cz: "nebýt / nemít ❌" },
        { hangul: "값", read: "[갑]", roman: "gap", cz: "cena 💰" }
      ]
    },
    {
      id: "b7",
      target: "ㅇ",
      representative: "[ㅇ]",
      sound: "Nosové [ŋ] (ng)",
      rule: "Na rozdíl od počátečního tichého ㅇ, jako batchim má plný nosový zvuk 'ng' (jako ve slově 'bengál' či angl. 'king').",
      examples: [
        { hangul: "강", read: "[강]", roman: "gang", cz: "řeka 🏞️" },
        { hangul: "방", read: "[방]", roman: "bang", cz: "pokoj 🚪" },
        { hangul: "공", read: "[공]", roman: "gong", cz: "míč ⚽ / nula (0)" }
      ]
    }
  ]
};
