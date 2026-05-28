// DECISÃO CRIATIVA: Pain points em grid 2 colunas no desktop com borda esquerda accent,
// criando ritmo visual de "lista de reconhecimento". O cliffhanger isolado ao final
// com borda esquerda primary mais espessa cria tensão narrativa antes da VSL.
// Cada item tem ícone de traço fino (não checkmark de sucesso — aqui é dor, não conquista).

const pains = [
  'Tem a vida que "deveria ser feliz". Mas carrega um vazio que não tem nome.',
  'Sente que vive para cumprir expectativas dos outros. Não sabe mais o que é seu.',
  'Carrega feridas da infância que aparecem sem avisar. Nos relacionamentos, no trabalho, nos limites.',
  'Tenta mudar comportamentos, mas nada dura. Porque trata o sintoma, não a causa.',
]

function PainPoints() {
  return (
    <section
      id="dores"
      className="bg-neutral-100 px-6 py-20 md:px-16 lg:px-24 section-seam-top"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Reconheço essas pessoas quando chegam até mim:
          </h2>
          <div className="w-16 h-px bg-accent mx-auto opacity-60" />
        </div>

        {/* Grid de dores */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="flex gap-4 bg-neutral-50 rounded-xl p-6 border-l-4 border-accent shadow-card hover:shadow-card-hover transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {/* Ícone de traço */}
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <p className="font-body text-neutral-700 leading-relaxed text-sm md:text-base italic">
                "{pain}"
              </p>
            </div>
          ))}
        </div>

        {/* Validação */}
        <div
          className="text-center mb-10 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          <p className="font-body text-neutral-700 text-lg leading-relaxed">
            Quando você não sabe quem é, qualquer vento te move para o lado errado.
          </p>
        </div>

        {/* Cliffhanger */}
        <div
          className="border-l-4 border-primary bg-primary/10 rounded-r-xl px-8 py-6 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          <p className="font-body text-neutral-900 text-lg leading-relaxed">
            O que eu faço é diferente. E vou te explicar exatamente por quê —
            mas antes, preciso que você assista a um vídeo.
          </p>
          <a
            href="#vsl"
            className="inline-flex items-center gap-2 mt-5 font-ui text-sm font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors duration-300"
          >
            Ver o vídeo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default PainPoints
