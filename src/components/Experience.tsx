import Section from './Section'

const experiences = [
  {
    period: '2023 — Atual',
    role: 'Desenvolvedora de Software',
    company: 'Empresa / Projeto',
    description:
      'Descrição breve da experiência, responsabilidades e principais tecnologias utilizadas.',
  },
  {
    period: '2021 — 2023',
    role: 'Desenvolvedora de Software',
    company: 'Empresa / Projeto',
    description:
      'Descrição breve da experiência, responsabilidades e principais tecnologias utilizadas.',
  },
  {
    period: '2020 — 2021',
    role: 'Outro cargo',
    company: 'Outro projeto',
    description:
        'Uma experiência de teste para verificar a renderização da timeline.',
  },
]

function Experience() {
  return (
    <Section id="experience" title="Experiência">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Minha trajetória profissional
        </h2>

        <div className="mt-10 space-y-8">
          {experiences.map((experience) => (
            <article
              key={`${experience.period}-${experience.role}`}
              className="relative border-l border-(--color-accent-muted)/50 pl-6"
            >
              <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-(--color-accent)" />

              <p className="text-sm font-medium text-(--color-accent)">
                {experience.period}
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {experience.role}
              </h3>

              <p className="mt-1 text-(--color-text-muted)">
                {experience.company}
              </p>

              <p className="mt-4 max-w-2xl leading-relaxed text-(--color-text-muted)">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Experience