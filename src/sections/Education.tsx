import { education } from '../data/content';

export default function Education() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {education.map(({ icon: Icon, degree, institution, period, current, note }) => (
        <li
          key={`${institution}-${period}`}
          className="group flex gap-5 rounded-lg border border-edge/60 bg-surface p-6 transition-colors hover:border-secondary/30"
        >
          <Icon
            className="mt-1 shrink-0 text-3xl text-luna transition-all duration-400 group-hover:scale-120 group-hover:text-secondary"
            aria-hidden="true"
          />

          <div>
            <p className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-luna/70">
              {current && (
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
                </span>
              )}
              {period}
            </p>

            <h3 className="mt-3 font-display text-lg text-luna transition-colors group-hover:text-secondary">
              {degree}
            </h3>

            <p className="mt-1 text-sm text-moon-muted">{institution}</p>

            {note && (
              <p className="mt-3 text-sm leading-relaxed text-moon-muted">{note}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}