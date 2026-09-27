import { PortalSection } from '../ui';

const principles = [
  ['01', 'Přímo', 'Aplikace se otevřou v prohlížeči. Bez instalace a zakládání účtu.'],
  ['02', 'Přehledně', 'Každý nástroj má jasný účel, čisté rozhraní a jen potřebné ovládání.'],
  ['03', 'Společně', 'Samostatné moduly sdílejí jednotný web a společné základy návrhu.']
];

export default function ArchitectureSection() {
  return <PortalSection id="architecture" index="03" eyebrow="Návrh systému" title={<><span className="title-main">Lehké jádro.</span><br /><span className="accent-text">Prostor k růstu.</span></>} className="architecture-section">
    <p className="portal-section-lead">HCODE je nezávislý webový ekosystém malých a rychlých aplikací. Projekty využívají technologie prohlížeče a postupně přecházejí na znovupoužitelné JavaScriptové komponenty se zachováním statického provozu.</p>
    <div className="principle-grid">{principles.map(([num, title, description]) => <article className="principle-card" key={num}>
      <span className="principle-index">{num}</span><h3>{title}</h3><p>{description}</p>
    </article>)}</div>
  </PortalSection>;
}
