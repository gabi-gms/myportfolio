import { CircleIcon, CircleHalfIcon, MoonIcon } from '@phosphor-icons/react';
import type { Icon, IconWeight } from '@phosphor-icons/react';

export interface MoonPhase {
  icon: Icon;
  weight: IconWeight;
  flip: boolean;
  name: string;
}

const PHASES: MoonPhase[] = [
  { icon: CircleIcon,     weight: 'regular', flip: false, name: 'new moon' },
  { icon: MoonIcon,       weight: 'regular', flip: false, name: 'concave crescent' },
  { icon: CircleHalfIcon, weight: 'fill',    flip: false, name: 'crescent moon' },
  { icon: MoonIcon,       weight: 'fill',    flip: false, name: 'crescente gibosa' },
  { icon: CircleIcon,     weight: 'fill',    flip: false, name: 'full moon' },
  { icon: MoonIcon,       weight: 'fill',    flip: true,  name: 'waning gibbous' },
  { icon: CircleHalfIcon, weight: 'fill',    flip: true,  name: 'last quarter' },
  { icon: MoonIcon,       weight: 'regular', flip: true,  name: 'waning concave' },
];

const SYNODIC_MONTH = 29.53058867;
const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);

export function getMoonPhase(date: Date = new Date()): MoonPhase {
  const daysSince = (date.getTime() - KNOWN_NEW_MOON) / 86_400_000;
  const position = ((daysSince % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  const index = Math.floor((position / SYNODIC_MONTH) * 8 + 0.5) % 8;
  return PHASES[index];
}