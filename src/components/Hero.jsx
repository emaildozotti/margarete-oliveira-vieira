// DECISÃO CRIATIVA: Hero noturno em base secondary-deep (azul abissal) com auroras
// dourado/vinho — herda a paleta canônica do site. Sticky header desktop com
// backdrop-blur cria continuidade ao rolar. Foto à direita no desktop com frame
// rotacionado de baixa opacidade vinho — ancora visualmente sem competir com o texto.

const WA_LINK = 'https://wa.me/5567993272287?text=Ol%C3%A1%2C%20Margarete!%20Vim%20pelo%20seu%20site%20e%20quero%20minha%20primeira%20conversa.'

function Hero() {
  return (
    <>
      {/* Sticky header — desktop only */}
      <header className="hidden md:flex fixed top-0 inset-x-0 z-50 items-center justify-between px-10 py-4 bg-secondary-deep/85 backdrop-blur-md border-b border-accent/15">
        <span className="font-display italic text-base text-accent-soft">
          Margarete Vieira
        </span>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui font-semibold text-xs uppercase tracking-[0.08em] text-cream bg-primary px-7 py-3 rounded-full hover:bg-primary-deep transition-colors duration-300 shadow-cta"
        >
          Primeira conversa
        </a>
      </header>

      <section
        id="hero"
        aria-label="Hero Margarete Oliveira Vieira"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0E1827 0%, #1A2940 50%, #0A1220 100%)' }}
      >
        {/* Aurora blobs — paleta vinho/dourado */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(92,26,46,0.45) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'aurora-1 16s ease-in-out infinite',
            opacity: 0.7,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[10%] -right-[8%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(181,133,74,0.30) 0%, transparent 70%)',
            filter: 'blur(90px)',
            animation: 'aurora-2 20s ease-in-out infinite',
            opacity: 0.55,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[45%] right-[20%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,168,106,0.20) 0%, transparent 70%)',
            filter: 'blur(70px)',
            animation: 'aurora-3 14s ease-in-out infinite',
            opacity: 0.45,
          }}
        />

        {/* Content grid */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="flex flex-col gap-6 md:order-1 order-2">
            {/* Callout */}
            <p
              className="font-ui text-[10px] tracking-[0.2em] uppercase text-accent-soft opacity-0"
              style={{ animation: 'fadeUp 0.8s ease forwards' }}
            >
              RECONSTRUÇÃO DE IDENTIDADE
            </p>

            {/* H1 */}
            <h1
              className="font-display text-cream leading-[1.1] opacity-0"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                animation: 'fadeUp 0.8s ease forwards',
                animationDelay: '0.15s',
              }}
            >
              Nasceu livre.{' '}
              <span className="block mt-1 text-accent-soft">
                Está vivendo o roteiro dos outros.
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              className="font-body text-cream/75 leading-relaxed max-w-[30rem] opacity-0"
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                animation: 'fadeUp 0.8s ease forwards',
                animationDelay: '0.30s',
              }}
            >
              Terapia que encontra a causa raiz e devolve o governo da sua vida.
            </p>

            {/* CTA */}
            <div
              className="opacity-0"
              style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.45s' }}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-ui font-semibold text-sm uppercase tracking-[0.08em] text-cream bg-primary px-9 py-4 rounded-full shadow-cta hover:bg-primary-deep hover:-translate-y-0.5 transition-all duration-300"
              >
                Quero minha primeira conversa
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Photo column */}
          <div
            className="flex justify-center md:order-2 order-1 opacity-0"
            style={{ animation: 'fadeUp 1s ease forwards', animationDelay: '0.2s' }}
          >
            <div className="relative w-full max-w-[380px]">
              {/* Back frame rotacionado — dourado sutil */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-sm border border-accent/30"
                style={{
                  transform: 'rotate(-2.5deg) translate(10px, 10px)',
                  background: 'rgba(181,133,74,0.06)',
                }}
              />
              {/* Overlay degradê base pra acentuar a foto no escuro */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-sm z-10"
                style={{
                  background: 'linear-gradient(to top, rgba(14,24,39,0.7) 0%, transparent 45%)',
                }}
              />
              <img
                src="/images/hero.jpg"
                alt="Margarete Oliveira Vieira — Reconstrução de Identidade"
                loading="eager"
                className="relative w-full aspect-[3/4] object-cover object-top rounded-sm block shadow-photo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
