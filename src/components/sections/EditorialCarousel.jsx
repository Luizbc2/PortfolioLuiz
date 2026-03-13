import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../shared/Button';
import { formatPrice } from '../../utils/formatters';

export const EditorialCarousel = ({ games }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGame = useMemo(() => games[activeIndex] ?? games[0], [activeIndex, games]);

  return (
    <section className="container editorial-section">
      <div className="section-heading"><span className="eyebrow">Selecao em movimento</span><h2>Lancamentos e promocoes apresentados como uma capa editorial interativa.</h2></div>
      <div className="editorial-layout">
        <article className="panel editorial-focus">
          <img src={activeGame.heroImageUrl} alt={activeGame.title} />
          <div className="editorial-focus__copy">
            <span className="eyebrow">{activeGame.featureLabel}</span>
            <h3>{activeGame.title}</h3>
            <p>{activeGame.longDescription}</p>
            <div className="editorial-focus__footer"><strong>{formatPrice(activeGame.lowestPrice)}</strong><Button as={Link} to={`/jogo/${activeGame.slug}`} variant="secondary">Abrir pagina</Button></div>
          </div>
        </article>
        <div className="editorial-list">{games.map((game, index) => <button key={game.id} type="button" className={`editorial-thumb panel${index === activeIndex ? ' is-active' : ''}`} onClick={() => setActiveIndex(index)}><img src={game.coverImageUrl} alt={game.title} /><div><span className="eyebrow">{game.featureLabel}</span><strong>{game.title}</strong><small>{formatPrice(game.lowestPrice)}</small></div></button>)}</div>
      </div>
    </section>
  );
};
