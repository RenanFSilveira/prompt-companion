import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/i18n";

const TestimonialsSection = () => {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  const testimonials = [
    { quote: t("testimonials.t1.quote"), name: t("testimonials.t1.name"), child: t("testimonials.t1.child") },
    { quote: t("testimonials.t2.quote"), name: t("testimonials.t2.name"), child: t("testimonials.t2.child") },
    { quote: t("testimonials.t3.quote"), name: t("testimonials.t3.name"), child: t("testimonials.t3.child") },
  ];

  return (
    <section id="depoimentos" className="bg-bg-secondary" style={{ padding: "var(--section-py) 0" }}>
      <div className="mx-auto px-[var(--section-px)]" style={{ maxWidth: "var(--container-max)" }} ref={ref}>
        <div className="text-center mb-16 animate-hidden">
          <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
            {t("testimonials.eyebrow")}
          </span>
          <h2 className="text-foreground">{t("testimonials.title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 max-md:flex max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory scrollbar-hide max-md:gap-4 max-md:pb-4">
          {testimonials.map((tst, i) => (
            <div
              key={i}
              className={`animate-hidden stagger-${i + 1} bg-bg-card border border-primary/20 rounded-[var(--radius-card)] p-7 border-t-[3px] border-t-primary flex flex-col max-md:flex-none max-md:w-[85vw] max-md:snap-start`}
            >
              <span className="font-display text-6xl text-accent-light/50 leading-none mb-2">"</span>
              <p className="font-body text-text-secondary text-base leading-relaxed italic flex-1 mb-6">
                {tst.quote}
              </p>
              <div className="border-t border-foreground/10 pt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center font-display text-lg font-bold text-foreground">
                  {tst.name[0]}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{tst.name}</p>
                  <p className="font-body text-xs text-text-secondary">{tst.child}</p>
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
