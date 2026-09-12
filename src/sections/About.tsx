import selene from '../assets/selene.png';
import { about } from '../data/content';

export default function About() {
  return (
    <div className="grid items-start gap-12 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
      <div>
        <p className="text-base leading-relaxed text-secondary sm:text-lg">
          {about.lead}
        </p>

        <div className="mt-8 space-y-5">
          {about.paragraphs.map((text) => (
            <p key={text} className="leading-relaxed text-moon-muted">
              {text}
            </p>
          ))}
        </div>

        <blockquote className="mt-10 border-l-2 border-luna/60 pl-6">
          <p className="font-subtitle text-lg leading-relaxed text-luna sm:text-xl">
            “{about.quote}”
          </p>
        </blockquote>
      </div>

      <figure className="relative ml-auto hidden h-104 lg:block">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(farthest-side,var(--color-bg)_0%,var(--color-bg)_55%,transparent_100%)]"
        />
        <img
          src={selene}
          alt=""
          width={600}
          height={900}
          loading="lazy"
          className="relative mx-auto max-h-120 w-full object-contain"
        />
      </figure>
    </div>
  );
}