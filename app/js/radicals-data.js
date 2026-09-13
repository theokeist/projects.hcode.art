// ═══════════════════════════════════════════════════════
// 204 MODERN CHINESE RADICALS LESSON (现代汉字部首 204)
// Standard simplified lexicography (GF 0011-2009 / Xinhua Zidian)
// Every card includes real vocabulary words with Hanzi, Pinyin, Czech!
// ═══════════════════════════════════════════════════════

(function() {
  const radicalsData = [
  [
    1,
    1,
    "一",
    "",
    "yī",
    "jedna, vodorovná čára",
    "Základní vodorovný tah, číslo jedna, počátek a jednota.",
    [
      [
        "天",
        "tiān",
        "nebe, den"
      ],
      [
        "三",
        "sān",
        "tři"
      ],
      [
        "下",
        "xià",
        "dole, sestupovat"
      ],
      [
        "不",
        "bù",
        "ne, zápor"
      ]
    ]
  ],
  [
    2,
    1,
    "丨",
    "",
    "gǔn",
    "svislá čára",
    "Svislý tah shora dolů, symbol propojení nebe a země.",
    [
      [
        "中",
        "zhōng",
        "střed, Čína"
      ],
      [
        "丰",
        "fēng",
        "hojný, bohatý"
      ],
      [
        "串",
        "chuàn",
        "špíz, provázet"
      ],
      [
        "申",
        "shēn",
        "vyjadřovat, devátá větev"
      ]
    ]
  ],
  [
    3,
    1,
    "丿",
    "",
    "piě",
    "šikmá čára vlevo",
    "Klesající šikmý tah vlevo, pohyb, sklon.",
    [
      [
        "千",
        "qiān",
        "tisíc"
      ],
      [
        "少",
        "shǎo",
        "málo, mladý"
      ],
      [
        "升",
        "shēng",
        "stoupat, litr"
      ],
      [
        "生",
        "shēng",
        "život, rodit se"
      ]
    ]
  ],
  [
    4,
    1,
    "丶",
    "",
    "diǎn",
    "tečka, kapka",
    "Kapka, tečka, jiskra, základní bodový tah.",
    [
      [
        "主",
        "zhǔ",
        "pán, hlavní"
      ],
      [
        "丸",
        "wán",
        "kulička, pilulka"
      ],
      [
        "丹",
        "dān",
        "rumělka, červený"
      ],
      [
        "求",
        "qiú",
        "žádat, hledat"
      ]
    ]
  ],
  [
    5,
    1,
    "乛",
    "𠃍 𠃋 𠃌",
    "zhé",
    "lomená čára, háček",
    "Tah s pravoúhlým nebo tupým lomem, záhyb.",
    [
      [
        "买",
        "mǎi",
        "kupovat"
      ],
      [
        "卖",
        "mài",
        "prodávat"
      ],
      [
        "通",
        "tōng",
        "průchodný, spojovat"
      ],
      [
        "尽",
        "jìn",
        "vyčerpat, dosáhnout konce"
      ]
    ]
  ],
  [
    6,
    1,
    "乙",
    "乚 乛 ⺄ 亅",
    "yǐ",
    "druhý, zakřivený tah",
    "Druhý nebeský kmen, plynulá křivka, klíček rostliny.",
    [
      [
        "也",
        "yě",
        "také, rovněž"
      ],
      [
        "巴",
        "bā",
        "dychtit, kůra"
      ],
      [
        "乞",
        "qǐ",
        "žebrat, prosit"
      ],
      [
        "乳",
        "rǔ",
        "mléko, prs"
      ]
    ]
  ],
  [
    7,
    2,
    "十",
    "",
    "shí",
    "deset, kříž",
    "Číslo deset, symbol úplnosti a dokonalosti čtyř světových stran.",
    [
      [
        "古",
        "gǔ",
        "starobylý"
      ],
      [
        "克",
        "kè",
        "překonat, gram"
      ],
      [
        "直",
        "zhí",
        "přímý, rovný"
      ],
      [
        "南",
        "nán",
        "jih"
      ]
    ]
  ],
  [
    8,
    2,
    "厂",
    "",
    "chǎng / hǎn",
    "útes, továrna",
    "Převislý útes chránící prostor, moderně továrna či dílna.",
    [
      [
        "原",
        "yuán",
        "původ, louka"
      ],
      [
        "厅",
        "tīng",
        "hala, sál"
      ],
      [
        "历",
        "lì",
        "prožít, kalendář"
      ],
      [
        "厚",
        "hòu",
        "tlustý, štědrý"
      ]
    ]
  ],
  [
    9,
    2,
    "匚",
    "",
    "fāng",
    "otevřená skříňka, truhlice",
    "Nádoba otevřená zprava, přihrádka na uchování cenností.",
    [
      [
        "区",
        "qū",
        "oblast, okres"
      ],
      [
        "医",
        "yī",
        "lékař, medicína"
      ],
      [
        "匠",
        "jiàng",
        "řemeslník, mistr"
      ],
      [
        "匹",
        "pǐ",
        "kus (koně), látka"
      ]
    ]
  ],
  [
    10,
    2,
    "卜",
    "",
    "bǔ",
    "věštění, věštba",
    "Praskliny na věšteckých želvích krunýřích z doby dynastie Shang.",
    [
      [
        "卡",
        "kǎ",
        "karta, uvíznout"
      ],
      [
        "占",
        "zhān / zhàn",
        "věštit, obsadit"
      ],
      [
        "卢",
        "lú",
        "příjmení Lu, chýše"
      ],
      [
        "卧",
        "wò",
        "ležet, ložnice"
      ]
    ]
  ],
  [
    11,
    2,
    "冂",
    "",
    "jiōng",
    "širý kraj, otevřený rám",
    "Vzdálené hranice země, otevřený prostor či klenba.",
    [
      [
        "同",
        "tóng",
        "stejný, společně"
      ],
      [
        "网",
        "wǎng",
        "síť, internet"
      ],
      [
        "周",
        "zhōu",
        "týden, obvod, dynastie Zhou"
      ],
      [
        "冈",
        "gāng",
        "hřeben hory"
      ]
    ]
  ],
  [
    12,
    2,
    "八",
    "丷",
    "bā",
    "osm, rozdělení",
    "Číslo osm, dvě čáry směřující od sebe jako rozdělení.",
    [
      [
        "分",
        "fēn",
        "dělit, minuta"
      ],
      [
        "公",
        "gōng",
        "veřejný, spravedlivý"
      ],
      [
        "共",
        "gòng",
        "společně"
      ],
      [
        "兵",
        "bīng",
        "voják, zbraň"
      ]
    ]
  ],
  [
    13,
    2,
    "人",
    "亻",
    "rén",
    "člověk (stojící člověk)",
    "Vzpřímená lidská postava, u složených znaků zleva jako 亻.",
    [
      [
        "你",
        "nǐ",
        "ty"
      ],
      [
        "他",
        "tā",
        "on"
      ],
      [
        "们",
        "men",
        "množné číslo osob"
      ],
      [
        "休",
        "xiū",
        "odpočívat (člověk u stromu)"
      ]
    ]
  ],
  [
    14,
    2,
    "勹",
    "",
    "bāo",
    "zabalit, obejmout",
    "Ohnutá postava objímající nebo balící předmět.",
    [
      [
        "包",
        "bāo",
        "balík, taška, taštička"
      ],
      [
        "句",
        "jù",
        "věta"
      ],
      [
        "勺",
        "sháo",
        "lžíce, naběračka"
      ],
      [
        "旬",
        "xún",
        "dekáda (10 dní)"
      ]
    ]
  ],
  [
    15,
    2,
    "几",
    "",
    "jǐ",
    "stolek, kolik",
    "Původně malý nízký dřevěný stolek pro opření, též otázka kolik.",
    [
      [
        "朵",
        "duǒ",
        "květ (klasifikátor)"
      ],
      [
        "机",
        "jī",
        "stroj, letadlo, telefon"
      ],
      [
        "凡",
        "fán",
        "obyčejný, všechen"
      ],
      [
        "风",
        "fēng",
        "vítr"
      ]
    ]
  ],
  [
    16,
    2,
    "儿",
    "",
    "ér",
    "dítě, syn, nohy",
    "Malé dítě s velkou hlavičkou a nožkami, koncovka podstatných jmen.",
    [
      [
        "兄",
        "xiōng",
        "starší bratr"
      ],
      [
        "光",
        "guāng",
        "světlo, záře"
      ],
      [
        "先",
        "xiān",
        "nejprve, dříve"
      ],
      [
        "充",
        "chōng",
        "naplnit, nabíjet"
      ]
    ]
  ],
  [
    17,
    2,
    "匕",
    "",
    "bǐ",
    "lžíce, dýka",
    "Malá lžíce na jídlo, též rituální krátká dýka.",
    [
      [
        "北",
        "běi",
        "sever"
      ],
      [
        "化",
        "huà",
        "měnit se, chemie"
      ],
      [
        "匙",
        "chí",
        "lžička, klíč"
      ],
      [
        "疑",
        "yí",
        "pochybovat"
      ]
    ]
  ],
  [
    18,
    2,
    "入",
    "",
    "rù",
    "vstoupit, vcházet",
    "Kořeny pronikající do země, vstoupení dovnitř.",
    [
      [
        "内",
        "nèi",
        "uvnitř, vnitřní"
      ],
      [
        "全",
        "quán",
        "celý, kompletní"
      ],
      [
        "两",
        "liǎng",
        "dva (pro počet)"
      ],
      [
        "入",
        "rù",
        "vstup, vejít"
      ]
    ]
  ],
  [
    19,
    2,
    "冫",
    "",
    "bīng",
    "led (dvě kapky)",
    "Krystalky ledu, chlad, zmrznutí; zjednodušená forma ledu 冰.",
    [
      [
        "冷",
        "lěng",
        "studený, chladný"
      ],
      [
        "冰",
        "bīng",
        "led"
      ],
      [
        "冬",
        "dōng",
        "zima"
      ],
      [
        "冻",
        "dòng",
        "mrznout, zmrazit"
      ]
    ]
  ],
  [
    20,
    2,
    "冖",
    "",
    "mì",
    "přikrývka, kryt",
    "Látková pokrývka nebo plachta položená přes věci.",
    [
      [
        "写",
        "xiě",
        "psát"
      ],
      [
        "军",
        "jūn",
        "armáda, vojsko"
      ],
      [
        "农",
        "nóng",
        "zemědělství, rolník"
      ],
      [
        "冠",
        "guān",
        "koruna, věnec"
      ]
    ]
  ],
  [
    21,
    2,
    "讠",
    "言",
    "yán",
    "řeč, slova",
    "Zjednodušený radikál pro mluvení, slova a jazyk.",
    [
      [
        "说",
        "shuō",
        "mluvit, říkat"
      ],
      [
        "话",
        "huà",
        "slova, řeč"
      ],
      [
        "语",
        "yǔ",
        "jazyk, mluva"
      ],
      [
        "请",
        "qǐng",
        "prosit, zvát"
      ]
    ]
  ],
  [
    22,
    2,
    "凵",
    "",
    "kǎn",
    "otevřená jáma, miska",
    "Jáma v zemi nebo nádoba otevřená shora.",
    [
      [
        "凶",
        "xiōng",
        "krutý, zlověstný"
      ],
      [
        "出",
        "chū",
        "vyjít ven"
      ],
      [
        "击",
        "jī",
        "udeřit, tlouci"
      ],
      [
        "画",
        "huà",
        "malovat, obraz"
      ]
    ]
  ],
  [
    23,
    2,
    "卩",
    "⺋",
    "jié",
    "pečeť, klečící osoba",
    "Rituální pečetidlo z nefritu nebo klečící poddaný.",
    [
      [
        "卫",
        "wèi",
        "bránit, hygiena"
      ],
      [
        "印",
        "yìn",
        "tisknout, pečeť"
      ],
      [
        "危",
        "wēi",
        "nebezpečný"
      ],
      [
        "却",
        "què",
        "avšak, ustoupit"
      ]
    ]
  ],
  [
    24,
    2,
    "阝",
    "阜 / 邑",
    "fǔ / yì",
    "pahorek (vlevo) / město (vpravo)",
    "Vlevo značí kopec a terén (阜), vpravo město a osídlení (邑).",
    [
      [
        "阳",
        "yáng",
        "slunce, mužský princip"
      ],
      [
        "阴",
        "yīn",
        "stín, ženský princip"
      ],
      [
        "部",
        "bù",
        "oddělení, část"
      ],
      [
        "都",
        "dōu / dū",
        "všichni, hlavní město"
      ]
    ]
  ],
  [
    25,
    2,
    "刀",
    "刂",
    "dāo",
    "nůž, meč",
    "Ostří nože, řezání a oddělování; na pravé straně jako 刂.",
    [
      [
        "切",
        "qiē",
        "krájet, řezat"
      ],
      [
        "到",
        "dào",
        "dorazit, k"
      ],
      [
        "利",
        "lì",
        "ostrý, zisk, výhoda"
      ],
      [
        "别",
        "bié",
        "jiný, neloučit se"
      ]
    ]
  ],
  [
    26,
    2,
    "力",
    "",
    "lì",
    "síla, paže s pluhem",
    "Napnutá svalnatá paže nebo těžký pluh vyžadující sílu.",
    [
      [
        "办",
        "bàn",
        "vyřizovat, zařídit"
      ],
      [
        "动",
        "dòng",
        "pohybovat se"
      ],
      [
        "助",
        "zhù",
        "pomáhat"
      ],
      [
        "功",
        "gōng",
        "zásluha, úspěch"
      ]
    ]
  ],
  [
    27,
    2,
    "又",
    "",
    "yòu",
    "pravá ruka, znovu",
    "Pravá ruka chápající věci, přeneseně znovu, opět.",
    [
      [
        "友",
        "yǒu",
        "přítel (dvě ruce u sebe)"
      ],
      [
        "双",
        "shuāng",
        "pár, dvojice"
      ],
      [
        "欢",
        "huān",
        "radostný, veselý"
      ],
      [
        "难",
        "nán",
        "těžký, obtížný"
      ]
    ]
  ],
  [
    28,
    2,
    "厶",
    "",
    "sī",
    "soukromý, tajný",
    "Zavinutý tvar, to co člověk shromažďuje pro sebe, soukromí.",
    [
      [
        "去",
        "qù",
        "jít, odejít"
      ],
      [
        "参",
        "cān",
        "účastnit se, ženšen"
      ],
      [
        "县",
        "xiàn",
        "okres, župa"
      ],
      [
        "台",
        "tái",
        "plošina, jeviště, Tchaj-wan"
      ]
    ]
  ],
  [
    29,
    2,
    "廴",
    "",
    "yǐn",
    "dlouhý krok, chůze",
    "Pomalé a rozvážné kráčení po cestě, protažení kroku.",
    [
      [
        "延",
        "yán",
        "prodloužit, odložit"
      ],
      [
        "建",
        "jiàn",
        "budovat, stavět"
      ],
      [
        "廷",
        "tíng",
        "císařský dvůr"
      ],
      [
        "廻",
        "huí",
        "otáčet se, kruh"
      ]
    ]
  ],
  [
    30,
    2,
    "𠘨",
    "几",
    "fán",
    "ohraničení, vítr",
    "Rámová varianta znaku vítr a stolek.",
    [
      [
        "凤",
        "fèng",
        "bájný fénix"
      ],
      [
        "佩",
        "pèi",
        "obdivovat, nosit u pasu"
      ],
      [
        "夙",
        "sù",
        "časné ráno"
      ],
      [
        "凪",
        "zhǐ",
        "bezvětří na moři"
      ]
    ]
  ],
  [
    31,
    2,
    "九",
    "",
    "jiǔ",
    "devět, ohnutá ruka",
    "Nejvyšší jednociferné číslo, symbol draka a císaře.",
    [
      [
        "丸",
        "wán",
        "pilulka"
      ],
      [
        "杂",
        "zá",
        "smíšený, pestrý"
      ],
      [
        "轨",
        "guǐ",
        "kolej, dráha"
      ],
      [
        "旭",
        "xù",
        "vycházející slunce"
      ]
    ]
  ],
  [
    32,
    2,
    "七",
    "",
    "qī",
    "sedm",
    "Číslo sedm, původně řez skrze předmět.",
    [
      [
        "切",
        "qiē",
        "krájet"
      ],
      [
        "些",
        "xiē",
        "několik, trochu"
      ],
      [
        "匙",
        "chí",
        "lžíce"
      ],
      [
        "皂",
        "zào",
        "mýdlo"
      ]
    ]
  ],
  [
    33,
    2,
    "乃",
    "",
    "nǎi",
    "tudíž, tedy",
    "Spojka vyjadřující logickou návaznost a dech.",
    [
      [
        "孕",
        "yùn",
        "být těhotná"
      ],
      [
        "秀",
        "xiù",
        "nádherný, elegantní"
      ],
      [
        "奶",
        "nǎi",
        "mléko, babička"
      ],
      [
        "盈",
        "yíng",
        "přetékat, plný"
      ]
    ]
  ],
  [
    34,
    2,
    "乜",
    "",
    "miē",
    "šilhat, pošilhávat",
    "Pohled koutkem oka, přihmouření.",
    [
      [
        "乜",
        "miē",
        "pošilhávat"
      ],
      [
        "乜斜",
        "miēxié",
        "šikmý pohled"
      ],
      [
        "乜",
        "niè",
        "kantonské zájmeno co"
      ],
      [
        "乜",
        "miē",
        "šilhání"
      ]
    ]
  ],
  [
    35,
    2,
    "𠂉",
    "勹",
    "piězhé",
    "zahnutá stříška",
    "Horní lomený tah vyskytující se u mnoha složených znaků.",
    [
      [
        "每",
        "měi",
        "každý"
      ],
      [
        "乞",
        "qǐ",
        "prosit"
      ],
      [
        "气",
        "qì",
        "vzduch, energie"
      ],
      [
        "复",
        "fù",
        "opakovat, obnovit"
      ]
    ]
  ],
  [
    36,
    3,
    "口",
    "",
    "kǒu",
    "ústa, otvor",
    "Otevřená ústa, mluvení, jedení, vstup do místnosti či nádoby.",
    [
      [
        "吃",
        "chī",
        "jíst"
      ],
      [
        "喝",
        "hē",
        "pít"
      ],
      [
        "叫",
        "jiào",
        "volat, jmenovat se"
      ],
      [
        "问",
        "wèn",
        "ptát se"
      ]
    ]
  ],
  [
    37,
    3,
    "囗",
    "",
    "wéi",
    "ohrada, obvod",
    "Uzavřená ohrada obklopující celý znak ze všech čtyř stran.",
    [
      [
        "国",
        "guó",
        "země, stát"
      ],
      [
        "回",
        "huí",
        "vrátit se"
      ],
      [
        "四",
        "sì",
        "čtyři"
      ],
      [
        "园",
        "yuán",
        "zahrada, park"
      ]
    ]
  ],
  [
    38,
    3,
    "土",
    "",
    "tǔ",
    "země, půda, jíl",
    "Rostlina vyrůstající z hlíny, půda a stavitelství.",
    [
      [
        "地",
        "dì",
        "země, půda"
      ],
      [
        "在",
        "zài",
        "nacházet se v"
      ],
      [
        "场",
        "chǎng",
        "náměstí, hřiště"
      ],
      [
        "城",
        "chéng",
        "město, hradby"
      ]
    ]
  ],
  [
    39,
    3,
    "士",
    "",
    "shì",
    "učenec, bojovník",
    "Vzdělaný šlechtic, úředník nebo odvážný bojovník.",
    [
      [
        "壮",
        "zhuàng",
        "silný, mohutný"
      ],
      [
        "声",
        "shēng",
        "hlas, zvuk"
      ],
      [
        "喜",
        "xǐ",
        "mít rád, radost"
      ],
      [
        "吉",
        "jí",
        "šťastný, příznivý"
      ]
    ]
  ],
  [
    40,
    3,
    "艹",
    "艸",
    "cǎo",
    "tráva, byliny",
    "Dva zelené výhonky trávy, byliny, rostliny a květy.",
    [
      [
        "茶",
        "chá",
        "čaj"
      ],
      [
        "花",
        "huā",
        "květina"
      ],
      [
        "草",
        "cǎo",
        "tráva"
      ],
      [
        "药",
        "yào",
        "lék, medicína"
      ]
    ]
  ],
  [
    41,
    3,
    "寸",
    "",
    "cùn",
    "palec (míra), tep",
    "Vzdálenost zápěstního pulzu od dlaně, tradiční čínský palec.",
    [
      [
        "对",
        "duì",
        "správný, vůči"
      ],
      [
        "村",
        "cūn",
        "vesnice"
      ],
      [
        "射",
        "shè",
        "střílet, vyzařovat"
      ],
      [
        "耐",
        "nài",
        "odolat, trpělivost"
      ]
    ]
  ],
  [
    42,
    3,
    "大",
    "",
    "dà",
    "velký, dospělý člověk",
    "Postava člověka s rozpaženýma rukama a nohama v celé velikosti.",
    [
      [
        "太",
        "tài",
        "příliš, nejvyšší"
      ],
      [
        "天",
        "tiān",
        "nebe, den"
      ],
      [
        "奇",
        "qí",
        "zvláštní, podivuhodný"
      ],
      [
        "套",
        "tào",
        "sada, komplet, oblek"
      ]
    ]
  ],
  [
    43,
    3,
    "小",
    "⺌ ⺍",
    "xiǎo",
    "malý, drobky",
    "Předmět rozdělený na tři drobné kousky, maličkost.",
    [
      [
        "少",
        "shǎo",
        "málo, mladý"
      ],
      [
        "尖",
        "jiān",
        "špičatý, ostrý (malý nad velkým)"
      ],
      [
        "光",
        "guāng",
        "světlo"
      ],
      [
        "当",
        "dāng",
        "zastávat, vhodný"
      ]
    ]
  ],
  [
    44,
    3,
    "山",
    "",
    "shān",
    "hora, pohoří",
    "Tři tyčící se skalní štíty horského hřebene.",
    [
      [
        "出",
        "chū",
        "vyjít ven (dvě hory nad sebou)"
      ],
      [
        "岁",
        "suì",
        "věk, roky"
      ],
      [
        "岛",
        "dǎo",
        "ostrov"
      ],
      [
        "峰",
        "fēng",
        "horský vrchol"
      ]
    ]
  ],
  [
    45,
    3,
    "巾",
    "",
    "jīn",
    "šátek, ručník, látka",
    "Kus látky visící na opasku, textilie a kapesníky.",
    [
      [
        "布",
        "bù",
        "látka, plátno"
      ],
      [
        "帮",
        "bāng",
        "pomáhat"
      ],
      [
        "带",
        "dài",
        "pásek, nést s sebou"
      ],
      [
        "帽",
        "mào",
        "klobouk, čepice"
      ]
    ]
  ],
  [
    46,
    3,
    "广",
    "",
    "guǎng",
    "široký, přístřešek",
    "Budova postavená u útesu, velký otevřený sál či sklad.",
    [
      [
        "床",
        "chuáng",
        "postel"
      ],
      [
        "店",
        "diàn",
        "obchod, krámek"
      ],
      [
        "应",
        "yīng",
        "mělo by se, odpovědět"
      ],
      [
        "座",
        "zuò",
        "sedadlo, místo"
      ]
    ]
  ],
  [
    47,
    3,
    "门",
    "門",
    "mén",
    "brána, dveře",
    "Dvě křídla tradičních čínských vstupních vrat.",
    [
      [
        "问",
        "wèn",
        "ptát se (ústa ve dveřích)"
      ],
      [
        "间",
        "jiān",
        "místnost, prostor, mezi"
      ],
      [
        "关",
        "guān",
        "zavřít, týkat se"
      ],
      [
        "闭",
        "bì",
        "uzavřít"
      ]
    ]
  ],
  [
    48,
    3,
    "饣",
    "食",
    "shí",
    "jídlo, potrava",
    "Zjednodušená nádoba s poklicí plná voňavého jídla.",
    [
      [
        "饭",
        "fàn",
        "rýže, vařené jídlo"
      ],
      [
        "馆",
        "guǎn",
        "restaurace, budova"
      ],
      [
        "饱",
        "bǎo",
        "sytý, plný"
      ],
      [
        "饮",
        "yǐn",
        "pít, nápoj"
      ]
    ]
  ],
  [
    49,
    3,
    "弓",
    "",
    "gōng",
    "luk",
    "Napnuté tělo reflexního luku s tětivou.",
    [
      [
        "张",
        "zhāng",
        "napnout, list (klasifikátor)"
      ],
      [
        "强",
        "qiáng",
        "silný"
      ],
      [
        "发",
        "fā",
        "vyslat, vyrazit"
      ],
      [
        "引",
        "yǐn",
        "přitahovat, vést"
      ]
    ]
  ],
  [
    50,
    3,
    "子",
    "",
    "zǐ",
    "dítě, syn, semínko",
    "Kojenec v povijanu s rozhozenýma ručkama.",
    [
      [
        "字",
        "zì",
        "znak, písmo"
      ],
      [
        "学",
        "xué",
        "učit se"
      ],
      [
        "孩",
        "hái",
        "dítě"
      ],
      [
        "孙",
        "sūn",
        "vnuk"
      ]
    ]
  ],
  [
    51,
    3,
    "女",
    "",
    "nǚ",
    "žena, dcera",
    "Klečící ladná postava ženy s překříženýma rukama.",
    [
      [
        "好",
        "hǎo",
        "dobrý (žena a dítě)"
      ],
      [
        "妈",
        "mā",
        "maminka"
      ],
      [
        "姐",
        "jiě",
        "starší sestra"
      ],
      [
        "妹",
        "mèi",
        "mladší sestra"
      ]
    ]
  ],
  [
    52,
    3,
    "纟",
    "糹 / 糸",
    "sī",
    "hedvábí, nit, vlákno",
    "Svazek jemných kokonových vláken morušového hedvábí.",
    [
      [
        "红",
        "hóng",
        "červený"
      ],
      [
        "给",
        "gěi",
        "dát, pro"
      ],
      [
        "绿",
        "lǜ",
        "zelený"
      ],
      [
        "结",
        "jié",
        "uzel, spojit"
      ]
    ]
  ],
  [
    53,
    3,
    "马",
    "馬",
    "mǎ",
    "kůň",
    "Běžící hřebec s hřívou a vlajícím ocasem.",
    [
      [
        "妈",
        "mā",
        "matka (fonetická složka)"
      ],
      [
        "骑",
        "qí",
        "jet na koni či kole"
      ],
      [
        "驾",
        "jià",
        "řídit vozidlo"
      ],
      [
        "验",
        "yàn",
        "ověřit, testovat"
      ]
    ]
  ],
  [
    54,
    3,
    "幺",
    "",
    "yāo",
    "maličký, jednička",
    "Nejmenší nitka, číslo jedna v telefonních číslech.",
    [
      [
        "幻",
        "huàn",
        "iluze, přelud"
      ],
      [
        "幼",
        "yòu",
        "útlý věk, dětský"
      ],
      [
        "幽",
        "yōu",
        "tichý, temný"
      ],
      [
        "兹",
        "zī",
        "nyní, tento"
      ]
    ]
  ],
  [
    55,
    3,
    "屮",
    "",
    "chè",
    "klíček, rašení",
    "Rostoucí zelený klíček prorážející tvrdou zeminou.",
    [
      [
        "屯",
        "tún",
        "shromažďovat, vesnice"
      ],
      [
        "出",
        "chū",
        "vyjít"
      ],
      [
        "茁",
        "zhuó",
        "bujně růst"
      ],
      [
        "逆",
        "nì",
        "vzdorovat, proti"
      ]
    ]
  ],
  [
    56,
    3,
    "尸",
    "",
    "shī",
    "tělo, schránka",
    "Ležící nebo sedící tělo, tělesná schránka, obydlí.",
    [
      [
        "屋",
        "wū",
        "místnost, pokoj"
      ],
      [
        "层",
        "céng",
        "patro, vrstva"
      ],
      [
        "局",
        "jú",
        "úřad, situace"
      ],
      [
        "尾",
        "wěi",
        "ocas, konec"
      ]
    ]
  ],
  [
    57,
    3,
    "己",
    "已 / 巳",
    "jǐ",
    "já, vlastní",
    "Osobní já, provazec navinutý na vřetenu.",
    [
      [
        "导",
        "dǎo",
        "vést, navigovat"
      ],
      [
        "异",
        "yì",
        "odlišný, cizí"
      ],
      [
        "配",
        "pèi",
        "ladit, přiřadit"
      ],
      [
        "起",
        "qǐ",
        "vstát, začít"
      ]
    ]
  ],
  [
    58,
    3,
    "已",
    "",
    "yǐ",
    "již, ukončený",
    "Dokonaný děj, uzavřený čas.",
    [
      [
        "已",
        "yǐ",
        "již, už"
      ],
      [
        "已经",
        "yǐjīng",
        "již dávno"
      ],
      [
        "异",
        "yì",
        "zvláštní"
      ],
      [
        "包",
        "bāo",
        "balit"
      ]
    ]
  ],
  [
    59,
    3,
    "巳",
    "",
    "sì",
    "šestá pozemská větev (had)",
    "Symbol hada v čínském zvěrokruhu.",
    [
      [
        "包",
        "bāo",
        "taška"
      ],
      [
        "祀",
        "sì",
        "obětovat předkům"
      ],
      [
        "巽",
        "xùn",
        "vítr v I-ťingu"
      ],
      [
        "起",
        "qǐ",
        "zahájit"
      ]
    ]
  ],
  [
    60,
    3,
    "彡",
    "",
    "shān",
    "vlasy, peří, pruhy",
    "Tři jemná peříčka nebo ozdobné tahy štětce.",
    [
      [
        "影",
        "yǐng",
        "stín, film"
      ],
      [
        "形",
        "xíng",
        "tvar, podoba"
      ],
      [
        "彩",
        "cǎi",
        "barva, pestrý"
      ],
      [
        "须",
        "xū",
        "vousy, muset"
      ]
    ]
  ],
  [
    61,
    3,
    "彳",
    "",
    "chì",
    "krok levou nohou",
    "Levá polovina křižovatky 行, kráčení, ulice.",
    [
      [
        "很",
        "hěn",
        "velmi"
      ],
      [
        "行",
        "xíng",
        "jít, v pořádku"
      ],
      [
        "往",
        "wǎng",
        "směrem k"
      ],
      [
        "得",
        "de / dé",
        "získat, spojka po slovesu"
      ]
    ]
  ],
  [
    62,
    3,
    "夕",
    "",
    "xī",
    "večer, půlměsíc",
    "Měsíc vycházející na večerní obloze za soumraku.",
    [
      [
        "多",
        "duō",
        "mnoho (dva večery nad sebou)"
      ],
      [
        "夜",
        "yè",
        "noc"
      ],
      [
        "外",
        "wài",
        "venku, vnější"
      ],
      [
        "梦",
        "mèng",
        "sen"
      ]
    ]
  ],
  [
    63,
    3,
    "夂",
    "",
    "zhǐ",
    "následovat zezadu",
    "Nohy kráčející pomalu za někým.",
    [
      [
        "各",
        "gè",
        "každý"
      ],
      [
        "条",
        "tiáo",
        "proužek, klasifikátor"
      ],
      [
        "冬",
        "dōng",
        "zima"
      ],
      [
        "处",
        "chù",
        "místo, oddělení"
      ]
    ]
  ],
  [
    64,
    3,
    "丬",
    "爿",
    "qiáng",
    "dřevěná deska, lůžko",
    "Polovina rozštípnutého kmene, pelest postele.",
    [
      [
        "壮",
        "zhuàng",
        "mohutný"
      ],
      [
        "状",
        "zhuàng",
        "stav, formulář"
      ],
      [
        "将",
        "jiāng",
        "budoucí čas, generál"
      ],
      [
        "妆",
        "zhuāng",
        "líčení, make-up"
      ]
    ]
  ],
  [
    65,
    3,
    "飞",
    "飛",
    "fēi",
    "létat, křídla",
    "Pták mávající křídly při vzletu do oblak.",
    [
      [
        "飞",
        "fēi",
        "létat"
      ],
      [
        "飞机",
        "fēijī",
        "letadlo"
      ],
      [
        "飞行",
        "fēixíng",
        "letectví"
      ],
      [
        "飞快",
        "fēikuài",
        "bleskurychlý"
      ]
    ]
  ],
  [
    66,
    3,
    "弋",
    "",
    "yì",
    "šíp s provazem, kolík",
    "Lovecký šíp uvázaný na šňůrce k ulovení vodního ptactva.",
    [
      [
        "代",
        "dài",
        "doba, generace"
      ],
      [
        "式",
        "shì",
        "styl, vzor, obřad"
      ],
      [
        "必",
        "bì",
        "nutně, určitě"
      ],
      [
        "贰",
        "èr",
        "dvě (úřední forma)"
      ]
    ]
  ],
  [
    67,
    4,
    "王",
    "玉",
    "wáng / yù",
    "král, nefrit",
    "Tři vodorovné čáry (nebe, země, člověk) spojené osou, drahokam.",
    [
      [
        "玩",
        "wán",
        "hrát si, bavit se"
      ],
      [
        "现",
        "xiàn",
        "současný, zjevit se"
      ],
      [
        "理",
        "lǐ",
        "rozum, princip"
      ],
      [
        "球",
        "qiú",
        "míč, zeměkoule"
      ]
    ]
  ],
  [
    68,
    4,
    "韦",
    "韋",
    "wéi",
    "činěná kůže, obvod",
    "Měkká kůže obepínající předmět, hradby.",
    [
      [
        "伟",
        "wěi",
        "veliký, velkolepý"
      ],
      [
        "围",
        "wéi",
        "obklopit"
      ],
      [
        "违",
        "wéi",
        "porušit pravidla"
      ],
      [
        "韧",
        "rèn",
        "houževnatý"
      ]
    ]
  ],
  [
    69,
    4,
    "木",
    "",
    "mù",
    "strom, dřevo",
    "Kmen stromu s korunou nahoře a kořeny v zemi.",
    [
      [
        "林",
        "lín",
        "háj, lesík (dva stromy)"
      ],
      [
        "森",
        "sēn",
        "hustý hvozd (tři stromy)"
      ],
      [
        "机",
        "jī",
        "stroj, letadlo"
      ],
      [
        "本",
        "běn",
        "kniha, kořen"
      ]
    ]
  ],
  [
    70,
    4,
    "犬",
    "犭",
    "quǎn",
    "pes, šelma",
    "Věrný pes s ocáskem nahoře, zvířata a šelmy.",
    [
      [
        "狗",
        "gǒu",
        "pes"
      ],
      [
        "猫",
        "māo",
        "kočka"
      ],
      [
        "猪",
        "zhū",
        "prase"
      ],
      [
        "狂",
        "kuáng",
        "šílený, divoký"
      ]
    ]
  ],
  [
    71,
    4,
    "歹",
    "",
    "dǎi",
    "kosti, zlý, zmar",
    "Rozpadlé kosti kostry, neštěstí a zmar.",
    [
      [
        "死",
        "sǐ",
        "zemřít"
      ],
      [
        "殁",
        "mò",
        "skonat"
      ],
      [
        "残",
        "cán",
        "zbytek, krutý"
      ],
      [
        "殃",
        "yāng",
        "pohroma"
      ]
    ]
  ],
  [
    72,
    4,
    "车",
    "車",
    "chē",
    "vůz, auto, kolo",
    "Pohled shora na dvoukolový válečný vůz.",
    [
      [
        "转",
        "zhuǎn",
        "otočit"
      ],
      [
        "轮",
        "lún",
        "kolo, trajekt"
      ],
      [
        "辆",
        "liàng",
        "vozidlo (klasifikátor)"
      ],
      [
        "轨",
        "guǐ",
        "kolejnice"
      ]
    ]
  ],
  [
    73,
    4,
    "戈",
    "",
    "gē",
    "halapartna, zbraň",
    "Dýková sekera na dlouhém ratišti, válka a zbraně.",
    [
      [
        "我",
        "wǒ",
        "já (zbraň střežící sebe)"
      ],
      [
        "战",
        "zhàn",
        "válka, boj"
      ],
      [
        "戏",
        "xì",
        "divadlo, hra"
      ],
      [
        "成",
        "chéng",
        "dokončit, stát se"
      ]
    ]
  ],
  [
    74,
    4,
    "比",
    "",
    "bǐ",
    "srovnávat, vedle sebe",
    "Dva lidé stojící těsně bok po boku ke srovnání.",
    [
      [
        "比",
        "bǐ",
        "než, srovnávat"
      ],
      [
        "毕",
        "bì",
        "ukončit studium"
      ],
      [
        "毖",
        "bì",
        "varovat se"
      ],
      [
        "皆",
        "jiē",
        "všichni, vesměs"
      ]
    ]
  ],
  [
    75,
    4,
    "瓦",
    "",
    "wǎ",
    "střešní taška, keramika",
    "Pálená hliněná taška na střechy čínských chrámů.",
    [
      [
        "瓶",
        "píng",
        "láhev, váza"
      ],
      [
        "瓷",
        "cí",
        "porcelán"
      ],
      [
        "瓯",
        "ōu",
        "šálek, miska"
      ],
      [
        "甑",
        "zèng",
        "parní kotlík"
      ]
    ]
  ],
  [
    76,
    4,
    "止",
    "",
    "zhǐ",
    "zastavit, chodidlo",
    "Lidské chodidlo otisknuté v zemi, stanout na místě.",
    [
      [
        "正",
        "zhèng",
        "přímý, správný"
      ],
      [
        "步",
        "bù",
        "krok"
      ],
      [
        "此",
        "cǐ",
        "tento"
      ],
      [
        "武",
        "wǔ",
        "bojový, válečný"
      ]
    ]
  ],
  [
    77,
    4,
    "攴",
    "攵",
    "pū",
    "klepat, úder rukou",
    "Ruka držící proutek nebo kladívko k udílení pokynů.",
    [
      [
        "收",
        "shōu",
        "přijmout, sbírat"
      ],
      [
        "改",
        "gǎi",
        "opravit, změnit"
      ],
      [
        "放",
        "fàng",
        "položit, pustit"
      ],
      [
        "教",
        "jiào",
        "učit, vzdělávat"
      ]
    ]
  ],
  [
    78,
    4,
    "日",
    "",
    "rì",
    "slunce, den",
    "Zářící sluneční kotouč se skvrnou uprostřed.",
    [
      [
        "明",
        "míng",
        "jasný (slunce a měsíc)"
      ],
      [
        "时",
        "shí",
        "čas, hodina"
      ],
      [
        "早",
        "zǎo",
        "brzy ráno"
      ],
      [
        "星",
        "xīng",
        "hvězda"
      ]
    ]
  ],
  [
    79,
    4,
    "曰",
    "",
    "yuē",
    "pravit, říkat",
    "Otevřená ústa ze kterých vychází vyřčená slova.",
    [
      [
        "曹",
        "cáo",
        "příjmení Cchao"
      ],
      [
        "替",
        "tì",
        "nahradit"
      ],
      [
        "曾",
        "céng",
        "již někdy"
      ],
      [
        "曲",
        "qū",
        "píseň, melodiie"
      ]
    ]
  ],
  [
    80,
    4,
    "水",
    "氵 氺",
    "shuǐ",
    "voda (tři kapky vody)",
    "Proudící voda v meandrech řeky; vlevo jako 氵.",
    [
      [
        "海",
        "hǎi",
        "moře"
      ],
      [
        "河",
        "hé",
        "řeka"
      ],
      [
        "江",
        "jiāng",
        "veletok, Jang-c'"
      ],
      [
        "洗",
        "xǐ",
        "mýt, prát"
      ]
    ]
  ],
  [
    81,
    4,
    "贝",
    "貝",
    "bèi",
    "mušle, platidlo, peníze",
    "Mušle kauri užívaná ve starověku jako platidlo.",
    [
      [
        "贵",
        "guì",
        "drahý, vzácný"
      ],
      [
        "买",
        "mǎi",
        "koupit"
      ],
      [
        "财",
        "cái",
        "bohatství"
      ],
      [
        "费",
        "fèi",
        "poplatek, náklady"
      ]
    ]
  ],
  [
    82,
    4,
    "见",
    "見",
    "jiàn",
    "vidět, zřít",
    "Člověk s obrovským zvídavým okem shlížející na svět.",
    [
      [
        "现",
        "xiàn",
        "současný, objevit se"
      ],
      [
        "规",
        "guī",
        "pravidlo, norma"
      ],
      [
        "视",
        "shì",
        "dívat se, zrak"
      ],
      [
        "觉",
        "jué / jiào",
        "cítit, spát"
      ]
    ]
  ],
  [
    83,
    4,
    "牛",
    "牜",
    "niú",
    "býk, kráva, vůl",
    "Hlava býka s dvěma zahnutými rohy a ušima.",
    [
      [
        "物",
        "wù",
        "věc, předmět"
      ],
      [
        "特",
        "tè",
        "zvláštní, mimořádný"
      ],
      [
        "件",
        "jiàn",
        "kus, záležitost"
      ],
      [
        "牧",
        "mù",
        "pást dobytek"
      ]
    ]
  ],
  [
    84,
    4,
    "手",
    "扌",
    "shǒu",
    "ruka, dlaň s prsty",
    "Dlaň s roztaženými pěti prsty; vlevo jako 扌.",
    [
      [
        "打",
        "dǎ",
        "bít, volat, hrát"
      ],
      [
        "拿",
        "ná",
        "vzít do ruky"
      ],
      [
        "找",
        "zhǎo",
        "hledat"
      ],
      [
        "推",
        "tuī",
        "tlačit"
      ]
    ]
  ],
  [
    85,
    4,
    "气",
    "氣",
    "qì",
    "vzduch, dech, energie",
    "Stoupající oblaka páry, životní síla čchi.",
    [
      [
        "汽",
        "qì",
        "pára, benzín"
      ],
      [
        "氧",
        "yǎng",
        "kyslík"
      ],
      [
        "氢",
        "qīng",
        "vodík"
      ],
      [
        "氛",
        "fēn",
        "atmosféra nálady"
      ]
    ]
  ],
  [
    86,
    4,
    "毛",
    "",
    "máo",
    "srst, peří, chlup",
    "Jemný vlas, chlup nebo štětina kaligrafického štětce.",
    [
      [
        "毫",
        "háo",
        "vlásek, ani zbla"
      ],
      [
        "毯",
        "tǎn",
        "koberec, deka"
      ],
      [
        "尾",
        "wěi",
        "ocas"
      ],
      [
        "毽",
        "jiàn",
        "kopací míček"
      ]
    ]
  ],
  [
    87,
    4,
    "片",
    "",
    "piàn",
    "plátek, kousek dřeva",
    "Tenký odštípnutý plátek dřeva či filmu.",
    [
      [
        "版",
        "bǎn",
        "vydání, verze"
      ],
      [
        "牌",
        "pái",
        "karta, značka"
      ],
      [
        "牒",
        "dié",
        "úřední listina"
      ],
      [
        "牍",
        "dú",
        "dřevěná destička na psaní"
      ]
    ]
  ],
  [
    88,
    4,
    "斤",
    "",
    "jīn",
    "sekera, půlkilogram",
    "Tesařská sekera, váhová jednotka 500 gramů.",
    [
      [
        "新",
        "xīn",
        "nový (sekera osekávající strom)"
      ],
      [
        "所",
        "suǒ",
        "místo, ústav"
      ],
      [
        "断",
        "duàn",
        "přerušit, rozhodnout"
      ],
      [
        "斯",
        "sī",
        "tento, slovanský"
      ]
    ]
  ],
  [
    89,
    4,
    "爪",
    "爫",
    "zhǎo",
    "drápy, spáry",
    "Ptačí spáry nebo kočičí drápy shora uchvacující kořist.",
    [
      [
        "爱",
        "ài",
        "láska"
      ],
      [
        "采",
        "cǎi",
        "sbírat byliny"
      ],
      [
        "受",
        "shòu",
        "přijmout, snášet"
      ],
      [
        "爬",
        "pá",
        "lézt, šplhat"
      ]
    ]
  ],
  [
    90,
    4,
    "父",
    "",
    "fù",
    "otec",
    "Ruka otce rodiny držící hůl autority.",
    [
      [
        "爷",
        "yé",
        "dědeček"
      ],
      [
        "爸",
        "bà",
        "táta"
      ],
      [
        "爹",
        "diē",
        "tatínek"
      ],
      [
        "斧",
        "fǔ",
        "sekera"
      ]
    ]
  ],
  [
    91,
    4,
    "月",
    "⺼",
    "yuè / ròu",
    "měsíc, maso",
    "Půlměsíc na nebi; u orgánů těla znamená maso (肉).",
    [
      [
        "朋",
        "péng",
        "přítel"
      ],
      [
        "明",
        "míng",
        "jasný"
      ],
      [
        "期",
        "qī",
        "období"
      ],
      [
        "脸",
        "liǎn",
        "tvář, obličej"
      ]
    ]
  ],
  [
    92,
    4,
    "氏",
    "",
    "shì",
    "rod, klan",
    "Vznešený rodový znak, klanové příjmení.",
    [
      [
        "民",
        "mín",
        "lid, národ"
      ],
      [
        "纸",
        "zhǐ",
        "papír"
      ],
      [
        "昏",
        "hūn",
        "soumrak, mdloba"
      ],
      [
        "氓",
        "máng",
        "chátra, lid"
      ]
    ]
  ],
  [
    93,
    4,
    "欠",
    "",
    "qiàn",
    "zívat, dlužit",
    "Sedící osoba s otevřenými ústy při zívání, nedostatek.",
    [
      [
        "歌",
        "gē",
        "píseň"
      ],
      [
        "欢",
        "huān",
        "veselý"
      ],
      [
        "次",
        "cì",
        "pořadí, příště"
      ],
      [
        "欧",
        "ōu",
        "Evropa"
      ]
    ]
  ],
  [
    94,
    4,
    "风",
    "風",
    "fēng",
    "vítr",
    "Vzdušný vír roznášející život a hmyz po zemi.",
    [
      [
        "飘",
        "piāo",
        "poletovat ve větru"
      ],
      [
        "飚",
        "biāo",
        "vichřice"
      ],
      [
        "枫",
        "fēng",
        "javor"
      ],
      [
        "疯",
        "fēng",
        "bláznivý"
      ]
    ]
  ],
  [
    95,
    4,
    "殳",
    "",
    "shū",
    "kopí, hůl bez hrotu",
    "Bambusová hůl k trestání nebo úderu.",
    [
      [
        "段",
        "duàn",
        "odstavec, úsek"
      ],
      [
        "殷",
        "yīn",
        "bohatý, dynastie Yin"
      ],
      [
        "殿",
        "diàn",
        "palácová síň"
      ],
      [
        "毁",
        "huǐ",
        "zničit"
      ]
    ]
  ],
  [
    96,
    4,
    "文",
    "",
    "wén",
    "písmo, kultura, vzor",
    "Tetování na hrudi, kultura, literatura a vzdělání.",
    [
      [
        "斌",
        "bīn",
        "vyvážený duchem i mečem"
      ],
      [
        "斑",
        "bān",
        "skvrnitý, pruhovaný"
      ],
      [
        "斋",
        "zhāi",
        "studovna, půst"
      ],
      [
        "斐",
        "fěi",
        "květnatý styl"
      ]
    ]
  ],
  [
    97,
    4,
    "方",
    "",
    "fāng",
    "čtverec, směr, metoda",
    "Dvě lodě svázané vedle sebe, světová strana.",
    [
      [
        "放",
        "fàng",
        "položit, pustit"
      ],
      [
        "旅",
        "lǚ",
        "cestovat"
      ],
      [
        "族",
        "zú",
        "klan, národ"
      ],
      [
        "旁",
        "páng",
        "vedle, bok"
      ]
    ]
  ],
  [
    98,
    4,
    "火",
    "灬",
    "huǒ",
    "oheň, plameny",
    "Plápolající plameny táborového ohně; dole jako 灬.",
    [
      [
        "热",
        "rè",
        "horký"
      ],
      [
        "点",
        "diǎn",
        "bod, tečka, hodina"
      ],
      [
        "灯",
        "dēng",
        "lampa, světlo"
      ],
      [
        "烤",
        "kǎo",
        "péct, grilovat"
      ]
    ]
  ],
  [
    99,
    4,
    "斗",
    "",
    "dǒu",
    "odměrka, Velký vůz",
    "Nádoba s držadlem na sypké obilí, souhvězdí.",
    [
      [
        "斜",
        "xié",
        "šikmý"
      ],
      [
        "料",
        "liào",
        "materiál, přísada"
      ],
      [
        "斟",
        "zhēn",
        "nalévat čaj"
      ],
      [
        "斡",
        "wò",
        "zprostředkovat"
      ]
    ]
  ],
  [
    100,
    4,
    "户",
    "",
    "hù",
    "jednokřídlé dveře, rodina",
    "Jedno křídlo dveří obydlí, domácnost a rodina.",
    [
      [
        "房",
        "fáng",
        "dům, pokoj"
      ],
      [
        "所",
        "suǒ",
        "místo"
      ],
      [
        "扇",
        "shàn",
        "vějíř, křídlo oken"
      ],
      [
        "启",
        "qǐ",
        "otevřít, inspirovat"
      ]
    ]
  ],
  [
    101,
    4,
    "心",
    "忄",
    "xīn",
    "srdce, mysl, city",
    "Lidské srdce se čtyřmi komorami a cévami; vlevo jako 忄.",
    [
      [
        "想",
        "xiǎng",
        "myslet, chtít"
      ],
      [
        "快",
        "kuài",
        "rychlý, veselý"
      ],
      [
        "慢",
        "màn",
        "pomalý"
      ],
      [
        "懂",
        "dǒng",
        "rozumět"
      ]
    ]
  ],
  [
    102,
    4,
    "毋",
    "",
    "wú",
    "nezakazovat, matka",
    "Zákaz, nedělat něco, původně chránící matka.",
    [
      [
        "每",
        "měi",
        "každý"
      ],
      [
        "毒",
        "dú",
        "jed, toxický"
      ],
      [
        "母",
        "mǔ",
        "matka"
      ],
      [
        "贯",
        "guàn",
        "provléknout"
      ]
    ]
  ],
  [
    103,
    4,
    "示",
    "礻",
    "shì",
    "obětní oltář, znamení",
    "Kamenný oltář k obětem nebesům, duchovno a svátky.",
    [
      [
        "礼",
        "lǐ",
        "obřad, slušnost, dar"
      ],
      [
        "神",
        "shén",
        "bůh, duch"
      ],
      [
        "福",
        "fú",
        "štěstí, požehnání"
      ],
      [
        "社",
        "shè",
        "společnost, spolek"
      ]
    ]
  ],
  [
    104,
    4,
    "牙",
    "",
    "yá",
    "zub, kel",
    "Překřížené stoličky zvířete, tesáky.",
    [
      [
        "雅",
        "yǎ",
        "elegantní, ušlechtilý"
      ],
      [
        "鸦",
        "yā",
        "vrána"
      ],
      [
        "呀",
        "ya",
        "citoslovce údivu"
      ],
      [
        "蚜",
        "yá",
        "mšice"
      ]
    ]
  ],
  [
    105,
    4,
    "止",
    "",
    "zhǐ",
    "zastavit se",
    "Zastavení na křižovatce, pevné stanoviště.",
    [
      [
        "正",
        "zhèng",
        "přesný, správný"
      ],
      [
        "历",
        "lì",
        "prožít"
      ],
      [
        "歧",
        "qí",
        "rozdvojení cest"
      ],
      [
        "歪",
        "wāi",
        "křivý"
      ]
    ]
  ],
  [
    106,
    4,
    "攴",
    "",
    "pū",
    "úder, proutek",
    "Učení pomocí rákosky, aktivní čin.",
    [
      [
        "故",
        "gù",
        "starý, příčina"
      ],
      [
        "数",
        "shù / shǔ",
        "číslo, počítat"
      ],
      [
        "敏",
        "mǐn",
        "bystrý"
      ],
      [
        "敢",
        "gǎn",
        "odvážit se"
      ]
    ]
  ],
  [
    107,
    4,
    "父",
    "",
    "fù",
    "otec, autorita",
    "Vážená hlava rodinného rodu.",
    [
      [
        "斧",
        "fǔ",
        "sekera"
      ],
      [
        "爸",
        "bà",
        "otec"
      ],
      [
        "爹",
        "diē",
        "táta"
      ],
      [
        "爷",
        "yé",
        "děda"
      ]
    ]
  ],
  [
    108,
    4,
    "爻",
    "",
    "yáo",
    "čáry trigramu v I-ťingu",
    "Překřížená stébla řebříčku pro věštění budoucnosti.",
    [
      [
        "爽",
        "shuǎng",
        "svěží, příjemný"
      ],
      [
        "尔",
        "ěr",
        "ty, ono"
      ],
      [
        "樊",
        "fán",
        "plot, klec"
      ],
      [
        "驳",
        "bó",
        "vyvrátit argument"
      ]
    ]
  ],
  [
    109,
    4,
    "爿",
    "",
    "pán",
    "pelest, deska",
    "Tradiční forma dřevěného lůžka.",
    [
      [
        "床",
        "chuáng",
        "postel"
      ],
      [
        "墙",
        "qiáng",
        "zeď"
      ],
      [
        "版",
        "bǎn",
        "tisková deska"
      ],
      [
        "牌",
        "pái",
        "cedule"
      ]
    ]
  ],
  [
    110,
    4,
    "片",
    "",
    "piàn",
    "tenká destička",
    "Plátek na němž byly vyryty prastaré texty.",
    [
      [
        "片",
        "piàn",
        "kousek, tableta"
      ],
      [
        "相片",
        "xiàngpiàn",
        "fotografie"
      ],
      [
        "名片",
        "míngpiàn",
        "vizitka"
      ],
      [
        "唱片",
        "chàngpiàn",
        "gramodeska"
      ]
    ]
  ],
  [
    111,
    4,
    "牙",
    "",
    "yá",
    "slonovina, chrup",
    "Zubní hygiena a drahocenná slonovina.",
    [
      [
        "牙齿",
        "yáchǐ",
        "zuby"
      ],
      [
        "刷牙",
        "shuāyá",
        "čistit zuby"
      ],
      [
        "牙医",
        "yáyī",
        "zubař"
      ],
      [
        "象牙",
        "xiàngyá",
        "slonovina"
      ]
    ]
  ],
  [
    112,
    4,
    "牛",
    "",
    "niú",
    "skot, houževnatost",
    "Trpělivé a pracovité tažné zvíře rýžových polí.",
    [
      [
        "牛肉",
        "niúròu",
        "hovězí maso"
      ],
      [
        "牛奶",
        "niúnǎi",
        "kravské mléko"
      ],
      [
        "牛仔",
        "niúzǎi",
        "kovboj, džíny"
      ],
      [
        "牛逼",
        "niúbī",
        "úžasný, frajer"
      ]
    ]
  ],
  [
    113,
    4,
    "气",
    "",
    "qì",
    "plyn, dech",
    "Neviditelný proud oživujícího vzduchu a páry.",
    [
      [
        "空气",
        "kōngqì",
        "vzduch"
      ],
      [
        "天气",
        "tiānqì",
        "počasí"
      ],
      [
        "生气",
        "shēngqì",
        "zlobit se"
      ],
      [
        "客气",
        "kèqi",
        "zdvořilý"
      ]
    ]
  ],
  [
    114,
    4,
    "毛",
    "",
    "máo",
    "vlasy, peří",
    "Přírodní měkká pokrývka zvířat i ptáků.",
    [
      [
        "毛笔",
        "máobǐ",
        "kaligrafický štětec"
      ],
      [
        "羽毛",
        "yǔmáo",
        "peří"
      ],
      [
        "毛衣",
        "máoyī",
        "svetr"
      ],
      [
        "皮毛",
        "pímáo",
        "kožešina"
      ]
    ]
  ],
  [
    115,
    5,
    "石",
    "",
    "shí",
    "kámen, skála",
    "Kámen spadlý pod útesem, pevnost a horniny.",
    [
      [
        "破",
        "pò",
        "rozbít, poškozený"
      ],
      [
        "研",
        "yán",
        "zkoumat, třít"
      ],
      [
        "确",
        "què",
        "jistý, přesný"
      ],
      [
        "硬",
        "yìng",
        "tvrdý"
      ]
    ]
  ],
  [
    116,
    5,
    "目",
    "",
    "mù",
    "oko, zrak, seznam",
    "Lidské oko otočené svisle se zornicí.",
    [
      [
        "看",
        "kàn",
        "dívat se (ruka nad okem)"
      ],
      [
        "眼",
        "yǎn",
        "oko"
      ],
      [
        "睡",
        "shuì",
        "spát"
      ],
      [
        "睛",
        "jīng",
        "zornice, oko"
      ]
    ]
  ],
  [
    117,
    5,
    "田",
    "",
    "tián",
    "rýžové pole",
    "Čtvercové pole rozdělené zavlažovacími hrázkami.",
    [
      [
        "男",
        "nán",
        "muž (síla na poli)"
      ],
      [
        "画",
        "huà",
        "malovat"
      ],
      [
        "界",
        "jiè",
        "svět, hranice"
      ],
      [
        "留",
        "liú",
        "zůstat, zanechat"
      ]
    ]
  ],
  [
    118,
    5,
    "罒",
    "网",
    "wǎng",
    "síť, mříž",
    "Rybářská síť rozprostřená k lovu, mřížoví zákona.",
    [
      [
        "罗",
        "luó",
        "síť, shromažďovat"
      ],
      [
        "罚",
        "fá",
        "pokutovat, trestat"
      ],
      [
        "置",
        "zhì",
        "umístit, postavit"
      ],
      [
        "署",
        "shǔ",
        "úřad, podepsat"
      ]
    ]
  ],
  [
    119,
    5,
    "皿",
    "",
    "mǐn",
    "miska, nádobí",
    "Hluboká keramická mísa na pokrmy a tekutiny.",
    [
      [
        "盆",
        "pén",
        "umyvadlo, mísa"
      ],
      [
        "盒",
        "hé",
        "krabička"
      ],
      [
        "盘",
        "pán",
        "talíř, tác"
      ],
      [
        "盖",
        "gài",
        "víko, přikrýt"
      ]
    ]
  ],
  [
    120,
    5,
    "钅",
    "金",
    "jīn",
    "kov, zlato",
    "Hrouda zlata nalezená pod zemským povrchem.",
    [
      [
        "钱",
        "qián",
        "peníze"
      ],
      [
        "银",
        "yín",
        "stříbro"
      ],
      [
        "错",
        "cuò",
        "špatně, chyba"
      ],
      [
        "钟",
        "zhōng",
        "hodiny, zvon"
      ]
    ]
  ],
  [
    121,
    5,
    "矢",
    "",
    "shǐ",
    "šíp, přísaha",
    "Rychlý šíp s letkami a hrotem letící přímo k cíli.",
    [
      [
        "知",
        "zhī",
        "vědět (slovo ostré jako šíp)"
      ],
      [
        "短",
        "duǎn",
        "krátký"
      ],
      [
        "矮",
        "ǎi",
        "malý vzrůstem"
      ],
      [
        "矩",
        "jǔ",
        "úhelník, pravidlo"
      ]
    ]
  ],
  [
    122,
    5,
    "禾",
    "",
    "hé",
    "obilí, klas",
    "Stéblo zralého obilí s těžkým skloněným klasem.",
    [
      [
        "和",
        "hé",
        "mír, a, harmonie"
      ],
      [
        "秋",
        "qiū",
        "podzim (obilí a oheň zralosti)"
      ],
      [
        "种",
        "zhǒng / zhòng",
        "druh, sázet"
      ],
      [
        "香",
        "xiāng",
        "vonný (obilí pod sluncem)"
      ]
    ]
  ],
  [
    123,
    5,
    "白",
    "",
    "bái",
    "bílý, čistý, jasný",
    "Zrnko loupané bílé rýže nebo vycházející paprsek světla.",
    [
      [
        "百",
        "bǎi",
        "sto"
      ],
      [
        "皇",
        "huáng",
        "císař"
      ],
      [
        "的",
        "de",
        "přivlastňovací částice"
      ],
      [
        "泉",
        "quán",
        "pramen, zřídlo"
      ]
    ]
  ],
  [
    124,
    5,
    "瓜",
    "",
    "guā",
    "meloun, tykev",
    "Těžký meloun visící na popínavém šlahounu rostliny.",
    [
      [
        "瓣",
        "bàn",
        "okvětní lístek"
      ],
      [
        "瓢",
        "piáo",
        "naběračka z tykve"
      ],
      [
        "瓤",
        "ráng",
        "dužina plodu"
      ],
      [
        "瓜果",
        "guāguǒ",
        "melouny a ovoce"
      ]
    ]
  ],
  [
    125,
    5,
    "用",
    "",
    "yòng",
    "použít, užitek",
    "Nádoba připravená k použití, upotřebení.",
    [
      [
        "角",
        "jiǎo",
        "roh, úhel"
      ],
      [
        "通",
        "tōng",
        "průchodný"
      ],
      [
        "备",
        "bèi",
        "připravit"
      ],
      [
        "庸",
        "yōng",
        "průměrný, běžný"
      ]
    ]
  ],
  [
    126,
    5,
    "鸟",
    "鳥",
    "niǎo",
    "pták s chocholkou",
    "Ptáček s peřím, očkem, křídly a ocáskem.",
    [
      [
        "鸡",
        "jī",
        "kuře, slepice"
      ],
      [
        "鸭",
        "yā",
        "kachna"
      ],
      [
        "鸣",
        "míng",
        "zpěv ptáků"
      ],
      [
        "鸥",
        "ōu",
        "racek"
      ]
    ]
  ],
  [
    127,
    5,
    "皮",
    "",
    "pí",
    "kůže, slupka",
    "Stažená zvířecí kůže v ruce lovce.",
    [
      [
        "破",
        "pò",
        "roztrhnout"
      ],
      [
        "波",
        "bō",
        "vlna"
      ],
      [
        "披",
        "pī",
        "přehodit přes ramena"
      ],
      [
        "疲",
        "pí",
        "unavený"
      ]
    ]
  ],
  [
    128,
    5,
    "立",
    "",
    "lì",
    "stát, vztyčit se",
    "Člověk stojící pevně oběma nohama na zemi.",
    [
      [
        "站",
        "zhàn",
        "stát, stanice"
      ],
      [
        "亲",
        "qīn",
        "příbuzný, líbat"
      ],
      [
        "音",
        "yīn",
        "zvuk, tón"
      ],
      [
        "部",
        "bù",
        "oddělení"
      ]
    ]
  ],
  [
    129,
    5,
    "穴",
    "",
    "xué",
    "jeskyně, dutina",
    "Přírodní skalní obydlí se vstupním otvorem.",
    [
      [
        "空",
        "kōng",
        "prázdný, vzduch"
      ],
      [
        "穿",
        "chuān",
        "oblékat, projít skrz"
      ],
      [
        "窗",
        "chuāng",
        "okno"
      ],
      [
        "究",
        "jiū",
        "bádat, zkoumat"
      ]
    ]
  ],
  [
    130,
    5,
    "疋",
    "⺪",
    "pǐ / shǔ",
    "role látky, noha",
    "Role tkané látky, noha v pohybu.",
    [
      [
        "蛋",
        "dàn",
        "vejce"
      ],
      [
        "疏",
        "shū",
        "řídký, vzdálený"
      ],
      [
        "疑",
        "yí",
        "pochybnost"
      ],
      [
        "楚",
        "chǔ",
        "jasný, stát Chu"
      ]
    ]
  ],
  [
    131,
    5,
    "生",
    "",
    "shēng",
    "život, rodit, růst",
    "Svěží zelený výhonek deroucí se ze země.",
    [
      [
        "产",
        "chǎn",
        "vyrábět, rodit"
      ],
      [
        "星",
        "xīng",
        "hvězda"
      ],
      [
        "胜",
        "shèng",
        "zvítězit"
      ],
      [
        "姓",
        "xìng",
        "příjmení"
      ]
    ]
  ],
  [
    132,
    5,
    "矛",
    "",
    "máo",
    "kopí, oštěp",
    "Válečné kopí s hákovitým ostřím k probodnutí zbroje.",
    [
      [
        "柔",
        "róu",
        "jemný, ohebný"
      ],
      [
        "预",
        "yù",
        "předem"
      ],
      [
        "务",
        "wù",
        "úkol, záležitost"
      ],
      [
        "矛",
        "máo",
        "kopí"
      ]
    ]
  ],
  [
    133,
    5,
    "癶",
    "",
    "bō",
    "nohy rozkročené",
    "Dvě nohy otočené patami k sobě při šplhání.",
    [
      [
        "登",
        "dēng",
        "stoupat na horu"
      ],
      [
        "发",
        "fā",
        "vyslat, vyrazit"
      ],
      [
        "癸",
        "guǐ",
        "desátý nebeský kmen"
      ],
      [
        "癹",
        "pō",
        "vytrhávat trávu"
      ]
    ]
  ],
  [
    134,
    5,
    "闪",
    "門",
    "shǎn",
    "blesk, uhnout",
    "Člověk rychle probíhající dveřmi, blesk.",
    [
      [
        "闪",
        "shǎn",
        "blýskat se"
      ],
      [
        "闪电",
        "shǎndiàn",
        "blesk"
      ],
      [
        "闪烁",
        "shǎnshuò",
        "třpytit se"
      ],
      [
        "闪开",
        "shǎnkāi",
        "uhnout z cesty"
      ]
    ]
  ],
  [
    135,
    5,
    "业",
    "",
    "yè",
    "profese, dílo",
    "Zdobené zakončení závěsu zvonů, zaměstnání.",
    [
      [
        "业",
        "yè",
        "obor, podnik"
      ],
      [
        "毕业",
        "bìyè",
        "promovat"
      ],
      [
        "作业",
        "zuòyè",
        "domácí úkol"
      ],
      [
        "商业",
        "shāngyè",
        "obchod"
      ]
    ]
  ],
  [
    136,
    5,
    "申",
    "",
    "shēn",
    "hlásit, blesk",
    "Protáhlá linie blesku, vysvětlit.",
    [
      [
        "电",
        "diàn",
        "elektřina"
      ],
      [
        "神",
        "shén",
        "duch"
      ],
      [
        "伸",
        "shēn",
        "natáhnout ruku"
      ],
      [
        "审",
        "shěn",
        "soudit, zkoumat"
      ]
    ]
  ],
  [
    137,
    5,
    "示",
    "",
    "shì",
    "oltář, ukazovat",
    "Vznešený oltář zjevující vůli předků.",
    [
      [
        "标示",
        "biāoshì",
        "označit"
      ],
      [
        "指示",
        "zhǐshì",
        "instrukce"
      ],
      [
        "暗示",
        "ànshì",
        "naznačit"
      ],
      [
        "显示",
        "xiǎnshì",
        "zobrazit na displeji"
      ]
    ]
  ],
  [
    138,
    5,
    "龙",
    "龍",
    "lóng",
    "drak",
    "Posvátný nebeský drak, vládce deště a mraků.",
    [
      [
        "庞",
        "páng",
        "obrovský"
      ],
      [
        "袭",
        "xí",
        "přepadnout"
      ],
      [
        "拢",
        "lǒng",
        "sevřít"
      ],
      [
        "聋",
        "lóng",
        "hluchý"
      ]
    ]
  ],
  [
    139,
    5,
    "灭",
    "",
    "miè",
    "uhasit, zaniknout",
    "Oheň přikrytý poklopem, uhašení požáru.",
    [
      [
        "灭",
        "miè",
        "zhasnout"
      ],
      [
        "消灭",
        "xiāomiè",
        "vyhubit"
      ],
      [
        "灭火",
        "mièhuǒ",
        "hasit oheň"
      ],
      [
        "熄灭",
        "xīmiè",
        "uhasnout"
      ]
    ]
  ],
  [
    140,
    5,
    "东",
    "東",
    "dōng",
    "východ, pytel",
    "Slunce vycházející za stromy na východě.",
    [
      [
        "陈",
        "chén",
        "vystavit, příjmení Chen"
      ],
      [
        "冻",
        "dòng",
        "mrznout"
      ],
      [
        "栋",
        "dòng",
        "trám, dům (klasifikátor)"
      ],
      [
        "练",
        "liàn",
        "cvičit"
      ]
    ]
  ],
  [
    141,
    5,
    "北",
    "",
    "běi",
    "sever, zády k sobě",
    "Dva lidé sedící zády k sobě proti mrazivému severáku.",
    [
      [
        "背",
        "bèi",
        "záda"
      ],
      [
        "冀",
        "jì",
        "doufat, provincie Hebei"
      ],
      [
        "燕",
        "yān",
        "stát Yan"
      ],
      [
        "北部",
        "běibù",
        "severní oblast"
      ]
    ]
  ],
  [
    142,
    5,
    "母",
    "",
    "mǔ",
    "matka",
    "Žena krmící děti z prsu, mateřská láska.",
    [
      [
        "母亲",
        "mǔqīn",
        "maminka"
      ],
      [
        "母语",
        "mǔyǔ",
        "rodný jazyk"
      ],
      [
        "字母",
        "zìmǔ",
        "abeceda"
      ],
      [
        "教母",
        "jiàomǔ",
        "kmotra"
      ]
    ]
  ],
  [
    143,
    5,
    "半",
    "",
    "bàn",
    "polovina",
    "Býk rozdělený na dvě stejné poloviny.",
    [
      [
        "半天",
        "bàntiān",
        "půl dne"
      ],
      [
        "一半",
        "yíbàn",
        "jedna polovina"
      ],
      [
        "半径",
        "bànjìng",
        "poloměr"
      ],
      [
        "伴",
        "bàn",
        "doprovázet"
      ]
    ]
  ],
  [
    144,
    5,
    "玄",
    "",
    "xuán",
    "tajemný, hluboký",
    "Temná barva noční oblohy, taoistická hloubka.",
    [
      [
        "玄妙",
        "xuánmiào",
        "tajuplný"
      ],
      [
        "玄关",
        "xuánguān",
        "vstupní hala"
      ],
      [
        "率",
        "lǜ / shuài",
        "poměr, vést"
      ],
      [
        "畜",
        "chù",
        "hospodářské zvíře"
      ]
    ]
  ],
  [
    145,
    5,
    "甘",
    "",
    "gān",
    "sladký, lahodný",
    "Něco chutného a sladkého drženého v ústech.",
    [
      [
        "甜",
        "tián",
        "sladký (sladkost v ústech)"
      ],
      [
        "甚",
        "shèn",
        "velmi"
      ],
      [
        "某",
        "mǒu",
        "jistý člověk"
      ],
      [
        "甘心",
        "gānxīn",
        "být spokojený"
      ]
    ]
  ],
  [
    146,
    5,
    "由",
    "",
    "yóu",
    "z, příčina",
    "Olejová nádoba s úzkým hrdlem, původ věci.",
    [
      [
        "自由",
        "zìyóu",
        "svoboda"
      ],
      [
        "理由",
        "lǐyóu",
        "důvod"
      ],
      [
        "由于",
        "yóuyú",
        "kvůli"
      ],
      [
        "抽",
        "chōu",
        "vytáhnout"
      ]
    ]
  ],
  [
    147,
    5,
    "甲",
    "",
    "jiǎ",
    "první, brnění",
    "Želví krunýř, válečná zbroj, prvotřídní kvalita.",
    [
      [
        "指甲",
        "zhǐjia",
        "nehty"
      ],
      [
        "甲虫",
        "jiǎchóng",
        "brouk"
      ],
      [
        "盔甲",
        "kuījiǎ",
        "brnění"
      ],
      [
        "鸭",
        "yā",
        "kachna"
      ]
    ]
  ],
  [
    148,
    5,
    "申",
    "",
    "shēn",
    "vyjádřit, podat",
    "Formální sdělení úřadům.",
    [
      [
        "申请",
        "shēnqǐng",
        "žádat o vízum"
      ],
      [
        "申报",
        "shēnbào",
        "deklarovat"
      ],
      [
        "重申",
        "chóngshēn",
        "znovu zopakovat"
      ],
      [
        "引申",
        "yǐnshēn",
        "odvodit význam"
      ]
    ]
  ],
  [
    149,
    6,
    "竹",
    "⺮",
    "zhú",
    "bambus",
    "Dvě větvičky bambusu s visícími špičatými lístky.",
    [
      [
        "等",
        "děng",
        "čekat, rovný"
      ],
      [
        "简",
        "jiǎn",
        "jednoduchý, bambusová tabulka"
      ],
      [
        "答",
        "dá",
        "odpovědět"
      ],
      [
        "笑",
        "xiào",
        "smát se"
      ]
    ]
  ],
  [
    150,
    6,
    "米",
    "",
    "mǐ",
    "rýže, zrno, metr",
    "Zrnka rýže rozsypaná do kříže při výmlatu.",
    [
      [
        "糖",
        "táng",
        "cukr, bonbón"
      ],
      [
        "精",
        "jīng",
        "precizní, energie"
      ],
      [
        "粮",
        "liáng",
        "obilí, potrava"
      ],
      [
        "粉",
        "fěn",
        "mouka, prášek, růžový"
      ]
    ]
  ],
  [
    151,
    6,
    "糸",
    "纟",
    "mì",
    "hedvábí, přadeno",
    "Svazek předeného hedvábí na cívce.",
    [
      [
        "系",
        "xì",
        "systém, fakulta"
      ],
      [
        "索",
        "suǒ",
        "lano, hledat"
      ],
      [
        "紧",
        "jǐn",
        "těsný, naléhavý"
      ],
      [
        "繁",
        "fán",
        "složitý, košatý"
      ]
    ]
  ],
  [
    152,
    6,
    "缶",
    "",
    "fǒu",
    "hliněný džbán",
    "Keramický džbán na vodu a víno sloužící i jako bicí nástroj.",
    [
      [
        "缺",
        "quē",
        "postrádat, chybět"
      ],
      [
        "罐",
        "guàn",
        "plechovka, sklenice"
      ],
      [
        "缸",
        "gāng",
        "káď na vodu"
      ],
      [
        "罄",
        "qìng",
        "vyčerpat zásoby"
      ]
    ]
  ],
  [
    153,
    6,
    "网",
    "",
    "wǎng",
    "síť, internet",
    "Spletená provazová síť k lovu zvěře a ryb.",
    [
      [
        "网页",
        "wǎngyè",
        "webová stránka"
      ],
      [
        "网友",
        "wǎngyǒu",
        "internetový přítel"
      ],
      [
        "上网",
        "shàngwǎng",
        "být online"
      ],
      [
        "渔网",
        "yúwǎng",
        "rybářská síť"
      ]
    ]
  ],
  [
    154,
    6,
    "羊",
    "⺶ 𦍌",
    "yáng",
    "ovce, beran",
    "Hlava berana se dvěma zahnutými rohy, symbol dobra.",
    [
      [
        "美",
        "měi",
        "krásný (velká tučná ovce)"
      ],
      [
        "着",
        "zhe / zháo",
        "aspektové sloveso"
      ],
      [
        "样",
        "yàng",
        "vzhled, vzor"
      ],
      [
        "群",
        "qún",
        "stádo, skupina"
      ]
    ]
  ],
  [
    155,
    6,
    "羽",
    "",
    "yǔ",
    "ptačí péra, křídla",
    "Dvě ptačí pera vedle sebe na křídle.",
    [
      [
        "习",
        "xí",
        "učit se (mládě zkoušející křídla)"
      ],
      [
        "翻",
        "fān",
        "obracet stránky"
      ],
      [
        "翠",
        "cuì",
        "smaragdový"
      ],
      [
        "翅",
        "chì",
        "křídlo"
      ]
    ]
  ],
  [
    156,
    6,
    "老",
    "耂",
    "lǎo",
    "starý, ctihodný",
    "Starý moudrý muž s dlouhými vousy opírající se o hůl.",
    [
      [
        "者",
        "zhě",
        "ten který"
      ],
      [
        "考",
        "kǎo",
        "zkoušet, přemýšlet"
      ],
      [
        "教",
        "jiào",
        "učit"
      ],
      [
        "孝",
        "xiào",
        "úcta k rodičům"
      ]
    ]
  ],
  [
    157,
    6,
    "而",
    "",
    "ér",
    "a přitom, vousy",
    "Lícní vousy splývající z brady, spojka odporovací i slučovací.",
    [
      [
        "而且",
        "érqiě",
        "a navíc"
      ],
      [
        "耐",
        "nài",
        "snášet"
      ],
      [
        "耍",
        "shuǎ",
        "hrát si, dovádět"
      ],
      [
        "斋",
        "zhāi",
        "studovna"
      ]
    ]
  ],
  [
    158,
    6,
    "耒",
    "",
    "lěi",
    "dřevěný pluh",
    "Tradiční orací rádlo k obdělávání země.",
    [
      [
        "耕",
        "gēng",
        "orat pole"
      ],
      [
        "耗",
        "hào",
        "spotřebovat"
      ],
      [
        "耘",
        "yún",
        "plet pole"
      ],
      [
        "耜",
        "sì",
        "radlice pluhu"
      ]
    ]
  ],
  [
    159,
    6,
    "耳",
    "",
    "ěr",
    "ucho, sluch",
    "Lidské ucho naslouchající zvukům světa.",
    [
      [
        "听",
        "tīng",
        "poslouchat"
      ],
      [
        "闻",
        "wén",
        "slyšet, vonět, zprávy"
      ],
      [
        "聪",
        "cōng",
        "bystrý (dobře slyší)"
      ],
      [
        "取",
        "qǔ",
        "vzít (chytit za ucho)"
      ]
    ]
  ],
  [
    160,
    6,
    "聿",
    "",
    "yù",
    "štětec v ruce",
    "Ruka pevně svírající kaligrafický štětec nad papírem.",
    [
      [
        "建",
        "jiàn",
        "budovat"
      ],
      [
        "律",
        "lǜ",
        "zákon, melodie"
      ],
      [
        "书",
        "shū",
        "kniha, psát"
      ],
      [
        "津",
        "jīn",
        "brod, přístav Tchien-ťin"
      ]
    ]
  ],
  [
    161,
    6,
    "肉",
    "⺼",
    "ròu",
    "maso, sval",
    "Kus čerstvého masa se šlachami a svalovými vlákny.",
    [
      [
        "肥",
        "féi",
        "tučný, úrodný"
      ],
      [
        "背",
        "bèi",
        "záda"
      ],
      [
        "胃",
        "wèi",
        "žaludek"
      ],
      [
        "股",
        "gǔ",
        "akcie, stehno"
      ]
    ]
  ],
  [
    162,
    6,
    "自",
    "",
    "zì",
    "já sám, nos, od",
    "Lidský nos (Číňané ukazují na nos když říkají já), počátek.",
    [
      [
        "息",
        "xī",
        "odpočinek, dech"
      ],
      [
        "臭",
        "chòu",
        "páchnoucí"
      ],
      [
        "鼻",
        "bí",
        "nos"
      ],
      [
        "段",
        "duàn",
        "úsek"
      ]
    ]
  ],
  [
    163,
    6,
    "至",
    "",
    "zhì",
    "dorazit, až k",
    "Šíp dopadající do země, dosažení cíle cesty.",
    [
      [
        "到",
        "dào",
        "dorazit"
      ],
      [
        "屋",
        "wū",
        "dům"
      ],
      [
        "致",
        "zhì",
        "věnovat, způsobit"
      ],
      [
        "臻",
        "zhēn",
        "dosáhnout vrcholu"
      ]
    ]
  ],
  [
    164,
    6,
    "臼",
    "",
    "jiù",
    "hmoždíř",
    "Kamenný hmoždíř s prohlubní na drcení bylin a rýže.",
    [
      [
        "儿",
        "ér",
        "syn"
      ],
      [
        "插",
        "chā",
        "zasunout, zapojit"
      ],
      [
        "舀",
        "yǎo",
        "nabírat vodu"
      ],
      [
        "毁",
        "huǐ",
        "zničit"
      ]
    ]
  ],
  [
    165,
    6,
    "舌",
    "",
    "shé",
    "jazyk v ústech",
    "Jazyk vystupující z úst k ochutnávání a mluvení.",
    [
      [
        "话",
        "huà",
        "slovo"
      ],
      [
        "甜",
        "tián",
        "sladký"
      ],
      [
        "乱",
        "luàn",
        "chaotický"
      ],
      [
        "刮",
        "guā",
        "škrábat, foukat vítr"
      ]
    ]
  ],
  [
    166,
    6,
    "舟",
    "",
    "zhōu",
    "loďka, člun",
    "Dřevěná pramice plující po řece s veslem.",
    [
      [
        "船",
        "chuán",
        "loď, plavidlo"
      ],
      [
        "航",
        "háng",
        "plout, létat"
      ],
      [
        "艇",
        "tǐng",
        "motorový člun"
      ],
      [
        "盘",
        "pán",
        "talíř"
      ]
    ]
  ],
  [
    167,
    6,
    "艮",
    "",
    "gèn",
    "vzpurný pohled, trigram Hora",
    "Člověk otáčející se a hledící zpříma do očí protivníka.",
    [
      [
        "很",
        "hěn",
        "velmi"
      ],
      [
        "跟",
        "gēn",
        "s, pata"
      ],
      [
        "根",
        "gēn",
        "kořen"
      ],
      [
        "银",
        "yín",
        "stříbro"
      ]
    ]
  ],
  [
    168,
    6,
    "色",
    "",
    "sè",
    "barva, krása, půvab",
    "Dva lidé v objetí, emoce v tváři, pestrá paleta barev.",
    [
      [
        "绝",
        "jué",
        "naprosto, unikátní"
      ],
      [
        "艳",
        "yàn",
        "nádherný"
      ],
      [
        "色素",
        "sèsù",
        "pigment"
      ],
      [
        "色彩",
        "sècǎi",
        "barvy"
      ]
    ]
  ],
  [
    169,
    6,
    "虍",
    "",
    "hū",
    "tygří pruhy, tygr",
    "Tygří pruhovaný kožich a hrozivé drápy.",
    [
      [
        "虎",
        "hǔ",
        "tygr"
      ],
      [
        "虚",
        "xū",
        "prázdný"
      ],
      [
        "虑",
        "lǜ",
        "zvažovat, obava"
      ],
      [
        "处",
        "chù",
        "místo"
      ]
    ]
  ],
  [
    170,
    6,
    "虫",
    "",
    "chóng",
    "hmyz, červ, plaz",
    "Kroutící se housenka či had, svět drobných živočichů.",
    [
      [
        "虾",
        "xiā",
        "kreveta"
      ],
      [
        "蛋",
        "dàn",
        "vejce"
      ],
      [
        "虽",
        "suī",
        "ačkoli"
      ],
      [
        "蚊",
        "wén",
        "komár"
      ]
    ]
  ],
  [
    171,
    6,
    "血",
    "",
    "xuè",
    "krev",
    "Miska s kapkou obětní krve při rituálním spojenectví.",
    [
      [
        "血管",
        "xuèguǎn",
        "céva"
      ],
      [
        "鲜血",
        "xiānxuè",
        "čerstvá krev"
      ],
      [
        "血压",
        "xuèyā",
        "krevní tlak"
      ],
      [
        "衄",
        "nǜ",
        "krvácet z nosu"
      ]
    ]
  ],
  [
    172,
    6,
    "行",
    "",
    "xíng",
    "křižovatka, jít",
    "Čtyřramenná křižovatka cest, chůze a řada.",
    [
      [
        "街",
        "jiē",
        "ulice"
      ],
      [
        "术",
        "shù",
        "umění, technika"
      ],
      [
        "衡",
        "héng",
        "vážit, rovnováha"
      ],
      [
        "律",
        "lǜ",
        "zákon"
      ]
    ]
  ],
  [
    173,
    6,
    "衣",
    "衤",
    "yī",
    "oděv, roucho",
    "Tradiční čínské hedvábné roucho překřížené na prsou.",
    [
      [
        "被",
        "bèi",
        "přikrývka, pasivum"
      ],
      [
        "衬",
        "chèn",
        "košile"
      ],
      [
        "衫",
        "shān",
        "halena"
      ],
      [
        "补",
        "bǔ",
        "spravit, doplnit"
      ]
    ]
  ],
  [
    174,
    6,
    "西",
    "覀",
    "xī",
    "západ, ptačí hnízdo",
    "Pták usazený v hnízdě při západu slunce.",
    [
      [
        "要",
        "yào",
        "chtít, muset"
      ],
      [
        "票",
        "piào",
        "jízdenka, lístek"
      ],
      [
        "栗",
        "lì",
        "kaštan"
      ],
      [
        "贾",
        "gǔ / jiǎ",
        "obchodník"
      ]
    ]
  ],
  [
    175,
    6,
    "齐",
    "齊",
    "qí",
    "rovný, vyrovnaný",
    "Klasy pšenice dorůstající do stejné výšky.",
    [
      [
        "整齐",
        "zhěngqí",
        "úhledný"
      ],
      [
        "齐全",
        "qíquán",
        "kompletní"
      ],
      [
        "齐心",
        "qíxīn",
        "jednomyslný"
      ],
      [
        "齐名",
        "qímíng",
        "stejně slavný"
      ]
    ]
  ],
  [
    176,
    6,
    "臣",
    "",
    "chén",
    "ministr, dvořan",
    "Dvořan sklánějící hlavu a vzhlížející k trůnu.",
    [
      [
        "卧",
        "wò",
        "ležet"
      ],
      [
        "监",
        "jiān",
        "dozírat"
      ],
      [
        "坚",
        "jiān",
        "pevný"
      ],
      [
        "临",
        "lín",
        "čelit, přijít k"
      ]
    ]
  ],
  [
    177,
    6,
    "亚",
    "亞",
    "yà",
    "Asie, druhý",
    "Půdorys hrobky dynastie Shang, Asie.",
    [
      [
        "亚洲",
        "yàzhōu",
        "Asie"
      ],
      [
        "亚军",
        "yàjūn",
        "druhé místo"
      ],
      [
        "哑",
        "yǎ",
        "němý"
      ],
      [
        "恶",
        "è",
        "zlý"
      ]
    ]
  ],
  [
    178,
    7,
    "言",
    "",
    "yán",
    "slovo, řeč (plná forma)",
    "Flétna se zvukovými otvory, mluvené slovo.",
    [
      [
        "誓",
        "shì",
        "přísaha"
      ],
      [
        "警",
        "jǐng",
        "policie, varování"
      ],
      [
        "誉",
        "yù",
        "chvála"
      ],
      [
        "变",
        "biàn",
        "změnit se"
      ]
    ]
  ],
  [
    179,
    7,
    "辛",
    "",
    "xīn",
    "ostrý, pikantní, lopotný",
    "Tetovací jehla k trestání otroků, pálivá chuť a námaha.",
    [
      [
        "辣",
        "là",
        "pálivý"
      ],
      [
        "辨",
        "biàn",
        "rozlišit"
      ],
      [
        "辩",
        "biàn",
        "debatovat"
      ],
      [
        "辞",
        "cí",
        "rozloučit se, slova"
      ]
    ]
  ],
  [
    180,
    7,
    "辰",
    "",
    "chén",
    "čas, ranní hvězda, drak",
    "Mušle vysouvající tělo při přílivu, nebeská tělesa.",
    [
      [
        "晨",
        "chén",
        "časné jitro"
      ],
      [
        "农",
        "nóng",
        "rolník"
      ],
      [
        "辱",
        "rǔ",
        "ponížení"
      ],
      [
        "震",
        "zhèn",
        "zemětřesení"
      ]
    ]
  ],
  [
    181,
    7,
    "走",
    "",
    "zǒu",
    "jít, kráčet, běžet",
    "Člověk mávající pažemi při svižném běhu.",
    [
      [
        "起",
        "qǐ",
        "vstát, začít"
      ],
      [
        "超",
        "chāo",
        "předčit, super"
      ],
      [
        "越",
        "yuè",
        "překročit, Vietnam"
      ],
      [
        "赶",
        "gǎn",
        "spěchat, stihnout"
      ]
    ]
  ],
  [
    182,
    7,
    "赤",
    "",
    "chì",
    "rudý, šarlatový",
    "Velký oheň osvětlující člověka, zářivě červená barva.",
    [
      [
        "赫",
        "hè",
        "slavný, zářivý"
      ],
      [
        "赦",
        "shè",
        "omilostnit"
      ],
      [
        "赭",
        "zhě",
        "okr"
      ],
      [
        "赤字",
        "chìzì",
        "rozpočtový deficit"
      ]
    ]
  ],
  [
    183,
    7,
    "豆",
    "",
    "dòu",
    "bob, luštěnina, pohár",
    "Pohár na stopce k rituálnímu podávání vařených luštěnin.",
    [
      [
        "短",
        "duǎn",
        "krátký"
      ],
      [
        "豆腐",
        "dòufu",
        "tofu"
      ],
      [
        "登",
        "dēng",
        "stoupat"
      ],
      [
        "豉",
        "chǐ",
        "fermentované boby"
      ]
    ]
  ],
  [
    184,
    7,
    "酉",
    "",
    "yǒu",
    "amfora na víno, kvašení",
    "Hliněná amfora s úzkým hrdlem na zrání alkoholu.",
    [
      [
        "酒",
        "jiǔ",
        "alkohol, víno"
      ],
      [
        "酸",
        "suān",
        "kyselý"
      ],
      [
        "醒",
        "xǐng",
        "probudit se, vystřízlivět"
      ],
      [
        "配",
        "pèi",
        "párovat"
      ]
    ]
  ],
  [
    185,
    7,
    "豕",
    "",
    "shǐ",
    "vepř, divočák",
    "Tlusté břicho a štětiny divočáka s kly.",
    [
      [
        "家",
        "jiā",
        "domov (vepř pod střechou)"
      ],
      [
        "豪",
        "háo",
        "hrdinský, velkorysý"
      ],
      [
        "象",
        "xiàng",
        "slon"
      ],
      [
        "豫",
        "yù",
        "provincie Henan"
      ]
    ]
  ],
  [
    186,
    7,
    "里",
    "",
    "lǐ",
    "vesnice, uvnitř, li (500m)",
    "Obydlí postavené u orných polí, jednotka vzdálenosti.",
    [
      [
        "重",
        "zhòng",
        "těžký, důležitý"
      ],
      [
        "野",
        "yě",
        "divočina, pole"
      ],
      [
        "量",
        "liàng",
        "měřit, množství"
      ],
      [
        "理",
        "lǐ",
        "rozum, fyzika"
      ]
    ]
  ],
  [
    187,
    7,
    "足",
    "⻊",
    "zú",
    "noha, chodidlo, dostatečný",
    "Lidské stehno, koleno a chodidlo.",
    [
      [
        "跑",
        "pǎo",
        "běhat"
      ],
      [
        "跳",
        "tiào",
        "skákat"
      ],
      [
        "路",
        "lù",
        "cesta, silnice"
      ],
      [
        "踢",
        "tī",
        "kopat míč"
      ]
    ]
  ],
  [
    188,
    7,
    "身",
    "",
    "shēn",
    "tělo, trup, těhotná",
    "Tělo těhotné ženy s vybouleným bříškem.",
    [
      [
        "射",
        "shè",
        "střílet"
      ],
      [
        "躲",
        "duǒ",
        "schovat se"
      ],
      [
        "躺",
        "tǎng",
        "ležet"
      ],
      [
        "躯",
        "qū",
        "tělesná schránka"
      ]
    ]
  ],
  [
    189,
    7,
    "豸",
    "",
    "zhì",
    "šelma, šelma bez rohů",
    "Plížící se šelma s prohnutým hřbetem připravená ke skoku.",
    [
      [
        "豹",
        "bào",
        "leopard"
      ],
      [
        "貌",
        "mào",
        "vzhled"
      ],
      [
        "豺",
        "chái",
        "šakal"
      ],
      [
        "貂",
        "diāo",
        "sobol"
      ]
    ]
  ],
  [
    190,
    7,
    "谷",
    "",
    "gǔ",
    "údolí, soutěska",
    "Voda vytékající z horského průsmyku.",
    [
      [
        "豁",
        "huò",
        "otevřený, osvobozený"
      ],
      [
        "谿",
        "xī",
        "horská bystřina"
      ],
      [
        "容",
        "róng",
        "pojmout"
      ],
      [
        "裕",
        "yù",
        "bohatý"
      ]
    ]
  ],
  [
    191,
    7,
    "角",
    "",
    "jiǎo",
    "roh zvířete, desetník",
    "Špičatý roh buvola, úhel.",
    [
      [
        "解",
        "jiě",
        "rozvázat, vysvětlit"
      ],
      [
        "触",
        "chù",
        "dotknout se"
      ],
      [
        "嘴",
        "zuǐ",
        "ústa, zobák"
      ],
      [
        "负",
        "fù",
        "nést"
      ]
    ]
  ],
  [
    192,
    8,
    "金",
    "",
    "jīn",
    "kov, zlato (plná forma)",
    "Zlato uložené hluboko ve skalních žilách.",
    [
      [
        "鉴",
        "jiàn",
        "zrcadlo, posoudit"
      ],
      [
        "釜",
        "fǔ",
        "kotel"
      ],
      [
        "鑫",
        "xīn",
        "prosperita (tři zlata)"
      ],
      [
        "銮",
        "luán",
        "císařský zvonec"
      ]
    ]
  ],
  [
    193,
    8,
    "青",
    "",
    "qīng",
    "modrozelený, azur, mládí",
    "Barva rašící trávy, tyrkys i azurová obloha.",
    [
      [
        "清",
        "qīng",
        "čistý, průzračný"
      ],
      [
        "情",
        "qíng",
        "cit, náklonnost"
      ],
      [
        "晴",
        "qíng",
        "slunečno"
      ],
      [
        "静",
        "jìng",
        "tichý, klidný"
      ]
    ]
  ],
  [
    194,
    8,
    "雨",
    "",
    "yǔ",
    "déšť",
    "Oblak na nebi z nějž padají kapky deště.",
    [
      [
        "雪",
        "xuě",
        "sníh"
      ],
      [
        "云",
        "yún",
        "mrak"
      ],
      [
        "零",
        "líng",
        "nula, mrholení"
      ],
      [
        "雷",
        "léi",
        "hrom"
      ]
    ]
  ],
  [
    195,
    8,
    "隹",
    "",
    "zhuī",
    "ptáček s krátkým ocasem",
    "Zpěvný ptáček sedící na větvičce.",
    [
      [
        "谁",
        "shéi",
        "kdo"
      ],
      [
        "准",
        "zhǔn",
        "přesný, povolit"
      ],
      [
        "难",
        "nán",
        "obtížný"
      ],
      [
        "进",
        "jìn",
        "vstoupit"
      ]
    ]
  ],
  [
    196,
    8,
    "齿",
    "齒",
    "chǐ",
    "zuby, věk",
    "Řada zubů v otevřených ústech.",
    [
      [
        "龄",
        "líng",
        "věk"
      ],
      [
        "啮",
        "niè",
        "hlodat"
      ],
      [
        "龈",
        "yín",
        "dáseň"
      ],
      [
        "龋",
        "qǔ",
        "zubní kaz"
      ]
    ]
  ],
  [
    197,
    8,
    "鱼",
    "魚",
    "yú",
    "ryba",
    "Šupinaté tělo ryby s ploutvemi a ocasem.",
    [
      [
        "鲜",
        "xiān",
        "čerstvý (ryba a ovce)"
      ],
      [
        "鲁",
        "lǔ",
        "provincie Šan-tung"
      ],
      [
        "鲍",
        "bào",
        "abalon, mořské ucho"
      ],
      [
        "鲤",
        "lǐ",
        "kapr"
      ]
    ]
  ],
  [
    198,
    8,
    "门",
    "",
    "mén",
    "portál, brána",
    "Monumentální vstupní vrata do paláce.",
    [
      [
        "大门",
        "dàmén",
        "hlavní brána"
      ],
      [
        "开门",
        "kāimén",
        "otevřít dveře"
      ],
      [
        "门票",
        "ménpiào",
        "vstupenka"
      ],
      [
        "门道",
        "méndao",
        "finesa, know-how"
      ]
    ]
  ],
  [
    199,
    9,
    "革",
    "",
    "gé",
    "vyčiněná kůže, revoluce",
    "Zvířecí kůže zbavená srsti a napnutá na rámu.",
    [
      [
        "鞋",
        "xié",
        "bota"
      ],
      [
        "靴",
        "xuē",
        "kozačka"
      ],
      [
        "鞭",
        "biān",
        "bič"
      ],
      [
        "鞍",
        "ān",
        "sedlo"
      ]
    ]
  ],
  [
    200,
    9,
    "骨",
    "",
    "gǔ",
    "kost, kostra",
    "Kloub spojený se stehenní kostí.",
    [
      [
        "髓",
        "suǐ",
        "kostní dřeň"
      ],
      [
        "骼",
        "gé",
        "kostra"
      ],
      [
        "骰",
        "tóu",
        "hrací kostka"
      ],
      [
        "滑",
        "huá",
        "kluzký"
      ]
    ]
  ],
  [
    201,
    10,
    "鬼",
    "",
    "guǐ",
    "duch, démon",
    "Postava s velkou démonickou maskou na hlavě.",
    [
      [
        "魂",
        "hún",
        "duše"
      ],
      [
        "魄",
        "pò",
        "životní síla"
      ],
      [
        "魏",
        "wèi",
        "stát Wei"
      ],
      [
        "魔",
        "mó",
        "magie, démon"
      ]
    ]
  ],
  [
    202,
    10,
    "髟",
    "",
    "biāo",
    "dlouhé splývavé vlasy",
    "Husté dlouhé vlasy vlající ve větru.",
    [
      [
        "发",
        "fà",
        "vlasy"
      ],
      [
        "髯",
        "rán",
        "husté vousy"
      ],
      [
        "鬃",
        "zōng",
        "koňská hříva"
      ],
      [
        "髻",
        "jì",
        "vlasový uzel"
      ]
    ]
  ],
  [
    203,
    11,
    "鹿",
    "",
    "lù",
    "jelen, srna",
    "Půvabný jelen s rozvětveným parožím a štíhlýma nohama.",
    [
      [
        "尘",
        "chén",
        "prach (malý jelen zvedá prach)"
      ],
      [
        "丽",
        "lì",
        "krásný"
      ],
      [
        "麟",
        "lín",
        "bájný jednorožec Qilin"
      ],
      [
        "麝",
        "shè",
        "kabar pižmový"
      ]
    ]
  ],
  [
    204,
    14,
    "鼻",
    "",
    "bí",
    "nos, čich",
    "Lidský nos s dýchacími nozdrami shora dolů.",
    [
      [
        "鼾",
        "hān",
        "chrápání"
      ],
      [
        "鼻祖",
        "bízǔ",
        "první zakladatel oboru"
      ],
      [
        "鼻尖",
        "bíjiān",
        "špička nosu"
      ],
      [
        "鼻涕",
        "bítì",
        "rýma"
      ]
    ]
  ]
];

  // Render cards and insert them right before Lesson 1 (#card-l1-1)
  function initRadicalCards() {
    const container = document.getElementById('cardsContainer');
    if (!container) return;
    if (document.getElementById('card-rad-1')) return;

    const refNode = document.getElementById('card-l1-1');
    const fragment = document.createDocumentFragment();

    radicalsData.forEach(item => {
      const idx = item[0];
      const strokes = item[1];
      const char = item[2];
      const variants = item[3];
      const pinyin = item[4];
      const czech = item[5];
      const meaning = item[6];
      const words = item[7];

      const strokeLabel = strokes === 1 ? '1 tah' : (strokes >= 2 && strokes <= 4 ? strokes + ' tahy' : strokes + ' tahů');
      const displayChar = variants ? `${char} (${variants})` : char;

      // Words HTML
      let wordsHtml = '';
      words.forEach(w => {
        wordsHtml += `
          <div class="radical-word-item">
            <div class="radical-word-hanzi">${w[0]}</div>
            <div class="radical-word-meta">
              <span class="radical-word-pinyin pinyin-target">${w[1]}</span>
              <span class="radical-word-czech czech-target">${w[2]}</span>
            </div>
          </div>`;
      });

      // Search text containing char, variants, pinyin, czech, words
      const wordsSearch = words.map(w => `${w[0]} ${w[1]} ${w[2]}`).join(' ');
      const searchIndex = `rad ${idx} ${char} ${variants} ${pinyin} ${czech} ${wordsSearch}`.toLowerCase();

      const card = document.createElement('div');
      card.className = 'course-card rad';
      card.id = `card-rad-${idx}`;
      card.dataset.lesson = 'rad';
      card.setAttribute('data-text', searchIndex);

      card.innerHTML = `
        <div class="left-panel">
          <span class="card-badge">Radikál &bull; #${String(idx).padStart(3, '0')}</span>
          <span class="radical-stroke-badge">${strokeLabel}</span>
          <div class="hanzi-text">${char}</div>
          <div class="pinyin-text pinyin-target">${pinyin}</div>
          <div class="czech-text czech-target">${czech}</div>
        </div>

        <div class="right-panel">
          <div class="panel-header">
            <span class="radical-panel-title">Tabulka moderních radikálů (GF 0011-2009)</span>
            <span class="tracker-badge">Radikál &bull; ${idx} / 204</span>
          </div>

          <div class="section-label new radical-etym-label">
            🏮 Význam &amp; Etymologická symbolika
          </div>

          <div class="radical-etym-box">
            <strong class="radical-etym-char">${displayChar}</strong> [${pinyin}] &bull; <span class="radical-etym-meaning">${meaning}</span>
          </div>

          <div class="radical-words-container">
            <div class="radical-words-header">
              <span class="radical-words-title">📚 Slova obsahující tento radikál</span>
              <span class="radical-words-count">${words.length} příkladová slova</span>
            </div>
            <div class="radical-words-grid">
              ${wordsHtml}
            </div>
          </div>
        </div>
      `;

      fragment.appendChild(card);
    });

    if (refNode) {
      container.insertBefore(fragment, refNode);
    } else {
      container.appendChild(fragment);
    }

    console.log(`[Radicals] Successfully loaded ${radicalsData.length} modern Chinese radicals into DOM.`);
  }

  // Execute on DOM ready or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRadicalCards);
  } else {
    initRadicalCards();
  }
})();
