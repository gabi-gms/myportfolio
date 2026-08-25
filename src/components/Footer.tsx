import { useMemo } from 'react';
import Cat from './Cat';
import { getMoonPhase } from '../utils/moonPhase';
import { ui } from '../data/content';

export default function Footer() {
  const moon = useMemo(() => getMoonPhase(), []);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge/60 py-10">
      <div className="mx-auto flex max-w-shell flex-col gap-6 px-6 lg:px-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs text-moon-muted">
            © {year} — {ui.footer.credit}
          </p>
          <p className="mt-2 font-mono text-xs text-moon-muted">
            <span className="text-luna" aria-hidden="true">{moon.glyph}</span>{' '}
            <span>{ui.footer.moonPrefix} {moon.name}</span>
          </p>
        </div>

        <Cat />
      </div>
    </footer>
  );
}