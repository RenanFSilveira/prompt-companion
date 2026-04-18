import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/i18n";

const ProgramSection = () => {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  const pillars = [
    { icon: "🥋", title: t("program.p1.title"), desc: t("program.p1.desc") },
    { icon: "💪", title: t("program.p2.title"), desc: t("program.p2.desc") },
    { icon: "🤝", title: t("program.p3.title"), desc: t("program.p3.desc") },
    { icon: "📵", title: t("program.p4.title"), desc: t("program.p4.desc") },
  ];

  return (
    <section id="programa" className="bg-bg-secondary" style={{ padding: "var(--section-py) 0" }}>
      <div className="mx-auto px-[var(--section-px)]" style={{ maxWidth: "var(--container-max)" }} ref={ref}>
        <div className="text-center mb-16 animate-hidden">
          <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
            {t("program.eyebrow")}
          </span>
          <h2 className="text-foreground mb-6">{t("program.title")}</h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            {t("program.intro")}
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
