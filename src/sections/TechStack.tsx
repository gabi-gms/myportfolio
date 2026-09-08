import { useState } from 'react';
import { techs, ui } from '../data/content';
import type { TechItem } from '../data/types';

type Filter = TechItem['category'] | 'main';

const FILTERS: Filter[] = ['main', 'front', 'back', 'tools'];

export default function TechStack() {
  // const [foundKey, setFoundKey] = useState(false);
  const [filter, setFilter] = useState<Filter>('main');

  const visible =
    filter === 'main'
      ? techs.filter((tech) => tech.main)
      : techs.filter((tech) => tech.category === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((key) => {
          const active = filter === key;
          return (
            <button
              key={key}
              onClick={() => setFilter(key)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-colors ${
                active
                  ? 'border-secondary/50 bg-secondary/10 text-secondary'
                  : 'border-edge/60 bg-surface text-moon-muted hover:border-secondary/30 hover:text-moon'
              }`}
            >
              {key === 'main' ? ui.tech.main : ui.tech.categories[key]}
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(9rem,100%),1fr))] gap-3">
        {visible.map(({ icon: Icon, name, main }) => (
          <li
            key={name}
            className="group relative flex flex-col items-center gap-3 rounded-lg border border-edge/60 bg-surface p-5 text-center transition-colors hover:border-secondary/30"
          >
            {main && filter !== 'main' && (
              <span className="absolute right-3 top-3 flex items-center">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-luna shadow-[0_0_6px_var(--color-luna)] transition-colors group-hover:bg-secondary"
                  aria-hidden="true"
                />
                <span className="sr-only">main stack</span>
              </span>
            )}

            <Icon
              className="shrink-0 text-3xl text-luna transition-all duration-400 group-hover:scale-120 group-hover:text-secondary"
              aria-hidden="true"
            />
            <span className="font-mono uppercase text-sm text-luna transition-colors group-hover:text-secondary">
              {name}
            </span>
          </li>
        ))}
      </ul>

      {/* <button
        onClick={() => setFoundKey(true)}
        className="group flex items-center gap-2 font-mono text-[10px] text-edge transition-colors hover:text-copper"
        aria-label="hidden key"
      >
        <span aria-hidden="true">⚷</span>
        <span className="opacity-0 transition-opacity group-hover:opacity-100">
          {foundKey ? 'copper key obtained' : 'take'}
        </span>
      </button> */}
    </div>
  );
}