import { useEffect, useRef, useState } from 'react';

export function useScrollSpy(
  ids: string[],
  offset = 112,
): [string, (id: string) => void] {
  const [activeId, setActiveId] = useState<string>('');
  const lockedUntil = useRef(0);

  useEffect(() => {
    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        });

        // Durante a rolagem do clique, o observer não decide.
        if (Date.now() < lockedUntil.current) return;

        const topmost = [...intersecting]
          .map((id) => document.getElementById(id))
          .filter((el): el is HTMLElement => el !== null)
          .sort(
            (a, b) =>
              a.getBoundingClientRect().top - b.getBoundingClientRect().top,
          )[0];

        setActiveId(topmost?.id ?? '');
      },
      { rootMargin: `-${offset}px 0px -55% 0px`, threshold: 0 },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offset]);

  const select = (id: string) => {
    lockedUntil.current = Date.now() + 800;
    setActiveId(id);
  };

  return [activeId, select];
}