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
    description: 'Une application web moderne pour la gestion d\'hébergements et de réservations. Interface intuitive avec un design sombre élégant, un système de recherche avancé et une gestion complète des offres.',
    image: '/game-host.png',
    tags: ['Application Web', 'UI/UX'],
    tech: ['HTML', 'JavaScript', 'Tailwind CSS', 'Node.js'],
    category: 'Application Web',
    categoryColor: 'blue',
    primaryColor: 'blue',
    demoUrl: '/projects',
    sourceUrl: '#',
    featured: true,
  },
  {
    id: 'shadowos',
    title: 'ShadowOS - OS Web Moderne',
    description: 'Une plateforme web innovante simulant un système d\'exploitation complet. Elle permet de travailler en toute fluidité, à distance ou en local, avec un respect total de la confidentialité des données.',
    image: 'https://cdn.discordapp.com/attachments/1191059562166501550/1443986903002124348/sD5cTEZ.png?ex=695d2a19&is=695bd899&hm=55d5c82a307477e9791822626a30006769a86bfa9848bfdddf3471c53e2139ef&animated=true',
    tags: ['OS', 'WebApp'],
    tech: ['Astro', 'Tailwind CSS', 'React', 'Node.js'],
    category: 'web-app',
    categoryColor: 'cyan',
    primaryColor: 'cyan',
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Simple',
    description: 'Site portfolio avec un design minimaliste et un code optimisé pour la performance.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Portfolio', 'Design'],
    tech: ['HTML/CSS', 'JavaScript'],
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
    thumbnail: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1920&q=80',
    description: 'Conception d\'interface utilisateur moderne et intuitive',
  },
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    category: 'Web Design',
    thumbnail: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1920&q=80',
    description: 'Tableau de bord avec visualisation de données en temps réel',
  },
  {
    id: 'application-mobile',
    title: 'Application Mobile',
    category: 'Mobile UI',
    thumbnail: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1920&q=80',
    description: 'Interface d\'application mobile responsive et moderne',
  },
  {
    id: 'site-ecommerce',
    title: 'Site E-commerce',
    category: 'Frontend',
    thumbnail: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1920&q=80',
    description: 'Plateforme e-commerce avec panier et paiement sécurisé',
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    category: 'Charts & Graphs',
    thumbnail: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1920&q=80',
    description: 'Visualisation de données avec graphiques interactifs',
  },
  {
    id: 'portfolio-creatif',
    title: 'Portfolio Créatif',
    category: 'Web Design',
    thumbnail: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    fullSize: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1920&q=80',
    description: 'Site portfolio avec animations et design minimaliste',
  },
];
