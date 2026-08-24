import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import { navItems } from './data/navigation';
import { printConsoleEgg } from './utils/consoleEgg';

export default function App() {
  useEffect(() => {
    printConsoleEgg();
  }, []);

  return (
    <>
      <Navbar />

      <main id="top">
        <Header />

        {navItems.map((item, i) => (
          <Section
            key={item.id}
            id={item.id}
            index={String(i + 1).padStart(2, '0')}
            title={item.label}
          >
            <p className="text-moon-muted">conteúdo em breve.</p>
          </Section>
        ))}
      </main>

      <Footer />
    </>
  );
}