// ═══════════════════════════════════════════════════════════
// HCODE.ART • DUAL KOREAN NUMBER SYSTEMS & CLASSIFIERS
// Sino-Korean vs. Native Korean Numbers + 12 Key Counters
// ═══════════════════════════════════════════════════════════

window.KOREAN_NUMBERS_DATA = {
  sinoKorean: [
    { num: 0, hangul: "영 / 공", roman: "yeong / gong", hanja: "零 / 空", cz: "nula (0)", note: "공 se používá v telefonních číslech, 영 v matematice a teplotách." },
    { num: 1, hangul: "일", roman: "il", hanja: "一", cz: "jedna (1)", note: "Základní jednotka, 1. den měsíce (1일)." },
    { num: 2, hangul: "이", roman: "i", hanja: "二", cz: "dvě (2)", note: "Také slovo pro 'zub' nebo 'tento'." },
    { num: 3, hangul: "삼", roman: "sam", hanja: "三", cz: "tři (3)", note: "Např. 삼월 = březen (3. měsíc)." },
    { num: 4, hangul: "사", roman: "sa", hanja: "čtyři (4)", note: "Homonimum se slovem smrt (死), proto se v budovách v Koreji někdy místo 4. patra píše 'F'." },
    { num: 5, hangul: "오", roman: "o", hanja: "五", cz: "pět (5)", note: "Např. 오분 = 5 minut." },
    { num: 6, hangul: "육", roman: "yuk", hanja: "六", cz: "šest (6)", note: "V kombinacích mění výslovnost (např. 6월 = 유월 yu-wol, červen)." },
    { num: 7, hangul: "칠", roman: "chil", hanja: "七", cz: "sedm (7)", note: "Např. 칠월 = červenec." },
    { num: 8, hangul: "팔", roman: "pal", hanja: "八", cz: "osm (8)", note: "Také slovo pro 'paže / ruka'." },
    { num: 9, hangul: "구", roman: "gu", hanja: "九", cz: "devět (9)", note: "Např. 구월 = září." },
    { num: 10, hangul: "십", roman: "sip", hanja: "十", cz: "deset (10)", note: "Základ pro desítky (20 = 이십, 30 = 삼십, 99 = 구십구)." },
    { num: 100, hangul: "백", roman: "baek", hanja: "百", cz: "sto (100)", note: "Např. 백원 = 100 wonů." },
    { num: 1000, hangul: "천", roman: "cheon", hanja: "千", cz: "tisíc (1 000)", note: "Např. 오천원 = 5 000 wonů." },
    { num: 10000, hangul: "만", roman: "man", hanja: "萬", cz: "deset tisíc (10 000)", note: "Základní jednotka asijského počítání (10 tisíc, nikoliv tisíc)!" },
    { num: 100000000, hangul: "억", roman: "eok", hanja: "億", cz: "sto milionů (100 000 000)", note: "Velká čísla v ekonomice a rozpočtech." }
  ],

  nativeKorean: [
    { num: 1, hangul: "하나", short: "한", roman: "hana (han)", cz: "jedna (1)", note: "Před počítadlem se zkracuje na 한 (např. 한 개 = 1 kus)." },
    { num: 2, hangul: "둘", short: "두", roman: "dul (du)", cz: "dvě (2)", note: "Před počítadlem se zkracuje na 두 (např. 두 명 = 2 lidé)." },
    { num: 3, hangul: "셋", short: "세", roman: "set (se)", cz: "tři (3)", note: "Před počítadlem se zkracuje na 세 (např. 세 잔 = 3 šálky)." },
    { num: 4, hangul: "넷", short: "네", roman: "net (ne)", cz: "čtyři (4)", note: "Před počítadlem se zkracuje na 네 (např. 네 마리 = 4 zvířata)." },
    { num: 5, hangul: "다섯", short: "다섯", roman: "daseot", cz: "pět (5)", note: "Zůstává beze změny: 다섯 개." },
    { num: 6, hangul: "여섯", short: "여섯", roman: "yeoseot", cz: "šest (6)", note: "여섯 시 = 6 hodin." },
    { num: 7, hangul: "일곱", short: "일곱", roman: "ilgop", cz: "sedm (7)", note: "일곱 살 = 7 let věku." },
    { num: 8, hangul: "여덟", short: "여덟", roman: "yeodeol", cz: "osm (8)", note: "Vyslovuje se [여덜]." },
    { num: 9, hangul: "아홉", short: "아홉", roman: "ahop", cz: "devět (9)", note: "아홉 시 = 9 hodin." },
    { num: 10, hangul: "열", short: "열", roman: "yeol", cz: "deset (10)", note: "열 명 = 10 lidí." },
    { num: 20, hangul: "스물", short: "스무", roman: "seumul (seumu)", cz: "dvacet (20)", note: "Před počítadlem se zkracuje na 스무 (např. 스무 살 = 20 let)." },
    { num: 30, hangul: "서른", short: "서른", roman: "seoreun", cz: "třicet (30)", note: "서른 살 = 30 let věku." },
    { num: 40, hangul: "마흔", short: "마흔", roman: "maheun", cz: "čtyřicet (40)", note: "마흔 살 = 40 let věku." },
    { num: 50, hangul: "쉰", short: "쉰", roman: "swin", cz: "padesát (50)", note: "쉰 개 = 50 kusů." },
    { num: 100, hangul: "온 (archaické) -> 백", short: "백", roman: "baek", cz: "sto (100)", note: "Od čísla 100 se v moderní korejštině pro obě řady používá sino-korejské 백 (baek)." }
  ],

  counters: [
    {
      hangul: "개 (gae)",
      target: "Všeobecné předměty & neživé věci",
      icon: "📦",
      system: "Rodilá čísla",
      examples: "사과 한 개 (1 jablko), 빵 두 개 (2 chleby), 의자 세 개 (3 židle)"
    },
    {
      hangul: "명 / 분 (myeong / bun)",
      target: "Lidé (명 standardní, 분 zdvořilé/uctivé)",
      icon: "👥",
      system: "Rodilá čísla",
      examples: "친구 세 명 (3 kamarádi), 손님 두 분 (2 vzácní hosté)"
    },
    {
      hangul: "마리 (mari)",
      target: "Zvířata, ryby, hmyz",
      icon: "🐶",
      system: "Rodilá čísla",
      examples: "강아지 한 마리 (1 štěně), 고양이 두 마리 (2 kočky), 물고기 세 마리"
    },
    {
      hangul: "권 (gwon)",
      target: "Knihy, časopisy, sešity",
      icon: "📚",
      system: "Rodilá čísla",
      examples: "책 한 권 (1 kniha), 공책 두 권 (2 sešity)"
    },
    {
      hangul: "병 (byeong)",
      target: "Láhve (nápoje, pivo, voda)",
      icon: "🍾",
      system: "Rodilá čísla",
      examples: "물 한 병 (1 láhev vody), 맥주 두 병 (2 láhve piva)"
    },
    {
      hangul: "잔 (jan)",
      target: "Šálky, sklenice, hrnky",
      icon: "☕",
      system: "Rodilá čísla",
      examples: "커피 한 잔 (1 šálek kávy), 차 두 잔 (2 šálky čaje)"
    },
    {
      hangul: "대 (dae)",
      target: "Auta, letadla, stroje, elektronika",
      icon: "🚗",
      system: "Rodilá čísla",
      examples: "차 한 대 (1 auto), 컴퓨터 두 대 (2 počítače), 스마트폰 한 대"
    },
    {
      hangul: "살 / 세 (sal / se)",
      target: "Věk (roky věku člověka)",
      icon: "🎂",
      system: "살 = Rodilá čísla (스물다섯 살), 세 = Sino-korejská (25세)",
      examples: "스무 살이에요 (Je mi 20 let), 몇 살이에요? (Kolik ti je let?)"
    },
    {
      hangul: "송이 (song-i)",
      target: "Květiny, hrozny vína, banány (trs)",
      icon: "🌹",
      system: "Rodilá čísla",
      examples: "장미 한 송이 (1 růže), 포도 두 송이 (2 hrozny)"
    },
    {
      hangul: "켤레 (kyeolle)",
      target: "Páry obuvi a ponožek",
      icon: "👟",
      system: "Rodilá čísla",
      examples: "신발 한 켤레 (1 pár bot), 양말 두 켤레 (2 páry ponožek)"
    },
    {
      hangul: "장 (jang)",
      target: "Tenké listy papíru, jízdenky, fotografie",
      icon: "📄",
      system: "Rodilá čísla",
      examples: "종이 한 장 (1 list papíru), 사진 두 장 (2 fotky), 표 세 장 (3 lístky)"
    },
    {
      hangul: "시 & 분 (si & bun)",
      target: "Časové určení (Hodiny = Rodilá, Minuty = Sino-korejská!)",
      icon: "⏰",
      system: "Kombinace obou systémů!",
      examples: "세 시 이십오 분 (3:25 - 세 시 = 3 hodiny rodile, 이십오 분 = 25 minut sino-korejsky!)"
    }
  ]
};
