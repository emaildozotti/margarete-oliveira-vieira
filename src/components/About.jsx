// DECISÃO CRIATIVA: Gradiente de fundo from-secondary to-neutral-50 (azul noite → off-white creme)
// simboliza a jornada de Margarete: do momento escuro ao alicerce encontrado.
// A frase-síntese isolada em destaque bg-primary/10 é a única vez que um bloco colorido
// envolve texto corrido — reservado para a declaração de identidade mais poderosa da seção.
// Foto à direita no desktop inverte o padrão convencional (foto à esquerda) — cria
// uma composição onde o texto ancora e a foto responde, não o contrário.

function About() {
  return (
    <section
      id="sobre"
      className="relative bg-gradient-to-b from-secondary to-neutral-50 px-6 py-20 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="font-ui text-xs uppercase tracking-widest text-accent font-medium mb-3">
            Quem é
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-50 mb-2">
            Forjada nos desafios. Ancorada em quem ela sempre foi.
          </h2>
          <div className="w-16 h-px bg-accent mx-auto opacity-60 mt-4" />
        </div>

        {/* Grid: texto + foto */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Texto — lado esquerdo */}
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="font-body text-neutral-200 leading-relaxed mb-5 text-base md:text-lg">
              Passei por momentos em que o único chão firme que eu tinha era a certeza de quem eu era como Filha de Deus. Não um título religioso. Uma identidade. A mais sólida que existe.
            </p>
            <p className="font-body text-neutral-200 leading-relaxed mb-5 text-base md:text-lg">
              Esses momentos me ensinaram que identidade construída sobre conquistas e títulos é frágil. E quando as conquistas vão, você vai junto. Aprendi a ancorar em outro lugar.
            </p>
            <p className="font-body text-neutral-200 leading-relaxed mb-8 text-base md:text-lg">
              Hoje trabalho com adultos que chegam com vida desestruturada e deserto interno. Que se sentem manipulados sem entender por quê. Que já tentaram mudar e voltaram ao mesmo padrão. Meu trabalho começa onde as outras abordagens param: na causa biográfica e espiritual.
            </p>

            {/* Frase de impacto — bloco opaco em primary garante contraste sobre o gradient. */}
            <div className="bg-primary border-l-4 border-accent rounded-r-xl px-6 py-5 shadow-card">
              <p className="font-display text-lg md:text-xl italic text-neutral-50 leading-relaxed">
                "Terapeuta e mentora especializada em reconstrução de identidade e governança pessoal.{' '}
                <span className="not-italic font-bold text-accent">
                  Formação em investigação biográfica e análise de sistemas familiares. Atendimento online com fundamento cristão não doutrinário.
                </span>"
              </p>
            </div>
          </div>

          {/* Foto — lado direito */}
          <div
            className="flex flex-col items-center gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Foto profissional */}
            <div className="w-full max-w-sm mx-auto">
              <img
                src="/images/about.jpg"
                alt="Margarete Oliveira Vieira"
                className="client-photo w-full object-cover rounded"
                style={{ minHeight: '420px' }}
              />
            </div>

            {/* Credenciais placeholder */}
            <div className="bg-neutral-50/10 rounded-xl p-5 w-full max-w-sm text-center border border-neutral-50/20">
              <p className="font-ui text-xs uppercase tracking-widest text-accent/70 mb-2">
                Formação &amp; Especializações
              </p>
              <p className="font-ui text-xs text-neutral-300 italic">
                [Inserir formação e credenciais de Margarete]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
