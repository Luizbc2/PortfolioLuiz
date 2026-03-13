import { useState } from 'react';
import { Button } from '../components/shared/Button';
import { EmptyState } from '../components/shared/EmptyState';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';

const paymentMethods = [
  { id: 'pix', label: 'Pix', copy: 'Confirmacao agil e entrega imediata da key.' },
  { id: 'credit_card', label: 'Cartao', copy: 'Fluxo premium com resumo tecnico e validacao clara.' },
  { id: 'paypal', label: 'PayPal', copy: 'Atalho internacional para compras ja autenticadas.' },
];

export const CheckoutPage = () => {
  const { items, couponCode, applyCoupon, total, validCouponCode } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [couponInput, setCouponInput] = useState(couponCode);
  const [statusMessage, setStatusMessage] = useState('');
  if (!items.length) return <section className="container"><EmptyState title="Checkout indisponivel sem itens." description="O fluxo de pagamento so aparece quando existe pelo menos uma key preparada para entrega." actionLabel="Ir para o catalogo" actionHref="/catalogo" /></section>;

  const handleApplyCoupon = () => {
    applyCoupon(couponInput);
    setStatusMessage(couponInput.toUpperCase() === validCouponCode ? 'Cupom aplicado com sucesso.' : 'Cupom salvo, mas sem desconto nesta simulacao.');
  };

  return (
    <section className="container commerce-layout">
      <div className="stack-lg">
        <div className="page-intro page-intro--compact"><span className="eyebrow">Checkout</span><h1>Pagamento claro, promocoes visiveis e entrega de keys sem ruido.</h1><p>Esta tela representa o ponto de conversao: metodo de pagamento, cupom, resumo e tranquilidade para finalizar.</p></div>
        <section className="panel checkout-panel"><h2>Metodo de pagamento</h2><div className="payment-grid">{paymentMethods.map((method) => <button key={method.id} type="button" className={`payment-card${paymentMethod === method.id ? ' is-active' : ''}`} onClick={() => setPaymentMethod(method.id)}><strong>{method.label}</strong><span>{method.copy}</span></button>)}</div></section>
        <section className="panel checkout-panel"><h2>Cupom</h2><div className="coupon-row"><input type="text" value={couponInput} onChange={(event) => setCouponInput(event.target.value)} placeholder="Use NEXUS10" /><Button variant="secondary" onClick={handleApplyCoupon}>Aplicar</Button></div><p className="summary-note">Cupom demo disponivel: <strong>{validCouponCode}</strong></p>{statusMessage ? <span className="feedback-note">{statusMessage}</span> : null}</section>
      </div>
      <aside className="panel summary-card"><span className="eyebrow">Confirmacao</span><div className="summary-row"><span>Itens selecionados</span><strong>{items.length}</strong></div><div className="summary-row"><span>Pagamento</span><strong>{paymentMethods.find((item) => item.id === paymentMethod)?.label}</strong></div><div className="summary-row summary-row--total"><span>Total final</span><strong>{formatPrice(total)}</strong></div><div className="checkout-trust"><div><strong>Entrega prevista</strong><span>menos de 30 segundos apos confirmacao</span></div><div><strong>Pos-compra</strong><span>key aparece em Minhas Keys com mascara e copia segura</span></div></div><Button>Finalizar pedido</Button></aside>
    </section>
  );
};
