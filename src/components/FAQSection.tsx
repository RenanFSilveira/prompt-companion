import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/i18n";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollReveal();
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-background" style={{ padding: "var(--section-py) 0" }}>
      <div className="mx-auto px-[var(--section-px)]" style={{ maxWidth: "var(--container-max)" }} ref={ref}>
        <div className="text-center mb-16 animate-hidden">
          <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
            {t("faq.eyebrow")}
          </span>
          <h2 className="text-foreground">{t("faq.title")}</h2>
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
