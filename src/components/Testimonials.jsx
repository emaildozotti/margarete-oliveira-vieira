// DECISÃO CRIATIVA: Aspas decorativas tipográficas em Playfair Display tamanho 6xl
// e cor primary opacity 15% criam uma âncora visual que comunica "palavra de alguém"
// sem recorrer a ícones de aspas genéricos.
// No mobile, os cards são dispostos em scroll snap horizontal — evita truncamento
// de depoimentos e mantém cada história completa e legível.
// Separação visual clara entre "situação anterior" (italic, menor) e "resultado" (bold)
// reforça a estrutura Chaperon sem precisar de labels explícitos.

const testimonials = [
  {
    name: 'Luciana T.',
    age: 'gestora',
    location: 'Brasília',
    situation:
      'Passei anos tentando mudar comportamentos e voltando para o mesmo lugar.',
    result:
      'Com Margarete entendi que a raiz estava na minha infância. Em 6 meses, mudei padrões que carregava há 30 anos.',
  },
  {
    name: 'Claudia B.',
    age: 'professora universitária',
    location: 'Curitiba',
    situation:
      'Não sabia que era possível ter fé e fazer terapia profunda ao mesmo tempo.',
    result:
      'Ela integra os dois de um jeito que nunca senti como imposição. Me sinto inteira pela primeira vez.',
  },
  {
    name: 'Renata O.',
    age: 'advogada',
    location: 'São Paulo',
    situation:
      'Cheguei sentindo que vivia a vida que esperavam de mim.',
    result:
      'Hoje sei quem sou antes de qualquer papel que desempenho. Isso mudou meus relacionamentos, meu trabalho e a minha paz.',
  },
]

function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="bg-neutral-50 px-6 py-20 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="font-ui text-xs uppercase tracking-widest text-accent font-medium mb-3">
            Histórias Reais
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            O que dizem quem já recuperou
            <br className="hidden md:block" />
            <span className="text-primary"> o governo da própria vida</span>
          </h2>
          <div className="w-16 h-px bg-accent mx-auto opacity-60 mt-2" />
        </div>

        {/* Mobile: scroll snap horizontal */}
        <div className="flex md:hidden gap-5 overflow-x-auto testimonials-track pb-4 -mx-6 px-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="testimonial-card-snap flex-shrink-0 w-[85vw] max-w-sm"
            >
              <TestimonialCard testimonial={t} delay={0} />
            </div>
          ))}
        </div>

        {/* Desktop: grid 3 colunas */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} delay={index * 120} />
          ))}
        </div>

      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, delay }) {
  return (
    <div
      className="bg-neutral-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Aspas decorativas tipográficas */}
      <div
        aria-hidden="true"
        className="font-display text-8xl text-primary opacity-[0.12] leading-none absolute top-4 left-6 select-none"
      >
        "
      </div>

      {/* Foto placeholder */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 border border-accent/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent/50"
            aria-hidden="true"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div>
          <p className="font-ui font-semibold text-neutral-900 text-sm">
            {testimonial.name}
          </p>
          <p className="font-ui text-xs text-neutral-700/80">
            {testimonial.age} &bull; {testimonial.location}
          </p>
        </div>
      </div>

      {/* Situação anterior */}
      <div className="mb-4 relative z-10">
        <p className="font-ui text-xs uppercase tracking-[0.18em] text-neutral-700/75 font-medium mb-2">
          Antes
        </p>
        <p className="font-body text-sm text-neutral-700 italic leading-relaxed">
          "{testimonial.situation}"
        </p>
      </div>

      {/* Separador */}
      <div className="w-full h-px bg-accent opacity-20 my-4" />

      {/* Resultado */}
      <div className="relative z-10">
        <p className="font-ui text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">
          Depois
        </p>
        <p className="font-body text-sm text-neutral-900 font-semibold leading-relaxed">
          "{testimonial.result}"
        </p>
      </div>
    </div>
  )
}

export default Testimonials
