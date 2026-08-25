import { education } from '../data/content';

export default function Education() {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {education.map((item) => (
        <li
          key={`${item.institution}-${item.period}`}
          className="rounded-lg border border-edge/60 bg-surface p-6 transition-colors hover:border-edge"
        >
          <p className="font-mono text-[10px] tracking-widest text-luna/70">
            {item.period}
          </p>
          <h3 className="mt-3 font-display text-lg">{item.degree}</h3>
          <p className="mt-1 text-sm text-moon-muted">{item.institution}</p>
          {item.note && (
            <p className="mt-3 text-sm leading-relaxed text-moon-muted">
              {item.note}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}