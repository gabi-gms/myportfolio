import { projects } from '../data/content';
import type { ProjectItem } from '../data/types';

function ProjectCard({ project }: { project: ProjectItem }) {
  const { featured } = project;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-lg border bg-surface p-7 transition-colors ${
        featured
          ? 'border-luna/30 hover:border-luna/50 lg:col-span-2'
          : 'border-edge/60 hover:border-edge'
      }`}
    >
      {featured && (
        <span
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-luna/4 blur-2xl"
          aria-hidden="true"
        />
      )}

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl lg:text-2xl">{project.name}</h3>
          {featured && (
            <span className="shrink-0 font-mono text-[10px] tracking-widest text-luna/80">
              ★ destaque
            </span>
          )}
        </div>

        <p className="mt-2 font-mono text-xs text-secondary">{project.tagline}</p>

        <p className="mt-5 max-w-2xl flex-1 leading-relaxed text-moon-muted">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-edge/60 px-3 py-1 font-mono text-[10px] text-moon-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.repoUrl || project.liveUrl) && (
          <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-edge/60 pt-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-luna transition-opacity hover:opacity-70"
              >
                ver ao vivo →
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-moon-muted transition-colors hover:text-moon"
              >
                código →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}