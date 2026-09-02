import type { AnchorHTMLAttributes } from 'react';
import type { Icon } from '@phosphor-icons/react';

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost';
  icon?: Icon;
};

const base =
  'inline-flex items-center gap-2 rounded-md border px-8 py-4 font-mono text-sm tracking-wide transition-colors';

const variants = {
  primary:
    'border-luna/50 bg-luna/10 text-luna hover:border-luna/70 hover:bg-luna/20',
  ghost:
    'border-edge bg-elevated/60 text-moon hover:border-moon-muted hover:bg-elevated',
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