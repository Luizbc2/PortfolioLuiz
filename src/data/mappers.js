import { mockDatabase } from './mockDatabase';

const platformMap = new Map(mockDatabase.platforms.map((platform) => [platform.id, platform]));
const categoryMap = new Map(mockDatabase.categories.map((category) => [category.id, category]));
const tagMap = new Map(mockDatabase.tags.map((tag) => [tag.id, tag]));
const listingMap = new Map(mockDatabase.listings.map((listing) => [listing.id, listing]));
const gameMap = new Map(mockDatabase.games.map((game) => [game.id, game]));
const reviewsByGame = mockDatabase.reviews.reduce((accumulator, review) => {
  const current = accumulator.get(review.gameId) ?? [];
  current.push(review);
  accumulator.set(review.gameId, current);
  return accumulator;
}, new Map());

const getListingPromotion = (listingId) => mockDatabase.promotions.find((promotion) => promotion.isActive && promotion.listingIds.includes(listingId));

export const mapListing = (listing) => {
  const platform = platformMap.get(listing.platformId);
  const game = gameMap.get(listing.gameId);
  const promotion = getListingPromotion(listing.id);
  const promotionalPrice = promotion ? Number((listing.price * (1 - promotion.discountPercentage / 100)).toFixed(2)) : listing.price;

  return {
    ...listing,
    platform,
    gameTitle: game?.title,
    gameSlug: game?.slug,
    coverImageUrl: game?.imageUrls?.[0],
    promotion,
    promotionalPrice,
    savings: Number((listing.price - promotionalPrice).toFixed(2)),
    availability: 'Pronta entrega',
  };
};

export const mapGame = (game) => {
  const listings = game.listingIds.map((listingId) => listingMap.get(listingId)).filter(Boolean).map(mapListing);
  const relatedReviews = reviewsByGame.get(game.id) ?? [];
  const averageRating = relatedReviews.length ? Number((relatedReviews.reduce((sum, review) => sum + review.rating, 0) / relatedReviews.length).toFixed(1)) : 0;
  const activePromotion = listings.filter((listing) => listing.promotion).sort((left, right) => right.promotion.discountPercentage - left.promotion.discountPercentage)[0]?.promotion;
  const lowestPrice = Math.min(...listings.map((listing) => listing.promotionalPrice));

  return {
    ...game,
    categories: game.categoryIds.map((id) => categoryMap.get(id)),
    tags: game.tagIds.map((id) => tagMap.get(id)),
    listings,
    coverImageUrl: game.imageUrls[0],
    availablePlatforms: listings.map((listing) => listing.platform),
    lowestPrice,
    activePromotion,
    averageRating,
    reviewCount: relatedReviews.length,
    reviews: relatedReviews,
  };
};

export const getMappedGames = () => mockDatabase.games.map(mapGame);
export const getMappedGameBySlug = (slug) => {
  const game = mockDatabase.games.find((entry) => entry.slug === slug);
  return game ? mapGame(game) : null;
};
export const getMappedListingById = (listingId) => {
  const listing = listingMap.get(listingId);
  return listing ? mapListing(listing) : null;
};
export const mapOrder = (order) => ({
  ...order,
  items: order.items.map((item) => ({
    ...item,
    listing: getMappedListingById(item.listingId),
    game: mapGame(gameMap.get(listingMap.get(item.listingId).gameId)),
  })),
});
export const mapDeliveredKey = (entry) => ({
  ...entry,
  listing: getMappedListingById(entry.listingId),
  game: mapGame(gameMap.get(listingMap.get(entry.listingId).gameId)),
});
