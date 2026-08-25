import { useMemo } from 'react';

interface Star {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
}

function createStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() < 0.85 ? 1 : 2,
    delay: `${Math.random() * 4}s`,
    duration: `${2 + Math.random() * 2}s`,
    opacity: 0.25 + Math.random() * 0.5,
  }));
}

export default function Starfield() {
  const stars = useMemo(() => createStars(200), []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-moon motion-safe:animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}