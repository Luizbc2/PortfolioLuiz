export const currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
export const dateFormatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
export const formatPrice = (value) => currencyFormatter.format(value);
export const formatDate = (value) => dateFormatter.format(new Date(value));
export const paymentMethodLabel = (method) => ({ credit_card: 'Cartao', pix: 'Pix', paypal: 'PayPal' }[method] ?? method);
export const statusLabel = (status) => ({ pending: 'Pendente', paid: 'Pago', delivering: 'Entregando', completed: 'Concluido', cancelled: 'Cancelado' }[status] ?? status);
