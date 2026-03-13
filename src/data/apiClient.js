import { mockDatabase } from './mockDatabase';
import { getMappedGameBySlug, getMappedGames, getMappedListingById, mapDeliveredKey, mapOrder } from './mappers';

const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

const sortGames = (games, sort) => {
  const sortable = [...games];
  switch (sort) {
    case 'price-asc':
      return sortable.sort((left, right) => left.lowestPrice - right.lowestPrice);
    case 'price-desc':
      return sortable.sort((left, right) => right.lowestPrice - left.lowestPrice);
    case 'rating':
      return sortable.sort((left, right) => right.averageRating - left.averageRating);
    case 'release':
      return sortable.sort((left, right) => new Date(right.releaseDate).getTime() - new Date(left.releaseDate).getTime());
    default:
      return sortable.sort((left, right) => left.title.localeCompare(right.title));
  }
};

const matchesFilter = (game, filters) => {
  const search = (filters.search ?? '').trim().toLowerCase();
  const minPrice = Number(filters.minPrice ?? 0);
  const maxPrice = Number(filters.maxPrice ?? 0);

  if (search && !`${game.title} ${game.description} ${game.tags.map((entry) => entry.name).join(' ')}`.toLowerCase().includes(search)) return false;
  if (filters.platform && !game.availablePlatforms.some((entry) => entry.slug === filters.platform)) return false;
  if (filters.category && !game.categories.some((entry) => entry.id === filters.category)) return false;
  if (filters.tag && !game.tags.some((entry) => entry.id === filters.tag)) return false;
  if (filters.promotion === 'true' && !game.activePromotion) return false;
  if (minPrice && game.lowestPrice < minPrice) return false;
  if (maxPrice && game.lowestPrice > maxPrice) return false;
  return true;
};

export const apiClient = {
  async getStorefront() {
    await wait(250);
    const games = getMappedGames();
    return {
      featuredGame: games[0],
      spotlightGames: games.slice(0, 3),
      trendingGames: games.slice(1),
      platforms: mockDatabase.platforms,
      metrics: mockDatabase.featuredMetrics,
    };
  },
  async getCatalog(filters = {}) {
    await wait(360);
    const games = sortGames(getMappedGames().filter((game) => matchesFilter(game, filters)), filters.sort);
    return { games, total: games.length, platforms: mockDatabase.platforms, categories: mockDatabase.categories, tags: mockDatabase.tags };
  },
  async getGameDetails(slug) {
    await wait(320);
    const game = getMappedGameBySlug(slug);
    if (!game) return null;
    return { game, relatedGames: getMappedGames().filter((entry) => entry.id !== game.id).slice(0, 3) };
  },
  async getPromotions() {
    await wait(240);
    return mockDatabase.promotions.filter((promotion) => promotion.isActive).map((promotion) => ({ ...promotion, games: getMappedGames().filter((game) => game.listings.some((listing) => promotion.listingIds.includes(listing.id))) }));
  },
  async getAccount() {
    await wait(200);
    return { user: mockDatabase.users[0], stats: { ordersCompleted: mockDatabase.orders.filter((order) => order.status === 'completed').length, keysDelivered: mockDatabase.deliveredKeys.length, favoritePlatform: 'Steam' } };
  },
  async getOrders() {
    await wait(260);
    return mockDatabase.orders.map(mapOrder);
  },
  async getDeliveredKeys() {
    await wait(220);
    return mockDatabase.deliveredKeys.map(mapDeliveredKey);
  },
  async getListing(listingId) {
    await wait(80);
    return getMappedListingById(listingId);
  },
};
