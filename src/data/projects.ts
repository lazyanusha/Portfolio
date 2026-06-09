export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  github?: string;
  live?: string;
  image?: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'other';
}

export const projects: Project[] = [
  {
    id: 'plagiarism-checker',
    title: 'Plagiarism Checker',
    description:
      'A full-stack application that detects similarity between documents and visualizes results through an intuitive interface.',
    longDescription:
      'Built a comprehensive plagiarism detection system that analyzes document similarity using advanced text comparison algorithms. The application features an intuitive file upload system, real-time analysis processing, and an interactive dashboard that visualizes similarity scores, matched sections, and overall originality metrics.',
    technologies: ['React', 'FastAPI', 'Python', 'PostgreSQL'],
    features: [
      'File upload system supporting multiple document formats',
      'Similarity analysis with detailed breakdowns',
      'Interactive result dashboard with visualizations',
    ],
    challenges: [
      'Handling large document uploads efficiently',
      'Implementing accurate similarity detection algorithms',
      'Designing intuitive visualization for complex data',
    ],
    solutions: [
      'Implemented chunked file upload with progress tracking',
      'Used TF-IDF vectorization for document comparison',
      'Built interactive charts with real-time data updates',
    ],
    github: 'https://github.com/lazyanusha',
    category: 'fullstack',
  },
  {
    id: 'telehealth-platform',
    title: 'TeleHealth Platform',
    description:
      'Contributed to a real-world healthcare application supporting online consultations and patient interactions.',
    longDescription:
      'Contributed to a production-level telehealth platform at MedicSewa that enables seamless online consultations between patients and healthcare providers. The platform handles appointment scheduling, video consultations, medical record management, and secure communication between stakeholders.',
    technologies: ['React', 'Node.js', 'Fastify', 'PostgreSQL', 'Sequelize'],
    features: [
      'Appointment scheduling system',
      'Patient management dashboard',
      'Secure data handling compliant with healthcare standards',
    ],
    challenges: [
      'Ensuring data privacy and security compliance',
      'Building real-time communication features',
      'Managing complex relational data models',
    ],
    solutions: [
      'Implemented encryption and secure authentication',
      'Used WebSockets for real-time updates',
      'Designed normalized database schema with Sequelize ORM',
    ],
    github: 'https://github.com/lazyanusha',
    category: 'fullstack',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with React and Tailwind CSS showcasing technical projects and development experience.',
    longDescription:
      'Designed and developed a modern, responsive portfolio website to showcase technical projects, skills, and professional experience. Features include smooth animations, project filtering, command palette navigation, and a clean dark-mode aesthetic inspired by modern SaaS products.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Smooth scrolling and page transitions',
      'Command palette navigation',
      'Project filtering and categorization',
    ],
    challenges: [
      'Achieving premium design quality with minimal dependencies',
      'Implementing smooth animations without performance impact',
      'Building accessible and SEO-friendly components',
    ],
    solutions: [
      'Used Framer Motion for performant animations',
      'Implemented lazy loading and code splitting',
      'Followed WCAG guidelines for accessibility',
    ],
    github: 'https://github.com/lazyanusha',
    live: '#',
    category: 'frontend',
  },
];
