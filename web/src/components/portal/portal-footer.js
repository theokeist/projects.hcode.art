const sections = [
  ['hero', 'Start'],
  ['calligraphy', 'Kaligrafie'],
  ['architecture', 'Architektura'],
  ['evolution', 'Vývoj'],
  ['apps', 'Aplikace'],
  ['terminal', 'Začít']
];

const socials = [
  { id: 'ig', label: 'Instagram', tag: 'Ig', href: 'https://instagram.com' },
  { id: 'gh', label: 'GitHub', tag: 'Gh', href: 'https://github.com/theokeist' },
  { id: 'li', label: 'LinkedIn', tag: 'Li', href: 'https://linkedin.com' }
];

export default function PortalFooter() {
  return (
    <footer className="portal-footer">
      <div className="footer-brand-block">
        <a href="./" className="footer-brand glitch-hover" aria-label="HCODE.ART home" data-value="HCODE.ART">
          <span><span className="brand-name">HCODE</span><span className="brand-dot-art accent-text">.ART</span></span>
        </a>
        <p>Nezávislá full-stack architektura a webové aplikace bez zbytečné složitosti.</p>
        <span>SYSTÉM ONLINE</span>
      </div>

      <nav className="footer-nav" aria-label="Mapa webu">
        <h2 className="glitch-hover" data-value="PROZKOUMAT">Prozkoumat</h2>
        {sections.map(([id, label], index) => (
          <a key={id} href={`#${id}`}>
            <span>0{index + 1}</span>{label}
          </a>
        ))}
        <a href="./zh/read/">Čínská čítárna</a>
        <a href="./ko/read/">Korejská čítárna</a>
      </nav>

      <div className="footer-social-block">
        <h2 className="glitch-hover" data-value="SPOJENÍ & KÓD">Spojení &amp; Kód</h2>
        <div className="footer-social-list">
          {socials.map(({ id, label, tag, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title={label}
            >
              <span className="footer-social-tag">{tag}</span>
              <span className="footer-social-name">{label}</span>
              <span className="footer-social-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-meta">
        <span><span className="brand-name">HCODE</span><span className="brand-dot-art accent-text">.ART</span> · 2026</span>
        <div className="footer-meta-socials">
          {socials.map(({ id, tag, href }, i) => (
            <span key={id} className="footer-meta-social-item">
              <a href={href} target="_blank" rel="noopener noreferrer">{tag}</a>
              {i < socials.length - 1 && <span className="footer-meta-dot">·</span>}
            </span>
          ))}
        </div>
        <a href="#hero">Zpět nahoru ↑</a>
      </div>
    </footer>
  );
}
