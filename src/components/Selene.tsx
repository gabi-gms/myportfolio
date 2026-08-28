import { useEffect, useRef, useState } from 'react';

type Mark = { t: number; kind: 'dot' | 'spark' };
type Strand = { d: string; opacity: number; marks: Mark[] };

const d = (t: number): Mark => ({ t, kind: 'dot' });
const s = (t: number): Mark => ({ t, kind: 'spark' });

// Mechas, da mais externa à mais interna. `marks` é a posição relativa
// ao longo do próprio fio (0 = início, 1 = ponta).
const STRANDS: Strand[] = [
  {
    d: 'M 132,44 C 100,34 68,52 60,82 C 52,108 74,124 66,152 C 58,180 26,192 30,222 C 33,248 58,254 52,280',
    opacity: 0.62,
    marks: [s(0.16), d(0.42), d(0.68), d(0.99)],
  },
  {
    d: 'M 137,48 C 110,44 84,64 78,94 C 72,122 92,138 84,166 C 76,194 50,206 54,234 C 57,258 78,264 74,286',
    opacity: 0.55,
    marks: [d(0.2), s(0.5), d(0.76), d(0.99)],
  },
  {
    d: 'M 141,54 C 120,54 100,74 96,104 C 92,130 110,146 102,174 C 94,202 72,214 76,242 C 79,264 96,270 92,290',
    opacity: 0.48,
    marks: [d(0.28), d(0.58), s(0.82), d(0.99)],
  },
  {
    d: 'M 142,62 C 128,68 116,88 114,114 C 112,138 128,154 120,180 C 112,206 94,218 98,244 C 101,264 114,270 110,288',
    opacity: 0.42,
    marks: [d(0.34), d(0.66), d(0.99)],
  },
  {
    d: 'M 138,74 C 130,92 134,110 130,132 C 126,154 138,168 132,190 C 126,210 114,220 116,240',
    opacity: 0.36,
    marks: [d(0.4), d(0.74), d(0.99)],
  },
  {
    d: 'M 135,143 C 126,146 122,156 120,168 C 117,190 112,210 106,232',
    opacity: 0.5,
    marks: [d(1)],
  },
];

const SPARK =
  'M 0,-5.5 Q 0.9,-0.9 5.5,0 Q 0.9,0.9 0,5.5 Q -0.9,0.9 -5.5,0 Q -0.9,-0.9 0,-5.5 Z';

export default function Selene({ className = '' }: { className?: string }) {
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const [marks, setMarks] = useState<{ x: number; y: number; kind: Mark['kind'] }[]>([]);

  useEffect(() => {
    const placed: { x: number; y: number; kind: Mark['kind'] }[] = [];
    STRANDS.forEach((strand, i) => {
      const el = paths.current[i];
      if (!el) return;
      const len = el.getTotalLength();
      strand.marks.forEach(({ t, kind }) => {
        const p = el.getPointAtLength(len * t);
        placed.push({ x: p.x, y: p.y, kind });
      });
    });
    setMarks(placed);
  }, []);

    return (
    <svg
      viewBox="0 0 200 320"
      className={className}
      role="img"
      aria-label="Perfil de uma mulher com estrelas nos cabelos"
    >
      <defs>
        <radialGradient id="selene-veil">
          <stop offset="0%" stopColor="var(--color-bg)" stopOpacity="1" />
          <stop offset="58%" stopColor="var(--color-bg)" stopOpacity="0.94" />
          <stop offset="100%" stopColor="var(--color-bg)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* espelha a composição inteira: ela passa a olhar para o texto */}
      <g transform="translate(200,0) scale(-1,1)">
        <ellipse cx="98" cy="164" rx="102" ry="158" fill="url(#selene-veil)" />

        <g fill="none" stroke="var(--color-luna)" strokeLinecap="round" strokeWidth="1">
          {STRANDS.map((strand, i) => (
            <path
              key={strand.d}
              ref={(el) => { paths.current[i] = el; }}
              d={strand.d}
              strokeOpacity={strand.opacity}
            />
          ))}

          {/* coque no alto da cabeça */}
          <path
            d="M 133,44 C 145,34 158,40 158,52 C 158,62 148,68 140,64"
            strokeOpacity="0.6"
          />

          {/* ↓ perfil: testa · nariz · lábios · queixo */}
          <path
            d="M 130,50 C 148,48 162,62 161,82 C 160,88 157,89 158,93 C 160,98 168,106 168,110 C 168,113 162,113 159,114 C 158,118 161,120 159,123 C 157,127 160,130 157,134 C 153,140 145,144 135,143"
            strokeOpacity="0.85"
            strokeWidth="1.2"
          />

          <path d="M 139,78 C 145,75 152,76 156,80" strokeOpacity="0.5" />
          <path d="M 140,86 C 145,91 152,91 156,85" strokeOpacity="0.7" />
          <path d="M 141,87 C 139,89 138,91 137,93" strokeOpacity="0.4" />
          <path d="M 157,121 C 154,122 151,122 149,121" strokeOpacity="0.45" />
        </g>

        {marks.map((m, i) =>
          m.kind === 'spark' ? (
            <path
              key={i}
              d={SPARK}
              transform={`translate(${m.x} ${m.y})`}
              fill="var(--color-luna)"
            />
          ) : (
            <circle key={i} cx={m.x} cy={m.y} r="2.2" fill="var(--color-luna)" />
          ),
        )}
      </g>
    </svg>
  );
}