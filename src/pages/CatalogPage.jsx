import { startTransition, useDeferredValue, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CatalogFilters } from '../components/catalog/CatalogFilters';
import { GameCard } from '../components/catalog/GameCard';
import { EmptyState } from '../components/shared/EmptyState';
import { useCatalog } from '../hooks/useCatalog';

const readFilters = (searchParams) => ({
  search: searchParams.get('search') ?? '',
  platform: searchParams.get('platform') ?? '',
  category: searchParams.get('category') ?? '',
  tag: searchParams.get('tag') ?? '',
  sort: searchParams.get('sort') ?? 'featured',
  minPrice: searchParams.get('minPrice') ?? '',
  maxPrice: searchParams.get('maxPrice') ?? '',
  promotion: searchParams.get('promotion') ?? '',
});

export const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo(() => readFilters(searchParams), [searchParams]);
  const [searchValue, setSearchValue] = useState(filters.search);
  const deferredSearch = useDeferredValue(searchValue);
  const { data, isLoading } = useCatalog({ ...filters, search: deferredSearch });

  useEffect(() => { setSearchValue(filters.search); }, [filters.search]);
  useEffect(() => {
    startTransition(() => {
      const next = new URLSearchParams(searchParams);
      if (deferredSearch) next.set('search', deferredSearch); else next.delete('search');
      setSearchParams(next, { replace: true });
    });
  }, [deferredSearch]);

  const updateFilter = (key, value) => {
    startTransition(() => {
      const next = new URLSearchParams(searchParams);
      if (value) next.set(key, value); else next.delete(key);
      setSearchParams(next, { replace: true });
    });
  };

  const resetFilters = () => {
    setSearchParams({ sort: 'featured' }, { replace: true });
    setSearchValue('');
  };

  return (
    <section className="container stack-xl">
      <div className="page-intro page-intro--compact">
        <span className="eyebrow">Catalogo</span>
        <h1>Filtre por plataforma, promocao, categoria e faixa de preco sem perder impacto visual.</h1>
        <p>O catalogo da Nexus Games foi pensado para discovery rapido, com cards densos, leitura limpa e decisao comercial clara.</p>
      </div>
      <CatalogFilters filters={filters} options={data ?? { platforms: [], categories: [], tags: [] }} searchValue={searchValue} onSearchChange={setSearchValue} onFilterChange={updateFilter} onReset={resetFilters} />
      {isLoading ? (
        <div className="catalog-grid">{Array.from({ length: 4 }).map((_, index) => <div key={index} className="panel skeleton-card" />)}</div>
      ) : data && data.games.length ? (
        <>
          <div className="catalog-toolbar"><strong>{data.total} resultados</strong><span>Query string estavel para filtros de loja.</span></div>
          <div className="catalog-grid">{data.games.map((game) => <GameCard key={game.id} game={game} />)}</div>
        </>
      ) : (
        <EmptyState title="Nenhum jogo encontrou sua combinacao de filtros." description="Tente remover categoria, plataforma ou faixa de preco para abrir mais resultados." actionLabel="Ver tudo" actionHref="/catalogo" />
      )}
    </section>
  );
};
