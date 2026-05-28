// DECISÃO CRIATIVA: FAQ accordion com ícone + que rotaciona 45deg para virar ×
// ao abrir — animação mínima que comunica clareza e ordem sem excesso.
// O CTA final em fundo primary (vinho) é o único momento da página onde o fundo
// de uma seção é primary — reservado deliberadamente para o máximo impacto de conversão.
// O ornamento blur no CTA final usa primary mais escuro (opacity alta) criando
// profundidade e solenidade — é o momento de decisão da jornada.

import { useState } from 'react'

const faqs = [
  {
    question: 'Preciso ser cristã para fazer esse processo?',
    answer:
      'Não. Trabalho com uma atmosfera espiritual cristã, mas não com doutrina. Se você tem valores espirituais ou princípios que guiam sua vida, esse espaço vai ressoar. Se você não tem vínculo religioso, o processo biográfico funciona da mesma forma.',
  },
  {
    question: 'Já fiz terapia antes e não resolvi. Por que seria diferente?',
    answer:
      'Porque a maioria das abordagens trata o comportamento ou o sintoma. Eu investigo a causa biográfica. Muitas pessoas que chegam até mim já passaram por outros processos. O trabalho aqui começa onde os outros pararam.',
  },
  {
    question: 'Funciona online?',
    answer:
      'Sim, atendo exclusivamente online. A profundidade do trabalho não depende de presença física. Muitos clientes dizem que o ambiente familiar facilitou a abertura para temas que nunca tinham tocado antes.',
  },
  {
    question: 'Quanto tempo leva o processo?',
    answer:
      'Depende da profundidade da sua história e do seu comprometimento. Processos com causa biográfica profunda costumam durar de 4 a 8 meses. Serei honesta contigo desde o início sobre o que é possível no seu caso.',
  },
  {
    question: 'Qual é o investimento?',
    answer:
      'O valor depende do formato e da frequência do acompanhamento. Conversamos sobre isso na nossa primeira reunião, sem pressão. Sei que é uma decisão importante. Sei também que carregar um roteiro que não é seu tem um custo que você já paga há anos.',
  },
]

const CTA_WHATSAPP =
  'https://wa.me/5567993272287?text=Ol%C3%A1%20Margarete%2C%20vi%20seu%20site%20e%20quero%20dar%20o%20primeiro%20passo%20para%20retomar%20o%20governo%20da%20minha%20vida'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* FAQ */}
      <section
        id="faq"
        className="bg-neutral-100 px-6 py-20 md:px-16 lg:px-24"
      >
        <div className="max-w-3xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="font-ui text-xs uppercase tracking-widest text-accent font-medium mb-3">
              Dúvidas Frequentes
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900">
              Perguntas frequentes
            </h2>
            <div className="w-16 h-px bg-accent mx-auto opacity-60 mt-4" />
          </div>

          {/* Accordion */}
          <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-xl overflow-hidden shadow-card transition-shadow duration-300 hover:shadow-card-hover"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-ui font-medium text-neutral-900 text-sm md:text-base leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-primary border-primary' : ''
                      }`}
                      aria-hidden="true"
                    >
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
                        className={isOpen ? 'text-neutral-50' : 'text-accent'}
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`faq-answer ${isOpen ? 'open' : 'closed'}`}
                    role="region"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="w-full h-px bg-accent/20 mb-4" />
                      <p className="font-body text-neutral-700 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Final — fundo primary */}
      <section
        id="cta-final"
        className="relative bg-primary px-6 py-24 md:px-16 lg:px-24 overflow-hidden"
      >
        {/* Ornamentos blur no CTA */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-neutral-900 opacity-20 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent opacity-10 blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/4"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p
            className="font-ui text-xs uppercase tracking-widest text-accent/80 font-medium mb-4"
            data-aos="fade-up"
          >
            O Próximo Passo
          </p>

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-50 leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Você nasceu com um design original.
            <br />
            <span className="italic font-normal text-accent">
              Está na hora de retomar o que sempre foi seu.
            </span>
          </h2>

          <p
            className="font-body text-neutral-200 text-lg leading-relaxed max-w-xl mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Quando você estiver pronta para esse processo, estarei aqui.
          </p>

          <div data-aos="fade-up" data-aos-delay="280">
            <a
              href={CTA_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-ui text-sm font-semibold uppercase tracking-wider text-primary bg-neutral-50 px-10 py-4 rounded-full hover:bg-neutral-100 transition-all duration-300 shadow-cta hover:shadow-none hover:-translate-y-0.5"
            >
              Quero conversar com Margarete
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
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <p
            className="font-ui text-xs text-neutral-50/40 mt-6 italic"
            data-aos="fade-up"
            data-aos-delay="320"
          >
            Mensagem WhatsApp: "Olá Margarete, vi sua página e quero conversar."
          </p>
        </div>
      </section>
    </>
  )
}

export default FAQ
