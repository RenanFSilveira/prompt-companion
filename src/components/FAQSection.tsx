import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "O Jiu-Jitsu não é muito agressivo para crianças pequenas?",
    a: "Não. O Jiu-Jitsu é uma das artes marciais mais indicadas para crianças justamente por ser baseado em técnica, não em força bruta. O foco do Projeto Pequenos Samurais é controle, respeito e fair play.",
  },
  {
    q: "Meu filho é tímido. Será que vai se adaptar?",
    a: "Crianças tímidas costumam ser as que mais se transformam. O ambiente familiar da academia e a progressão gradual de habilidades constroem autoconfiança de forma natural.",
  },
  {
    q: "Como funciona a aula experimental?",
    a: "É gratuita, sem compromisso e sem pressão. A criança participa de uma aula real com os outros alunos. Você assiste e sente o ambiente. Depois, você decide com calma.",
  },
  {
    q: "Qual a faixa etária do projeto?",
    a: "O Projeto Pequenos Samurais atende crianças a partir de [X] anos. Entre em contato para saber mais sobre as turmas disponíveis.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollReveal();

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-background" style={{ padding: "var(--section-py) 0" }}>
      <div className="mx-auto px-[var(--section-px)]" style={{ maxWidth: "var(--container-max)" }} ref={ref}>
        <div className="text-center mb-16 animate-hidden">
          <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-foreground">Perguntas e Respostas</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="animate-hidden border-b border-foreground/10">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="font-display text-lg font-bold uppercase text-foreground pr-4">
                  {faq.q}
                </span>
                <span
                  className="text-foreground text-2xl flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-400"
                style={{
                  maxHeight: openIndex === i ? 500 : 0,
                  transition: "max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <p className="font-body text-text-secondary text-base leading-relaxed pb-6">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
