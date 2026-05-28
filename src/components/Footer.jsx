// DECISÃO CRIATIVA: Footer em fundo secondary (azul noite) — continuidade visual
// do encerramento da jornada. Minimalista intencional: nome + slogan + WhatsApp.
// A frase-síntese em Playfair Italic como epígrafe final deixa o visitante com
// a voz de Margarete como última impressão — não com informações operacionais.

const CTA_WHATSAPP =
  'https://wa.me/5567993272287?text=Ol%C3%A1%20Margarete%2C%20vi%20seu%20site%20e%20quero%20dar%20o%20primeiro%20passo%20para%20retomar%20o%20governo%20da%20minha%20vida'

function Footer() {
  return (
    <footer className="bg-secondary px-6 py-16 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Separador */}
        <div className="w-full h-px bg-accent opacity-20 mb-12" />

        {/* Conteúdo central */}
        <div className="text-center mb-10">
          {/* Nome */}
          <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-50 mb-2">
            Margarete Oliveira Vieira
          </h3>

          {/* Slogan */}
          <p className="font-ui text-xs uppercase tracking-widest text-accent/70 font-medium mb-8">
            Análise Biográfica &amp; Governança Pessoal
          </p>

          {/* Frase-síntese em Playfair Italic */}
          <p className="font-display text-lg italic text-neutral-200 opacity-70 max-w-2xl mx-auto leading-relaxed mb-10">
            "Você nasceu com um design original. Está na hora de retomar o que sempre foi seu."
          </p>

          {/* Link WhatsApp */}
          <a
            href={CTA_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-ui text-sm font-medium text-accent hover:text-neutral-50 transition-colors duration-300"
          >
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
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Falar com Margarete no WhatsApp
          </a>
        </div>

        {/* Separador */}
        <div className="w-full h-px bg-accent opacity-10 mb-8" />

        {/* Créditos */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-ui text-xs text-neutral-50/30">
            &copy; {new Date().getFullYear()} Margarete Oliveira Vieira. Todos
            os direitos reservados.
          </p>
          <p className="font-ui text-xs text-neutral-50/20">
            Desenvolvido por{' '}
            <span className="text-neutral-50/30">Zotti Performance Marketing</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
