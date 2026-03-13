import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="app-shell">
      <div className="background-grid" />
      <Header />
      <main className="page-shell route-shell" key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
