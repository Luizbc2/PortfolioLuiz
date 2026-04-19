import { EmptyState } from '../components/shared/EmptyState';

export const NotFoundPage = () => (
  <section className="container">
    <EmptyState
      title="Página não encontrada."
      description="Essa rota não existe no portfólio atual. Volte para a home para ver os projetos."
      actionLabel="Voltar para a home"
      actionHref="/"
    />
  </section>
);
