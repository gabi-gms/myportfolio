import { MoonIcon } from '@phosphor-icons/react';
import Starfield from './Starfield';
import { ui } from '../data/content';
import ActionLink from './ActionLink';
import Portrait from './Portrait';

export default function Header() {
  return (
    <header className="relative flex min-h-screen pt-20 pb-10 items-center overflow-hidden border-b border-edge/20">
      <Starfield />

      <div
        className="pointer-events-none absolute -right-32 -top-40 h-128 w-lg rounded-full bg-secondary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-shell max-w-shell grid-cols-1 lg:max-w-shell items-center gap-14 px-6 lg:grid-cols-[3fr_2fr]">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-16 -inset-y-24 bg-[radial-gradient(closest-side,var(--color-bg)_0%,var(--color-bg)_45%,transparent_100%)]"
          />

          <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="mb-5 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-secondary lg:justify-start">
              <MoonIcon size={15} weight="fill" />
              {ui.eyebrows.header}
            </p>

            <h1 className="font-title text-4xl leading-[1.05] sm:text-4xl lg:text-6xl">
              {ui.header.greating}<br />
              {ui.header.name}
            </h1>

            <p className="mt-4 text-[1.125rem] text-moon-muted">
              {ui.header.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <ActionLink href="#projects">{ui.header.ctaPrimary}</ActionLink>
              <ActionLink href="#contact" variant="secondary">
                {ui.header.ctaSecondary}
              </ActionLink>
            </div>
          </div>
        </div>

        <Portrait className="mx-auto w-full max-w-60 xl:max-w-xs" />
      </div>
    </header>
  );
}