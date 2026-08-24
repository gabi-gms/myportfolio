function Footer() {
  return (
    <footer className="border-t border-(--color-accent-muted)/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-(--color-text-muted) sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Gabi. Todos os direitos reservados.
        </p>

        <p>
          Feito com React, TypeScript e Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

export default Footer