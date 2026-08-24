function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-700/50 bg-slate-900/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold tracking-wide">
          GABI
        </a>

        <div className="flex gap-6">
          <a href="#about">Sobre</a>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#experience">Experiência</a>
          <a href="#interests">Interesses</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar