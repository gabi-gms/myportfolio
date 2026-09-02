import { navItems } from '../data/navigation';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { MoonIcon } from '@phosphor-icons/react';
import Dog from './Dog';
import { useTheme } from '../hooks/useTheme';

const ids = navItems.map((item) => item.id);

export default function Navbar() {
  const activeId = useScrollSpy(ids);
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-edge/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-shell grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 lg:px-10">
        <a
                  
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Voltar ao topo"
        >
          <MoonIcon
            weight="thin"
            className="h-5 w-5 text-luna transition-all duration-300 group-hover:rotate-12 group-hover:text-secundary"
            aria-hidden="true"
          />
          <span className="font-mono text-sm font-bold uppercase tracking-[0.18em]">
            <span className="text-moon transition-colors group-hover:text-secundary">
              Gabi
            </span>{'.'}
            <span className="text-luna">Leonor</span>
          </span>
        </a>

        <ul className="hidden items-center sm:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block rounded px-2.5 py-2 font-mono text-xs transition-colors ${
                  activeId === item.id
                    ? 'text-luna'
                    : 'text-moon-muted hover:text-moon'
                }`}
                aria-current={activeId === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
                <div className="flex justify-end">
          <Dog theme={theme} onToggle={toggle} />
        </div>
      </div>
    </nav>
  );
}