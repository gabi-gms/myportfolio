import { contacts } from '../data/content';

export default function Contact() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
      <div>
        <p className="max-w-md text-lg leading-relaxed text-moon-muted">
          Aberta a conversas sobre projetos, oportunidades ou qualquer coisa
          que envolva construir algo bom.
        </p>
        <p className="mt-6 font-mono text-xs text-crt">
          <span className="text-luna" aria-hidden="true">☾</span>{' '}
          respondo mais rápido à noite
        </p>
      </div>

      <ul className="divide-y divide-edge/60 border-y border-edge/60">
        {contacts.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex items-center justify-between gap-6 py-5 transition-colors"
            >
              <span className="font-mono text-xs tracking-widest text-moon-muted transition-colors group-hover:text-crt">
                {item.label}
              </span>
              <span className="flex items-center gap-3 text-moon transition-colors group-hover:text-luna">
                <span className="text-sm sm:text-base">{item.value}</span>
                <span
                  className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}