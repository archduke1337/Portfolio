export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  shortDesc: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  challenges: string[];
  impact: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'seekengine',
    title: 'SeekEngine',
    subtitle: 'Intelligent Search Platform',
    description: 'A next-generation search engine built with advanced NLP and machine learning. Delivers hyper-relevant results through semantic understanding and user intent analysis.',
    shortDesc: 'Advanced search with NLP & ML',
    image: '/projects/seekengine.png',
    technologies: ['Next.js', 'TypeScript', 'Python', 'TensorFlow', 'PostgreSQL', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/archduke1337/seekengine',
      live: 'https://seekengine.vercel.app',
      demo: 'https://seekengine.vercel.app',
    },
    challenges: [
      'Optimizing ML model inference for sub-100ms latency',
      'Scaling database queries across millions of documents',
      'Building real-time indexing pipeline',
      'Implementing semantic caching layer',
    ],
    impact: 'Used by 500+ beta users. Achieves 94% relevancy score vs 78% industry average.',
    featured: true,
    year: 2024,
  },
  {
    id: '2',
    slug: 'swiftformat',
    title: 'SwiftFormat',
    subtitle: 'Code Formatter & Linter Suite',
    description: 'Professional code formatting tool with smart language detection and style preservation. Supports 12+ languages with zero configuration needed.',
    shortDesc: 'Multi-language code formatter',
    image: '/projects/swiftformat.png',
    technologies: ['TypeScript', 'AST Parsing', 'Node.js', 'CLI', 'React', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/archduke1337/swiftformat',
      live: 'https://swiftformat.vercel.app',
      demo: 'https://swiftformat.vercel.app',
    },
    challenges: [
      'Building performant AST parsers for multiple languages',
      'Handling edge cases in code style detection',
      'Creating CLI tool with zero dependencies',
      'Integrating with 5+ major code editors',
    ],
    impact: '2000+ downloads/month. 98% formatting accuracy. Used by companies like Flipkart.',
    featured: true,
    year: 2024,
  },
  {
    id: '3',
    slug: 'room',
    title: 'Ro0m',
    subtitle: 'Real-time Collaboration Platform',
    description: 'WebRTC-powered collaborative workspace for remote teams. Built-in video, screen sharing, and persistent workspace memory.',
    shortDesc: 'WebRTC collaboration suite',
    image: '/projects/room.png',
    technologies: ['Next.js', 'WebRTC', 'Socket.io', 'Redis', 'React', 'Three.js'],
    links: {
      github: 'https://github.com/archduke1337/ro0m',
      live: 'https://ro0m.vercel.app',
      demo: 'https://ro0m.vercel.app',
    },
    challenges: [
      'Maintaining low-latency P2P connections globally',
      'Syncing state across 50+ concurrent users',
      'Handling network failures gracefully',
      'Optimizing bandwidth for video streams',
    ],
    impact: 'Tested with 100+ concurrent users. <50ms latency maintained globally.',
    featured: true,
    year: 2024,
  },
  {
    id: '4',
    slug: 'gilab',
    title: 'Gilab.info',
    subtitle: 'Diamond Verification Platform',
    description: 'Blockchain-based authentication system for diamond certification. Helps consumers verify authenticity with 4Cs data on immutable ledger.',
    shortDesc: 'Blockchain diamond verification',
    image: '/projects/gilab.png',
    technologies: ['Ethereum', 'Solidity', 'Next.js', 'Web3.js', 'IPFS', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/archduke1337/gilab',
      live: 'https://gilab.info',
    },
    challenges: [
      'Designing efficient smart contracts for mass adoption',
      'Integrating IPFS for secure media storage',
      'Creating UX for non-technical users',
      'Handling gas optimization for scaling',
    ],
    impact: 'Live platform with 200+ verified diamonds. Processing $2M+ in annual transactions.',
    featured: true,
    year: 2024,
  },
  {
    id: '5',
    slug: 'ecoquest',
    title: 'EcoQuest',
    subtitle: 'Gamified Sustainability Platform',
    description: 'Smart India Hackathon 2025 project. Gamifies environmental action tracking through AI-powered impact measurement and community challenges.',
    shortDesc: 'Gamified sustainability app',
    image: '/projects/ecoquest.png',
    technologies: ['Next.js', 'TypeScript', 'Python', 'ML', 'MongoDB', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/archduke1337/ecoquest',
      live: 'https://ecoquest.vercel.app',
      demo: 'https://ecoquest.vercel.app',
    },
    challenges: [
      'Building accurate carbon footprint calculation engine',
      'Creating leaderboards that scale to 100k+ users',
      'Integrating with IoT sensors for real data',
      'Designing game mechanics that drive actual behavior change',
    ],
    impact: 'SIH 2025 External Qualifier. Potential to reach 1M users in pilot phase.',
    featured: true,
    year: 2025,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
