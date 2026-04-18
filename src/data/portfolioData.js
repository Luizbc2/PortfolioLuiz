export const portfolioOwner = {
  fullName: 'Luiz Barbosa',
  shortName: 'Luiz',
  role: 'Front-end Developer',
  location: 'Brasil',
  headline: 'Interfaces com cara de produto real, nao de template generico.',
  summary:
    'Sou desenvolvedor front-end focado em transformar ideia em interface publica, organizada e pronta para deploy. Trabalho com React, Vite, Node e integrações reais para construir paginas, paineis e fluxos que ficam bonitos e funcionam de verdade.',
  availability: 'Disponivel para freelance, portfolio builds e oportunidades front-end.',
  githubUrl: 'https://github.com/Luizbc2',
  primaryCta: { label: 'Ver projetos', href: '#projetos' },
  secondaryCta: { label: 'Abrir Horarius online', href: 'https://horarius.vercel.app/login' },
  metrics: [
    { label: 'Projetos em destaque', value: '4 entregas' },
    { label: 'Stack principal', value: 'React + Node' },
    { label: 'Deploy real', value: 'Vercel + Supabase' },
  ],
};

export const focusAreas = [
  {
    title: 'Landing pages e portfolio',
    description: 'Experiencias visuais fortes, mobile-first e com narrativa clara para apresentar produto ou profissional.',
  },
  {
    title: 'Painel interno e CRUD',
    description: 'Fluxos autenticados com listagens, filtros, formularios, estados vazios e regras de isolamento por conta.',
  },
  {
    title: 'Publicacao e deploy',
    description: 'Configuracao de Vercel, variaveis de ambiente, banco Postgres e integracao entre frontend e backend.',
  },
];

export const stackGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'React Router', 'CSS customizado', 'UI system', 'Responsividade'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'TypeScript', 'JWT', 'Sequelize', 'REST API'],
  },
  {
    title: 'Infra',
    items: ['Vercel', 'Supabase Postgres', 'GitHub', 'Deploy config', 'Env vars', 'Monorepo'],
  },
];

export const processSteps = [
  {
    title: 'Entender o objetivo',
    description: 'Comeco pelo que a pagina ou sistema precisa provar: venda, demonstracao, cadastro, painel ou apresentacao pessoal.',
  },
  {
    title: 'Construir com clareza visual',
    description: 'Organizo hierarquia, secoes, CTA e ritmo da interface para a navegacao ficar simples sem perder personalidade.',
  },
  {
    title: 'Subir e validar',
    description: 'Nao paro no layout. Fecho deploy, variaveis, conexao com API e uma rodada de validacao para o projeto ficar apresentavel.',
  },
];

export const projects = [
  {
    slug: 'horarius-web',
    title: 'Horarius Web',
    category: 'Full stack / agenda',
    year: '2026',
    summary:
      'Sistema de agenda com autenticacao, cadastro de clientes, servicos, profissionais e visao separada por conta.',
    description:
      'O Horarius nasceu para organizar operacao de atendimento em um painel unico. A entrega inclui login, CRUDs autenticados, agenda e deploy publico integrado a backend Node e banco Postgres.',
    impact:
      'Projeto completo para demonstrar fluxo de produto real: interface, backend, banco, publicacao e correcoes de deploy em producao.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Sequelize', 'Supabase', 'Vercel'],
    highlights: [
      'Login e autenticacao por token',
      'Clientes, profissionais, servicos e agenda por usuario',
      'Deploy frontend + backend + banco',
    ],
    liveUrl: 'https://horarius.vercel.app/login',
    callout: 'Projeto que mostra capacidade de sair do layout e chegar ate a publicacao.',
  },
  {
    slug: 'horarius-api',
    title: 'Horarius API',
    category: 'Backend / API',
    year: '2026',
    summary:
      'API REST para autenticacao e operacao do painel Horarius, com JWT, PostgreSQL e isolamento de dados por usuario.',
    description:
      'Backend estruturado em modulos para suportar autenticação, usuarios, clientes, servicos, profissionais e agendamentos com regras de ownership.',
    impact:
      'Demonstra dominio de API, configuracao de ambiente, modelagem relacional e correcoes de runtime em deploy serverless.',
    stack: ['Node.js', 'Express', 'TypeScript', 'JWT', 'Sequelize', 'PostgreSQL'],
    highlights: [
      'Rotas autenticadas com validacao',
      'Repositorios escopados por userId',
      'Ajustes de runtime para Vercel',
    ],
    liveUrl: 'https://horarius-backend.vercel.app/api/health',
    callout: 'Back-end publicado e conectado a banco real.',
  },
  {
    slug: 'nexus-games',
    title: 'Nexus Games',
    category: 'Interface / storefront concept',
    year: '2026',
    summary:
      'Conceito de storefront editorial para jogos digitais com identidade visual forte, cards, destaque principal e narrativa de marca.',
    description:
      'Projeto visual criado para estudar composicao de vitrine, pagina de produto, sistema de secoes e atmosfera de marca em um layout mais ousado.',
    impact:
      'Mostra meu lado de interface: contraste, direcao visual, ritmo de landing page e componentizacao para escalar a home e os cards.',
    stack: ['React', 'Vite', 'React Router', 'CSS', 'Componentes reutilizaveis'],
    highlights: [
      'Hero interativo com movimento',
      'Cards e secoes editoriais reaproveitaveis',
      'Base que estou convertendo para este portfolio',
    ],
    callout: 'Projeto de design e produto que virou base para meu site pessoal.',
  },
  {
    slug: 'portfolio-luiz',
    title: 'Portfolio Luiz',
    category: 'Marca pessoal / web',
    year: '2026',
    summary:
      'Meu site pessoal para apresentar projetos, stack, processo de trabalho e capacidade de publicar interfaces completas.',
    description:
      'Usei a base visual da Nexus Games para criar uma identidade mais profissional, centralizar meus melhores trabalhos e deixar um portfolio facil de navegar.',
    impact:
      'Serve como vitrine do meu processo: analise, adaptacao de layout existente, componentizacao e deploy orientado a portfolio.',
    stack: ['React', 'Vite', 'CSS', 'Data-driven UI', 'Vercel'],
    highlights: [
      'Home orientada a portfolio',
      'Pagina de detalhe para projeto',
      'Dados centralizados para atualizacao rapida',
    ],
    callout: 'Projeto vivo que posso ir evoluindo conforme publico mais trabalhos.',
  },
];

export const featuredProjects = projects.slice(0, 3);
