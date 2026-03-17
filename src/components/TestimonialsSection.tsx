import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "Meu filho era extremamente tímido e tinha dificuldade em interagir com outras crianças. Depois de 6 meses no Projeto Pequenos Samurais, a mudança foi impressionante. Ele está mais confiante, fez amigos de verdade e até melhorou na escola.",
    name: "Patrícia M.",
    child: "mãe do Lucas, 8 anos",
  },
  {
    quote:
      "O Pedro passava o dia inteiro no tablet. Desde que começou no Jiu-Jitsu, ele pede para ir à aula. A disciplina que aprendeu no tatame refletiu em casa — ele aceita regras com muito mais maturidade.",
    name: "Roberto S.",
    child: "pai do Pedro, 10 anos",
  },
  {
    quote:
      "Eu tinha medo de ser agressivo, mas é o oposto. O ambiente da Renzo Gracie Barra é acolhedor e ao mesmo tempo exigente. A Sophia aprendeu a lidar com frustração de um jeito que nenhuma outra atividade conseguiu.",
    name: "Fernanda L.",
    child: "mãe da Sophia, 7 anos",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="depoimentos" className="bg-bg-secondary" style={{ padding: "var(--section-py) 0" }}>
      <div className="mx-auto px-[var(--section-px)]" style={{ maxWidth: "var(--container-max)" }} ref={ref}>
        <div className="text-center mb-16 animate-hidden">
          <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
            Prova Social
          </span>
          <h2 className="text-foreground">O que os pais dizem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 max-md:flex max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory scrollbar-hide max-md:gap-4 max-md:pb-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`animate-hidden stagger-${i + 1} bg-bg-card border border-primary/20 rounded-[var(--radius-card)] p-7 border-t-[3px] border-t-primary flex flex-col max-md:flex-none max-md:w-[85vw] max-md:snap-start`}
            >
              <span className="font-display text-6xl text-accent-light/50 leading-none mb-2">"</span>
              <p className="font-body text-text-secondary text-base leading-relaxed italic flex-1 mb-6">
                {t.quote}
              </p>
              <div className="border-t border-foreground/10 pt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center font-display text-lg font-bold text-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-text-secondary">{t.child}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
