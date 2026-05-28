// DECISÃO CRIATIVA: Números romanos em Playfair Display tamanho grande como âncoras visuais
// de cada pilar — reforça a profundidade histórica/biográfica do método.
// O ornamento blur accent centralizado cria um ponto de calor visual que une os 3 pilares.
// Decisão não-óbvia: o título de cada pilar em Playfair Italic (não bold) — comunica reflexão,
// não assertividade agressiva — mais coerente com o arquétipo Sábio/Mentor.

const pillars = [
  {
    roman: 'I',
    title: 'Investigação da Origem',
    description:
      'Mergulho na sua história desde o início. Infância, sistema familiar, como o amor e os limites foram ensinados para você. A raiz da sua dor está lá. É lá que começamos.',
  },
  {
    roman: 'II',
    title: 'Reconhecimento do Design Original',
    description:
      'Você tem uma identidade que antecede qualquer rótulo que te colocaram. Trabalho para que você se reconecte a quem você realmente é, antes das camadas que o mundo foi colocando.',
  },
  {
    roman: 'III',
    title: 'Retomada do Título de Posse',
    description:
      'Ao final do processo, você exerce o governo da sua própria vida. Toma decisões a partir dos seus valores. Para de viver o roteiro de terceiros. Você retoma o que sempre foi seu.',
  },
]

function Method() {
  return (
    <section
      id="metodo"
      className="relative bg-neutral-50 px-6 py-20 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Ornamento blur accent centralizado */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.07] blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Título da seção */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="font-ui text-xs uppercase tracking-widest text-accent font-medium mb-3">
            O Método
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            Investigação Biográfica e{' '}
            <span className="text-primary">Governança Pessoal</span>
          </h2>
          <p className="font-ui text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-medium mb-5">
            TRG · Terapia de Reprocessamento Generativo
          </p>
          <p className="font-body text-neutral-700 text-lg max-w-xl mx-auto leading-relaxed">
            Criei esse processo porque percebo onde o problema realmente está: na infância, no sistema familiar, no binômio entre amor e limites. Não trabalho o sintoma. Trabalho a causa.
          </p>
          <div className="w-16 h-px bg-accent mx-auto opacity-60 mt-6" />
        </div>

        {/* Grid dos pilares */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-neutral-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              {/* Número romano */}
              <div className="font-display text-6xl font-bold text-accent/20 leading-none mb-4 select-none">
                {pillar.roman}
              </div>

              {/* Título do pilar */}
              <h3 className="font-display text-xl italic text-primary mb-4 leading-snug">
                {pillar.title}
              </h3>

              {/* Separador */}
              <div className="w-8 h-px bg-accent opacity-50 mb-5" />

              {/* Descrição */}
              <p className="font-body text-neutral-700 leading-relaxed text-sm md:text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Frase de impacto */}
        <div
          className="mt-16 text-center max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          <p className="font-display text-xl md:text-2xl italic text-neutral-900 leading-relaxed">
            "Não trabalho com quem quer apenas alívio imediato. Esse processo exige coragem de olhar para dentro.{' '}
            <span className="text-primary font-bold not-italic">
              Para quem está disposta, os resultados são reais e duradouros.
            </span>"
          </p>
        </div>
      </div>
    </section>
  )
}

export default Method
