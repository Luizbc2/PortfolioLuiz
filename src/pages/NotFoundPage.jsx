import { EmptyState } from '../components/shared/EmptyState';

export const NotFoundPage = () => (
  <section className="container">
    <EmptyState
      title="Pagina nao encontrada."
      description="Essa rota nao existe no portfolio atual. Volte para a home para ver os projetos."
      actionLabel="Voltar para a home"
      actionHref="/"
    />
  </section>
);
