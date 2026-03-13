import { Link } from 'react-router-dom';
import { Button } from '../components/shared/Button';
import { EmptyState } from '../components/shared/EmptyState';
import { PlatformBadge } from '../components/shared/PlatformBadge';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';

export const CartPage = () => {
  const { items, subtotal, automaticSavings, promoSubtotal, couponDiscount, total, removeItem, clearCart } = useCart();
  if (!items.length) return <section className="container"><EmptyState title="Seu carrinho esta vazio." description="Adicione um titulo do catalogo para ver o resumo do checkout e a logica de promocoes em acao." actionLabel="Explorar catalogo" actionHref="/catalogo" /></section>;

  return (
    <section className="container commerce-layout">
      <div className="stack-lg">
        <div className="page-intro page-intro--compact"><span className="eyebrow">Carrinho</span><h1>Resumo compacto, decisao limpa e plataforma sempre evidente.</h1></div>
        {items.map((listing) => <article key={listing.id} className="panel cart-line"><div className="cart-line__content"><div><span className="eyebrow">{listing.availability}</span><h3>{listing.gameTitle}</h3><PlatformBadge platform={listing.platform} /></div><div className="cart-line__price">{listing.promotion ? <small>de {formatPrice(listing.price)}</small> : null}<strong>{formatPrice(listing.promotionalPrice)}</strong></div></div><button type="button" className="inline-link" onClick={() => removeItem(listing.id)}>Remover</button></article>)}
      </div>
      <aside className="panel summary-card"><span className="eyebrow">Resumo</span><div className="summary-row"><span>Subtotal bruto</span><strong>{formatPrice(subtotal)}</strong></div><div className="summary-row"><span>Economia automatica</span><strong>-{formatPrice(automaticSavings)}</strong></div><div className="summary-row"><span>Subtotal curado</span><strong>{formatPrice(promoSubtotal)}</strong></div><div className="summary-row"><span>Desconto por cupom</span><strong>-{formatPrice(couponDiscount)}</strong></div><div className="summary-row summary-row--total"><span>Total</span><strong>{formatPrice(total)}</strong></div><p className="summary-note">Fluxo preparado para entrega instantanea e leitura transparente das promocoes.</p><Button as={Link} to="/checkout">Fechar compra</Button><Button variant="secondary" onClick={clearCart}>Limpar carrinho</Button></aside>
    </section>
  );
};
