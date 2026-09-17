// ═══════════════════════════════════════════════════════
// CARDS GENERATOR (NUMBER CARDS & LESSON 4 CARDS)
// ═══════════════════════════════════════════════════════

(function() {
  // 1. CISLA: zakladni cislice
  // ========== CISLA: zakladni cislice ==========
  (function() {
    var numberData = [
      {"hanzi":"零","pinyin":"líng","czech":"nula (0)","decomp":"雨 (dešť) + 令 (příkaz) — kapky deště = nula"},
      {"hanzi":"一","pinyin":"yī","czech":"jedna (1)","decomp":"Jedna vodorovná čára = 1"},
      {"hanzi":"二","pinyin":"èr","czech":"dvě (2)","decomp":"Dvě vodorovné čáry = 2"},
      {"hanzi":"三","pinyin":"sān","czech":"tři (3)","decomp":"Tři vodorovné čáry = 3"},
      {"hanzi":"四","pinyin":"sì","czech":"čtyři (4)","decomp":"囗 (rámeček) + 儿 (nohy)"},
      {"hanzi":"五","pinyin":"wǔ","czech":"pět (5)","decomp":"X tvar = původně 5 prstů"},
      {"hanzi":"六","pinyin":"liù","czech":"šest (6)","decomp":"亠 + 八 — střecha nad osmi"},
      {"hanzi":"七","pinyin":"qī","czech":"sedm (7)","decomp":"Původně tvar nože — řez na 7 dílů"},
      {"hanzi":"八","pinyin":"bā","czech":"osm (8)","decomp":"Dvě čáry se rozcházejí = rozdělení"},
      {"hanzi":"九","pinyin":"jiǔ","czech":"devět (9)","decomp":"乙 + háček — původně symbol ruky"},
      {"hanzi":"十","pinyin":"shí","czech":"deset (10)","decomp":"Kříž: vodorovná + svislá čára = dokonalost"},
      {"hanzi":"百","pinyin":"bǎi","czech":"sto (100)","decomp":"一 (jedna) + 白 (bílý) — sto jak sněhoblé"},
      {"hanzi":"千","pinyin":"qiān","czech":"tisíc (1 000)","decomp":"丕 + 十 — deset znásobených"},
      {"hanzi":"万","pinyin":"wàn","czech":"deset tisíc (10 000)","decomp":"Původně scorpion — nescítané množství"},
      {"hanzi":"亿","pinyin":"yì","czech":"sto milionů","decomp":"亿 (clověk) + 意 — nepřebné množství"}
    ];
    var container = document.getElementById('cardsContainer');
    if (!container || document.getElementById('card-num-1')) return;
    var total = numberData.length;
    var fragment = document.createDocumentFragment();

    var secHeader = document.createElement('div');
    secHeader.className = 'section-divider-title';
    secHeader.id = 'section-num';
    secHeader.dataset.lesson = 'num';
    secHeader.innerHTML =
      '<div class="section-divider-left">' +
        '<span class="section-divider-icon">🔢</span>' +
        '<div class="section-divider-text">' +
          '<h2 class="section-divider-h2">Čísla a číslice (0 – 100 000 000)</h2>' +
          '<span class="section-divider-sub">Základní číslice, poziční systém a velké číselné řády (百, 千, 万, 亿)</span>' +
        '</div>' +
      '</div>' +
      '<span class="section-divider-badge">15 karet</span>';
    fragment.appendChild(secHeader);

    for (var i = 0; i < numberData.length; i++) {
      var item = numberData[i];
      var idx = i + 1;
      var card = document.createElement('div');
      card.className = 'course-card num';
      card.dataset.lesson = 'num';
      card.id = 'card-num-' + idx;
      card.style.borderLeft = '5px solid #0d9488';
      card.innerHTML =
        '<div class="left-panel">' +
          '<span class="card-badge">Cisla &bull; #' + String(idx).padStart(2,'0') + '</span>' +
          '<div class="hanzi-text" style="color:#0f766e;font-size:72px;">' + item.hanzi + '</div>' +
          '<div class="pinyin-text pinyin-target" style="color:#14b8a6;font-size:22px;">' + item.pinyin + '</div>' +
          '<div class="czech-text czech-target">' + item.czech + '</div>' +
          '<span style="display:inline-block;background:#ccfbf1;color:#0f766e;border:1px solid #99f6e4;' +
          'font-size:10px;font-weight:800;padding:2px 6px;border-radius:4px;margin-top:4px;">cislice</span>' +
        '</div>' +
        '<div class="right-panel">' +
          '<div class="panel-header">' +
            '<span style="font-weight:700;font-size:14px;color:#334155;">Rozbor znaku &amp; propojeni</span>' +
            '<span class="tracker-badge">Cisla &bull; ' + idx + ' / ' + total + '</span>' +
          '</div>' +
          '<div class="section-label new" style="font-size:11px;font-weight:700;color:#0d9488;' +
          'text-transform:uppercase;letter-spacing:0.5px;margin:10px 0 6px;">Dekompozice znaku</div>' +
          '<div class="char-grid">' +
            '<div class="char-item new-item" style="border:2px solid #0d9488;background:linear-gradient(180deg,#fff 0%,#f0fdfa 100%);">' +
              '<div class="char-symbol" style="color:#0f766e;">' + item.hanzi + '</div>' +
              '<div class="char-desc">' +
                '<div class="char-pinyin" style="color:#14b8a6;">' + item.pinyin + '</div>' +
                '<div class="char-meaning">' + item.czech + '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div style="margin-top:12px;padding:10px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4;">' +
            '<div style="font-size:10px;font-weight:700;color:#0d9488;text-transform:uppercase;margin-bottom:4px;">Pametova pomucka</div>' +
            '<div style="font-size:12px;color:#334155;">' + item.decomp + '</div>' +
          '</div>' +
        '</div>';
      fragment.appendChild(card);
    }
    container.insertBefore(fragment, container.firstElementChild);
  })();

  // 2. LEKCE 4: Pridavna jmena a spojky
  // ========== LEKCE 4: Přídavná jména & Spojky (200 karet) ==========
  const lesson4Data = [
    // --- ADJECTIVES: Základní vlastnosti ---
    {"hanzi":"新","pinyin":"xīn","czech":"nový","type":"adjective"},
    {"hanzi":"旧","pinyin":"jiù","czech":"starý","type":"adjective"},
    {"hanzi":"好","pinyin":"hǎo","czech":"dobrý","type":"adjective"},
    {"hanzi":"坏","pinyin":"huài","czech":"špatný","type":"adjective"},
    {"hanzi":"大","pinyin":"dà","czech":"velký","type":"adjective"},
    {"hanzi":"小","pinyin":"xiǎo","czech":"malý","type":"adjective"},
    {"hanzi":"多","pinyin":"duō","czech":"hodně, mnoho","type":"adjective"},
    {"hanzi":"少","pinyin":"shǎo","czech":"málo","type":"adjective"},
    {"hanzi":"长","pinyin":"cháng","czech":"dlouhý","type":"adjective"},
    {"hanzi":"短","pinyin":"duǎn","czech":"krátký","type":"adjective"},
    {"hanzi":"高","pinyin":"gāo","czech":"vysoký","type":"adjective"},
    {"hanzi":"低","pinyin":"dī","czech":"nízký","type":"adjective"},
    {"hanzi":"胖","pinyin":"pàng","czech":"tučný, tlustý","type":"adjective"},
    {"hanzi":"瘦","pinyin":"shòu","czech":"hubený","type":"adjective"},
    {"hanzi":"宽","pinyin":"kuān","czech":"široký","type":"adjective"},
    {"hanzi":"窄","pinyin":"zhǎi","czech":"úzký","type":"adjective"},
    {"hanzi":"厚","pinyin":"hòu","czech":"tlustý (věc)","type":"adjective"},
    {"hanzi":"薄","pinyin":"báo","czech":"tenký (věc)","type":"adjective"},
    {"hanzi":"深","pinyin":"shēn","czech":"hluboký","type":"adjective"},
    {"hanzi":"浅","pinyin":"qiǎn","czech":"mělký","type":"adjective"},
    // --- ADJECTIVES: Rychlost & Síla ---
    {"hanzi":"快","pinyin":"kuài","czech":"rychlý","type":"adjective"},
    {"hanzi":"慢","pinyin":"màn","czech":"pomalý","type":"adjective"},
    {"hanzi":"强","pinyin":"qiáng","czech":"silný","type":"adjective"},
    {"hanzi":"弱","pinyin":"ruò","czech":"slabý","type":"adjective"},
    {"hanzi":"重","pinyin":"zhòng","czech":"těžký","type":"adjective"},
    {"hanzi":"轻","pinyin":"qīng","czech":"lehký","type":"adjective"},
    {"hanzi":"硬","pinyin":"yìng","czech":"tvrdý","type":"adjective"},
    {"hanzi":"软","pinyin":"ruǎn","czech":"měkký","type":"adjective"},
    {"hanzi":"紧","pinyin":"jǐn","czech":"těsný, napjatý","type":"adjective"},
    {"hanzi":"松","pinyin":"sōng","czech":"volný, uvolněný","type":"adjective"},
    // --- ADJECTIVES: Čistota & Vzhled ---
    {"hanzi":"干净","pinyin":"gānjìng","czech":"čistý","type":"adjective"},
    {"hanzi":"脏","pinyin":"zāng","czech":"špinavý","type":"adjective"},
    {"hanzi":"漂亮","pinyin":"piàoliang","czech":"krásný","type":"adjective"},
    {"hanzi":"丑","pinyin":"chǒu","czech":"ošklivý","type":"adjective"},
    {"hanzi":"帅","pinyin":"shuài","czech":"přitažlivý","type":"adjective"},
    {"hanzi":"可爱","pinyin":"kě'ài","czech":"roztomilý","type":"adjective"},
    {"hanzi":"整洁","pinyin":"zhěngjié","czech":"úhledný","type":"adjective"},
    {"hanzi":"凌乱","pinyin":"língluàn","czech":"nepořádný","type":"adjective"},
    {"hanzi":"优雅","pinyin":"yōuyǎ","czech":"elegantní","type":"adjective"},
    {"hanzi":"朴素","pinyin":"pǔsù","czech":"skromný, prostý","type":"adjective"},
    // --- ADJECTIVES: Inteligence & Charakter ---
    {"hanzi":"聪明","pinyin":"cōngmíng","czech":"chytrý","type":"adjective"},
    {"hanzi":"笨","pinyin":"bèn","czech":"hloupý","type":"adjective"},
    {"hanzi":"友好","pinyin":"yǒuhǎo","czech":"přátelský","type":"adjective"},
    {"hanzi":"冷漠","pinyin":"lěngmò","czech":"lhostejný","type":"adjective"},
    {"hanzi":"勇敢","pinyin":"yǒnggǎn","czech":"statečný","type":"adjective"},
    {"hanzi":"胆小","pinyin":"dǎnxiǎo","czech":"zbabělý","type":"adjective"},
    {"hanzi":"懒惰","pinyin":"lǎnduò","czech":"líný","type":"adjective"},
    {"hanzi":"勤劳","pinyin":"qínláo","czech":"pilný","type":"adjective"},
    {"hanzi":"诚实","pinyin":"chéngshí","czech":"čestný","type":"adjective"},
    {"hanzi":"虚伪","pinyin":"xūwèi","czech":"pokrytecký","type":"adjective"},
    {"hanzi":"严肃","pinyin":"yánsù","czech":"vážný","type":"adjective"},
    {"hanzi":"幽默","pinyin":"yōumò","czech":"humorný","type":"adjective"},
    {"hanzi":"耐心","pinyin":"nàixīn","czech":"trpělivý","type":"adjective"},
    {"hanzi":"急躁","pinyin":"jízào","czech":"netrpělivý","type":"adjective"},
    {"hanzi":"可靠","pinyin":"kěkào","czech":"spolehlivý","type":"adjective"},
    {"hanzi":"自私","pinyin":"zìsī","czech":"sobecký","type":"adjective"},
    // --- ADJECTIVES: Emoce & Nálada ---
    {"hanzi":"高兴","pinyin":"gāoxìng","czech":"šťastný, radostný","type":"adjective"},
    {"hanzi":"难过","pinyin":"nánguò","czech":"smutný","type":"adjective"},
    {"hanzi":"生气","pinyin":"shēngqì","czech":"rozzlobený","type":"adjective"},
    {"hanzi":"平静","pinyin":"píngjìng","czech":"klidný","type":"adjective"},
    {"hanzi":"害怕","pinyin":"hàipà","czech":"vystrašený","type":"adjective"},
    {"hanzi":"惊讶","pinyin":"jīngyà","czech":"překvapený","type":"adjective"},
    {"hanzi":"失望","pinyin":"shīwàng","czech":"zklamaný","type":"adjective"},
    {"hanzi":"满意","pinyin":"mǎnyì","czech":"spokojený","type":"adjective"},
    {"hanzi":"担心","pinyin":"dānxīn","czech":"znepokojený","type":"adjective"},
    {"hanzi":"轻松","pinyin":"qīngsōng","czech":"uvolněný","type":"adjective"},
    {"hanzi":"困惑","pinyin":"kùnhuò","czech":"zmatený","type":"adjective"},
    {"hanzi":"兴奋","pinyin":"xīngfèn","czech":"nadšený","type":"adjective"},
    {"hanzi":"紧张","pinyin":"jǐnzhāng","czech":"nervózní","type":"adjective"},
    {"hanzi":"开心","pinyin":"kāixīn","czech":"veselý","type":"adjective"},
    {"hanzi":"伤心","pinyin":"shāngxīn","czech":"zarmoucený","type":"adjective"},
    {"hanzi":"羡慕","pinyin":"xiànmù","czech":"záviděný","type":"adjective"},
    // --- ADJECTIVES: Teplota & Počasí ---
    {"hanzi":"热","pinyin":"rè","czech":"horký","type":"adjective"},
    {"hanzi":"冷","pinyin":"lěng","czech":"studený","type":"adjective"},
    {"hanzi":"温暖","pinyin":"wēnnuǎn","czech":"teplý","type":"adjective"},
    {"hanzi":"凉爽","pinyin":"liángshuǎng","czech":"chladivý","type":"adjective"},
    {"hanzi":"干燥","pinyin":"gānzào","czech":"suchý","type":"adjective"},
    {"hanzi":"潮湿","pinyin":"cháoshī","czech":"vlhký","type":"adjective"},
    {"hanzi":"闷热","pinyin":"mēnrè","czech":"dusný","type":"adjective"},
    {"hanzi":"晴朗","pinyin":"qínglǎng","czech":"jasný (počasí)","type":"adjective"},
    {"hanzi":"阴暗","pinyin":"yīnàn","czech":"pochmurný","type":"adjective"},
    {"hanzi":"寒冷","pinyin":"hánlěng","czech":"mrazivý","type":"adjective"},
    // --- ADJECTIVES: Chuť & Jídlo ---
    {"hanzi":"甜","pinyin":"tián","czech":"sladký","type":"adjective"},
    {"hanzi":"苦","pinyin":"kǔ","czech":"hořký","type":"adjective"},
    {"hanzi":"辣","pinyin":"là","czech":"pálivý","type":"adjective"},
    {"hanzi":"咸","pinyin":"xián","czech":"slaný","type":"adjective"},
    {"hanzi":"酸","pinyin":"suān","czech":"kyselý","type":"adjective"},
    {"hanzi":"淡","pinyin":"dàn","czech":"mdlý, bez chuti","type":"adjective"},
    {"hanzi":"好吃","pinyin":"hǎochī","czech":"chutný","type":"adjective"},
    {"hanzi":"难吃","pinyin":"nánchī","czech":"nechutný","type":"adjective"},
    {"hanzi":"新鲜","pinyin":"xīnxiān","czech":"čerstvý","type":"adjective"},
    {"hanzi":"腐烂","pinyin":"fǔlàn","czech":"shnilý","type":"adjective"},
    // --- ADJECTIVES: Světlo & Barvy ---
    {"hanzi":"明亮","pinyin":"míngliàng","czech":"jasný, světlý","type":"adjective"},
    {"hanzi":"暗","pinyin":"àn","czech":"tmavý","type":"adjective"},
    {"hanzi":"鲜艳","pinyin":"xiānyàn","czech":"zářivý (barvy)","type":"adjective"},
    {"hanzi":"暗淡","pinyin":"àndàn","czech":"vybledlý","type":"adjective"},
    {"hanzi":"透明","pinyin":"tòumíng","czech":"průhledný","type":"adjective"},
    {"hanzi":"不透明","pinyin":"bù tòumíng","czech":"neprůhledný","type":"adjective"},
    // --- ADJECTIVES: Sociální & Situace ---
    {"hanzi":"忙","pinyin":"máng","czech":"zaneprázdněný","type":"adjective"},
    {"hanzi":"闲","pinyin":"xián","czech":"volný (čas)","type":"adjective"},
    {"hanzi":"累","pinyin":"lèi","czech":"unavený","type":"adjective"},
    {"hanzi":"精神","pinyin":"jīngshén","czech":"svěží, čilý","type":"adjective"},
    {"hanzi":"安全","pinyin":"ānquán","czech":"bezpečný","type":"adjective"},
    {"hanzi":"危险","pinyin":"wēixiǎn","czech":"nebezpečný","type":"adjective"},
    {"hanzi":"有用","pinyin":"yǒuyòng","czech":"užitečný","type":"adjective"},
    {"hanzi":"没用","pinyin":"méiyòng","czech":"neužitečný","type":"adjective"},
    {"hanzi":"有趣","pinyin":"yǒuqù","czech":"zajímavý","type":"adjective"},
    {"hanzi":"无聊","pinyin":"wúliáo","czech":"nudný","type":"adjective"},
    {"hanzi":"复杂","pinyin":"fùzá","czech":"složitý","type":"adjective"},
    {"hanzi":"简单","pinyin":"jiǎndān","czech":"jednoduchý","type":"adjective"},
    {"hanzi":"困难","pinyin":"kùnnán","czech":"obtížný","type":"adjective"},
    {"hanzi":"容易","pinyin":"róngyì","czech":"snadný","type":"adjective"},
    {"hanzi":"特别","pinyin":"tèbié","czech":"zvláštní, speciální","type":"adjective"},
    {"hanzi":"普通","pinyin":"pǔtōng","czech":"obyčejný","type":"adjective"},
    {"hanzi":"重要","pinyin":"zhòngyào","czech":"důležitý","type":"adjective"},
    {"hanzi":"次要","pinyin":"cìyào","czech":"vedlejší","type":"adjective"},
    {"hanzi":"贵","pinyin":"guì","czech":"drahý","type":"adjective"},
    {"hanzi":"便宜","pinyin":"piányí","czech":"levný","type":"adjective"},
    {"hanzi":"安静","pinyin":"ānjìng","czech":"tichý","type":"adjective"},
    {"hanzi":"吵闹","pinyin":"chǎonào","czech":"hlučný","type":"adjective"},
    {"hanzi":"整齐","pinyin":"zhěngqí","czech":"uspořádaný","type":"adjective"},
    {"hanzi":"混乱","pinyin":"hùnluàn","czech":"chaotický","type":"adjective"},
    {"hanzi":"古老","pinyin":"gǔlǎo","czech":"starodávný","type":"adjective"},
    {"hanzi":"现代","pinyin":"xiàndài","czech":"moderní","type":"adjective"},
    {"hanzi":"传统","pinyin":"chuántǒng","czech":"tradiční","type":"adjective"},
    {"hanzi":"流行","pinyin":"liúxíng","czech":"populární","type":"adjective"},
    {"hanzi":"罕见","pinyin":"hǎnjiàn","czech":"vzácný","type":"adjective"},
    {"hanzi":"常见","pinyin":"chángjiàn","czech":"běžný","type":"adjective"},
    {"hanzi":"清新","pinyin":"qīngxīn","czech":"osvěžující","type":"adjective"},
    {"hanzi":"腐旧","pinyin":"fǔjiù","czech":"zastaralý","type":"adjective"},
    // --- CONJUNCTIONS: Základní ---
    {"hanzi":"和","pinyin":"hé","czech":"a, se","type":"conjunction"},
    {"hanzi":"或","pinyin":"huò","czech":"nebo","type":"conjunction"},
    {"hanzi":"或者","pinyin":"huòzhě","czech":"nebo (alternativa)","type":"conjunction"},
    {"hanzi":"但","pinyin":"dàn","czech":"ale","type":"conjunction"},
    {"hanzi":"但是","pinyin":"dànshì","czech":"ale, avšak","type":"conjunction"},
    {"hanzi":"可是","pinyin":"kěshì","czech":"ale, jenže","type":"conjunction"},
    {"hanzi":"然而","pinyin":"ránér","czech":"nicméně","type":"conjunction"},
    {"hanzi":"所以","pinyin":"suǒyǐ","czech":"takže, proto","type":"conjunction"},
    {"hanzi":"因此","pinyin":"yīncǐ","czech":"proto, z toho důvodu","type":"conjunction"},
    {"hanzi":"因为","pinyin":"yīnwèi","czech":"protože","type":"conjunction"},
    {"hanzi":"由于","pinyin":"yóuyú","czech":"kvůli, v důsledku","type":"conjunction"},
    {"hanzi":"既然","pinyin":"jìrán","czech":"jelikož, protože již","type":"conjunction"},
    {"hanzi":"如果","pinyin":"rúguǒ","czech":"pokud, jestliže","type":"conjunction"},
    {"hanzi":"假如","pinyin":"jiǎrú","czech":"kdyby, pokud by","type":"conjunction"},
    {"hanzi":"要是","pinyin":"yàoshi","czech":"jestli, kdyby","type":"conjunction"},
    {"hanzi":"除非","pinyin":"chúfēi","czech":"pokud ne, jedině když","type":"conjunction"},
    {"hanzi":"虽然","pinyin":"suīrán","czech":"ačkoliv, i když","type":"conjunction"},
    {"hanzi":"尽管","pinyin":"jǐnguǎn","czech":"přestože","type":"conjunction"},
    {"hanzi":"只要","pinyin":"zhǐyào","czech":"stačí když, pokud jen","type":"conjunction"},
    {"hanzi":"只有","pinyin":"zhǐyǒu","czech":"jedině když, pouze","type":"conjunction"},
    {"hanzi":"即使","pinyin":"jíshǐ","czech":"i kdyby, i když","type":"conjunction"},
    {"hanzi":"就算","pinyin":"jiùsuàn","czech":"i kdybychom počítali s tím","type":"conjunction"},
    {"hanzi":"不管","pinyin":"bùguǎn","czech":"bez ohledu na","type":"conjunction"},
    {"hanzi":"无论","pinyin":"wúlùn","czech":"bez ohledu na, ať","type":"conjunction"},
    {"hanzi":"不论","pinyin":"bùlùn","czech":"bez ohledu na","type":"conjunction"},
    {"hanzi":"否则","pinyin":"fǒuzé","czech":"jinak, v opačném případě","type":"conjunction"},
    {"hanzi":"不然","pinyin":"bùrán","czech":"jinak","type":"conjunction"},
    {"hanzi":"而且","pinyin":"érqiě","czech":"a také, navíc","type":"conjunction"},
    {"hanzi":"并且","pinyin":"bìngqiě","czech":"a zároveň","type":"conjunction"},
    {"hanzi":"不但","pinyin":"búdàn","czech":"nejen","type":"conjunction"},
    {"hanzi":"不仅","pinyin":"bùjǐn","czech":"nejen","type":"conjunction"},
    {"hanzi":"就","pinyin":"jiù","czech":"pak, tedy","type":"conjunction"},
    {"hanzi":"才","pinyin":"cái","czech":"teprve pak","type":"conjunction"},
    {"hanzi":"还","pinyin":"hái","czech":"ještě, také","type":"conjunction"},
    {"hanzi":"也","pinyin":"yě","czech":"také, rovněž","type":"conjunction"},
    {"hanzi":"又","pinyin":"yòu","czech":"zase, znovu, i","type":"conjunction"},
    {"hanzi":"还是","pinyin":"háishi","czech":"nebo (výběr), přesto","type":"conjunction"},
    {"hanzi":"要么","pinyin":"yàome","czech":"buď... nebo","type":"conjunction"},
    {"hanzi":"宁可","pinyin":"nìngkě","czech":"raději, spíše","type":"conjunction"},
    {"hanzi":"宁愿","pinyin":"nìngyuàn","czech":"raději bych","type":"conjunction"},
    // --- CONJUNCTIONS: Složené vzory ---
    {"hanzi":"因为...所以...","pinyin":"yīnwèi... suǒyǐ...","czech":"protože... takže...","type":"conjunction"},
    {"hanzi":"虽然...但是...","pinyin":"suīrán... dànshì...","czech":"ačkoliv... ale...","type":"conjunction"},
    {"hanzi":"如果...就...","pinyin":"rúguǒ... jiù...","czech":"pokud... pak...","type":"conjunction"},
    {"hanzi":"既然...就...","pinyin":"jìrán... jiù...","czech":"jelikož... pak...","type":"conjunction"},
    {"hanzi":"只要...就...","pinyin":"zhǐyào... jiù...","czech":"stačí jen... a pak...","type":"conjunction"},
    {"hanzi":"只有...才...","pinyin":"zhǐyǒu... cái...","czech":"jedině když... teprve pak...","type":"conjunction"},
    {"hanzi":"不但...而且...","pinyin":"búdàn... érqiě...","czech":"nejen... ale také...","type":"conjunction"},
    {"hanzi":"不仅...还...","pinyin":"bùjǐn... hái...","czech":"nejen... ale ještě...","type":"conjunction"},
    {"hanzi":"不管...都...","pinyin":"bùguǎn... dōu...","czech":"bez ohledu na... vždy...","type":"conjunction"},
    {"hanzi":"无论...都...","pinyin":"wúlùn... dōu...","czech":"ať... vždy...","type":"conjunction"},
    {"hanzi":"即使...也...","pinyin":"jíshǐ... yě...","czech":"i kdyby... přesto...","type":"conjunction"},
    {"hanzi":"宁可...也不...","pinyin":"nìngkě... yě bù...","czech":"raději... než...","type":"conjunction"},
    {"hanzi":"要么...要么...","pinyin":"yàome... yàome...","czech":"buď... nebo...","type":"conjunction"},
    {"hanzi":"一边...一边...","pinyin":"yībiān... yībiān...","czech":"zatímco... zároveň...","type":"conjunction"},
    {"hanzi":"既...又...","pinyin":"jì... yòu...","czech":"jak... tak...","type":"conjunction"},
    {"hanzi":"越...越...","pinyin":"yuè... yuè...","czech":"čím více... tím více...","type":"conjunction"},
    {"hanzi":"先...然后...","pinyin":"xiān... rán hòu...","czech":"nejdřív... pak...","type":"conjunction"},
    {"hanzi":"一...就...","pinyin":"yī... jiù...","czech":"jakmile... hned...","type":"conjunction"},
    {"hanzi":"除...之外...","pinyin":"chú... zhīwài...","czech":"kromě... navíc...","type":"conjunction"},
    {"hanzi":"不管...还是...","pinyin":"bùguǎn... háishi...","czech":"ať už... nebo...","type":"conjunction"},
    {"hanzi":"与其...不如...","pinyin":"yǔqí... bùrú...","czech":"místo... spíše...","type":"conjunction"},
    {"hanzi":"尽管...还是...","pinyin":"jǐnguǎn... háishi...","czech":"přestože... přesto...","type":"conjunction"},
    {"hanzi":"不但...反而...","pinyin":"búdàn... fǎn'ér...","czech":"nejenže ne... naopak...","type":"conjunction"}
  ];
  const container = document.getElementById('cardsContainer');
  if (!container || document.getElementById('card-l4-1')) return;
  const L4_BASE = 853; // Hanzi count after L1–L3
  let l4Index = 0;
  const fragment = document.createDocumentFragment();

  const secHeader = document.createElement('div');
  secHeader.className = 'section-divider-title';
  secHeader.id = 'section-l4';
  secHeader.dataset.lesson = 'l4';
  secHeader.innerHTML = `
    <div class="section-divider-left">
      <span class="section-divider-icon">⚡</span>
      <div class="section-divider-text">
        <h2 class="section-divider-h2">Lekce 4: Přídavná jména &amp; Spojky</h2>
        <span class="section-divider-sub">Základní vlastnosti, párové spojky, podmínková a příčinná souvětí</span>
      </div>
    </div>
    <span class="section-divider-badge">109 karet</span>
  `;
  fragment.appendChild(secHeader);

  lesson4Data.forEach(function(item) {
    l4Index++;
    const cumulativeCount = L4_BASE + l4Index;
    const card = document.createElement('div');
    card.className = 'course-card l4';
    card.dataset.lesson = 'l4';
    card.id = 'card-l4-' + l4Index;
    const isAdj = item.type === 'adjective';
    const badgeHtml = isAdj
      ? '<span class="adjective-badge-right lesson4-badge" style="display:inline-block;background:#ff9500;color:#fff;border:1px solid #e68a00;font-size:10px;font-weight:800;padding:2px 6px;border-radius:4px;margin-top:4px;line-height:1.2;">přídavné jméno</span>'
      : '<span class="conjunction-badge-right" style="display:inline-block;background:#dbeafe;color:#1d4ed8;border:1px solid #bfdbfe;font-size:10px;font-weight:800;padding:2px 6px;border-radius:4px;margin-top:4px;line-height:1.2;">spojka</span>';
    const borderColor = isAdj ? '#ff9500' : '#2563eb';
    card.style.borderLeft = '5px solid ' + borderColor;
    card.innerHTML = `
      <div class="left-panel">
        <span class="card-badge">Lekce 4 &bull; #${String(l4Index).padStart(3,'0')}</span>
        <div class="hanzi-text">${item.hanzi}</div>
        <div class="pinyin-text pinyin-target">${item.pinyin}</div>
        <div class="czech-text czech-target">${item.czech}</div>
        ${badgeHtml}
      </div>
      <div class="right-panel">
        <div class="panel-header">
          <span style="font-weight:700;font-size:14px;color:#334155;">Rozbor znaků &amp; propojení</span>
          <span class="tracker-badge">Znáš celkem: <span>${cumulativeCount}</span> / 1 053 znaků &amp; emoji</span>
        </div>
        <div class="section-label new" style="font-size:11px;font-weight:700;color:#16a34a;text-transform:uppercase;letter-spacing:0.5px;margin:10px 0 6px;">✨ Nové znaky v této kartě (${l4Index})</div>
        <div class="char-grid">
          <div class="char-item new-item" style="${isAdj ? 'border:2px solid #ff9500;background:linear-gradient(180deg,#fff 0%,#fff7ed 100%);' : 'border:2px solid #bfdbfe;background:linear-gradient(180deg,#fff 0%,#eff6ff 100%);'}">
            <div class="char-symbol" style="${isAdj ? 'color:#ff9500;' : 'color:#2563eb;'}">${item.hanzi}</div>
            <div class="char-desc">
              <div class="char-pinyin">${item.pinyin}</div>
              <div class="char-meaning">${item.czech}</div>
            </div>
          </div>
        </div>
        <div class="section-label known" style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;margin:10px 0 6px;">📊 Lekce 4 &bull; karta ${l4Index} z ${lesson4Data.length}</div>
      </div>`;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
})();
