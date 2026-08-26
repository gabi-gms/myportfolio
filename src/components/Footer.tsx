import { useMemo } from 'react';
import Cat from './Cat';
import { getMoonPhase } from '../utils/moonPhase';
import { ui } from '../data/content';

export default function Footer() {
    const moon = useMemo(() => getMoonPhase(), []);
    const MoonIcon = moon.icon;
    const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge/20 py-10">
            <div className="mx-auto flex max-w-shell flex-col items-center gap-8 px-6 text-center sm:flex-row sm:justify-between sm:text-left lg:px-10">
        <p className="font-mono text-xs tracking-wide uppercase text-moon-muted/60">
          © {year} {ui.footer.credit}
        </p>

        <Cat />

        <p
          className="flex items-center gap-2 font-mono text-xs tracking-wide text-moon-muted"
          title={` ${moon.name}`}
        >
          <MoonIcon
            weight={moon.weight}
            className={`h-4 w-4 text-luna ${moon.flip ? '-scale-x-100' : ''}`}
            aria-hidden="true"
          />
          <span>{moon.name}</span>
        </p>
      </div>
    </footer>
  );
}