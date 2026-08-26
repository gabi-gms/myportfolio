import type { Theme } from '../hooks/useTheme';

interface DogProps {
  theme: Theme;
  onToggle: () => void;
}

export default function Dog({ theme, onToggle }: DogProps) {
  const asleep = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={!asleep}
      aria-label={asleep ? 'Wake up Safira (light mode)' : 'Let Safira Sleep (dark mode)'}
      className="group relative h-11 w-14 shrink-0"
    >
           {/* dormindo */}
      <svg
        viewBox="0 0 64 44"
        className={`absolute inset-0 h-full w-full text-moon-muted transition-all duration-500 group-hover:text-luna ${
          asleep ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <path
          d="M14 35 C6 35 4 27 9 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="round"
          className="origin-[14px_35px] transition-transform duration-700 ease-out group-hover:rotate-[-20deg]"
        />
        <path
          d="M15 35 C15 27 21 24 30 24 C40 24 46 27 46 32 C46 35 43 36 38 36 L19 36 C16 36 15 36 15 35 Z"
          fill="currentColor"
        />
        <path
          d="M35 22 C35 15 40 11 46 11 C52 11 56 15 56 22 C56 29 52 32 46 32 C40 32 35 29 35 22 Z"
          fill="currentColor"
        />
        <path
          d="M36 15 C32 15 30 19 31 24 C32 28 35 29 37 27 Z"
          fill="currentColor"
        />
        <path
          d="M56 15 C60 15 62 19 61 24 C60 28 57 29 55 27 Z"
          fill="currentColor"
        />
        <path
          d="M42 10 C43 6 46 5 48 6 C50 7 50 10 49 12 Z"
          fill="currentColor"
        />
        <g
          fill="none"
          stroke="var(--color-bg)"
          strokeWidth="1.4"
          strokeLinecap="round"
        >
          <path d="M41 22 C42.5 24 44.5 24 46 22" />
          <path d="M49 22 C50.5 24 52.5 24 54 22" />
        </g>
        <ellipse cx="47.5" cy="27" rx="2" ry="1.5" fill="var(--color-bg)" />
      </svg>

            {/* desperto */}
      <svg
        viewBox="0 0 64 48"
        className={`absolute inset-0 h-full w-full text-moon-muted transition-all duration-500 group-hover:text-luna ${
          asleep ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      >
        <path
          d="M18 13 C10 15 6 24 8 33 C10 41 17 43 21 39 C18 31 17 21 18 13 Z"
          fill="currentColor"
        />
        <path
          d="M46 13 C54 15 58 24 56 33 C54 41 47 43 43 39 C46 31 47 21 46 13 Z"
          fill="currentColor"
        />
        <circle cx="32" cy="24" r="16" fill="currentColor" />
        <path
          d="M28 8 C28 4 31 2 33 3.5 C35 5 34.5 8 32.5 9.5 Z"
          fill="currentColor"
        />
        <g fill="var(--color-bg)">
          <ellipse cx="25.5" cy="23" rx="3.4" ry="3.9" />
          <ellipse cx="38.5" cy="23" rx="3.4" ry="3.9" />
        </g>
        <ellipse cx="32" cy="30" rx="2.4" ry="1.9" fill="var(--color-bg)" />
        <path
          d="M32 31.5 C32 33.5 30 34.5 28.8 33.6 M32 31.5 C32 33.5 34 34.5 35.2 33.6"
          fill="none"
          stroke="var(--color-bg)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      <span className="pointer-events-none absolute -top-1 left-11 whitespace-nowrap font-mono text-[10px] text-luna opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {asleep ? 'zzz' : 'auau'}
      </span>
    </button>
  );
}