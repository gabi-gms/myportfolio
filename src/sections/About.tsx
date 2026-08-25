import { about, ui } from '../data/content';

export default function About() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <div className="space-y-5 text-lg leading-relaxed text-moon-muted">
        <p>{about.intro}</p>
        <p>{about.detail}</p>
      </div>

      <aside className="relative rounded-lg border border-edge/60 bg-surface p-6">
                <span
          className="absolute -top-3 left-6 bg-bg px-2 font-mono text-[10px] tracking-widest text-secondary"
          aria-hidden="true"
        >
          {ui.about.statusLabel}
        </span>
        <ul className="space-y-3 font-mono text-xs text-moon-muted">
          {ui.about.statusItems.map((item, i) => (
            <li key={item} className="flex items-center gap-2">
              <span
                className={
                  ['h-1.5 w-1.5 rounded-full bg-secondary', 'text-luna', 'text-accent'][i]
                }
                aria-hidden="true"
              >
                {['', '☾', '◆'][i]}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}