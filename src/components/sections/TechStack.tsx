import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { skillCategories } from '../../data/skills';

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <section id="tech-stack" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Interactive Technology Map"
          description="Hover over each technology to see proficiency."
        />

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {allSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              onMouseEnter={() => setHoveredTech(skill.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className="relative"
            >
              <div
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-default ${
                  hoveredTech === skill.name
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                    : 'bg-white/5 text-text-muted hover:text-text hover:bg-white/10 border border-border/50'
                }`}
              >
                {skill.name}
              </div>
              {hoveredTech === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="bg-surface-lighter border border-border rounded-lg px-3 py-1.5 text-xs text-text whitespace-nowrap shadow-xl">
                    {skill.proficiency}% proficiency
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
