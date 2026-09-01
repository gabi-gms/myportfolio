import { DownloadSimpleIcon, EnvelopeSimpleIcon, MoonStarsIcon } from '@phosphor-icons/react';
import { email, resumeUrl, socials, ui } from '../data/content';

export default function Contact() {
  return (
    <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="max-w-md text-lg leading-relaxed text-moon-muted">
          {ui.contact.intro}
        </p>

        <p className="mt-6 flex items-center gap-2 font-mono text-xs text-crt">
          <MoonStarsIcon size={14} weight="fill" className="text-luna" />
          {ui.contact.note}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          
          <a  href={`mailto:${email}`}
            className="flex items-center gap-2 rounded-md border border-luna/50 bg-luna/10 px-8 py-4 font-mono text-sm tracking-wide text-luna transition-colors hover:border-luna/70 hover:bg-luna/20"
          >
            <EnvelopeSimpleIcon size={17} />
            {ui.contact.emailCta}
          </a>

          
          <a  href={resumeUrl}
            download
            className="flex items-center gap-2 rounded-md border border-edge bg-elevated/60 px-8 py-4 font-mono text-sm tracking-wide text-moon transition-colors hover:border-moon-muted hover:bg-elevated"
          >
            <DownloadSimpleIcon size={17} />
            {ui.contact.resumeCta}
          </a>
        </div>
      </div>

      <div>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              
              <a  href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-edge/60 bg-surface p-4 transition-colors hover:border-luna/30"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-edge/60 bg-elevated text-moon-muted transition-colors group-hover:border-luna/30 group-hover:text-luna">
                  <Icon size={19} />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-moon-muted transition-colors group-hover:text-moon">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}