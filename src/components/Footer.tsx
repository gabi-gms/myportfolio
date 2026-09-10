import { useMemo } from 'react';
import { getMoonPhase } from '../utils/moonPhase';
import { ui } from '../data/content';

export default function Footer() {
    const moon = useMemo(() => getMoonPhase(), []);
    const MoonIcon = moon.icon;
    const year = new Date().getFullYear();

  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-shell flex-col items-center gap-8 px-6 text-center sm:flex-row sm:justify-between sm:text-left lg:px-10">
        <p className="flex items-center justify-center gap-2.5 font-mono text-xs text-moon-muted/70 sm:justify-start">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
          </span>
          {ui.footer.version}
          <span className="rounded border border-secondary/40 bg-secondary/10 px-1.5 py-0.5 text-[0.5rem] uppercase tracking-widest text-secondary">
            {ui.footer.tag}
          </span>
        </p>
        <p className="font-mono text-sm tracking-wide uppercase text-moon-muted/20">
          © {year} {ui.footer.credit}
        </p>
        <p
          className="flex items-center gap-2 font-mono text-xs tracking-wide text-moon-muted"
          title={` ${moon.name}`}
        >
          <MoonIcon
            weight={moon.weight}
            className={`h-4 w-4 text-secondary ${moon.flip ? '-scale-x-100' : ''}`}
            aria-hidden="true"
          />
          <span>{moon.name}</span>
        </p>
      </div>
    </footer>
  );
}