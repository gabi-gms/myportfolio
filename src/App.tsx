import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import { printConsoleEgg } from './utils/consoleEgg';

import About from './sections/About';
import TechStack from './sections/TechStack';
import Education from './sections/Education';
import Experience from './sections/Experience';

export default function App() {
  useEffect(() => {
    printConsoleEgg();
  }, []);

  return (
    <>
      <Navbar />

      <main id="top">
        <Header />

        <Section id="about" index="01" title="Sobre">
          <About />
        </Section>

        <Section id="tech" index="02" title="Tech stack">
          <TechStack />
        </Section>

        <Section id="experience" index="03" title="Experiência">
          <Experience />
        </Section>
        
        <Section id="projects" index="04" title="Projetos">
          <p className="text-moon-muted">em breve.</p>
        </Section>

        <Section id="education" index="05" title="Educação">
          <Education />
        </Section>

        <Section id="interests" index="06" title="Interesses">
          <p className="text-moon-muted">em breve.</p>
        </Section>

        <Section id="contact" index="07" title="Contato">
          <p className="text-moon-muted">em breve.</p>
        </Section>
      </main>

      <Footer />
    </>
  );
}