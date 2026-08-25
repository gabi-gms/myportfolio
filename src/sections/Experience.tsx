import { experiences } from '../data/content';

export default function Experience() {
  return (
    <ol className="relative space-y-12 border-l border-edge/60 pl-8 lg:pl-12">
      {experiences.map((item) => (
        <li key={`${item.company}-${item.period}`} className="relative">
          <span
            className={`absolute left-[-2.3rem] top-1.5 h-2.5 w-2.5 rounded-full lg:left-[-3.3rem] ${
              item.current ? 'bg-luna' : 'bg-edge'
            }`}
            aria-hidden="true"
          />
          {item.current && (
            <span
              className="absolute left-[-2.3rem] top-1.5 h-2.5 w-2.5 rounded-full bg-luna motion-safe:animate-ping lg:left-[-3.3rem]"
              aria-hidden="true"
            />
          )}

          <div className="grid gap-x-10 gap-y-4 lg:grid-cols-[11rem_1fr]">
            <p className="font-mono text-xs tracking-wide text-luna/70">
              {item.period}
            </p>

            <div>
              <h3 className="font-display text-xl">{item.role}</h3>
              <p className="mt-1 font-mono text-xs text-crt">{item.company}</p>

              <p className="mt-4 max-w-2xl leading-relaxed text-moon-muted">
                {item.description}
              </p>

              {item.highlights && (
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex max-w-2xl gap-3 text-sm leading-relaxed text-moon-muted"
                    >
                      <span className="mt-1.5 text-luna/60" aria-hidden="true">
                        ▸
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <ul className="mt-5 flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-edge/60 px-3 py-1 font-mono text-[10px] text-moon-muted"
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