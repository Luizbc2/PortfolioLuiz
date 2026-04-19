import cashflowPreview from '../assets/previews/cashflow.jpeg';
import louisDealsPreview from '../assets/previews/louisdeals.jpeg';
import horariusPreview from '../assets/previews/horarius.jpeg';
import nisMelloPreview from '../assets/previews/nismello.jpeg';

export const portfolioOwner = {
  fullName: 'Luiz Otávio',
  shortName: 'Luiz',
  role: 'Full Stack Developer',
  location: 'Brasil',
  headline: 'Olá, mundo. Esse é meu portfólio com projetos acadêmicos que desenvolvi até o momento. Desce a página e dá uma olhada.',
  summary:
    'Sou desenvolvedor full stack e uso este portfólio para mostrar projetos que já foram publicados, com stack clara, links funcionando e uma visão direta do que foi construído.',
  availability: 'Disponível para oportunidades em tecnologia.',
  githubUrl: 'https://github.com/Luizbc2',
  primaryCta: { label: 'Ver projetos', href: '#projetos' },
  secondaryCta: { label: 'Sobre mim', href: '#sobre' },
  metrics: [
    { label: 'Projetos publicados', value: '4' },
    { label: 'Perfil', value: 'Full Stack' },
  ],
};

export const focusAreas = [
  {
    title: 'Frontend',
    description: 'Interfaces responsivas, organizadas e prontas para uso real.',
  },
  {
    title: 'Backend',
    description: 'APIs, autenticação e estrutura de dados para sustentar o produto.',
  },
  {
    title: 'Publicação',
    description: 'Deploy, ajuste final e entrega pronta para abrir no navegador.',
  },
];

export const stackGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'PHP', 'Laravel', 'Blade'],
  },
  {
    title: 'Banco e deploy',
    items: ['MySQL', 'SQLite', 'PostgreSQL', 'Supabase', 'Vercel', 'GitHub'],
  },
];

export const projects = [
  {
    slug: 'horarius-web',
    title: 'Horarius',
    category: 'Sistema web',
    year: '2026',
    summary: 'Sistema de agenda com login, painel e gerenciamento de clientes, serviços e profissionais.',
    description:
      'Projeto full stack com foco em organização de agenda e operação do dia a dia. Foi pensado como sistema real, com autenticação, fluxo interno e deploy publicado. Dá para criar uma conta ou entrar com o acesso padrão: admin@horarius.com / 123456.',
    impact: 'Mostra bem meu lado full stack, principalmente em sistemas com login, regras de uso e estrutura de produto.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    highlights: ['Autenticação', 'Painel interno', 'CRUD completo'],
    liveUrl: 'https://horarius.vercel.app/login',
    repoUrl: 'https://github.com/Luizbc2/Horarius',
    repoLabel: 'Repositório público no GitHub',
    liveStatus: 'online',
    preview: {
      src: horariusPreview,
      alt: 'Preview do sistema Horarius',
    },
    callout: 'Projeto full stack com fluxo real de sistema.',
  },
  {
    slug: 'nis-mello-atelie',
    title: 'Nis Mello Atelie',
    category: 'Site institucional',
    year: '2025',
    summary: 'Site para ateliê com apresentação da marca, catálogo, contato e identidade visual delicada.',
    description:
      'Projeto institucional focado em apresentar a marca de forma clara e bonita, com navegação simples e canais diretos de contato.',
    impact: 'Mostra uma entrega voltada para negócio real, com foco em apresentação e presença online.',
    stack: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    highlights: ['Home institucional', 'Contato direto', 'Apresentação da marca'],
    liveUrl: 'https://nismelloatelie.vercel.app/',
    repoUrl: 'https://github.com/Luizbc2/NisMelloAtelie',
    repoLabel: 'Repositório público no GitHub',
    liveStatus: 'online',
    preview: {
      src: nisMelloPreview,
      alt: 'Preview do site Nis Mello Atelie',
    },
    callout: 'Projeto voltado para marca, apresentação e contato.',
  },
  {
    slug: 'louis-deals',
    title: 'LouisDeals',
    category: 'Catálogo web',
    year: '2026',
    summary: 'Catálogo de produtos com busca por código, filtros e cards com link direto para compra.',
    description:
      'Projeto com foco em vitrine digital, pesquisa rápida e organização de itens por categoria, com visual mais moderno.',
    impact: 'Ajuda a mostrar trabalho com catálogo, filtragem e interface mais atual.',
    stack: ['Next.js', 'React', 'TypeScript'],
    highlights: ['Busca por código', 'Filtros', 'Cards de produto'],
    liveUrl: 'https://louisdeals-nine.vercel.app/',
    repoUrl: 'https://github.com/Luizbc2/louisdeals',
    repoLabel: 'Repositório público no GitHub',
    liveStatus: 'online',
    preview: {
      src: louisDealsPreview,
      alt: 'Preview do projeto LouisDeals',
    },
    callout: 'Projeto focado em vitrine, busca e navegação simples.',
  },
  {
    slug: 'cashflow',
    title: 'Cashflow',
    category: 'Sistema financeiro',
    year: '2025',
    summary: 'Projeto de sistema financeiro com autenticação e estrutura separada entre frontend e backend.',
    description:
      'Projeto colaborativo com base pública confirmada no GitHub. O link publicado funciona e o repositório mostra a estrutura do sistema. Quando o deploy está ativo, o acesso de teste é admin@cashflow.com / 123456.',
    impact: 'Reforça minha participação em projetos de sistema com autenticação e organização por camadas.',
    stack: ['TypeScript', 'PHP', 'Laravel', 'Blade', 'CSS'],
    highlights: ['Login', 'Estrutura frontend/backend', 'Projeto colaborativo'],
    liveUrl: 'https://cashflow-gbrg.vercel.app/',
    repoUrl: 'https://github.com/cardealpauloand/cash_flow',
    repoLabel: 'Repositório público fora do meu GitHub',
    liveStatus: 'online',
    preview: {
      src: cashflowPreview,
      alt: 'Preview do dashboard do Cashflow',
    },
    callout: 'Projeto colaborativo com foco em sistema financeiro.',
  },
];

export const featuredProjects = projects;
