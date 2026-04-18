import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/i18n";

const FinalCTA = () => {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="bg-bg-secondary" style={{ padding: "var(--section-py) 0" }}>
      <div
        className="mx-auto px-[var(--section-px)] text-center"
        style={{ maxWidth: "var(--container-max)" }}
        ref={ref}
      >
        <div className="animate-hidden max-w-3xl mx-auto">
          <h2 className="text-foreground mb-6">
            {t("finalCta.title")}
          </h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed mb-10">
            {t("finalCta.text")}
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
