// DECISÃO CRIATIVA: Aspas decorativas tipográficas em Playfair Display tamanho 6xl
// e cor primary opacity 15% criam uma âncora visual que comunica "palavra de alguém"
// sem recorrer a ícones de aspas genéricos.
// No mobile, os cards são dispostos em scroll snap horizontal — evita truncamento
// de depoimentos e mantém cada história completa e legível.
// Depoimentos em vídeo (Shorts 9:16) abrem a seção: peso máximo de prova social
// vem do rosto/voz real; cards de texto fecham com variedade de histórias.
// Texto dos cards em fala natural, sem estrutura "antes/depois" — soa como
// alguém realmente falando, não como copy de página.

const videoTestimonials = [
  { id: 'TOIzdLWU-mQ', title: 'Depoimento de paciente — Margarete Oliveira' },
  { id: 'MB09CXVTqIU', title: 'Depoimento de paciente — Margarete Oliveira' },
]

const testimonials = [
  {
    name: 'Luciana T.',
    age: 'gestora',
    location: 'Brasília',
    quote:
      'Eu fazia terapia há anos e ficava andando em círculos. Mudava uma coisa, voltava pra outra parecida. Com a Margarete comecei a entender de onde vinha — não só o que estava acontecendo agora. Foi isso que destravou.',
  },
  {
    name: 'Claudia B.',
    age: 'professora universitária',
    location: 'Curitiba',
    quote:
      'Eu achava que precisava escolher entre minha fé e fazer um trabalho mais profundo. Com ela não precisei. É a primeira vez que me sinto inteira.',
  },
  {
    name: 'Renata O.',
    age: 'advogada',
    location: 'São Paulo',
    quote:
      'Cheguei pra resolver um assunto bem pontual. Saí entendendo que vivia uma vida que não era inteiramente minha. Hoje sei onde eu termino e onde começa o que esperavam de mim.',
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

        {/* Depoimentos em vídeo (Shorts 9:16) */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
        >
          {videoTestimonials.map((v, index) => (
            <div
              key={v.id}
              className="mx-auto w-full"
              style={{ maxWidth: '300px' }}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-card"
                style={{ aspectRatio: '9/16' }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Separador entre vídeos e cards de texto */}
        <div
          aria-hidden="true"
          className="w-24 h-px bg-accent opacity-30 mx-auto mb-16"
        />

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

      {/* Fala */}
      <div className="relative z-10">
        <p className="font-body text-[15px] text-neutral-800 leading-relaxed">
          {testimonial.quote}
        </p>
      </div>
    </div>
  )
}

export default Testimonials
