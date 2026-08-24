import Section from './Section'

function About() {
  return (
    <Section id="about" title="Sobre">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Construir software também é uma forma de criar.
          </h2>

          <div className="mt-6 max-w-2xl space-y-4 text-(--color-text-muted)">
            <p>
              Sou desenvolvedora de software e gosto de entender como as
              coisas funcionam, transformar problemas em soluções e aprender
              novas tecnologias no processo.
            </p>

            <p>
              Meu interesse por tecnologia vai além de uma stack específica.
              Gosto de explorar diferentes áreas e encontrar conexões entre
              programação, criatividade e outras formas de conhecimento.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-(--color-accent-muted)/40 bg-(--color-surface) p-6">
          <p className="text-sm font-medium text-(--color-accent)">
            Atualmente
          </p>

          <p className="mt-3 leading-relaxed text-(--color-text-muted)">
            Explorando novas tecnologias, construindo projetos e
            transformando ideias em experiências digitais.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default About