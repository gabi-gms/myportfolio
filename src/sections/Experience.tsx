import { experiences } from '../data/content';

export default function Experience() {
  return (
    <ol className="relative space-y-20 pl-10 lg:pl-16">
      <span
        className="absolute bottom-0 left-0 top-2 w-px -translate-x-1/2 translate-y-1.75 bg-edge/50 mask-[linear-gradient(to_bottom,black_88%,transparent)]"
        aria-hidden="true"
      />

      {experiences.map((item) => (
        <li key={`${item.period}`} className="relative">
          <span
            className={`absolute top-2 -left-10 grid h-3.5 w-3.5 -translate-x-1/2 place-items-center rounded-full border bg-bg lg:-left-16 ${
              item.current ? 'border-luna/50' : 'border-edge'
            }`}
            aria-hidden="true"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                item.current ? 'bg-luna' : 'bg-edge'
              }`}
            />
          </span>

          <div className="grid gap-y-8 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-x-16">
            <div>
              <p className="font-mono text-sm text-luna/80">{item.period}</p>
              <h3 className="mt-3 font-display text-2xl leading-snug">
                {item.role}
              </h3>
            </div>

            <div>
              {item.description && (
                <p className="mb-7 max-w-2xl leading-relaxed text-moon-muted">
                  {item.description}
                </p>
              )}

              {item.highlights && (
                <ul className="space-y-6">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex max-w-2xl gap-4 leading-relaxed text-moon-muted"
                    >
                      <span
                        className="mt-[0.45rem] h-px w-3.5 shrink-0 bg-secondary"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <ul className="mt-10 flex flex-wrap gap-2.5">
                {item.techs.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-edge/70 px-3 py-1.5 font-mono text-[11px] text-moon-muted transition-colors hover:border-luna/40 hover:text-luna"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}