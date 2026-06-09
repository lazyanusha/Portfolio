export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  highlights: string[];
  type: 'internship' | 'freelance' | 'full-time';
}

export const experiences: Experience[] = [
  {
    id: 'medicsewa',
    company: 'MedicSewa',
    position: 'JavaScript Developer Intern',
    duration: 'Sep 2025 – Jan 2026',
    type: 'internship',
    highlights: [
      'Developed backend APIs using Node.js, Fastify, Sequelize, and PostgreSQL',
      'Built responsive React interfaces for telehealth features',
      'Collaborated using Git and team workflows in an agile environment',
      'Worked on production-level telehealth systems for real users',
    ],
  },
];
