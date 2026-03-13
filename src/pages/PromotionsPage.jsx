import { Link } from 'react-router-dom';
import { Button } from '../components/shared/Button';
import { usePromotions } from '../hooks/usePromotions';
import { formatPrice } from '../utils/formatters';

export const PromotionsPage = () => {
  const { data, isLoading } = usePromotions();
  if (isLoading || !data) return <section className="container page-intro"><div className="panel skeleton-page" /></section>;

  return (
    <section className="container stack-xl">
      <div className="page-intro page-intro--compact"><span className="eyebrow">Promocoes</span><h1>Campanhas editoriais com desconto evidente e narrativa comercial clara.</h1></div>
      <div className="promo-grid">{data.map((promotion) => <article key={promotion.id} className="panel promo-card"><div className="promo-card__lead"><span className="eyebrow">{promotion.name}</span><h2>-{promotion.discountPercentage}% em destaque</h2><p>{promotion.description}</p></div><div className="promo-card__games">{promotion.games.map((game) => <div key={game.id} className="promo-line"><div><strong>{game.title}</strong><span>a partir de {formatPrice(game.lowestPrice)}</span></div><Button as={Link} to={`/jogo/${game.slug}`} variant="secondary">Ver jogo</Button></div>)}</div></article>)}</div>
    </section>
  );
};
