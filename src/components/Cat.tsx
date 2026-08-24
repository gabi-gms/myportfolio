export default function Cat() {
  return (
    <div className="group relative inline-flex items-end" aria-hidden="true">
      <svg
        viewBox="0 0 64 40"
        className="h-8 w-12 text-moon-muted transition-colors duration-500 group-hover:text-luna"
      >
        <g fill="currentColor">
          <ellipse cx="30" cy="30" rx="20" ry="8" />
          <circle cx="49" cy="24" r="8" />
          <path d="M43 19 L44 12 L49 17 Z" />
          <path d="M55 19 L54 12 L49 17 Z" />
          <path
            d="M11 28 C2 26 2 16 8 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="origin-[11px_28px] transition-transform duration-700 group-hover:rotate-[-25deg]"
          />
        </g>
        <g className="text-bg" fill="currentColor">
          <path d="M45 24 h3" strokeWidth="1" stroke="currentColor" />
          <path d="M51 24 h3" strokeWidth="1" stroke="currentColor" />
        </g>
      </svg>
      <span className="pointer-events-none absolute -top-6 left-10 whitespace-nowrap font-mono text-[10px] text-luna opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        prr
      </span>
    </div>
  );
}