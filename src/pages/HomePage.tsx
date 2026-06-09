import { SEO } from '../components/layout/SEO';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { TechStack } from '../components/sections/TechStack';
import { Achievements } from '../components/sections/Achievements';
import { Contact } from '../components/sections/Contact';

export function HomePage() {
  return (
    <>
      <SEO />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <TechStack />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
