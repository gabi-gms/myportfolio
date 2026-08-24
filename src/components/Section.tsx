import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-edge/60 py-20">
      <div className="mx-auto max-w-shell px-6 lg:px-10">
        <header className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-sm text-luna/70">{index}</span>
          <h2 className="font-display text-2xl font-semibold tracking-wide">
            {title}
          </h2>
          <span className="h-px flex-1 bg-edge" aria-hidden="true" />
        </header>
        {children}
      </div>
    </section>
  );
}