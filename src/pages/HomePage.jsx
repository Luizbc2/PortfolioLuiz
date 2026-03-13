import { GameCard } from '../components/catalog/GameCard';
import { EditorialCarousel } from '../components/sections/EditorialCarousel';
import { HeroSection } from '../components/sections/HeroSection';
import { InstantDeliverySection } from '../components/sections/InstantDeliverySection';
import { PlatformRail } from '../components/sections/PlatformRail';
import { SocialProofSection } from '../components/sections/SocialProofSection';
import { useStorefront } from '../hooks/useStorefront';

export const HomePage = () => {
  const { data, isLoading } = useStorefront();
  if (isLoading || !data) return <section className="container page-intro"><div className="panel skeleton-page" /></section>;

  return (
    <>
      <HeroSection featuredGame={data.featuredGame} metrics={data.metrics} />
      <PlatformRail platforms={data.platforms} />
      <InstantDeliverySection />
      <EditorialCarousel games={data.spotlightGames} />
      <section className="container storefront-grid">
        <div className="section-heading"><span className="eyebrow">Radar de agora</span><h2>Jogos que estao movimentando a vitrine da Nexus.</h2></div>
        <div className="catalog-grid">{data.trendingGames.map((game) => <GameCard key={game.id} game={game} />)}</div>
      </section>
      <SocialProofSection games={data.spotlightGames} />
    </>
  );
};
