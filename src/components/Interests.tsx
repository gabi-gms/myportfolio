import Section from './Section'

const interests = [
  {
    title: 'Tecnologia',
    description:
      'Desenvolvimento de software, novas tecnologias e tudo que envolve criar soluções digitais.',
  },
  {
    title: 'Ciência & Espaço',
    description:
      'Astronomia, exploração espacial e a curiosidade por entender como o universo funciona.',
  },
  {
    title: 'Cultura Geek',
    description:
      'Jogos, RPG, ficção científica, fantasia, livros e histórias que despertam a imaginação.',
  },
  {
    title: 'Criatividade',
    description:
      'Escrita, criação de conteúdo e projetos que misturam tecnologia com expressão criativa.',
  },
]

function Interests() {
  return (
    <Section id="interests" title="Interesses">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          O que existe além do código
        </h2>

        <p className="mt-4 max-w-2xl text-(--color-text-muted)">
          Tecnologia é uma parte importante do que faço, mas não é a única
          coisa que desperta minha curiosidade.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {interests.map((interest) => (
            <article
              key={interest.title}
              className="rounded-2xl border border-(--color-accent-muted)/40 bg-(--color-surface) p-6 transition hover:-translate-y-1 hover:border-(--color-accent)"
            >
              <h3 className="text-lg font-semibold">
                {interest.title}
              </h3>

              <p className="mt-3 leading-relaxed text-(--color-text-muted)">
                {interest.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Interests