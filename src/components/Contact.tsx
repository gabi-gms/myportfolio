import Section from './Section'

function Contact() {
  return (
    <Section id="contact" title="Contato">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Vamos conversar?
        </h2>

        <p className="mt-4 text-lg leading-relaxed text-(--color-text-muted)">
          Estou aberta a oportunidades, projetos e boas conversas sobre
          tecnologia.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:seuemail@email.com"
            className="rounded-lg bg-(--color-accent) px-5 py-3 text-sm font-medium text-(--color-bg) transition hover:opacity-85"
          >
            Enviar e-mail
          </a>

          <a
            href="#home"
            className="rounded-lg border border-(--color-accent-muted) px-5 py-3 text-sm font-medium text-(--color-text) transition hover:border-(--color-accent)"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Contact