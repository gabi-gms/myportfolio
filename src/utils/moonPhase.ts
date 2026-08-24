export interface MoonPhase {
  glyph: string;
  name: string;
}

const PHASES: MoonPhase[] = [
  { glyph: '●', name: 'lua nova' },
  { glyph: '◔', name: 'crescente côncava' },
  { glyph: '◑', name: 'quarto crescente' },
  { glyph: '◕', name: 'crescente gibosa' },
  { glyph: '○', name: 'lua cheia' },
  { glyph: '◕', name: 'minguante gibosa' },
  { glyph: '◐', name: 'quarto minguante' },
  { glyph: '◔', name: 'minguante côncava' },
];

const SYNODIC_MONTH = 29.53058867;
const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);

export function getMoonPhase(date: Date = new Date()): MoonPhase {
  const daysSince = (date.getTime() - KNOWN_NEW_MOON) / 86_400_000;
  const position = ((daysSince % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  const index = Math.floor((position / SYNODIC_MONTH) * 8 + 0.5) % 8;
  return PHASES[index];
}