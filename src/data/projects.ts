export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  tech: string[];
  category: string;
  categoryColor: string;
  primaryColor: string;
  demoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'hosting-platform',
    title: 'Plateforme d\'Hébergement',
    description: 'Une application web moderne pour la gestion d\'hébergements et de réservations. Interface intuitive avec design sombre élégant, système de recherche avancé et gestion complète des offres.',
    image: '/project-showcase.png',
    tags: ['Application Web', 'UI/UX Design'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    category: 'Application Web',
    categoryColor: 'blue',
    primaryColor: 'blue',
    demoUrl: '/projects',
    sourceUrl: '#',
    featured: true,
  },
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    description: 'Une application web moderne pour visualiser et analyser des données en temps réel. Interface intuitive avec graphiques interactifs et tableaux de bord personnalisables.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    tags: ['Web App', 'React'],
    tech: ['React', 'TypeScript', 'Tailwind', 'Chart.js'],
    category: 'Web App',
    categoryColor: 'blue',
    primaryColor: 'blue',
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'boutique-en-ligne',
    title: 'Boutique en Ligne',
    description: 'Plateforme e-commerce complète avec gestion de panier, paiement sécurisé et interface d\'administration. Design responsive et optimisé pour les conversions.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    tags: ['E-commerce', 'JavaScript'],
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'E-commerce',
    categoryColor: 'cyan',
    primaryColor: 'cyan',
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'portfolio-creatif',
    title: 'Portfolio Créatif',
    description: 'Site portfolio moderne avec animations fluides et design minimaliste. Optimisé pour présenter des projets créatifs avec un impact visuel maximal.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
    tags: ['Portfolio', 'Design'],
    tech: ['HTML/CSS', 'JavaScript', 'GSAP', 'Three.js'],
    category: 'Portfolio',
    categoryColor: 'purple',
    primaryColor: 'purple',
    demoUrl: '#',
    sourceUrl: '#',
  },
];

export const galleryItems = [
  {
    id: 'interface-moderne',
    title: 'Interface Moderne',
    category: 'UI/UX Design',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80',
    description: 'Conception d\'interface utilisateur moderne et intuitive',
  },
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    category: 'Web Design',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1920&q=80',
    description: 'Tableau de bord avec visualisation de données en temps réel',
  },
  {
    id: 'application-mobile',
    title: 'Application Mobile',
    category: 'Mobile UI',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1920&q=80',
    description: 'Interface d\'application mobile responsive et moderne',
  },
  {
    id: 'site-ecommerce',
    title: 'Site E-commerce',
    category: 'Frontend',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80',
    description: 'Plateforme e-commerce avec panier et paiement sécurisé',
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    category: 'Charts & Graphs',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
    description: 'Visualisation de données avec graphiques interactifs',
  },
  {
    id: 'portfolio-creatif',
    title: 'Portfolio Créatif',
    category: 'Web Design',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1920&q=80',
    description: 'Site portfolio avec animations et design minimaliste',
  },
];
