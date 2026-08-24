import Starfield from './Starfield';

export default function Header() {
  return (
    <header className="relative flex min-h-[78vh] items-center overflow-hidden">
      <Starfield />

      <div
        className="pointer-events-none absolute -right-32 -top-40 h-160 w-160 rounded-full bg-luna/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-shell px-6 lg:px-10">
        <p className="mb-5 font-mono text-xs tracking-widest text-crt">
          <span className="text-luna">☾</span> ready player one
        </p>

        <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
            Seu Nome
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-moon-muted lg:text-2xl">
            Uma linha sobre o que você faz e o que te move.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded border border-luna/40 px-5 py-2.5 font-mono text-xs text-luna transition-colors hover:bg-luna/10"
          >
            ver projetos
          </a>

          <a
            href="#contact"
            className="font-mono text-xs text-moon-muted transition-colors hover:text-moon"
          >
            falar comigo →
          </a>
        </div>
      </div>
    </header>
  );
}