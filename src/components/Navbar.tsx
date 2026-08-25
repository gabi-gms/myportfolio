import { navItems } from '../data/navigation';
import { useScrollSpy } from '../hooks/useScrollSpy';

const ids = navItems.map((item) => item.id);

export default function Navbar() {
  const activeId = useScrollSpy(ids);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-edge/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="font-display text-lg text-luna transition-opacity hover:opacity-70"
          aria-label="Voltar ao topo"
        >
          ☾
        </a>

        <ul className="hidden items-center sm:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block rounded px-2.5 py-2 font-mono text-xs transition-colors ${
                  activeId === item.id
                    ? 'text-secondary'
                    : 'text-moon-muted hover:text-moon'
                }`}
                aria-current={activeId === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}