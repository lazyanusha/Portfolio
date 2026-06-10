import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/layout/SEO';
import { projects } from '../data/projects';
import { Button } from '../components/ui/Button';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO title="Project Not Found" />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text mb-4">Project not found</h1>
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={project.title} description={project.description} path={`/project/${project.id}`} />
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors mb-8"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Back Home">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>

            <div className="w-full h-56 sm:h-72 md:h-80 rounded-2xl bg-gradient-to-br from-primary/10 via-surface-lighter to-accent/5 flex items-center justify-center mb-10 gradient-border">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-light" aria-label="Project Icon">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <p className="text-sm text-text-dim">{project.title} — Screenshot</p>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-text-muted leading-relaxed mb-8">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-mono text-text bg-white/5 rounded-xl border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mb-12">
              {project.github && (
                <Button
                  href={project.github}
                  variant="primary"
                  external
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                      <title>GitHub icon</title>
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  }
                >
                  View on GitHub
                </Button>
              )}
              {project.live && (
                <Button href={project.live} variant="secondary" external>
                  Live Demo
                </Button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {project.features && project.features.length > 0 && (
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-lg font-semibold text-text mb-4 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" aria-label="Features">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Features
                  </h2>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-lg font-semibold text-text mb-4 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-light" aria-label="Challenges">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Challenges
                  </h2>
                  <ul className="space-y-2.5">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-light/60 mt-1.5 shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {project.solutions && project.solutions.length > 0 && (
              <div className="glass rounded-2xl p-6 mb-10">
                <h2 className="text-lg font-semibold text-text mb-4 flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" aria-label="Solutions">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Solutions
                </h2>
                <ul className="space-y-2.5">
                  {project.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
