import ThemeSwitcher from './theme-switcher';

export function Surface({ as: Tag = 'section', className = '', children, ...props }) {
  return <Tag className={`surface ${className}`.trim()} {...props}>{children}</Tag>;
}

export function TextLabel({ as: Tag = 'span', className = '', children, ...props }) {
  return <Tag className={`text-label ${className}`.trim()} {...props}>{children}</Tag>;
}

export function ActionLink({ href, children, subtle = false }) {
  return <a className={`action-link${subtle ? ' action-link--subtle' : ''}`} href={href}>{children}</a>;
}

export function PortalSection({ id, title, children, className = '' }) {
  return <section id={id} className={`portal-section ${className}`.trim()} aria-labelledby={`${id}-title`}>
    <div className="portal-section-inner">
      <div className="section-highlight-line" aria-hidden="true">
        <span className="section-hash-rule" />
      </div>
      <h2 className="portal-section-title" id={`${id}-title`}>{title}</h2>
      {children}
    </div>
  </section>;
}

export function ChineseVectorBadge({ size = 46, className = '' }) {
  return (
    <svg
      viewBox="0 0 54 54"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="48" height="48" rx="13" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
      <rect x="7" y="7" width="40" height="40" rx="9" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" strokeOpacity="0.25" />
      <path d="M10 14V10H14M44 14V10H40M10 40V44H14M44 40V44H40" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.6" />
      <circle cx="27" cy="27" r="14.5" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <text
        x="27"
        y="33"
        textAnchor="middle"
        fill="currentColor"
        fontSize="17"
        fontWeight="900"
        fontFamily="'Noto Serif SC', 'Songti SC', 'STSong', serif"
      >
        漢
      </text>
    </svg>
  );
}

export function KoreanVectorBadge({ size = 46, className = '' }) {
  return (
    <svg
      viewBox="0 0 54 54"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="48" height="48" rx="13" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
      <rect x="7" y="7" width="40" height="40" rx="9" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" strokeOpacity="0.25" />
      <path d="M10 11H15M10 13.5H15M10 16H15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M39 11H44M39 13.5H41M42 13.5H44M39 16H44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M10 38H12M13 38H15M10 40.5H15M10 43H12M13 43H15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M39 38H41M42 38H44M39 40.5H41M42 40.5H44M39 43H41M42 43H44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
      <circle cx="27" cy="27" r="14.5" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <text
        x="27"
        y="33"
        textAnchor="middle"
        fill="currentColor"
        fontSize="17"
        fontWeight="900"
        fontFamily="'Pretendard', 'Noto Sans KR', sans-serif"
      >
        한
      </text>
    </svg>
  );
}

export function LanguageAppCard({ language, title, description, symbol, studyHref, readingHref }) {
  const badge = language === 'zh' ? <ChineseVectorBadge /> : (language === 'ko' ? <KoreanVectorBadge /> : symbol);
  return <Surface as="article" className={`portal-app-card portal-app-card--${language}`}>
    <div className="portal-app-card-top"><span className="portal-app-symbol" lang={language === 'zh' ? 'zh-Hans' : 'ko'}>{badge}</span>
      <div><h3>{title}</h3><p className="portal-app-card-type">{language === 'zh' ? 'Čínská aplikace' : 'Korejská aplikace'}</p></div></div>
    <p className="portal-app-card-description">{description}</p>
    <div className="portal-app-card-actions"><ActionLink href={studyHref}>Studium</ActionLink><ActionLink href={readingHref} subtle>Čítárna</ActionLink></div>
  </Surface>;
}

export function LanguageLinks({ language, current }) {
  const pairs = [{ href: '../study/', label: 'Studium', key: 'study' }, { href: '../read/', label: 'Čítárna', key: 'read' }];
  return <nav className="view-nav" aria-label="Zobrazení kurzu">
    {pairs.map(item => <ActionLink key={item.key} href={item.href} subtle={current !== item.key}>{item.label}</ActionLink>)}
  </nav>;
}

export function PageHeader({ language, title, description, current }) {
  const name = language === 'zh' ? 'Čínština' : 'Korejština';
  return <header className="page-header">
    <div className="header-top"><ActionLink href="../../">HCODE.ART</ActionLink><div className="header-top-actions"><LanguageLinks language={language} current={current} /><ThemeSwitcher scope={language} /></div></div>
    <div><TextLabel className="eyebrow">{name} · {current === 'read' ? 'Čítárna' : 'Studium'}</TextLabel>
      <h1>{title}</h1><p className="lead">{description}</p></div>
  </header>;
}

