import { interests } from '../data/content';

export default function Interests() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {interests.map((item) => (
        <li
          key={item.label}
          className="group relative overflow-hidden rounded-lg border border-edge/60 bg-surface p-6 transition-colors hover:border-luna/30"
        >
          <span
            className="pointer-events-none absolute -right-6 -top-6 text-7xl text-luna/6 transition-transform duration-700 group-hover:scale-110"
            aria-hidden="true"
          >
            {item.icon}
          </span>

          <div className="relative">
            <span className="text-xl text-luna" aria-hidden="true">
              {item.icon}
            </span>
            <h3 className="mt-3 font-display text-lg">{item.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-moon-muted">
              {item.detail}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}