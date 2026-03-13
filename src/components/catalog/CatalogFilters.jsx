import { Button } from '../shared/Button';

export const CatalogFilters = ({ filters, options, searchValue, onSearchChange, onFilterChange, onReset }) => (
  <section className="filters panel">
    <div className="filters__search">
      <label htmlFor="catalog-search">Buscar jogo</label>
      <input id="catalog-search" type="search" value={searchValue} placeholder="RPG tatico, multiplayer, corrida..." onChange={(event) => onSearchChange(event.target.value)} />
    </div>
    <div className="filters__grid">
      <label><span>Plataforma</span><select value={filters.platform} onChange={(event) => onFilterChange('platform', event.target.value)}><option value="">Todas</option>{options.platforms.map((platform) => <option key={platform.id} value={platform.slug}>{platform.name}</option>)}</select></label>
      <label><span>Categoria</span><select value={filters.category} onChange={(event) => onFilterChange('category', event.target.value)}><option value="">Todas</option>{options.categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label>
      <label><span>Tag</span><select value={filters.tag} onChange={(event) => onFilterChange('tag', event.target.value)}><option value="">Todas</option>{options.tags.map((tag) => <option key={tag.id} value={tag.id}>{tag.name}</option>)}</select></label>
      <label><span>Ordenacao</span><select value={filters.sort} onChange={(event) => onFilterChange('sort', event.target.value)}><option value="featured">Curadoria</option><option value="release">Mais recentes</option><option value="price-asc">Menor preco</option><option value="price-desc">Maior preco</option><option value="rating">Melhor avaliados</option></select></label>
      <label><span>Preco minimo</span><input type="number" min="0" step="10" value={filters.minPrice} onChange={(event) => onFilterChange('minPrice', event.target.value)} /></label>
      <label><span>Preco maximo</span><input type="number" min="0" step="10" value={filters.maxPrice} onChange={(event) => onFilterChange('maxPrice', event.target.value)} /></label>
    </div>
    <div className="filters__footer">
      <label className="toggle"><input type="checkbox" checked={filters.promotion === 'true'} onChange={(event) => onFilterChange('promotion', event.target.checked ? 'true' : '')} /><span>Somente promos ativas</span></label>
      <Button variant="secondary" onClick={onReset}>Limpar filtros</Button>
    </div>
  </section>
);
