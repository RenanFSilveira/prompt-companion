import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    icon: "🥋",
    title: "Disciplina e Hierarquia",
    desc: "Respeito às regras, aos professores e aos colegas. Uma base sólida de valores que acompanha a criança para a vida.",
  },
  {
    icon: "💪",
    title: "Resiliência",
    desc: "Aprender que errar faz parte do processo e que persistência é o caminho. Gestão de frustração na prática.",
  },
  {
    icon: "🤝",
    title: "Desenvolvimento Social",
    desc: "Interações saudáveis, amizades reais e alegria compartilhada em um ambiente seguro e familiar.",
  },
  {
    icon: "📵",
    title: "Saúde Física",
    desc: "Movimento, postura e bem-estar no lugar de horas de tela. Uma alternativa real ao sedentarismo infantil.",
  },
];

const ProgramSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="programa" className="bg-bg-secondary" style={{ padding: "var(--section-py) 0" }}>
      <div className="mx-auto px-[var(--section-px)]" style={{ maxWidth: "var(--container-max)" }} ref={ref}>
        <div className="text-center mb-16 animate-hidden">
          <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
            O Método
          </span>
          <h2 className="text-foreground mb-6">Projeto Pequenos Samurais</h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            O Jiu-Jitsu não é só uma luta. Na Renzo Gracie Barra, ele é uma ferramenta de formação de caráter. Não é uma escolinha de esporte. É uma metodologia de educação — em um tatame.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`animate-hidden stagger-${i + 1} bg-bg-card border border-primary/20 rounded-[var(--radius-card)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary`}
              style={{
                boxShadow: "var(--shadow-card)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card)"; }}
            >
              <span className="text-[40px] block mb-4">{p.icon}</span>
              <h3 className="text-foreground mb-3">{p.title}</h3>
              <p className="font-body text-text-secondary text-base leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
