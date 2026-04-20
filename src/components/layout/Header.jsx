import { Link } from 'react-router-dom';

const navItems = [
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#sobre', label: 'Sobre' },
];

export const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand-mark" to="/">
          <span className="brand-mark__signal" />
          <div>
            <strong>Luiz Otávio</strong>
            <span>full stack developer</span>
          </div>
        </Link>

        <nav className="site-nav" aria-label="Principal">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-link" href="https://github.com/Luizbc2" target="_blank" rel="noreferrer">
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

const GitHubIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="header-link__icon">
    <path
      fill="currentColor"
      d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.03c.97 0 1.95.13 2.87.38 2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.24 2.77.12 3.06.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.08.77 2.19 0 1.58-.01 2.86-.01 3.25 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
    />
  </svg>
);
