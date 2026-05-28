// DECISÃO CRIATIVA: Linha conectora vertical em CSS entre os passos (pseudo-elemento ::before)
// cria uma "linha do tempo" visual que reforça a ideia de processo sequencial e progressão.
// A linha usa a cor accent com opacity, não primary — para comunicar que o caminho é
// guiado (accent = cobre dourado = suporte do terapeuta), não imposto.
// Passo 5 recebe tratamento visual diferenciado (badge "Chegou lá") — reforça o objetivo
// de autonomia como destino, não como ponto de partida.

const steps = [
  {
    number: '01',
    title: 'Conversa de Apresentação',
    description:
      'Ofereço uma conversa inicial gratuita e sem compromisso. Quero entender sua história e onde você está nesse momento. Você não precisa ter respostas prontas para chegar.',
  },
  {
    number: '02',
    title: 'O Processo de Investigação',
    description:
      'Trabalho 100% online em sessões estruturadas. Investigamos sua história desde a infância. Identificamos os padrões que se repetem. Entendemos de onde vieram. Cada sessão produz clareza real.',
  },
  {
    number: '03',
    title: 'A Retomada',
    description:
      'Com o tempo, você para de se reconhecer nos roteiros que outros escreveram. Começa a exercer escolhas conscientes. Retoma a governança da sua própria vida com fundamento sólido.',
    highlight: true,
  },
]

function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-neutral-100 px-6 py-20 md:px-16 lg:px-24 section-seam-top"
    >
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="font-ui text-xs uppercase tracking-widest text-accent font-medium mb-3">
            O Processo
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Três etapas para retomar o governo da sua vida
          </h2>
          <div className="w-16 h-px bg-accent mx-auto opacity-60" />
        </div>

        {/* Lista de passos com conector vertical */}
        <div className="relative">
          {/* Linha conectora vertical */}
          <div
            aria-hidden="true"
            className="absolute left-7 top-8 bottom-8 w-px bg-accent opacity-30 hidden md:block"
          />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex gap-6 ${
                  step.highlight
                    ? 'bg-primary/5 border border-primary/20 rounded-2xl p-6'
                    : 'items-start'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Número do passo */}
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-ui font-semibold text-sm ${
                    step.highlight
                      ? 'bg-primary text-neutral-50'
                      : 'bg-neutral-50 border-2 border-accent/40 text-primary'
                  }`}
                >
                  {step.number}
                </div>

                {/* Conteúdo */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-lg font-bold text-neutral-900">
                      {step.title}
                    </h3>
                    {step.highlight && (
                      <span className="font-ui text-xs uppercase tracking-wider text-neutral-50 bg-primary px-3 py-1 rounded-full">
                        Chegou lá
                      </span>
                    )}
                  </div>
                  <p className="font-body text-neutral-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nota importante */}
        <div
          className="mt-12 bg-neutral-50 rounded-xl p-6 border border-accent/20"
          data-aos="fade-up"
        >
          <p className="font-ui text-xs uppercase tracking-widest text-accent font-medium mb-3">
            Nota importante
          </p>
          <ul className="space-y-2">
            {[
              'Esse processo tem o seu tempo. Não é apressado e não precisa ser.',
              'O que é sólido leva tempo para construir.',
              'Atendimento 100% online.',
            ].map((note, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                </div>
                <p className="font-body text-neutral-700 text-sm leading-relaxed">
                  {note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
