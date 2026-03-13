import { RatingStars } from '../shared/RatingStars';

export const SocialProofSection = ({ games }) => (
  <section className="container social-proof">
    <div className="section-heading"><span className="eyebrow">Prova social</span><h2>Uma experiencia premium pede validacao real: notas fortes, comentarios claros e retorno rapido.</h2></div>
    <div className="social-proof__grid">{games.map((game) => <article key={game.id} className="panel review-panel"><div className="review-panel__header"><div><span className="eyebrow">{game.title}</span><strong>{game.reviewCount} reviews verificadas</strong></div><RatingStars value={game.averageRating} /></div><p>"{game.reviews[0]?.comment ?? 'A comunidade ainda vai inaugurar este espaco.'}"</p><small>Media {game.averageRating} / 5</small></article>)}</div>
  </section>
);
