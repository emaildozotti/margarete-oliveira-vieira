// DECISÃO CRIATIVA: Fundo secondary (azul noite) isola a VSL do resto da página
// criando um momento contemplativo — como entrar em outro espaço.
// O container 9:16 vertical é proposital: formato de Reels/Stories que o público
// já reconhece como formato de fala direta e autêntica.
// Texto antes do vídeo reduz fricção: prepara o visitante para o que vai ver.

function VideoSection() {
  return (
    <section
      id="vsl"
      className="bg-secondary px-6 py-20 md:px-16 lg:px-24 relative overflow-hidden section-seam-top"
    >
      {/* Ornamento blur */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary opacity-[0.06] blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Texto acima do player */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-50 mb-4">
            Há momentos em que só a certeza de quem você é mantém você de pé.
          </h2>
          <p className="font-body text-neutral-100 text-lg leading-relaxed max-w-xl mx-auto opacity-80">
            Aprendi que identidade não é o que você conquista. É o que você descobre que sempre foi.
            Gravei esse vídeo para quem sente que está vivendo uma vida que não é inteiramente sua.
          </p>
        </div>

        {/* Container 9:16 vertical */}
        <div data-aos="fade-up" data-aos-delay="150">
          <div
            id="video-placeholder"
            className="mx-auto relative"
            style={{ maxWidth: '300px', aspectRatio: '9/16' }}
          >
            <iframe
              src="https://www.youtube.com/embed/BicIxU_ictc"
              title="Margarete Oliveira Vieira — Vídeo de apresentação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>

        {/* Âncora pós-vídeo */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="font-display text-lg md:text-xl italic text-neutral-100 opacity-80 max-w-2xl mx-auto leading-relaxed">
            "Se algo aqui ressoou, você já está no lugar certo."
          </p>
          <a
            href="#metodo"
            className="inline-flex items-center gap-2 mt-6 font-ui text-sm font-medium uppercase tracking-wider text-accent hover:text-neutral-50 transition-colors duration-300"
          >
            Conhecer o método
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

export default VideoSection
