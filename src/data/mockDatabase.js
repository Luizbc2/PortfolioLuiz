const svgToDataUri = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const createArtwork = ({ title, subtitle, accent, secondary, tone, size = 'poster' }) => {
  const sizes = {
    poster: [760, 980],
    gallery: [1280, 720],
    hero: [1440, 920],
  };
  const [width, height] = sizes[size] ?? sizes.poster;

  return svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${tone}" />
          <stop offset="55%" stop-color="#111413" />
          <stop offset="100%" stop-color="#050807" />
        </linearGradient>
        <linearGradient id="flare" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.05" />
          <stop offset="100%" stop-color="${secondary}" stop-opacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)" rx="32" />
      <circle cx="${width * 0.75}" cy="${height * 0.22}" r="${height * 0.18}" fill="${secondary}" opacity="0.18" />
      <circle cx="${width * 0.22}" cy="${height * 0.73}" r="${height * 0.22}" fill="${accent}" opacity="0.16" />
      <path d="M0 ${height * 0.78}C${width * 0.1} ${height * 0.62},${width * 0.28} ${height * 0.91},${width * 0.45} ${height * 0.72}S${width * 0.8} ${height * 0.42},${width} ${height * 0.6}V${height}H0Z" fill="url(#flare)" opacity="0.6" />
      <path d="M${width * 0.08} ${height * 0.15}H${width * 0.92}" stroke="${accent}" stroke-opacity="0.45" stroke-width="2" />
      <path d="M${width * 0.08} ${height * 0.18}H${width * 0.62}" stroke="#f7efd4" stroke-opacity="0.15" stroke-width="8" />
      <text x="${width * 0.08}" y="${height * 0.34}" fill="#f5f0e1" font-family="Space Grotesk, Arial, sans-serif" font-size="${size === 'poster' ? 84 : 108}" font-weight="700" letter-spacing="2">${title}</text>
      <text x="${width * 0.08}" y="${height * 0.42}" fill="${accent}" font-family="Space Grotesk, Arial, sans-serif" font-size="${size === 'poster' ? 24 : 32}" letter-spacing="8">${subtitle}</text>
      <text x="${width * 0.08}" y="${height * 0.88}" fill="#f5f0e1" fill-opacity="0.75" font-family="Sora, Arial, sans-serif" font-size="${size === 'poster' ? 18 : 26}">NEXUS GAMES CURATION</text>
    </svg>
  `);
};

const platformIds = {
  steam: 'platform-steam',
  playstation: 'platform-playstation',
  xbox: 'platform-xbox',
  nintendo: 'platform-nintendo',
};

export const mockDatabase = {
  platforms: [
    { id: platformIds.steam, name: 'Steam', slug: 'steam', accent: '#7dffb7', isActive: true },
    { id: platformIds.playstation, name: 'PlayStation', slug: 'playstation', accent: '#56c7ff', isActive: true },
    { id: platformIds.xbox, name: 'Xbox', slug: 'xbox', accent: '#9dff65', isActive: true },
    { id: platformIds.nintendo, name: 'Nintendo Switch', slug: 'nintendo-switch', accent: '#ffb84d', isActive: true },
  ],
  categories: [
    { id: 'cat-rpg', name: 'RPG' },
    { id: 'cat-action', name: 'Acao' },
    { id: 'cat-tactics', name: 'Estrategia' },
    { id: 'cat-racing', name: 'Corrida' },
    { id: 'cat-adventure', name: 'Aventura' },
  ],
  tags: [
    { id: 'tag-multiplayer', name: 'Multiplayer' },
    { id: 'tag-story-rich', name: 'Narrativo' },
    { id: 'tag-open-world', name: 'Mundo aberto' },
    { id: 'tag-competitive', name: 'Competitivo' },
    { id: 'tag-indie', name: 'Indie' },
    { id: 'tag-tactical', name: 'Tatico' },
  ],
  games: [
    {
      id: 'game-star-protocol',
      slug: 'star-protocol',
      title: 'Star Protocol',
      description: 'Uma opera espacial tensa, com combate tatico e exploracao em camadas.',
      longDescription: 'Star Protocol coloca voce no comando de uma celula clandestina navegando por uma metropole orbital fragmentada. A campanha mistura infiltracao, exploracao vertical e conflitos de alta pressao, enquanto sistemas interligados reagem as suas decisoes em tempo real.',
      releaseDate: '2026-01-18',
      imageUrls: [
        createArtwork({ title: 'STAR', subtitle: 'PROTOCOL', accent: '#8ff7c6', secondary: '#1eb5b5', tone: '#1d2f29', size: 'poster' }),
        createArtwork({ title: 'STAR', subtitle: 'PROTOCOL // CITY', accent: '#8ff7c6', secondary: '#f0aa5b', tone: '#10201e', size: 'gallery' }),
        createArtwork({ title: 'STAR', subtitle: 'PROTOCOL // RAID', accent: '#8ff7c6', secondary: '#32f6ff', tone: '#182324', size: 'gallery' }),
      ],
      heroImageUrl: createArtwork({ title: 'STAR', subtitle: 'PROTOCOL', accent: '#8ff7c6', secondary: '#1eb5b5', tone: '#1d2f29', size: 'hero' }),
      categoryIds: ['cat-rpg', 'cat-action'],
      tagIds: ['tag-story-rich', 'tag-open-world'],
      listingIds: ['listing-star-steam', 'listing-star-playstation'],
      isActive: true,
      featureLabel: 'Escolha da semana',
    },
    {
      id: 'game-velvet-reboot',
      slug: 'velvet-reboot',
      title: 'Velvet Reboot',
      description: 'Corrida futurista com duelos urbanos, drift tecnico e estetica de revista de moda.',
      longDescription: 'Velvet Reboot cruza velocidade extrema com direcao de arte sofisticada. Cada circuito e uma peca cenografica viva, feita para desafiar reflexos e premiar dominio de linha perfeita. O modo online destaca temporadas competitivas e rankings por plataforma.',
      releaseDate: '2025-11-03',
      imageUrls: [
        createArtwork({ title: 'VELVET', subtitle: 'REBOOT', accent: '#7aeef1', secondary: '#f0aa5b', tone: '#271d1a', size: 'poster' }),
        createArtwork({ title: 'VELVET', subtitle: 'REBOOT // CIRCUIT', accent: '#7aeef1', secondary: '#ff905e', tone: '#321c18', size: 'gallery' }),
        createArtwork({ title: 'VELVET', subtitle: 'REBOOT // AFTERGLOW', accent: '#7aeef1', secondary: '#ffe86b', tone: '#1e2028', size: 'gallery' }),
      ],
      heroImageUrl: createArtwork({ title: 'VELVET', subtitle: 'REBOOT', accent: '#7aeef1', secondary: '#f0aa5b', tone: '#271d1a', size: 'hero' }),
      categoryIds: ['cat-racing', 'cat-action'],
      tagIds: ['tag-competitive', 'tag-multiplayer'],
      listingIds: ['listing-velvet-steam', 'listing-velvet-xbox', 'listing-velvet-playstation'],
      isActive: true,
      featureLabel: 'Top em performance',
    },
    {
      id: 'game-ashfall-tactics',
      slug: 'ashfall-tactics',
      title: 'Ashfall Tactics',
      description: 'Estrategia sombria por turnos com esquadroes modulares e mapas destruiveis.',
      longDescription: 'Ashfall Tactics foi desenhado para quem gosta de leitura de terreno, composicao de time e execucao limpa. A campanha progride em uma zona vulcanica instavel, em que cada avanco exige posicionamento, recursos limitados e decisoes sob pressao.',
      releaseDate: '2025-08-21',
      imageUrls: [
        createArtwork({ title: 'ASHFALL', subtitle: 'TACTICS', accent: '#d5ff88', secondary: '#ff9f4d', tone: '#241b13', size: 'poster' }),
        createArtwork({ title: 'ASHFALL', subtitle: 'TACTICS // OUTPOST', accent: '#d5ff88', secondary: '#ff9f4d', tone: '#2b1b16', size: 'gallery' }),
        createArtwork({ title: 'ASHFALL', subtitle: 'TACTICS // STRIKE', accent: '#d5ff88', secondary: '#efe8b9', tone: '#201715', size: 'gallery' }),
      ],
      heroImageUrl: createArtwork({ title: 'ASHFALL', subtitle: 'TACTICS', accent: '#d5ff88', secondary: '#ff9f4d', tone: '#241b13', size: 'hero' }),
      categoryIds: ['cat-tactics', 'cat-rpg'],
      tagIds: ['tag-tactical', 'tag-story-rich'],
      listingIds: ['listing-ashfall-steam', 'listing-ashfall-nintendo'],
      isActive: true,
      featureLabel: 'Curadoria tatica',
    },
    {
      id: 'game-orbit-run-prime',
      slug: 'orbit-run-prime',
      title: 'Orbit Run Prime',
      description: 'Aventura arcade com parkour orbital, desafios solo e speedrun competitivo.',
      longDescription: 'Orbit Run Prime combina rotas de precisao, fisica precisa e progressao inteligente. O resultado e uma experiencia com leitura instantanea, sensacao de dominio crescente e mapas pensados para quem gosta de repetir fases ate lapidar a execucao perfeita.',
      releaseDate: '2025-06-12',
      imageUrls: [
        createArtwork({ title: 'ORBIT', subtitle: 'RUN PRIME', accent: '#95ffd1', secondary: '#4ec7ff', tone: '#172228', size: 'poster' }),
        createArtwork({ title: 'ORBIT', subtitle: 'RUN PRIME // SPIRE', accent: '#95ffd1', secondary: '#4ec7ff', tone: '#19272c', size: 'gallery' }),
        createArtwork({ title: 'ORBIT', subtitle: 'RUN PRIME // FLOW', accent: '#95ffd1', secondary: '#f4be62', tone: '#132126', size: 'gallery' }),
      ],
      heroImageUrl: createArtwork({ title: 'ORBIT', subtitle: 'RUN PRIME', accent: '#95ffd1', secondary: '#4ec7ff', tone: '#172228', size: 'hero' }),
      categoryIds: ['cat-adventure', 'cat-action'],
      tagIds: ['tag-indie', 'tag-competitive'],
      listingIds: ['listing-orbit-steam', 'listing-orbit-xbox'],
      isActive: true,
      featureLabel: 'Acelere agora',
    },
  ],
  listings: [
    { id: 'listing-star-steam', gameId: 'game-star-protocol', platformId: platformIds.steam, price: 219.9, isActive: true },
    { id: 'listing-star-playstation', gameId: 'game-star-protocol', platformId: platformIds.playstation, price: 249.9, isActive: true },
    { id: 'listing-velvet-steam', gameId: 'game-velvet-reboot', platformId: platformIds.steam, price: 159.9, isActive: true },
    { id: 'listing-velvet-xbox', gameId: 'game-velvet-reboot', platformId: platformIds.xbox, price: 169.9, isActive: true },
    { id: 'listing-velvet-playstation', gameId: 'game-velvet-reboot', platformId: platformIds.playstation, price: 179.9, isActive: true },
    { id: 'listing-ashfall-steam', gameId: 'game-ashfall-tactics', platformId: platformIds.steam, price: 144.9, isActive: true },
    { id: 'listing-ashfall-nintendo', gameId: 'game-ashfall-tactics', platformId: platformIds.nintendo, price: 154.9, isActive: true },
    { id: 'listing-orbit-steam', gameId: 'game-orbit-run-prime', platformId: platformIds.steam, price: 119.9, isActive: true },
    { id: 'listing-orbit-xbox', gameId: 'game-orbit-run-prime', platformId: platformIds.xbox, price: 124.9, isActive: true },
  ],
  promotions: [
    { id: 'promo-circuito', name: 'Circuito Nitro', description: 'Selecao com desconto para jogos que pedem performance limpa e resposta imediata.', discountPercentage: 18, isActive: true, listingIds: ['listing-velvet-steam', 'listing-velvet-xbox', 'listing-velvet-playstation'] },
    { id: 'promo-deep-space', name: 'Deep Space Access', description: 'Oferta editorial para titulos de ficcao cientifica e descoberta de universo.', discountPercentage: 12, isActive: true, listingIds: ['listing-star-steam', 'listing-star-playstation'] },
    { id: 'promo-tactical-window', name: 'Window Tatico', description: 'Curadoria para quem procura profundidade sistemica sem perder ritmo.', discountPercentage: 22, isActive: true, listingIds: ['listing-ashfall-steam', 'listing-ashfall-nintendo'] },
  ],
  users: [
    { id: 'user-demo', email: 'mia@nexus.games', username: 'miaorbit', fullName: 'Mia Carvalho', avatarUrl: createArtwork({ title: 'M', subtitle: 'CURATOR', accent: '#8ff7c6', secondary: '#f0aa5b', tone: '#232825', size: 'poster' }) },
  ],
  reviews: [
    { id: 'review-1', gameId: 'game-star-protocol', userId: 'user-demo', rating: 5, comment: 'Direcao de arte impecavel e combate com sensacao premium do inicio ao fim.', createdAt: '2026-02-19T18:30:00Z' },
    { id: 'review-2', gameId: 'game-star-protocol', userId: 'critic-02', rating: 4, comment: 'Exploracao vertical excelente e entrega muito forte nas missoes finais.', createdAt: '2026-02-22T16:15:00Z' },
    { id: 'review-3', gameId: 'game-velvet-reboot', userId: 'critic-03', rating: 5, comment: 'Velocidade, estilo e um senso de acabamento raro em jogos de corrida recentes.', createdAt: '2026-01-13T15:10:00Z' },
    { id: 'review-4', gameId: 'game-ashfall-tactics', userId: 'critic-04', rating: 4, comment: 'Mapas destrutiveis e sistemas de cobertura deixam cada partida diferente.', createdAt: '2026-02-09T20:50:00Z' },
    { id: 'review-5', gameId: 'game-orbit-run-prime', userId: 'critic-05', rating: 4, comment: 'Extremamente gostoso de dominar e perfeito para maratonas de speedrun.', createdAt: '2026-02-12T11:45:00Z' },
  ],
  orders: [
    { id: 'order-001', orderNumber: 'NX-20491', userId: 'user-demo', status: 'completed', subtotal: 339.8, discountAmount: 31.98, totalAmount: 307.82, paymentMethod: 'pix', createdAt: '2026-02-27T21:33:00Z', items: [{ id: 'order-item-1', listingId: 'listing-velvet-steam', price: 131.12 }, { id: 'order-item-2', listingId: 'listing-orbit-xbox', price: 112.45 }] },
    { id: 'order-002', orderNumber: 'NX-20544', userId: 'user-demo', status: 'delivering', subtotal: 219.9, discountAmount: 26.39, totalAmount: 193.51, paymentMethod: 'credit_card', createdAt: '2026-03-08T19:05:00Z', items: [{ id: 'order-item-3', listingId: 'listing-star-steam', price: 193.51 }] },
  ],
  deliveredKeys: [
    { id: 'delivered-key-1', userId: 'user-demo', orderItemId: 'order-item-1', listingId: 'listing-velvet-steam', maskedKey: 'NR5V-****-****-K8PT', fullKey: 'NR5V-7M4P-GQ2A-K8PT', deliveredAt: '2026-02-27T21:35:00Z' },
    { id: 'delivered-key-2', userId: 'user-demo', orderItemId: 'order-item-2', listingId: 'listing-orbit-xbox', maskedKey: 'XP44-****-****-Q1ZR', fullKey: 'XP44-LM2D-FA8K-Q1ZR', deliveredAt: '2026-02-27T21:36:00Z' },
  ],
  featuredMetrics: [
    { label: 'Entrega media', value: '< 30s' },
    { label: 'Avaliacoes positivas', value: '98,4%' },
    { label: 'Plataformas ativas', value: '4 hubs' },
  ],
};
