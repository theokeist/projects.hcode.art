import { PortalSection } from '../ui';

const milestones = [
  ['01', 'První stránka', 'Jednoduchý základ v HTML a CSS. Otevřít, načíst a používat bez nastavování.'],
  ['02', 'Samostatné moduly', 'Web se rozrostl o aplikace s vlastním obsahem a ucelenými studijními cestami.'],
  ['03', 'Společný systém', 'Čínština a korejština přecházejí do jednoho webu se sdílenými komponentami a čítárnami.']
];

export default function EvolutionSection() {
  return <PortalSection id="evolution" index="04" eyebrow="Vývoj projektu" title={<><span className="title-main">Z jedné stránky</span><br /><span className="accent-text">k platformě.</span></>} className="evolution-section">
    <div className="evolution-list">{milestones.map(([num, title, description]) => <article className="evolution-item" key={num}>
      <span className="evolution-index">{num}</span><div><h3>{title}</h3><p>{description}</p></div><span className="evolution-arrow" aria-hidden="true">↗</span>
    </article>)}</div>
  </PortalSection>;
}
