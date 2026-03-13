import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../shared/Button';
import { PlatformBadge } from '../shared/PlatformBadge';
import { formatPrice } from '../../utils/formatters';

export const HeroSection = ({ featuredGame, metrics }) => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const transformStyle = useMemo(() => ({ '--pointer-x': `${pointer.x}px`, '--pointer-y': `${pointer.y}px` }), [pointer]);

  return (
    <section className="hero-section" style={transformStyle} onPointerMove={(event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      setPointer({ x: event.clientX - bounds.left - bounds.width / 2, y: event.clientY - bounds.top - bounds.height / 2 });
    }}>
      <div className="hero-section__image"><img src={featuredGame.heroImageUrl} alt={featuredGame.title} /></div>
      <div className="hero-grid container">
        <div className="hero-copy panel">
          <span className="eyebrow">NEXUS GAMES / FRONTLINE CURATION</span>
          <h1>Keys premium com atmosfera de marca, ritmo rapido e confianca total.</h1>
          <p>A Nexus Games transforma a vitrine de jogos em uma experiencia editorial: plataformas claras, promocoes curadas e entrega instantanea logo apos o pagamento.</p>
          <div className="hero-actions"><Button as={Link} to={`/jogo/${featuredGame.slug}`}>Explorar destaque</Button><Button as={Link} to="/catalogo" variant="secondary">Ver catalogo completo</Button></div>
          <div className="tag-row">{featuredGame.availablePlatforms.map((platform) => <PlatformBadge key={platform.id} platform={platform} />)}</div>
        </div>
        <aside className="hero-panel panel">
          <span className="eyebrow">{featuredGame.featureLabel}</span>
          <h2>{featuredGame.title}</h2>
          <p>{featuredGame.description}</p>
          <div className="hero-pricing">
            <div><small>Preco editorial</small><strong>{formatPrice(featuredGame.lowestPrice)}</strong></div>
            {featuredGame.activePromotion ? <div><small>Oferta ativa</small><strong>-{featuredGame.activePromotion.discountPercentage}%</strong></div> : null}
          </div>
          <div className="metrics-grid">{metrics.map((metric) => <div key={metric.label} className="metric-card"><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
        </aside>
      </div>
    </section>
  );
};
