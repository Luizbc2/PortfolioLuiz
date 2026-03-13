import { useState } from 'react';
import { EmptyState } from '../components/shared/EmptyState';
import { PlatformBadge } from '../components/shared/PlatformBadge';
import { useDeliveredKeys } from '../hooks/useDeliveredKeys';
import { formatDate } from '../utils/formatters';

export const KeysPage = () => {
  const { data: keys, isLoading } = useDeliveredKeys();
  const [revealedId, setRevealedId] = useState('');
  const [copiedId, setCopiedId] = useState('');
  if (isLoading) return <section className="container page-intro"><div className="panel skeleton-page" /></section>;
  if (!keys?.length) return <section className="container"><EmptyState title="Nenhuma key entregue ainda." description="Assim que um pedido for concluido, ele aparece aqui com mascara e acao de copia." actionLabel="Abrir catalogo" actionHref="/catalogo" /></section>;

  return (
    <section className="container stack-xl">
      <div className="page-intro page-intro--compact"><span className="eyebrow">Minhas Keys</span><h1>Biblioteca segura para consultar, revelar e copiar chaves entregues.</h1></div>
      <div className="keys-grid">{keys.map((entry) => { const isRevealed = revealedId === entry.id; const displayKey = isRevealed ? entry.fullKey : entry.maskedKey; return <article key={entry.id} className="panel key-card"><div className="key-card__header"><div><span className="eyebrow">{entry.game.title}</span><PlatformBadge platform={entry.listing.platform} /></div><span>{formatDate(entry.deliveredAt)}</span></div><code>{displayKey}</code><div className="key-card__actions"><button type="button" className="inline-link" onClick={() => setRevealedId(isRevealed ? '' : entry.id)}>{isRevealed ? 'Ocultar' : 'Revelar'}</button><button type="button" className="inline-link" onClick={async () => { await navigator.clipboard.writeText(entry.fullKey); setCopiedId(entry.id); window.setTimeout(() => setCopiedId(''), 1200); }}>{copiedId === entry.id ? 'Copiada' : 'Copiar'}</button></div></article>; })}</div>
    </section>
  );
};
