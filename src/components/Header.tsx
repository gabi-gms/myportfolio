function Header() {
  return (
    <header
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      <div
        aria-hidden="true"
        className="absolute right-10 top-32 text-6xl text-(--color-accent-muted) opacity-40"
      >
        ☾
      </div>

      <div
        aria-hidden="true"
        className="absolute left-[15%] top-32 text-sm text-(--color-text-muted) opacity-60"
      >
        ✦
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-24 right-[20%] text-xs text-(--color-text-muted) opacity-50"
      >
        ✦
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] text-(--color-accent) uppercase">
          Software Developer
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
          Olá, eu sou Gabi.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-(--color-text-muted) md:text-xl">
          Desenvolvedora de software apaixonada por tecnologia,
          criatividade e por transformar ideias em coisas que funcionam.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#experience"
            className="rounded-lg bg-(--color-accent) px-5 py-3 text-sm font-medium text-(--color-bg) transition hover:opacity-85"
          >
            Ver experiência
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-(--color-accent-muted) px-5 py-3 text-sm font-medium text-(--color-text) transition hover:border-(--color-accent)"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header