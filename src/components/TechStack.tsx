import Section from './Section'

const technologies = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Next.js',
  'Git',
  'Docker',
  'PostgreSQL',
]

function TechStack() {
  return (
    <Section id="tech-stack" title="Tech Stack">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Tecnologias que utilizo
        </h2>

        <p className="mt-4 max-w-2xl text-(--color-text-muted)">
          Algumas das tecnologias e ferramentas com as quais tenho
          experiência ou que fazem parte do meu processo de aprendizado.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {technologies.map((technology) => (
            <div
              key={technology}
              className="rounded-xl border border-(--color-accent-muted)/40 bg-(--color-surface) px-5 py-6 text-center transition hover:-translate-y-1 hover:border-(--color-accent)"
            >
              <span className="font-medium">{technology}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default TechStack