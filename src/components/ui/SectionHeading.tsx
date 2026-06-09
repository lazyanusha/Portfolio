import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-light mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{title}</h2>
      {description && (
        <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
