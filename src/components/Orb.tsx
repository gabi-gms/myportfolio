import { ui } from '../data/content';

export default function Orb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-68">
      <div
        className="absolute inset-2 rounded-full bg-luna/[0.07] blur-2xl"
        aria-hidden="true"
      />

      <div
        className="absolute inset-3 rounded-full border border-luna/25 bg-bg shadow-[inset_0_0_50px_-18px_var(--color-luna)]"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full text-moon-muted motion-safe:animate-[spin_45s_linear_infinite]"
        aria-hidden="true"
      >
        <defs>
          <path
            id="orbit-path"
            d="M 100,100 m -86,0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0"
            fill="none"
          />
        </defs>
        <text
          className="font-mono uppercase"
          fill="currentColor"
          fontSize="8"
          letterSpacing="3.1"
        >
          <textPath href="#orbit-path" startOffset="0%">
            {ui.header.orbitText}
          </textPath>
        </text>
      </svg>

      <svg
        viewBox="0 0 100 100"
        className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 text-luna"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.45">
          <ellipse cx="50" cy="50" rx="46" ry="17" transform="rotate(-22 50 50)" />
          <ellipse cx="50" cy="50" rx="46" ry="17" transform="rotate(38 50 50)" />
          <ellipse cx="50" cy="50" rx="46" ry="17" transform="rotate(90 50 50)" />
        </g>
        <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.9" />
        <g fill="var(--color-bg)" opacity="0.35">
          <circle cx="45" cy="46" r="3" />
          <circle cx="54" cy="53" r="2" />
          <circle cx="47" cy="55" r="1.4" />
        </g>
      </svg>
    </div>
  );
}