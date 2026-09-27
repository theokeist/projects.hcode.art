'use client';

import { speakText } from './reading-room';

function AudioButton({ text, language, label = 'Přehrát' }) {
  if (!text) return null;
  return <button type="button" className="course-audio-button" onClick={() => speakText(text, language)} aria-label={`${label}: ${text}`}>🔊 {label}</button>;
}

function ExampleList({ examples, language }) {
  if (!examples?.length) return null;
  return <div className="course-detail-block">
    <h4>Příklady</h4>
    <div className="course-examples">
      {examples.map((example, index) => {
        const term = example.hangul || example.ko || (Array.isArray(example) ? example[0] : '');
        const sound = example.roman || example.ro || example.read || (Array.isArray(example) ? example[1] : '');
        const meaning = example.cz || (Array.isArray(example) ? example[2] : '');
        return term
          ? <button type="button" className="course-example" key={index} onClick={() => speakText(term, language)}>
              <strong lang={language === 'zh' ? 'zh-Hans' : 'ko'}>{term}</strong>
              {sound && <span>{sound}</span>}{meaning && <span>{meaning}</span>}
            </button>
          : <p className="course-example" key={index}>{String(example)}</p>;
      })}
    </div>
  </div>;
}

function ChineseCharacters({ characters, onLookup }) {
  if (!characters?.length) return null;
  return <div className="course-character-groups">
    {[false, true].map(known => {
      const list = characters.filter(character => Boolean(character.known) === known);
      if (!list.length) return null;
      return <section key={String(known)} className="course-detail-block">
        <h4>{known ? 'Známé znaky' : 'Nové znaky'} ({list.length})</h4>
        <div className="course-character-grid">
          {list.map((character, index) => <div className="course-character" key={index}>
            <button type="button" lang="zh-Hans" onClick={() => onLookup(character.term)} aria-label={`Vyhledat znak ${character.term}`}>{character.term}</button>
            <div><span>{character.sound}</span><p>{character.meaning}</p>
              {character.grammar && <p className="course-grammar-note"><strong>Gramatika:</strong> {character.grammar}</p>}
            </div>
          </div>)}
        </div>
      </section>;
    })}
  </div>;
}

function ChineseDetails({ card, onLookup }) {
  return <>
    <ChineseCharacters characters={card.characters} onLookup={onLookup} />
    {card.note && <div className="course-detail-block"><h4>{card.noteLabel || (card.kind === 'Číslo' ? 'Dekompozice & etymologie' : 'Souvislosti & vysvětlení')}</h4><p>{card.note}</p></div>}
    {card.tiles?.length > 0 && <div className="course-detail-block"><h4>Znaky textu</h4><div className="course-token-row">
      {card.tiles.map(([term, sound], index) => /[\u3400-\u9fff]/u.test(term)
        ? <button type="button" key={index} onClick={() => onLookup(term)}>{term}{sound && <small>{sound}</small>}</button>
        : <span key={index}>{term}</span>)}
    </div></div>}
    <ExampleList examples={card.examples} language="zh" />
  </>;
}

function KoreanDetails({ card, sectionId }) {
  const raw = card.raw || {};
  if (sectionId === 'reading') return <>
    <div className="course-detail-block"><h4>Rozbor po slovech</h4>
      <div className="course-token-row">{card.tiles?.filter(tile => /[\p{L}\p{N}]/u.test(tile.h)).map((tile, index) =>
        <button type="button" key={index} onClick={() => speakText(tile.h, 'ko')}>
          {tile.h}{tile.r && <small>{tile.r}</small>}{tile.c && <small>{tile.c}</small>}
        </button>)}</div>
    </div>
    {raw.sourceUrl && <a className="course-source-link" href={raw.sourceUrl} target="_blank" rel="noopener noreferrer">{raw.sourceName || 'Původní zdroj'} ↗</a>}
  </>;
  if (sectionId === 'phrases') return <>
    <div className="course-detail-block"><h4>Rozbor po tokenech</h4>
      <div className="course-token-row">{raw.tokens?.map((token, index) =>
        <button type="button" key={index} onClick={() => speakText(token.w, 'ko')} title={`Přehrát: ${token.w} (${token.role})`}>
          <strong>{token.w}</strong><small>{token.role}</small>
        </button>)}</div>
    </div>
    {raw.note && <div className="course-detail-block"><h4>Etiketa a tipy</h4><p>{raw.note}</p></div>}
  </>;
  if (sectionId === 'vocabulary') return <>
    {raw.decomp && <div className="course-detail-block"><h4>Dekompozice Hangulu</h4><p>{raw.decomp}</p></div>}
    {raw.ex && <div className="course-detail-block"><h4>Vzorová věta</h4><button className="course-example" type="button" onClick={() => speakText(raw.ex.split(' (')[0], 'ko')}>{raw.ex}</button></div>}
  </>;
  if (sectionId === 'grammar') return <>
    <div className="course-detail-block"><h4>Pravidlo a vzorec</h4><pre>{raw.formula}</pre><p>{raw.summary}</p></div>
    <ExampleList examples={raw.examples} language="ko" />
    {raw.tip && <div className="course-detail-block"><h4>Tip</h4><p>{raw.tip}</p></div>}
  </>;
  if (sectionId === 'numbers') return <>
    {raw.short && <div className="course-detail-block"><h4>Před počítadlem</h4><p>{raw.short}</p></div>}
    {raw.note && <div className="course-detail-block"><h4>Použití</h4><p>{raw.note}</p></div>}
    {raw.examples && <div className="course-detail-block"><h4>Příklady v praxi</h4><p>{raw.examples}</p></div>}
  </>;
  return <>
    {raw.philosophy && <div className="course-detail-block"><h4>Tvoření</h4><p>{raw.philosophy}</p></div>}
    {raw.representative && <div className="course-detail-block"><h4>Reprezentativní hláska</h4><p>{raw.representative}</p></div>}
    <ExampleList examples={raw.examples} language="ko" />
  </>;
}

export default function StudyCard({ card, language, sectionId, number, showSound, showMeaning, onLookup, isLearned = false, onToggleLearned = null }) {
  const isChinese = language === 'zh';
  const raw = card.raw || {};
  const displayTerm = sectionId === 'vowels' ? `ㅇ${card.term}` : card.term;
  return <article className={`course-study-card surface course-study-card--${language}${isLearned ? ' is-card-learned' : ''}`} id={`study-card-${card.id}`} data-card-id={card.id}>
    <div className="course-card-hero">
      <div className="course-card-meta">
        <span className="course-card-type">{card.kind || card.group}</span>
        {!isChinese && onToggleLearned && (
          <button
            type="button"
            className={`course-learned-toggle ${isLearned ? 'is-learned' : ''}`}
            onClick={() => onToggleLearned(card.id)}
            title={isLearned ? 'Označeno jako naučené (kliknutím zrušíte)' : 'Označit slovo jako naučené'}
            aria-pressed={isLearned}
          >
            {isLearned ? '✓ Naučeno' : '+ Naučeno'}
          </button>
        )}
        <span>{String(number).padStart(2, '0')}</span>
      </div>
      <div className="course-card-main">
        {isChinese
          ? <h3 lang="zh-Hans">{Array.from(displayTerm || '').map((character, index) =>
              /[\u3400-\u9fff]/u.test(character)
                ? <button type="button" key={index} onClick={() => onLookup(character)}>{character}</button>
                : <span key={index}>{character}</span>)}</h3>
          : <h3 lang="ko">{raw.emoji && <span className="course-emoji" aria-hidden="true">{raw.emoji} </span>}{displayTerm}</h3>}
        {showSound && card.sound && <p className="course-card-sound">{card.sound}</p>}
        {showMeaning && card.meaning && <p className="course-card-meaning">{card.meaning}</p>}
        {raw.hanja && <p className="course-card-hanja">漢字 {raw.hanja}</p>}
      </div>
      <AudioButton text={displayTerm} language={language} />
    </div>
    <div className="course-card-detail">
      <div className="course-detail-heading"><h3>{isChinese ? 'Rozbor znaků a souvislosti' : 'Vysvětlení a příklady'}</h3>
        {card.progress && <span>{card.progress}</span>}</div>
      {isChinese ? <ChineseDetails card={card} onLookup={onLookup} /> : <KoreanDetails card={card} sectionId={sectionId} />}
    </div>
  </article>;
}
