import { Link } from 'react-router-dom';

const navItems = [
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#processo', label: 'Processo' },
  { href: '/#contato', label: 'Contato' },
];

export const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand-mark" to="/">
          <span className="brand-mark__signal" />
          <div>
            <strong>Luiz Barbosa</strong>
            <span>front-end developer / portfolio</span>
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
          <a className="header-cart" href="https://github.com/Luizbc2" target="_blank" rel="noreferrer">
            GitHub
            <span>01</span>
          </a>
          <a className="session-pill session-pill--ghost" href="https://horarius.vercel.app/login" target="_blank" rel="noreferrer">
            <span className="session-pill__avatar">L</span>
            <span>
              <strong>Projeto online</strong>
              <small>Horarius</small>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
