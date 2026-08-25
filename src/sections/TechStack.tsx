import { useState } from 'react';
import { techs } from '../data/content';
import type { TechItem } from '../data/types';

const LABELS: Record<TechItem['category'], string> = {
  front: 'front-end',
  back: 'back-end',
  tools: 'ferramentas',
  learning: 'aprendendo',
};

const ORDER: TechItem['category'][] = ['front', 'back', 'tools', 'learning'];

export default function TechStack() {
  const [foundKey, setFoundKey] = useState(false);

  const grouped = ORDER.map((category) => ({
    category,
    items: techs.filter((tech) => tech.category === category),
  })).filter((group) => group.items.length > 0);

  return (
    <div className="space-y-10">
      {grouped.map(({ category, items }) => (
        <div key={category} className="grid gap-4 sm:grid-cols-[10rem_1fr]">
          <h3 className="font-mono text-xs tracking-widest text-crt">
            {LABELS[category]}
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {items.map((tech) => (
              <li
                key={tech.name}
                className="rounded border border-edge/60 bg-surface px-3.5 py-2 font-mono text-xs text-moon transition-colors hover:border-luna/40 hover:text-luna"
              >
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <button
        onClick={() => setFoundKey(true)}
        className="group flex items-center gap-2 font-mono text-[10px] text-edge transition-colors hover:text-copper"
        aria-label="chave escondida"
      >
        <span aria-hidden="true">⚷</span>
        <span className="opacity-0 transition-opacity group-hover:opacity-100">
          {foundKey ? 'chave de cobre obtida' : 'pegar'}
        </span>
      </button>
    </div>
  );
}