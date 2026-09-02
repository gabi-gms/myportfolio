import { DownloadSimpleIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react';
import { email, resumeUrl, socials, ui } from '../data/content';
import ActionLink from '../components/ActionLink';

export default function Contact() {
  return (
    <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="max-w-md text-lg leading-relaxed text-moon-muted">
          {ui.contact.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ActionLink href={resumeUrl} download  icon={DownloadSimpleIcon}>
            {ui.contact.resumeCta}
          </ActionLink>
          <ActionLink href={`mailto:${email}`} variant="ghost" icon={EnvelopeSimpleIcon}>
            {ui.contact.emailCta}
          </ActionLink>
        </div>
      </div>

      <div>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {socials.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              
                            
              <a  href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 rounded-lg border border-edge/60 bg-surface px-4 py-5 transition-colors hover:border-secondary/30"
              >
                <Icon
                  weight="fill"
                  className="shrink-0 text-xl text-luna transition-colors group-hover:text-secondary"
                  aria-hidden="true"
                />
                <span className="font-mono text-sm uppercase tracking-[0.18em] text-luna transition-colors group-hover:text-secondary">
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