const WA_LINK = 'https://wa.me/5567993272287?text=Ol%C3%A1%2C%20Margarete!%20Vim%20pelo%20seu%20site%20e%20quero%20minha%20primeira%20conversa.'

const css = `
@keyframes aurora-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(4%, 5%) scale(1.06); }
  66% { transform: translate(-3%, 2%) scale(0.96); }
}
@keyframes aurora-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-5%, -4%) scale(1.09); }
  66% { transform: translate(4%, -2%) scale(0.94); }
}
@keyframes aurora-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(3%, -5%) scale(1.07); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
`

function Hero() {
  return (
    <>
      <style>{css}</style>

      {/* Desktop sticky header */}
      <header className="mv-header" style={{ display: 'none' }}>
        <style>{`@media(min-width:768px){.mv-header{display:flex!important;position:fixed;top:0;left:0;right:0;z-index:50;align-items:center;justify-content:space-between;padding:1rem 2.5rem;background:rgba(8,8,16,0.88);backdrop-filter:blur(12px);border-bottom:1px solid rgba(var(--color-primary-rgb,100,80,200),0.12)}}`}</style>
        <span style={{ fontFamily: 'var(--font-display, serif)', color: 'var(--color-accent, #8B7CE8)', fontSize: '1.1rem', fontStyle: 'italic' }}>
          Margarete Vieira
        </span>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:"#5C1A2E",color:"#FAF7F2",fontFamily:"Inter,system-ui,sans-serif",fontWeight:600,fontSize:"14px",letterSpacing:"0.08em",textTransform:"uppercase",padding:"16px 36px",borderRadius:"9999px",textDecoration:"none",cursor:"pointer",boxShadow:"0 12px 32px rgba(92,26,46,0.25)",transition:"all 0.3s ease"}} style={{ fontSize: '0.8rem' }}>
          Primeira conversa
        </a>
      </header>

      <section
        id="hero"
        aria-label="Hero Margarete Oliveira Vieira"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #080810 0%, #0D0D1E 50%, #060610 100%)',
        }}
      >
        {/* Aurora blobs */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '-15%', left: '-10%', width: '55vw', height: '55vw', maxWidth: '600px', maxHeight: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(100,80,200,0.25) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', animation: 'aurora-1 16s ease-in-out infinite', opacity: 0.35 }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-10%', right: '-8%', width: '45vw', height: '45vw', maxWidth: '500px', maxHeight: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,124,232,0.20) 0%, transparent 70%)', filter: 'blur(90px)', pointerEvents: 'none', animation: 'aurora-2 20s ease-in-out infinite', opacity: 0.3 }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '45%', right: '20%', width: '35vw', height: '35vw', maxWidth: '400px', maxHeight: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,60,180,0.18) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none', animation: 'aurora-3 14s ease-in-out infinite', opacity: 0.25 }} />

        {/* Content */}
        <div
          className="mv-grid"
          style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '72rem', margin: '0 auto', padding: '6rem 1.5rem 4rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
        >
          <style>{`@media(min-width:768px){.mv-grid{grid-template-columns:1fr 1fr!important;padding-top:5rem!important}.mv-photo{order:2}.mv-text{order:1}}`}</style>

          {/* Text column */}
          <div className="mv-text" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Callout */}
            <p
              style={{ fontFamily: 'var(--font-ui, sans-serif)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent, #8B7CE8)', margin: 0, opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0s' }}
            >
              RECONSTRUÇÃO DE IDENTIDADE
            </p>

            {/* H1 — excellent copy, preserved */}
            <h1
              style={{ fontFamily: 'var(--font-display, serif)', fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1, color: '#F5F3FF', margin: 0, opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.15s' }}
            >
              Nasceu livre.{' '}
              <span style={{ color: 'var(--color-accent, #8B7CE8)', display: 'block', marginTop: '0.2rem' }}>
                Está vivendo o roteiro dos outros.
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.65, color: 'rgba(245,243,255,0.70)', maxWidth: '30rem', margin: 0, opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.30s' }}
            >
              Terapia que encontra a causa raiz e devolve o governo da sua vida.
            </p>

            {/* CTA */}
            <div style={{ opacity: 0, animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.45s' }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:"#5C1A2E",color:"#FAF7F2",fontFamily:"Inter,system-ui,sans-serif",fontWeight:600,fontSize:"14px",letterSpacing:"0.08em",textTransform:"uppercase",padding:"16px 36px",borderRadius:"9999px",textDecoration:"none",cursor:"pointer",boxShadow:"0 12px 32px rgba(92,26,46,0.25)",transition:"all 0.3s ease"}}>
                Quero minha primeira conversa
              </a>
            </div>
          </div>

          {/* Photo — Treatment A: rotated frame */}
          <div className="mv-photo" style={{ display: 'flex', justifyContent: 'center', opacity: 0, animation: 'fadeUp 1s ease forwards', animationDelay: '0.2s' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
              {/* Rotated back frame */}
              <div aria-hidden="true" style={{ position: 'absolute', inset: 0, transform: 'rotate(-2.5deg)', background: 'rgba(100,80,200,0.10)', border: '1px solid rgba(139,124,232,0.3)', borderRadius: '4px', translate: '10px 10px' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #080810 0%, transparent 45%)', zIndex: 1, pointerEvents: 'none', borderRadius: '4px' }} aria-hidden="true" />
              <img
                src="/images/hero.jpg"
                alt="Margarete Oliveira Vieira — Reconstrução de Identidade"
                style={{ position: 'relative', width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px', display: 'block', boxShadow: '0 25px 60px rgba(0,0,0,0.7)' }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
