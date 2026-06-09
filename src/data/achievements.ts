export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: 'internship',
    title: 'MedicSewa Internship',
    description: 'Completed a professional internship working on production-level telehealth applications.',
    icon: 'Briefcase',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description: 'Experience building end-to-end applications with React, Node.js, and PostgreSQL.',
    icon: 'Code',
  },
  {
    id: 'projects',
    title: 'Real-World Projects',
    description: 'Delivered multiple projects spanning healthcare, education, and personal tools.',
    icon: 'Rocket',
  },
];
