import { Outlet } from 'react-router-dom';
import { useSession } from '../../context/SessionContext';
import { Button } from './Button';

export const ProtectedRoute = () => {
  const { isAuthenticated, loginDemo } = useSession();
  if (isAuthenticated) return <Outlet />;

  return (
    <section className="container auth-gate">
      <div className="auth-gate__content panel">
        <span className="eyebrow">Acesso protegido</span>
        <h1>Entre no modo demo para liberar checkout, conta e biblioteca de keys.</h1>
        <p>A aplicacao ja possui fallback visual para sessao ausente. Aqui voce pode simular o login e navegar pelos fluxos autenticados.</p>
        <Button onClick={loginDemo}>Entrar no demo</Button>
      </div>
    </section>
  );
};
