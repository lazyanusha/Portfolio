export interface Skill {
  name: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', proficiency: 85 },
      { name: 'JavaScript', proficiency: 88 },
      { name: 'TypeScript', proficiency: 75 },
      { name: 'HTML', proficiency: 92 },
      { name: 'CSS', proficiency: 88 },
      { name: 'Tailwind CSS', proficiency: 85 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', proficiency: 82 },
      { name: 'Fastify', proficiency: 72 },
      { name: 'Express', proficiency: 78 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', proficiency: 75 },
      { name: 'MySQL', proficiency: 72 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    icon: 'Wrench',
    skills: [
      { name: 'Git', proficiency: 80 },
      { name: 'GitHub', proficiency: 82 },
      { name: 'VS Code', proficiency: 90 },
      { name: 'NPM', proficiency: 80 },
      { name: 'ClickUp', proficiency: 70 },
    ],
  },
];
