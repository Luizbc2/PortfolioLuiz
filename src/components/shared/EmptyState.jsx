import { Button } from './Button';

export const EmptyState = ({ title, description, actionLabel, actionHref }) => (
  <section className="empty-state panel">
    <span className="eyebrow">Vazio, mas elegante</span>
    <h2>{title}</h2>
    <p>{description}</p>
    {actionLabel && actionHref ? <Button as="a" href={actionHref}>{actionLabel}</Button> : null}
  </section>
);
