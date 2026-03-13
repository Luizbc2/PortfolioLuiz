import { EmptyState } from '../components/shared/EmptyState';

export const NotFoundPage = () => (
  <section className="container">
    <EmptyState title="Rota nao encontrada." description="A vista solicitada nao existe nesta vitrine da Nexus Games." actionLabel="Voltar para o inicio" actionHref="/" />
  </section>
);
