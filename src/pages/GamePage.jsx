import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GameCard } from '../components/catalog/GameCard';
import { Button } from '../components/shared/Button';
import { EmptyState } from '../components/shared/EmptyState';
import { PlatformBadge } from '../components/shared/PlatformBadge';
import { RatingStars } from '../components/shared/RatingStars';
import { useCart } from '../context/CartContext';
import { useGameDetails } from '../hooks/useGameDetails';
import { formatDate, formatPrice } from '../utils/formatters';

export const GamePage = () => {
  const { slug } = useParams();
  const { addItem, isInCart } = useCart();
  const { data, isLoading } = useGameDetails(slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedListingId, setSelectedListingId] = useState('');
  const [feedback, setFeedback] = useState('');
  const game = data?.game;
  const selectedListing = useMemo(() => {
    if (!game) return null;
    return game.listings.find((listing) => listing.id === selectedListingId) ?? game.listings[0];
  }, [game, selectedListingId]);

  if (isLoading) return <section className="container page-intro"><div className="panel skeleton-page" /></section>;
  if (!game) return <section className="container"><EmptyState title="Jogo nao encontrado." description="O slug solicitado nao retornou um titulo valido na base simulada." actionLabel="Voltar ao catalogo" actionHref="/catalogo" /></section>;

  const handleAdd = () => {
    addItem(selectedListing.id);
    setFeedback('Adicionado ao carrinho');
    window.setTimeout(() => setFeedback(''), 1400);
  };

  return (
    <section className="container game-page">
      <div className="game-page__hero">
        <div className="panel gallery-panel">
          <img src={game.imageUrls[selectedImageIndex]} alt={game.title} className="gallery-panel__main" />
          <div className="gallery-strip">{game.imageUrls.map((imageUrl, index) => <button key={imageUrl} type="button" className={index === selectedImageIndex ? 'is-active' : ''} onClick={() => setSelectedImageIndex(index)}><img src={imageUrl} alt={`${game.title} vista ${index + 1}`} /></button>)}</div>
        </div>
        <aside className="panel game-sidebar">
          <span className="eyebrow">{game.featureLabel}</span>
          <h1>{game.title}</h1>
          <p>{game.longDescription}</p>
          <div className="inline-meta"><RatingStars value={game.averageRating} /><span>{game.reviewCount} reviews</span><span>Lancamento {formatDate(game.releaseDate)}</span></div>
          <div className="tag-row">{game.categories.map((category) => <span key={category.id} className="soft-chip">{category.name}</span>)}{game.tags.map((tag) => <span key={tag.id} className="soft-chip soft-chip--muted">{tag.name}</span>)}</div>
          <div className="listing-selector">{game.listings.map((listing) => <button key={listing.id} type="button" className={`listing-card${listing.id === selectedListing.id ? ' is-active' : ''}`} onClick={() => setSelectedListingId(listing.id)}><PlatformBadge platform={listing.platform} /><div><strong>{formatPrice(listing.promotionalPrice)}</strong>{listing.promotion ? <small>de {formatPrice(listing.price)} | -{listing.promotion.discountPercentage}%</small> : <small>{listing.availability}</small>}</div></button>)}</div>
          <div className="sticky-buy panel panel--inset">
            <div><small>Plataforma escolhida</small><strong>{selectedListing.platform.name}</strong></div>
            <div><small>Preco final</small><strong>{formatPrice(selectedListing.promotionalPrice)}</strong></div>
            <Button onClick={handleAdd}>{isInCart(selectedListing.id) ? 'Ja no carrinho' : 'Adicionar ao carrinho'}</Button>
            <Button as={Link} to="/checkout" variant="secondary">Ir para checkout</Button>
            {feedback ? <span className="feedback-note">{feedback}</span> : null}
          </div>
        </aside>
      </div>
      <div className="page-block"><div className="section-heading"><span className="eyebrow">Reviews</span><h2>Comentarios com leitura direta e peso de decisao.</h2></div><div className="social-proof__grid">{game.reviews.map((review) => <article key={review.id} className="panel review-panel"><div className="review-panel__header"><strong>Usuario verificado</strong><RatingStars value={review.rating} /></div><p>"{review.comment}"</p></article>)}</div></div>
      <div className="page-block"><div className="section-heading"><span className="eyebrow">Continue explorando</span><h2>Outros jogos alinhados com a curadoria da loja.</h2></div><div className="catalog-grid">{data.relatedGames.map((relatedGame) => <GameCard key={relatedGame.id} game={relatedGame} />)}</div></div>
    </section>
  );
};
