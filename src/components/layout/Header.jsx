import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useSession } from '../../context/SessionContext';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/catalogo', label: 'Catalogo' },
  { to: '/promocoes', label: 'Promocoes' },
  { to: '/minhas-keys', label: 'Keys' },
];

export const Header = () => {
  const { itemCount } = useCart();
  const { isAuthenticated, user, loginDemo, logoutDemo } = useSession();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand-mark" to="/">
          <span className="brand-mark__signal" />
          <div>
            <strong>Nexus Games</strong>
            <span>storefront editorial de keys</span>
          </div>
        </Link>

        <nav className="site-nav" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="header-cart" to="/carrinho">
            Carrinho
            <span>{itemCount}</span>
          </Link>
          {isAuthenticated ? (
            <button className="session-pill" type="button" onClick={logoutDemo}>
              <span className="session-pill__avatar">{user.fullName[0]}</span>
              <span>
                <strong>{user.username}</strong>
                <small>Sair do demo</small>
              </span>
            </button>
          ) : (
            <button className="session-pill session-pill--ghost" type="button" onClick={loginDemo}>
              <span className="session-pill__avatar">N</span>
              <span>
                <strong>Entrar</strong>
                <small>Modo demo</small>
              </span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
