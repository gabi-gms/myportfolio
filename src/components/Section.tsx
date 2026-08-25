import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  path: string;
  meta?: string;
  raised?: boolean;
  children: ReactNode;
}

export default function Section({
  id,
  index,
  eyebrow,
  title,
  path,
  meta,
  raised = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-24 border-b border-edge/10 ${raised ? 'bg-surface' : 'bg-bg'}`}>
      <div className="relative overflow-hidden">
        <div className="relative mx-auto max-w-shell px-6 pb-8 lg:px-10 ">
          <div className="flex items-start justify-between gap-6">
            <p className="font-mono text-xs tracking-[0.2em] text-moon-muted">
              <span className="text-luna">{index}</span>{' '}
              <span className="uppercase">{eyebrow}</span>
            </p>

            <div className="hidden text-right font-mono text-xs sm:block">
              <p className="text-accent">{path}</p>
              {meta && <p className="mt-1 text-edge">{meta}</p>}
            </div>
          </div>

          <h2 className="mt-4 font-display text-4xl tracking-tight lg:text-5xl">
            {title}
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-shell px-6 pt-14 lg:px-10">{children}</div>
    </section>
  );
}