import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <Navbar />

      <main>
        <Header />
        <About />
        <TechStack />
        <Experience />
        <Interests />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App