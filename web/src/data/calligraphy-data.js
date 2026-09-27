// =========================================================================
// ANCIENT ASIAN CALLIGRAPHY & TRANSLATED PHILOSOPHICAL MASTERPIECES
// =========================================================================
// Authentic stroke geometries where "not a single line is straight":
// Each stroke is modeled as continuous organic Bezier / Catmull-Rom splines
// with entry press (起筆 Qǐbǐ), flexing travel (行筆 Xíngbǐ), dynamic width,
// and recoil / hook release (收筆 Shōubǐ).

export const CALLIGRAPHY_PASSAGES = [
  {
    id: 'shang-shan-ruo-shui',
    title: '上善若水',
    pinyin: 'Shàng shàn ruò shuǐ',
    source: '《道德經》Laozi · Tao Te Ching (cca 4. stol. př. n. l., kap. 8)',
    originEra: 'Starověká Čína · Období Válčících států',
    scriptStyle: 'Tradiční štětcový polokurzívní styl (Xíngshū 行書 / 草意)',
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
        etymology: 'Starověké orakulní písmo (甲骨文) znázorňovalo vodorovnou základní linii, nad níž byla umístěna tečka či svislý ukazatel, symbolizující vše, co směřuje k nebi a výšinám.',
        strokes: [
          // 1. Svislý prohnutý prut (Shù)
          {
            name: 'shù (svislý oblouk s kapkou)',
            baseWidth: 9.5,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 48, y: 16, w: 0.65 },
              { x: 50, y: 32, w: 1.15 },
              { x: 51, y: 56, w: 1.05 },
              { x: 49, y: 72, w: 0.85 }
            ]
          },
          // 2. Krátký horní vodorovný švih (Héng)
          {
            name: 'duǎn héng (horní plující švih)',
            baseWidth: 7.8,
            taper: 'both',
            hasBristles: false,
            pts: [
              { x: 52, y: 44, w: 0.75 },
              { x: 62, y: 41, w: 1.10 },
              { x: 74, y: 43, w: 0.82 }
            ]
          },
          // 3. Spodní široký nosný základ (Cháng héng) - Cántóu Yànwěi (蚕头燕尾)
          {
            name: 'cháng héng (spodní vlnový základ)',
            baseWidth: 10.2,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 18, y: 79, w: 0.60 },
              { x: 26, y: 73, w: 1.18 },
              { x: 50, y: 71, w: 0.90 },
              { x: 74, y: 75, w: 1.25 },
              { x: 86, y: 74, w: 0.55 }
            ]
          }
        ]
      },
      {
        char: '善',
        pinyin: 'shàn',
        tone: '4. klesavý tón',
        meaningCz: 'Dobro, ctnost, laskavost, harmonická dokonalost',
        radical: '口 (ústa / slovo)',
        strokeCount: 12,
        etymology: 'Původně složeno ze znaku pro ovci (羊 - posvátná čistota a pokoj) a slov (言 / 誩 - spor). Významem je urovnání sporu v laskavosti, přinášející harmonii celému společenství.',
        strokes: [
          // 1. Levý beraní roh (Piě-diǎn)
          {
            name: 'zuǒ diǎn (levý roh ranní rosy)',
            baseWidth: 8.0,
            taper: 'tail',
            hasBristles: false,
            pts: [
              { x: 38, y: 13, w: 0.70 },
              { x: 42, y: 19, w: 1.20 },
              { x: 44, y: 24, w: 0.50 }
            ]
          },
          // 2. Pravý beraní roh (Piě)
          {
            name: 'yòu piě (pravý prohnutý roh)',
            baseWidth: 7.5,
            taper: 'tail',
            hasBristles: false,
            pts: [
              { x: 62, y: 12, w: 0.75 },
              { x: 57, y: 20, w: 1.15 },
              { x: 52, y: 24, w: 0.55 }
            ]
          },
          // 3. Horní horizontální vlnka
          {
            name: 'héng (horní vlnka)',
            baseWidth: 8.5,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 28, y: 26, w: 0.60 },
              { x: 50, y: 24, w: 1.05 },
              { x: 72, y: 26, w: 0.65 }
            ]
          },
          // 4. Střední horizontální prvek
          {
            name: 'héng (střední švih)',
            baseWidth: 8.0,
            taper: 'both',
            hasBristles: false,
            pts: [
              { x: 32, y: 36, w: 0.65 },
              { x: 50, y: 35, w: 0.95 },
              { x: 68, y: 37, w: 0.60 }
            ]
          },
          // 5. Hlavní dlouhý pas ovce (pružný luk)
          {
            name: 'cháng héng (středový luk)',
            baseWidth: 10.5,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 16, y: 46, w: 0.60 },
              { x: 32, y: 43, w: 1.10 },
              { x: 52, y: 42, w: 0.88 },
              { x: 70, y: 45, w: 1.22 },
              { x: 86, y: 44, w: 0.50 }
            ]
          },
          // 6. Centrální svislice
          {
            name: 'shù (středový nosník)',
            baseWidth: 8.5,
            taper: 'tail',
            hasBristles: false,
            pts: [
              { x: 50, y: 26, w: 1.10 },
              { x: 51, y: 40, w: 1.05 },
              { x: 49, y: 55, w: 0.65 }
            ]
          },
          // 7. Spodní ústa - levý svislý oblouk
          {
            name: 'kǒu zuǒ shù (ústní levý sloup)',
            baseWidth: 7.5,
            taper: 'both',
            hasBristles: false,
            pts: [
              { x: 32, y: 62, w: 0.70 },
              { x: 31, y: 74, w: 1.05 },
              { x: 29, y: 84, w: 0.55 }
            ]
          },
          // 8. Spodní ústa - zalomený oblouk
          {
            name: 'kǒu héng zhé (ústní střecha)',
            baseWidth: 8.8,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 31, y: 64, w: 0.90 },
              { x: 54, y: 61, w: 0.95 },
              { x: 72, y: 63, w: 1.25 },
              { x: 69, y: 75, w: 1.00 },
              { x: 66, y: 83, w: 0.55 }
            ]
          },
          // 9. Spodní uzávěr úst
          {
            name: 'kǒu héng (ústní pečeť)',
            baseWidth: 7.2,
            taper: 'both',
            hasBristles: false,
            pts: [
              { x: 30, y: 83, w: 0.60 },
              { x: 49, y: 81, w: 0.90 },
              { x: 68, y: 82, w: 0.65 }
            ]
          }
        ]
      },
      {
        char: '若',
        pinyin: 'ruò',
        tone: '4. klesavý tón',
        meaningCz: 'Jako, podobající se, zdánlivě, jemný',
        radical: '艸 (tráva / byliny)',
        strokeCount: 8,
        etymology: 'Zobrazuje trávu (艹) vyrůstající nad klečící ženou upravující si vlasy s hřebenem (右). Znamená poddajnost stébla trávy sklánějícího se ve větru.',
        strokes: [
          // 1. Trávový horizontální základ (艹)
          {
            name: 'cǎo héng (trávový most)',
            baseWidth: 9.0,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 18, y: 23, w: 0.55 },
              { x: 35, y: 20, w: 1.10 },
              { x: 58, y: 19, w: 0.95 },
              { x: 80, y: 22, w: 0.60 }
            ]
          },
          // 2. Levý svislý stonek
          {
            name: 'cǎo shù (levé stéblo)',
            baseWidth: 8.0,
            taper: 'tail',
            hasBristles: false,
            pts: [
              { x: 34, y: 13, w: 0.70 },
              { x: 35, y: 22, w: 1.15 },
              { x: 33, y: 31, w: 0.50 }
            ]
          },
          // 3. Pravý svislý stonek
          {
            name: 'cǎo shù (pravé stéblo)',
            baseWidth: 8.0,
            taper: 'tail',
            hasBristles: false,
            pts: [
              { x: 65, y: 12, w: 0.75 },
              { x: 64, y: 22, w: 1.10 },
              { x: 62, y: 30, w: 0.55 }
            ]
          },
          // 4. Střední prohnutý oblouk
          {
            name: 'zhōng héng (středový švih)',
            baseWidth: 9.5,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 22, y: 44, w: 0.65 },
              { x: 48, y: 40, w: 1.15 },
              { x: 74, y: 42, w: 0.70 }
            ]
          },
          // 5. Levý dlouhý švih dolů (Piě)
          {
            name: 'piě (letící vrbový list)',
            baseWidth: 9.2,
            taper: 'tail',
            hasBristles: true,
            pts: [
              { x: 49, y: 41, w: 1.20 },
              { x: 38, y: 55, w: 1.05 },
              { x: 22, y: 72, w: 0.75 },
              { x: 12, y: 84, w: 0.40 }
            ]
          },
          // 6. Ústní levý sloup
          {
            name: 'kǒu shù (sloup úst)',
            baseWidth: 7.5,
            taper: 'both',
            hasBristles: false,
            pts: [
              { x: 42, y: 58, w: 0.70 },
              { x: 41, y: 72, w: 1.05 },
              { x: 39, y: 85, w: 0.55 }
            ]
          },
          // 7. Ústní střecha
          {
            name: 'kǒu zhé (střecha úst)',
            baseWidth: 8.5,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 42, y: 60, w: 0.85 },
              { x: 62, y: 57, w: 0.95 },
              { x: 78, y: 60, w: 1.20 },
              { x: 75, y: 74, w: 1.00 },
              { x: 72, y: 84, w: 0.50 }
            ]
          },
          // 8. Ústní uzávěr
          {
            name: 'kǒu héng (uzavření)',
            baseWidth: 7.2,
            taper: 'both',
            hasBristles: false,
            pts: [
              { x: 40, y: 84, w: 0.60 },
              { x: 57, y: 82, w: 0.90 },
              { x: 74, y: 83, w: 0.60 }
            ]
          }
        ]
      },
      {
        char: '水',
        pinyin: 'shuǐ',
        tone: '3. klesavě-stoupavý tón',
        meaningCz: 'Voda, proud, tekutost, životodárná pokora',
        radical: '水 (voda)',
        strokeCount: 4,
        etymology: 'Zobrazuje plynoucí meandrující řeku se čtyřmi kapkami vířící vody po stranách. V kaligrafii je symbolem naprosté volnosti a dynamické rovnováhy.',
        strokes: [
          // 1. Centrální svislý hák (Shùgōu 豎鉤) - páteř řeky
          {
            name: 'shù gōu (svislý hák dračí páteře)',
            baseWidth: 11.5,
            taper: 'tail',
            hasBristles: true,
            pts: [
              { x: 50, y: 12, w: 0.70 },
              { x: 52, y: 26, w: 1.20 },
              { x: 50, y: 52, w: 1.05 },
              { x: 48, y: 78, w: 1.30 },
              { x: 43, y: 84, w: 1.45 },
              { x: 34, y: 77, w: 0.45 }
            ]
          },
          // 2. Levý horní zalomený švih (Héngpiě 橫撇)
          {
            name: 'héng piě (levý vlnový záhyb)',
            baseWidth: 8.8,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 23, y: 36, w: 0.60 },
              { x: 33, y: 32, w: 1.10 },
              { x: 38, y: 35, w: 1.25 },
              { x: 29, y: 46, w: 0.95 },
              { x: 18, y: 55, w: 0.45 }
            ]
          },
          // 3. Levý spodní vzestupný švih (Tí 提)
          {
            name: 'tí (levá stříkající kapka)',
            baseWidth: 8.2,
            taper: 'tail',
            hasBristles: false,
            pts: [
              { x: 15, y: 75, w: 0.65 },
              { x: 25, y: 68, w: 1.15 },
              { x: 36, y: 58, w: 0.40 }
            ]
          },
          // 4. Pravý horní švih (Piě 撇)
          {
            name: 'piě (pravý vír)',
            baseWidth: 8.5,
            taper: 'tail',
            hasBristles: false,
            pts: [
              { x: 74, y: 31, w: 0.70 },
              { x: 67, y: 40, w: 1.15 },
              { x: 55, y: 48, w: 0.50 }
            ]
          },
          // 5. Pravý velký táhlý tlak (Nà 捺) - Bō (波 vlna)
          {
            name: 'nà (pravá rozlévající se vlna)',
            baseWidth: 12.8,
            taper: 'tail',
            hasBristles: true,
            pts: [
              { x: 52, y: 46, w: 0.75 },
              { x: 62, y: 58, w: 1.05 },
              { x: 74, y: 72, w: 1.45 },
              { x: 84, y: 78, w: 1.10 },
              { x: 92, y: 77, w: 0.35 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'dao-fa-zi-ran',
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
          // Hlava (Shǒu 首) - 1. Levá horní kapka
          {
            name: 'shǒu zuǒ diǎn (vnitřní oko)',
            baseWidth: 8.0,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 44, y: 15, w: 0.7 }, { x: 47, y: 22, w: 1.2 }, { x: 48, y: 27, w: 0.5 }]
          },
          // 2. Pravý horní švih
          {
            name: 'shǒu yòu piě (světelný paprsek)',
            baseWidth: 7.5,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 67, y: 14, w: 0.75 }, { x: 62, y: 21, w: 1.15 }, { x: 58, y: 26, w: 0.5 }]
          },
          // 3. Střešní nosník hlavy
          {
            name: 'shǒu héng (střešní luk)',
            baseWidth: 9.0,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 38, y: 30, w: 0.6 }, { x: 55, y: 28, w: 1.1 }, { x: 74, y: 31, w: 0.65 }]
          },
          // 4. Oko hlavy - levý svislý okraj
          {
            name: 'mù shù (oko - levý pilíř)',
            baseWidth: 7.8,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 45, y: 36, w: 0.7 }, { x: 44, y: 52, w: 1.1 }, { x: 43, y: 64, w: 0.55 }]
          },
          // 5. Oko hlavy - pravý zalomený okraj
          {
            name: 'mù zhé (oko - vnější zlom)',
            baseWidth: 8.5,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 45, y: 37, w: 0.8 }, { x: 64, y: 35, w: 0.95 }, { x: 73, y: 37, w: 1.2 }, { x: 71, y: 51, w: 1.0 }, { x: 69, y: 63, w: 0.55 }]
          },
          // 6. Vnitřní vodorovná linka oka
          {
            name: 'mù nèi héng (zornice)',
            baseWidth: 6.8,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 45, y: 46, w: 0.6 }, { x: 57, y: 45, w: 0.9 }, { x: 70, y: 47, w: 0.6 }]
          },
          // 7. Spodní vodorovná linka oka
          {
            name: 'mù dǐ héng (základ oka)',
            baseWidth: 6.8,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 44, y: 55, w: 0.6 }, { x: 57, y: 54, w: 0.9 }, { x: 70, y: 56, w: 0.6 }]
          },
          // Chůze (辶) - 8. Horní plující tečka
          {
            name: 'chuò diǎn (ranní hvězda poutníka)',
            baseWidth: 8.5,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 22, y: 22, w: 0.65 }, { x: 26, y: 27, w: 1.25 }, { x: 27, y: 33, w: 0.5 }]
          },
          // 9. Vlnovitý záhyb chůze (Héngzhézhépiě)
          {
            name: 'chuò zhé (kráčející krok)',
            baseWidth: 8.8,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 16, y: 38, w: 0.7 },
              { x: 26, y: 36, w: 1.1 },
              { x: 21, y: 46, w: 0.95 },
              { x: 28, y: 54, w: 1.2 },
              { x: 19, y: 62, w: 0.6 }
            ]
          },
          // 10. Velký nosný kočárový tah (Píngnà 平捺)
          {
            name: 'píng nà (nekonečná stezka vesmíru)',
            baseWidth: 14.5,
            taper: 'tail',
            hasBristles: true,
            pts: [
              { x: 15, y: 63, w: 0.65 },
              { x: 23, y: 74, w: 1.05 },
              { x: 44, y: 80, w: 1.15 },
              { x: 68, y: 84, w: 1.55 },
              { x: 86, y: 85, w: 1.10 },
              { x: 95, y: 83, w: 0.35 }
            ]
          }
        ]
      },
      {
        char: '法',
        pinyin: 'fǎ',
        tone: '3. klesavě-stoupavý tón',
        meaningCz: 'Řídit se, následovat princip, zákon přírody',
        radical: '氵 (tři kapky vody)',
        strokeCount: 8,
        etymology: 'Znak složený z vody (氵) a odcházet (去). Význam: to, co je spravedlivé a rovné jako klidná vodní hladina, která přirozeně plyne tam, kam ji vede sklon krajiny.',
        strokes: [
          // Tři kapky vody (氵)
          {
            name: 'sān diǎn shuǐ 1 (horní kapka)',
            baseWidth: 7.8,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 22, y: 22, w: 0.6 }, { x: 26, y: 28, w: 1.2 }, { x: 24, y: 34, w: 0.5 }]
          },
          {
            name: 'sān diǎn shuǐ 2 (střední kapka)',
            baseWidth: 7.5,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 19, y: 44, w: 0.6 }, { x: 23, y: 49, w: 1.15 }, { x: 22, y: 55, w: 0.5 }]
          },
          {
            name: 'sān diǎn shuǐ 3 (spodní vzestupná kapka Tí)',
            baseWidth: 8.2,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 16, y: 78, w: 0.7 }, { x: 23, y: 71, w: 1.15 }, { x: 31, y: 62, w: 0.4 }]
          },
          // Pravá strana: Qù (去) - Horní kříž
          {
            name: 'héng (horní vodorovná)',
            baseWidth: 8.8,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 42, y: 32, w: 0.6 }, { x: 60, y: 30, w: 1.05 }, { x: 78, y: 33, w: 0.65 }]
          },
          {
            name: 'shù (svislice zákona)',
            baseWidth: 9.0,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 60, y: 16, w: 0.75 }, { x: 59, y: 32, w: 1.15 }, { x: 58, y: 48, w: 0.6 }]
          },
          {
            name: 'cháng héng (středový most)',
            baseWidth: 10.2,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 36, y: 48, w: 0.6 }, { x: 60, y: 46, w: 1.1 }, { x: 86, y: 49, w: 0.65 }]
          },
          {
            name: 'piě zhé (spodní záhyb)',
            baseWidth: 8.5,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 54, y: 52, w: 0.9 }, { x: 44, y: 66, w: 1.15 }, { x: 64, y: 65, w: 0.95 }, { x: 80, y: 64, w: 0.6 }]
          },
          {
            name: 'diǎn (spodní pravá pečeť)',
            baseWidth: 9.0,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 68, y: 56, w: 0.7 }, { x: 74, y: 68, w: 1.25 }, { x: 76, y: 77, w: 0.5 }]
          }
        ]
      },
      {
        char: '自',
        pinyin: 'zì',
        tone: '4. klesavý tón',
        meaningCz: 'Sám, osobně, přirozeně, od počátku',
        radical: '自 (nos / já)',
        strokeCount: 6,
        etymology: 'Starověký piktogram lidského nosu. Když lidé v Asii ukazují na sebe („já sám“), tradičně ukazují prstem na špičku nosu.',
        strokes: [
          // 1. Horní malý švih (Piě)
          {
            name: 'piě (vrchol nosu)',
            baseWidth: 8.0,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 53, y: 15, w: 0.75 }, { x: 47, y: 22, w: 1.15 }, { x: 42, y: 26, w: 0.5 }]
          },
          // 2. Levý svislý obrys
          {
            name: 'shù (levý obrys)',
            baseWidth: 8.5,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 36, y: 28, w: 0.7 }, { x: 35, y: 54, w: 1.1 }, { x: 33, y: 80, w: 0.55 }]
          },
          // 3. Pravý zalomený obrys
          {
            name: 'héng zhé (pravý nosní zlom)',
            baseWidth: 9.2,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 36, y: 29, w: 0.8 }, { x: 56, y: 27, w: 0.95 }, { x: 68, y: 29, w: 1.25 }, { x: 66, y: 55, w: 1.05 }, { x: 64, y: 80, w: 0.55 }]
          },
          // 4. První vnitřní přepážka
          {
            name: 'nèi héng 1 (horní přepážka)',
            baseWidth: 7.0,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 36, y: 46, w: 0.6 }, { x: 50, y: 45, w: 0.9 }, { x: 65, y: 46, w: 0.6 }]
          },
          // 5. Druhá vnitřní přepážka
          {
            name: 'nèi héng 2 (dolní přepážka)',
            baseWidth: 7.0,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 35, y: 63, w: 0.6 }, { x: 50, y: 62, w: 0.9 }, { x: 65, y: 63, w: 0.6 }]
          },
          // 6. Spodní uzávěr
          {
            name: 'dǐ héng (základní uzávěr)',
            baseWidth: 7.8,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 34, y: 80, w: 0.65 }, { x: 50, y: 79, w: 1.0 }, { x: 65, y: 80, w: 0.65 }]
          }
        ]
      },
      {
        char: '然',
        pinyin: 'rán',
        tone: '2. stoupavý tón',
        meaningCz: 'Takový, tak jest, přirozeně rozsvícený',
        radical: '灬 (oheň)',
        strokeCount: 12,
        etymology: 'Zobrazuje maso (月/肉) psa (犬) opékané na posvátném ohni (灬). Význam se přenesl na to, co se přirozeně děje a prosvětluje, jako hořící plamen.',
        strokes: [
          // Horní polovina (Měsíc + Pes)
          {
            name: 'yuè piě (měsíční levý oblouk)',
            baseWidth: 8.0,
            taper: 'tail',
            hasBristles: true,
            pts: [{ x: 34, y: 16, w: 0.75 }, { x: 31, y: 34, w: 1.1 }, { x: 26, y: 52, w: 0.5 }]
          },
          {
            name: 'yuè zhé (měsíční střecha)',
            baseWidth: 8.5,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 34, y: 17, w: 0.8 }, { x: 46, y: 15, w: 0.95 }, { x: 49, y: 26, w: 1.05 }, { x: 47, y: 48, w: 0.55 }]
          },
          {
            name: 'quǎn héng (rameno psa)',
            baseWidth: 7.8,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 56, y: 22, w: 0.65 }, { x: 68, y: 20, w: 1.05 }, { x: 80, y: 23, w: 0.6 }]
          },
          {
            name: 'quǎn piě (švih psa)',
            baseWidth: 8.5,
            taper: 'tail',
            hasBristles: true,
            pts: [{ x: 68, y: 22, w: 1.1 }, { x: 60, y: 36, w: 1.0 }, { x: 52, y: 50, w: 0.5 }]
          },
          {
            name: 'quǎn nà (rozběh psa)',
            baseWidth: 9.5,
            taper: 'tail',
            hasBristles: true,
            pts: [{ x: 66, y: 26, w: 0.7 }, { x: 74, y: 38, w: 1.2 }, { x: 85, y: 48, w: 0.5 }]
          },
          // Spodní čtyři kapky ohně (灬 Sìdiǎnhuǒ)
          {
            name: 'huǒ diǎn 1 (první jiskra)',
            baseWidth: 8.0,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 20, y: 66, w: 0.7 }, { x: 18, y: 77, w: 1.25 }, { x: 16, y: 83, w: 0.45 }]
          },
          {
            name: 'huǒ diǎn 2 (druhá jiskra)',
            baseWidth: 7.8,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 38, y: 68, w: 0.65 }, { x: 40, y: 78, w: 1.2 }, { x: 41, y: 83, w: 0.5 }]
          },
          {
            name: 'huǒ diǎn 3 (třetí jiskra)',
            baseWidth: 7.8,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 60, y: 68, w: 0.65 }, { x: 62, y: 78, w: 1.2 }, { x: 63, y: 83, w: 0.5 }]
          },
          {
            name: 'huǒ diǎn 4 (velký plamen vpravo)',
            baseWidth: 9.0,
            taper: 'tail',
            hasBristles: true,
            pts: [{ x: 80, y: 66, w: 0.7 }, { x: 84, y: 77, w: 1.35 }, { x: 86, y: 84, w: 0.55 }]
          }
        ]
      }
    ]
  },
  {
    id: 'ichigo-ichie',
    title: '一期一会',
    pinyin: 'Yī qī yī huì (japonsky: Ichigo ichie)',
    source: 'Zenový čajový mistr Sen no Rikyū (1522–1591) & Ii Naosuke',
    originEra: 'Japonsko / Východní Asie · Období Azuči-Momojama',
    scriptStyle: 'Zenový kaligrafický styl (Bokuseki 墨跡)',
    summaryCz: 'Jediné setkání, jediný neopakovatelný okamžik',
    translationCz: 'Každé lidské setkání a každý jediný okamžik v životě se odehrává pouze jednou a nikdy v celých dějinách vesmíru se nebude přesně opakovat. Přistupujme ke každému čaji, pohledu a rozhovoru se vší úctou a plnou přítomností.',
    translationEn: 'One time, one meeting. Treasure every unrepeatable encounter, for it occurs but once in a lifetime and can never recur in identical form.',
    philosophyCz: 'Srdce zenové estetiky: Pomíjivost (Mujō) není důvodem k zármutku, nýbrž pramenem nesmírné hloubky a krásy. Vědomí, že tento okamžik je jediný, probouzí nejčistší pozornost.',
    quoteLines: [
      { hanzi: '一期一会', pinyin: 'Ichigo ichie', cz: 'Jedno životní období, jediné posvátné setkání.' },
      { hanzi: '此会不再', pinyin: 'Kono e futatabi sezu', cz: 'Toto setkání se v této podobě již nikdy nevrátí.' }
    ],
    characters: [
      {
        char: '一',
        pinyin: 'yī (japonsky: ichi)',
        tone: '1. vysoký rovný tón',
        meaningCz: 'Jedna, jednota, veškerenstvo v jediném bodě',
        radical: '一 (jeden)',
        strokeCount: 1,
        etymology: 'Základní tah a matka veškeré asijské kaligrafie. Nemá ani jediný rovný kousek: začíná jako hlavička bource morušového (蚕头 Cántóu), stoupá jako luk a končí vlaštovčím ocasem (燕尾 Yànwěi).',
        strokes: [
          {
            name: 'cántóu yànwěi (bource hlava, vlaštovčí ocas)',
            baseWidth: 13.5,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 14, y: 52, w: 0.60 },
              { x: 22, y: 47, w: 1.25 },
              { x: 42, y: 45, w: 0.90 },
              { x: 62, y: 46, w: 1.05 },
              { x: 78, y: 53, w: 1.45 },
              { x: 88, y: 50, w: 0.35 }
            ]
          }
        ]
      },
      {
        char: '期',
        pinyin: 'qī (japonsky: go)',
        tone: '1. vysoký tón',
        meaningCz: 'Životní období, vymezený čas, lidský osud',
        radical: '月 (měsíc / čas)',
        strokeCount: 12,
        etymology: 'Spojení koše (其) a měsíčního cyklu (月). Znázorňuje neúprosný, leč nádherný běh času, který odměřuje fáze lidského života na Zemi.',
        strokes: [
          // 其 levá polovina
          {
            name: 'qí héng (horní vlnka)',
            baseWidth: 7.8,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 18, y: 25, w: 0.65 }, { x: 36, y: 23, w: 1.1 }, { x: 52, y: 26, w: 0.65 }]
          },
          {
            name: 'qí zuǒ shù (levý kůl)',
            baseWidth: 8.5,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 28, y: 15, w: 0.7 }, { x: 27, y: 38, w: 1.15 }, { x: 25, y: 62, w: 0.55 }]
          },
          {
            name: 'qí yòu shù (pravý kůl)',
            baseWidth: 8.5,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 42, y: 14, w: 0.75 }, { x: 43, y: 38, w: 1.15 }, { x: 41, y: 62, w: 0.55 }]
          },
          {
            name: 'qí zhōng héng (středový most)',
            baseWidth: 7.5,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 18, y: 39, w: 0.65 }, { x: 35, y: 38, w: 1.0 }, { x: 50, y: 40, w: 0.6 }]
          },
          {
            name: 'qí cháng héng (spodní široký nosník)',
            baseWidth: 9.5,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 12, y: 52, w: 0.6 }, { x: 34, y: 50, w: 1.15 }, { x: 55, y: 53, w: 0.65 }]
          },
          {
            name: 'qí bā zuǒ (levá nožka)',
            baseWidth: 7.8,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 28, y: 62, w: 0.8 }, { x: 22, y: 74, w: 1.1 }, { x: 16, y: 82, w: 0.45 }]
          },
          {
            name: 'qí bā yòu (pravá nožka)',
            baseWidth: 7.8,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 40, y: 62, w: 0.8 }, { x: 46, y: 74, w: 1.15 }, { x: 50, y: 81, w: 0.45 }]
          },
          // 月 pravá polovina
          {
            name: 'yuè piě (měsíční oblouk)',
            baseWidth: 8.5,
            taper: 'tail',
            hasBristles: true,
            pts: [{ x: 64, y: 18, w: 0.75 }, { x: 63, y: 46, w: 1.15 }, { x: 59, y: 84, w: 0.5 }]
          },
          {
            name: 'yuè zhé gōu (měsíční zlom s hákem)',
            baseWidth: 9.5,
            taper: 'tail',
            hasBristles: true,
            pts: [
              { x: 64, y: 19, w: 0.8 },
              { x: 78, y: 17, w: 1.0 },
              { x: 85, y: 19, w: 1.25 },
              { x: 84, y: 52, w: 1.05 },
              { x: 81, y: 83, w: 1.35 },
              { x: 72, y: 78, w: 0.45 }
            ]
          },
          {
            name: 'yuè nèi héng 1 (první měsíční paprsek)',
            baseWidth: 6.8,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 64, y: 38, w: 0.6 }, { x: 74, y: 37, w: 0.9 }, { x: 83, y: 39, w: 0.6 }]
          },
          {
            name: 'yuè nèi héng 2 (druhý měsíční paprsek)',
            baseWidth: 6.8,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 63, y: 56, w: 0.6 }, { x: 73, y: 55, w: 0.9 }, { x: 82, y: 57, w: 0.6 }]
          }
        ]
      },
      {
        char: '会',
        pinyin: 'huì (japonsky: e)',
        tone: '4. klesavý tón',
        meaningCz: 'Setkání, shromáždění duší, porozumění',
        radical: '人 (člověk)',
        strokeCount: 6,
        etymology: 'Zobrazuje střechu domu či pokličku (人/亼), pod níž se lidé scházejí u společného stolu, aby se sjednotili v porozumění a sdíleli čaj.',
        strokes: [
          // 1. Levý velký střešní švih (Piě)
          {
            name: 'rén piě (střešní levé křídlo)',
            baseWidth: 11.0,
            taper: 'tail',
            hasBristles: true,
            pts: [
              { x: 50, y: 14, w: 0.75 },
              { x: 42, y: 24, w: 1.25 },
              { x: 26, y: 40, w: 1.05 },
              { x: 12, y: 53, w: 0.40 }
            ]
          },
          // 2. Pravý velký střešní tlak (Nà)
          {
            name: 'rén nà (střešní pravé křídlo)',
            baseWidth: 12.5,
            taper: 'tail',
            hasBristles: true,
            pts: [
              { x: 48, y: 22, w: 0.80 },
              { x: 60, y: 32, w: 1.20 },
              { x: 76, y: 46, w: 1.45 },
              { x: 90, y: 52, w: 0.35 }
            ]
          },
          // 3. Střední vodorovná linka
          {
            name: 'zhōng héng (stůl setkání)',
            baseWidth: 8.5,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 34, y: 54, w: 0.65 }, { x: 50, y: 52, w: 1.05 }, { x: 66, y: 55, w: 0.65 }]
          },
          // 4. Zalomený spodek
          {
            name: 'piě zhé (dolní záhyb)',
            baseWidth: 8.8,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 44, y: 60, w: 0.8 },
              { x: 38, y: 72, w: 1.15 },
              { x: 58, y: 70, w: 1.0 },
              { x: 70, y: 69, w: 0.6 }
            ]
          },
          // 5. Spodní pravá tečka (pečeť okamžiku)
          {
            name: 'diǎn (pečeť přítomnosti)',
            baseWidth: 9.5,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 58, y: 64, w: 0.75 }, { x: 66, y: 74, w: 1.35 }, { x: 70, y: 82, w: 0.5 }]
          }
        ]
      }
    ]
  },
  {
    id: 'hunminjeongeum',
    title: '訓民正音',
    pinyin: 'Hunminjeongeum (훈민정음)',
    source: 'Král Sedžong Veliký (1446 n. l.) · Úsvit korejského písma Hangul',
    originEra: 'Korejské království Čoson (Joseon)',
    scriptStyle: 'Klasická korejská štětcová kaligrafie (Seoye 書藝)',
    summaryCz: 'Správné hlásky pro poučení lidu',
    translationCz: 'Jazyk naší země se liší od jazyka čínského a běžný lid nemůže vyjádřit svá hluboká přání. S lítostí nad tímto stavem jsem stvořil dvacet osm nových písmen, aby se je každý mohl snadno naučit a denně je s radostí užívat.',
    translationEn: 'The sounds of our language differ from those of China and cannot be expressed in their characters. Pained by this, I have created twenty-eight new letters, desiring that every person may learn them easily and use them daily with delight.',
    philosophyCz: 'Jeden z nejvíce humanistických a lingvisticky dokonalých činů ve světové historii. Tvary hlásek vznikly podle tvaru lidských mluvidel (jazyka, rtů, krku) a principů Nebe (•), Země (ㅡ) a Člověka (ㅣ).',
    quoteLines: [
      { hanzi: '國之語音', pinyin: 'Naratmalssami', cz: 'Hlas a řeč naší země' },
      { hanzi: '異乎中國', pinyin: 'Dyun-gwig-e dal-a', cz: 'jest jedinečná a odlišná od cizích říší.' },
      { hanzi: '故愚民有所欲言', pinyin: 'Iren jechalo', cz: 'Proto stvořil jsem písmo pro lid,' },
      { hanzi: '使人人易習', pinyin: 'Swipge igyeo', cz: 'aby každý mohl svobodně promluvit.' }
    ],
    characters: [
      {
        char: '訓',
        pinyin: 'xùn (korejsky: hun)',
        tone: '4. tón / korejské hanja čtení',
        meaningCz: 'Poučovat s láskou, vést k moudrosti',
        radical: '言 (slovo / řeč)',
        strokeCount: 10,
        etymology: 'Znak složený ze slov (言) a plynoucí řeky (川). Význam: učit tak přirozeně a srozumitelně, jako řeka plyne svým korytem.',
        strokes: [
          // 言 levá strana: Horní tečka
          {
            name: 'yán diǎn (slovo pravdy)',
            baseWidth: 8.5,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 26, y: 16, w: 0.7 }, { x: 30, y: 22, w: 1.25 }, { x: 29, y: 28, w: 0.5 }]
          },
          // 4 vodorovné linky slova
          {
            name: 'yán héng 1 (první dech)',
            baseWidth: 9.0,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 14, y: 32, w: 0.6 }, { x: 28, y: 30, w: 1.1 }, { x: 42, y: 33, w: 0.65 }]
          },
          {
            name: 'yán héng 2',
            baseWidth: 7.0,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 19, y: 41, w: 0.6 }, { x: 28, y: 40, w: 0.95 }, { x: 38, y: 42, w: 0.6 }]
          },
          {
            name: 'yán héng 3',
            baseWidth: 7.0,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 19, y: 50, w: 0.6 }, { x: 28, y: 49, w: 0.95 }, { x: 38, y: 51, w: 0.6 }]
          },
          // Ústní schránka 言
          {
            name: 'yán kǒu (ústa mluvícího)',
            baseWidth: 7.8,
            taper: 'both',
            hasBristles: true,
            pts: [
              { x: 18, y: 61, w: 0.7 },
              { x: 17, y: 76, w: 1.05 },
              { x: 37, y: 74, w: 0.9 },
              { x: 38, y: 61, w: 0.8 },
              { x: 18, y: 62, w: 0.6 }
            ]
          },
          // 川 pravá strana (tři proudy řeky)
          {
            name: 'chuān 1 (levý proud řeky)',
            baseWidth: 8.5,
            taper: 'tail',
            hasBristles: true,
            pts: [{ x: 53, y: 22, w: 0.75 }, { x: 51, y: 46, w: 1.15 }, { x: 46, y: 72, w: 0.5 }]
          },
          {
            name: 'chuān 2 (střední proud řeky)',
            baseWidth: 8.0,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 67, y: 28, w: 0.75 }, { x: 67, y: 48, w: 1.1 }, { x: 66, y: 66, w: 0.5 }]
          },
          {
            name: 'chuān 3 (hlavní hluboký proud řeky)',
            baseWidth: 10.5,
            taper: 'tail',
            hasBristles: true,
            pts: [{ x: 84, y: 16, w: 0.8 }, { x: 85, y: 48, w: 1.25 }, { x: 83, y: 84, w: 0.45 }]
          }
        ]
      },
      {
        char: '音',
        pinyin: 'yīn (korejsky: eum)',
        tone: '1. tón / korejské hanja čtení',
        meaningCz: 'Zvuk, čistý tón, melodie hlasu lidu',
        radical: '音 (zvuk / tón)',
        strokeCount: 9,
        etymology: 'Zobrazuje ústa (言) s kapkou sladkého tónu na rtech (一). Původně značí zpěv a vibraci hlasu, který vychází přímo z lidského srdce.',
        strokes: [
          // 立 horní část: kapka
          {
            name: 'lì diǎn (vrchol tónu)',
            baseWidth: 8.5,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 50, y: 14, w: 0.7 }, { x: 51, y: 22, w: 1.25 }, { x: 49, y: 27, w: 0.5 }]
          },
          {
            name: 'lì héng (střecha zvuku)',
            baseWidth: 9.0,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 28, y: 30, w: 0.65 }, { x: 50, y: 28, w: 1.1 }, { x: 72, y: 31, w: 0.65 }]
          },
          {
            name: 'lì zuǒ diǎn (levý paprsek)',
            baseWidth: 7.8,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 38, y: 34, w: 0.7 }, { x: 35, y: 44, w: 1.15 }, { x: 33, y: 49, w: 0.5 }]
          },
          {
            name: 'lì yòu piě (pravý paprsek)',
            baseWidth: 7.8,
            taper: 'tail',
            hasBristles: false,
            pts: [{ x: 62, y: 34, w: 0.75 }, { x: 65, y: 44, w: 1.15 }, { x: 67, y: 49, w: 0.5 }]
          },
          {
            name: 'lì cháng héng (rezonanční deska)',
            baseWidth: 10.5,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 16, y: 52, w: 0.6 }, { x: 50, y: 49, w: 1.2 }, { x: 84, y: 53, w: 0.6 }]
          },
          // 日 spodní slunce/rezonátor
          {
            name: 'rì zuǒ shù (sluneční levý pilíř)',
            baseWidth: 8.0,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 32, y: 60, w: 0.7 }, { x: 31, y: 74, w: 1.1 }, { x: 29, y: 86, w: 0.55 }]
          },
          {
            name: 'rì zhé (sluneční zlom)',
            baseWidth: 9.0,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 32, y: 61, w: 0.8 }, { x: 52, y: 59, w: 0.95 }, { x: 70, y: 61, w: 1.25 }, { x: 68, y: 75, w: 1.05 }, { x: 66, y: 86, w: 0.55 }]
          },
          {
            name: 'rì zhōng héng (sluneční střed)',
            baseWidth: 7.2,
            taper: 'both',
            hasBristles: false,
            pts: [{ x: 32, y: 73, w: 0.6 }, { x: 50, y: 72, w: 0.95 }, { x: 67, y: 74, w: 0.6 }]
          },
          {
            name: 'rì dǐ héng (sluneční základ)',
            baseWidth: 7.8,
            taper: 'both',
            hasBristles: true,
            pts: [{ x: 30, y: 86, w: 0.65 }, { x: 50, y: 85, w: 1.0 }, { x: 68, y: 86, w: 0.65 }]
          }
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
    description: 'Tradiční borovicová a lampová čerň s hedvábným leskem',
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
