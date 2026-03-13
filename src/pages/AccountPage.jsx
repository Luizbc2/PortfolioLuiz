import { useAccount } from '../hooks/useAccount';
import { useOrders } from '../hooks/useOrders';
import { formatDate, formatPrice, paymentMethodLabel, statusLabel } from '../utils/formatters';

export const AccountPage = () => {
  const { data: account } = useAccount();
  const { data: orders, isLoading } = useOrders();
  if (!account || isLoading) return <section className="container page-intro"><div className="panel skeleton-page" /></section>;

  return (
    <section className="container stack-xl">
      <div className="account-hero">
        <article className="panel profile-card"><img src={account.user.avatarUrl} alt={account.user.fullName} /><div><span className="eyebrow">Conta</span><h1>{account.user.fullName}</h1><p>{account.user.email}</p></div></article>
        <div className="metrics-grid metrics-grid--account"><div className="metric-card"><strong>{account.stats.ordersCompleted}</strong><span>pedidos concluidos</span></div><div className="metric-card"><strong>{account.stats.keysDelivered}</strong><span>keys entregues</span></div><div className="metric-card"><strong>{account.stats.favoritePlatform}</strong><span>plataforma mais usada</span></div></div>
      </div>
      <section className="stack-lg"><div className="section-heading"><span className="eyebrow">Historico</span><h2>Pedidos com status, pagamento e itens por plataforma.</h2></div>{orders.map((order) => <article key={order.id} className="panel order-card"><div className="order-card__header"><div><span className="eyebrow">{order.orderNumber}</span><h3>{statusLabel(order.status)}</h3></div><div className="order-card__meta"><span>{formatDate(order.createdAt)}</span><span>{paymentMethodLabel(order.paymentMethod)}</span><strong>{formatPrice(order.totalAmount)}</strong></div></div><div className="order-card__items">{order.items.map((item) => <div key={item.id} className="order-card__item"><div><strong>{item.game.title}</strong><span>{item.listing.platform.name}</span></div><strong>{formatPrice(item.price)}</strong></div>)}</div></article>)}</section>
    </section>
  );
};
