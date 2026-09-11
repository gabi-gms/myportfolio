import { useState } from 'react';
import { navItems } from '../data/navigation';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { MoonIcon, List, X } from '@phosphor-icons/react';
import Dog from './Dog';
import { useTheme } from '../hooks/useTheme';
import { ui } from '../data/content';

const ids = navItems.map((item) => item.id);

export default function Navbar() {
  const [activeId, select] = useScrollSpy(ids);
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-edge/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-8xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 lg:px-10">
        <div className="col-start-1 flex items-center gap-3">
          <div className="lg:hidden">
            <Dog theme={theme} onToggle={toggle} />
          </div>

          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label={ui.nav.backToTop}
          >
            <MoonIcon
              weight="thin"
              className="h-5 w-5 text-luna transition-all duration-300 group-hover:rotate-12 group-hover:text-secundary"
              aria-hidden="true"
            />
            <span className="font-mono text-sm font-bold uppercase tracking-[0.18em]">
              <span className="text-moon transition-colors group-hover:text-secundary">
                Gabi
              </span>
              {'.'}
              <span className="text-luna">Leonor</span>
            </span>
          </a>
        </div>

        <ul className="col-start-2 hidden items-center lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                onClick={() => select(item.id)}
                href={`#${item.id}`}
                className={`block rounded px-2.5 py-2 font-mono text-sm transition-colors ${
                  activeId === item.id
                    ? 'text-luna'
                    : 'text-moon-muted hover:text-accent'
                }`}
                aria-current={activeId === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="col-start-3 hidden justify-self-end lg:block">
          <Dog theme={theme} onToggle={toggle} />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? ui.nav.close : ui.nav.open}
          className="col-start-3 justify-self-end rounded p-2 text-moon-muted transition-colors hover:text-luna lg:hidden"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-edge/60 lg:hidden">
          <ul className="mx-auto flex max-w-8xl flex-col px-6 py-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => {
                    select(item.id);
                    setOpen(false);
                  }}
                  className={`block rounded px-3 py-3 font-mono text-sm transition-colors ${
                    activeId === item.id
                      ? 'text-luna'
                      : 'text-moon-muted hover:text-accent'
                  }`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}