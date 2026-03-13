import { Link } from 'react-router-dom';
import { PlatformBadge } from '../shared/PlatformBadge';
import { RatingStars } from '../shared/RatingStars';
import { formatPrice } from '../../utils/formatters';

export const GameCard = ({ game }) => (
  <article className="game-card panel">
    <div className="game-card__media">
      <img src={game.coverImageUrl} alt={game.title} />
      {game.activePromotion ? <span className="discount-pill">-{game.activePromotion.discountPercentage}%</span> : null}
    </div>
    <div className="game-card__body">
      <div className="game-card__meta">
        <span className="eyebrow">{game.featureLabel}</span>
        <RatingStars value={game.averageRating} />
      </div>
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      <div className="tag-row">
        {game.availablePlatforms.map((platform) => <PlatformBadge key={platform.id} platform={platform} />)}
      </div>
      <div className="game-card__footer">
        <div><small>a partir de</small><strong>{formatPrice(game.lowestPrice)}</strong></div>
        <Link className="inline-link" to={`/jogo/${game.slug}`}>Ver detalhe</Link>
      </div>
    </div>
  </article>
);
