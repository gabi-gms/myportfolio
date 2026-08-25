import { about } from '../data/content';

export default function About() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <div className="space-y-5 text-lg leading-relaxed text-moon-muted">
        <p>{about.intro}</p>
        <p>{about.detail}</p>
      </div>

      <aside className="relative rounded-lg border border-edge/60 bg-surface p-6">
        <span
          className="absolute -top-3 left-6 bg-bg px-2 font-mono text-[10px] tracking-widest text-crt"
          aria-hidden="true"
        >
          status
        </span>
        <ul className="space-y-3 font-mono text-xs text-moon-muted">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-crt" aria-hidden="true" />
            disponível para novos projetos
          </li>
          <li className="flex items-center gap-2">
            <span className="text-luna" aria-hidden="true">☾</span>
            produtividade noturna
          </li>
          <li className="flex items-center gap-2">
            <span className="text-copper" aria-hidden="true">◆</span>
            baseada em Minas Gerais
          </li>
        </ul>
      </aside>
    </div>
  );
}