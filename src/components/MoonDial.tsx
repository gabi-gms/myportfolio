import { useMemo } from 'react';

type MoonDialProps = {
  /** 0 = lua nova, 0.5 = cheia, 1 = nova de novo */
  phase?: number;
  className?: string;
};

const RING_TEXT = 'observar · calcular · construir · repetir · ';
const MOON_R = 30;

export default function MoonDial({ phase = 0.18, className = '' }: MoonDialProps) {
  const ticks = useMemo(
    () => Array.from({ length: 48 }, (_, i) => (i * 360) / 48),
    [],
  );

  const shadowOffset =
    (1 - Math.cos(phase * 2 * Math.PI)) * MOON_R * (phase < 0.5 ? 1 : -1);

  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-label="Mostrador lunar com a fase atual da lua"
    >
      <defs>
        <radialGradient id="dial-halo">
          <stop offset="60%" stopColor="var(--color-luna)" stopOpacity="0" />
          <stop offset="86%" stopColor="var(--color-luna)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--color-luna)" stopOpacity="0" />
        </radialGradient>
        <path
          id="dial-ring"
          fill="none"
          d="M 120,14 A 106,106 0 1,1 119.99,14"
        />
      </defs>

      <circle cx="120" cy="120" r="118" fill="url(#dial-halo)" />

      <g
        className="motion-safe:animate-[spin_200s_linear_infinite]"
        style={{ transformOrigin: '120px 120px', transformBox: 'view-box' }}
      >
        <text
          className="font-mono uppercase"
          fill="var(--color-moon-muted)"
          fillOpacity="0.65"
          fontSize="8.5"
          letterSpacing="2.6"
        >
          <textPath href="#dial-ring" startOffset="0">
            {RING_TEXT.repeat(2)}
          </textPath>
        </text>

        {ticks.map((angle, i) => (
          <line
            key={angle}
            x1="120"
            y1="30"
            x2="120"
            y2={i % 4 === 0 ? 40 : 35}
            stroke="var(--color-moon-muted)"
            strokeOpacity={i % 4 === 0 ? 0.45 : 0.18}
            strokeWidth="1"
            transform={`rotate(${angle} 120 120)`}
          />
        ))}
      </g>

      <circle cx="120" cy="120" r="90" fill="none" stroke="var(--color-edge)" />
      <circle cx="120" cy="120" r="78" fill="var(--color-bg)" />
      <circle
        cx="120"
        cy="120"
        r="78"
        fill="none"
        stroke="var(--color-luna)"
        strokeOpacity="0.14"
      />

      <circle cx="120" cy="120" r={MOON_R} fill="var(--color-moon)" fillOpacity="0.92" />
      <circle cx={120 + shadowOffset} cy="120" r={MOON_R} fill="var(--color-bg)" />
    </svg>
  );
}