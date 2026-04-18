import painImg from "@/assets/pain-screen.jpg";
import painImgMobile from "@/assets/pain-screen-mobile.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/i18n";

const PainSection = () => {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="bg-background" style={{ padding: "var(--section-py) 0" }}>
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-[var(--section-px)]"
        style={{ maxWidth: "var(--container-max)" }}
        ref={ref}
      >
        <div className="animate-hidden">
          <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
            {t("pain.eyebrow")}
          </span>
          <h2 className="text-foreground mb-6">
            {t("pain.title")}
          </h2>
          <p className="font-body text-text-secondary text-base leading-relaxed mb-4">
            {t("pain.p1")}
          </p>
          <p className="font-body text-text-secondary text-base leading-relaxed">
            {t("pain.p2")}
          </p>
        </div>

        <div className="animate-hidden stagger-2">
          <img
            src={painImgMobile}
            alt={t("pain.alt")}
            className="w-full rounded-[var(--radius-md)] object-cover aspect-square md:hidden"
          />
          <img
            src={painImg}
            alt={t("pain.alt")}
            className="w-full rounded-[var(--radius-md)] object-cover aspect-square hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default PainSection;
