import { MoonIcon } from '@phosphor-icons/react';
import Starfield from './Starfield';
import selene from '../assets/selene.svg';
import { ui } from '../data/content';
import ActionLink from './ActionLink';

export default function Header() {
  return (
    <header className="relative flex min-h-screen items-center overflow-hidden border-b border-edge/20">
      <Starfield />

      <div
        className="pointer-events-none absolute -right-32 -top-40 h-128 w-lg rounded-full bg-luna/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 lg:max-w-[75%] items-center gap-14 px-6 lg:grid-cols-[3fr_2fr]">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-16 -inset-y-24 bg-[radial-gradient(closest-side,var(--color-bg)_0%,var(--color-bg)_45%,transparent_100%)]"
          />

          <div className="relative mx-auto w-full max-w-shell px-6 lg:px-10">
            <p className="mb-5 flex items-center gap-2 font-mono text-[0.9rem] tracking-widest text-accent">
              <MoonIcon size={15} weight="fill" />
              {ui.eyebrows.header}
            </p>

            <h1 className="font-display text-5xl leading-[1.05] sm:text-5xl lg:text-7xl">
              {ui.header.name}
            </h1>

            <p className="mt-4 text-[1.125rem] text-moon-muted">
              {ui.header.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ActionLink href="#projects">{ui.header.ctaPrimary}</ActionLink>
              <ActionLink href="#contact" variant="ghost">
                {ui.header.ctaSecondary} →
              </ActionLink>
            </div>
          </div>
        </div>

                <figure className="relative hidden lg:block lg:w-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,var(--color-bg)_0%,var(--color-bg)_55%,transparent_100%)]"
          />
          <img
            src={selene}
            alt="Ilustração de um perfil feminino com estrelas nos cabelos"
            width={600}
            height={900}
            className="relative mx-auto max-h-[70vh] w-full object-contain"
          />
        </figure>
      </div>
    </header>
  );
}