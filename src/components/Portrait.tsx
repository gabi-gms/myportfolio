import portrait from '../assets/portrait.png';
import { ui } from '../data/content';

export default function Portrait({ className = '' }: { className?: string }) {
  return (
    <figure className={`group relative ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 rounded-lg border border-secondary/50 transition-transform duration-400 group-hover:translate-x-2 group-hover:translate-y-2"
      />

      <div className="relative overflow-hidden rounded-lg border border-luna bg-elevated p-2 ">
        <img
          src={portrait}
          alt={ui.header.portraitAlt}
          width={800}
          height={800}
          className="w-full rounded-md object-cover filter-[grayscale(1)_contrast(1.05)] transition-[filter] duration-700 hover:filter-[grayscale(0)_contrast(1)]"
        />

        <span aria-hidden="true" className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-luna/50" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-luna/50" />

        <figcaption className="absolute bottom-5 left-5 flex items-center gap-2 rounded  bg-luna text-bg px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.18em] text-crt backdrop-blur-sm">
          <span aria-hidden="true">&gt;_</span>
          {ui.header.portraitTag}
        </figcaption>
      </div>
    </figure>
  );
}