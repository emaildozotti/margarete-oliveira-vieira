// DECISÃO CRIATIVA: Seção inteira em fundo secondary (azul-noite sólido) — contemplação
// + autoridade. Auroras vinho/dourado ao fundo criam profundidade sem comprometer
// contraste. Card de credenciais com fundo translúcido sobre primary cria
// hierarquia clara: foto > frase-síntese > credenciais > slogan.

function About() {
  return (
    <section
      id="sobre"
      className="relative bg-secondary px-6 py-24 md:px-16 lg:px-24 overflow-hidden section-seam-top"
    >
      {/* Auroras de profundidade — vinho discreto + dourado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(92,26,46,0.30) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-[8%] w-[35vw] h-[35vw] max-w-[420px] max-h-[420px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(181,133,74,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-accent-soft font-medium mb-3">
            Quem é Margarete Oliveira
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight">
            Forjada nos desafios. Ancorada em quem ela sempre foi.
          </h2>
          <div className="w-16 h-px bg-accent mx-auto opacity-70 mt-5" />
        </div>

        {/* Grid: texto + foto */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Texto — lado esquerdo */}
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="font-body text-cream/85 leading-relaxed mb-5 text-base md:text-lg">
              Passei por momentos em que o único chão firme que eu tinha era a certeza de quem eu era como Filha de Deus. Não um título religioso. Uma identidade. A mais sólida que existe.
            </p>
            <p className="font-body text-cream/85 leading-relaxed mb-5 text-base md:text-lg">
              Esses momentos me ensinaram que identidade construída sobre conquistas e títulos é frágil. E quando as conquistas vão, você vai junto. Aprendi a ancorar em outro lugar.
            </p>
            <p className="font-body text-cream/85 leading-relaxed mb-8 text-base md:text-lg">
              Hoje trabalho com adultos que chegam com vida desestruturada e deserto interno. Que se sentem manipulados sem entender por quê. Que já tentaram mudar e voltaram ao mesmo padrão. Meu trabalho começa onde as outras abordagens param: na causa biográfica e espiritual.
            </p>

            {/* Frase-síntese — card vinho com borda dourada */}
            <div className="relative bg-primary border-l-[3px] border-accent rounded-r-xl px-7 py-6 shadow-card">
              <p className="font-display text-lg md:text-xl italic text-cream leading-relaxed">
                "Terapeuta e mentora especializada em reconstrução de identidade e governança pessoal.{' '}
                <span className="not-italic font-bold text-accent-soft">
                  Formação em investigação biográfica e análise de sistemas familiares. Atendimento online com fundamento cristão não doutrinário.
                </span>"
              </p>
            </div>
          </div>

          {/* Foto + credenciais — lado direito */}
          <div
            className="flex flex-col items-center gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Foto profissional com borda dourada sutil */}
            <div className="w-full max-w-sm mx-auto">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-2xl border border-accent/25 pointer-events-none"
                />
                <img
                  src="/images/about.jpg"
                  alt="Margarete Oliveira Vieira"
                  className="client-photo w-full object-cover rounded-xl relative"
                  style={{ minHeight: '420px' }}
                />
              </div>
            </div>

            {/* Card de credenciais — fundo escuro com borda accent */}
            <div className="w-full max-w-sm bg-secondary-deep/60 backdrop-blur-sm rounded-xl p-6 text-center border border-accent/30">
              <p className="font-ui text-xs uppercase tracking-[0.2em] text-accent-soft font-medium mb-3">
                Formação &amp; Especializações
              </p>
              <p className="font-display text-base md:text-lg italic text-cream leading-relaxed">
                TRG &mdash; Terapia de Reprocessamento Generativo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
