'use client';

export default function HeroSection() {
  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  }

  return <section
    id="hero"
    className="portal-hero"
    aria-labelledby="portal-title"
    onMouseMove={handleMouseMove}
  >
    <div className="hero-mist-glow" aria-hidden="true" />
    <div className="hero-interactive-spotlight" aria-hidden="true" />

    {/* Clean, light Hero Title with themed .ART */}
    <div className="hero-stage">
      <h1 id="portal-title" className="hero-title">
        <span className="title-hcode">HCODE</span>
        <span className="title-art brand-dot-art accent-text">.ART</span>
      </h1>
    </div>

    {/* Subtitle */}
    <p className="portal-hero-subtitle">
      Nezávislý webový ekosystém pro studium asijských jazyků.
      <br />
      <span className="hero-highlight-phrase">Blesková odezva, hluboké souvislosti a nulová instalace.</span>
    </p>

    {/* Action buttons */}
    <div className="hero-action-row">
      <a className="hero-cta-btn" href="#apps">
        <span>Prozkoumat aplikace</span>
        <b aria-hidden="true">→</b>
      </a>
      <a className="hero-scroll-link" href="#architecture">
        <span>01</span> Poznat ekosystém <b aria-hidden="true">↓</b>
      </a>
    </div>

    <span className="hero-index" aria-hidden="true">01 / 05</span>
  </section>;
}
