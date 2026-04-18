import heroImg from "@/assets/hero-kids.jpg";
import CTAButton from "./CTAButton";
import { useLanguage } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-screen w-full flex items-center md:pb-24"
      style={{ paddingTop: 120 }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt={t("hero.alt")} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.75) 0%, rgba(8,8,8,0.55) 60%, rgba(8,8,8,0.85) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full px-[var(--section-px)]" style={{ maxWidth: "var(--container-max)" }}>
        <div className="max-w-3xl">
          <span className="hero-eyebrow block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-6">
            {t("hero.eyebrow")}
          </span>

          <h1 className="hero-headline text-foreground mb-6">
            {t("hero.headline")}
          </h1>

          <p className="hero-subheadline font-body text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            {t("hero.sub")}
          </p>

          <div className="hero-cta">
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
