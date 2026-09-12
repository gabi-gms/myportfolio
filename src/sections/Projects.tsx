import { ArrowUpRight, Globe } from '@phosphor-icons/react';
import { github, projects, ui } from '../data/content';

const ACCENT = {
  code: { dot: 'bg-luna', title: 'text-luna', border: 'border-luna' },
  community: { dot: 'bg-secondary', title: 'text-secondary', border: 'border-secondary' },
} as const;

export default function Projects() {
  return (
    <div>
      <ul className="grid gap-8 lg:grid-cols-2">
        {projects.map(
          ({ icon: Icon, title, role, year, category, description, tags, kind, repo, demo }, i) => {
            const accent = ACCENT[kind];

            return (
              <li key={title} className="group relative">
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-lg border ${accent.border} 
                    transition-transform duration-400 group-hover:translate-x-1.5 group-hover:translate-y-1.5`}
                />

                <article className="relative flex h-full flex-col rounded-lg border border-edge bg-surface p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[11px] tracking-widest text-moon-muted">
                      {String(i + 1).padStart(2, '0')} / {year}
                    </p>
                    <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-moon-muted">
                      <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
                      {category}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <Icon
                      className={`shrink-0 text-2xl transition-colors ${accent.title}`}
                      aria-hidden="true"
                    />
                    <h3 className={`font-title text-base transition-colors ${accent.title}`}>
                      {title}
                    </h3>
                  </div>

                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-moon-muted">
                    {role}
                  </p>

                  <p className="mt-6 flex-1 text-sm leading-relaxed text-moon-muted">
                    {description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-edge/60 px-3 py-1 font-mono text-[10px] text-moon-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {(repo || demo) && (
                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-edge/60 pt-5">
                      {demo ? (
                        <a
                          href={demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-moon transition-colors hover:text-secundary"
                        >
                          <Globe size={16} aria-hidden="true" />
                          {ui.projects.demoLabel}
                        </a>
                      ) : (
                        <span />
                      )}

                      {repo && (
                        <a
                          href={repo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-moon transition-colors hover:text-secundary"
                        >
                          {ui.projects.repoLabel}
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </li>
            );
          },
        )}
      </ul>

      <div className="mt-10 flex justify-end">
        <a
          href={github.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-mono text-[11px] text-moon-muted transition-colors hover:text-secundary"
        >
          {ui.projects.githubCta}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}