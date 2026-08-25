import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import { printConsoleEgg } from './utils/consoleEgg';
import { ui, techs, projects } from './data/content';

// import About from './sections/About';
import TechStack from './sections/TechStack';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Interests from './sections/Interests';
import Contact from './sections/Contact';
import Projects from './sections/Projects';

export default function App() {
  useEffect(() => {
    printConsoleEgg();
  }, []);

  return (
    <>
      <Navbar />

      <main id="top">
        <Header />

        {/* <Section id="about"  index="01" eyebrow="quem escreve" title="Sobre" path="~/about">
          <About />
        </Section> */}

        <Section  id="projects" index="04" eyebrow={ui.eyebrows.projects} title={ui.sectionTitles.projects} path="./projects "
          meta={`${projects.length} projetos`} raised 
        >
          <Projects />
        </Section>

        <Section id="tech" index="02" eyebrow={ui.eyebrows.tech} title={ui.sectionTitles.tech} path="./toolkit" 
          meta={`${techs.length} itens`} 
        >
          <TechStack />
        </Section>

        <Section id="experience" index="03" eyebrow={ui.eyebrows.experience} title={ui.sectionTitles.experience} path="./experience" raised >
          <Experience />
        </Section>

        <Section id="education" index="05" eyebrow={ui.eyebrows.education} title={ui.sectionTitles.education} path="./education"
        >
          <Education />
        </Section>

        <Section  id="interests"  index="06" eyebrow={ui.eyebrows.interests} title={ui.sectionTitles.interests} path="./interests" raised >
          <Interests />
        </Section>

        <Section id="contact" index="07" eyebrow={ui.eyebrows.contact} title={ui.sectionTitles.contact} path="./contact">
          <Contact />
        </Section>
      </main>

      <Footer />
    </>
  );
}