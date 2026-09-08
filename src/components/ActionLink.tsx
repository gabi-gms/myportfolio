import type { AnchorHTMLAttributes } from 'react';
import type { Icon } from '@phosphor-icons/react';

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary';
  icon?: Icon;
};

const base =
  'inline-flex items-center gap-2 rounded-md border px-8 py-4 font-mono text-sm tracking-wide transition-colors';

const variants = {
  primary:
    'border-luna bg-luna text-bg hover:border-secondary transition-all duration-400 transition-colors hover:bg-secondary',
  secondary:
    'border-accent text-accent transition-all duration-400 transition-colors hover:border-luna hover:bg-luna-muted hover:text-luna',
} as const;

export default function ActionLink({
  variant = 'primary',
  icon: Icon,
  children,
  className = '',
  ...rest
}: ActionLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {Icon && <Icon size={17} />}
      {children}
    </a>
  );
}