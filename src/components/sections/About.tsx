import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { profile } from '../../data/profile';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Passionate about building great software"
          description="A brief story about my journey into software development."
        />

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 space-y-4"
          >
            <p className="text-text-muted leading-relaxed text-lg">
              I'm a <span className="text-text font-medium">Full-Stack JavaScript Developer</span> based in Kathmandu, Nepal,
              currently pursuing my <span className="text-text font-medium">Bachelor of Computer Application (BCA)</span>.
              My journey into software development started with curiosity about how websites work, which quickly evolved
              into a passion for building applications that make a real difference.
            </p>
            <p className="text-text-muted leading-relaxed text-lg">
              During my internship at{' '}
              <span className="text-text font-medium">MedicSewa</span>, I had the opportunity to work on
              production-level telehealth applications. I contributed to developing backend APIs using
              Node.js, Fastify, and PostgreSQL, while also building responsive React interfaces for
              healthcare features. This experience taught me how to write clean, maintainable code
              in a team environment using Git and agile workflows.
            </p>
            <p className="text-text-muted leading-relaxed text-lg">
              I believe in writing code that is not just functional but also elegant and maintainable.
              I'm constantly exploring new technologies and best practices to improve my craft.
              When I'm not coding, I enjoy learning about system design, contributing to open source,
              and expanding my knowledge of modern JavaScript ecosystems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-text uppercase tracking-wider">Quick Facts</h3>
              <div className="space-y-3">
                {[
                  { label: 'Location', value: profile.location },
                  { label: 'Education', value: profile.education },
                  { label: 'Role', value: profile.role },
                  { label: 'Experience', value: 'Internship at MedicSewa' },
                ].map((fact) => (
                  <div key={fact.label} className="flex justify-between items-start gap-2">
                    <span className="text-sm text-text-dim">{fact.label}</span>
                    <span className="text-sm text-text text-right">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
