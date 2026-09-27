import { PortalSection } from '../ui';

export default function TerminalSection() {
  return <PortalSection
    id="terminal"
    index="06"
    eyebrow="Otevřené spojení"
    title={<><span className="title-main">Začněte objevovat.</span><br /><span className="accent-text">Pokračujte vlastním tempem.</span></>}
    className="terminal-section"
  >
    <p className="portal-section-lead">Vyberte si kurz a pokračujte tam, kde právě jste. Další krok je na dosah.</p>
    <a className="terminal-action glitch-hover" href="#apps">
      <span>Otevřít jazykové aplikace</span>
      <span className="terminal-action-arrow" aria-hidden="true">↗</span>
    </a>
  </PortalSection>;
}
