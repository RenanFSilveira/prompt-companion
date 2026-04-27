import coachImg from "@/assets/01-imagem-professor.jpg";
import lineageImg from "@/assets/Mito & Renzo.jpg";
import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/i18n";

const AuthoritySection = () => {
  const ref = useScrollReveal();
  const { t } = useLanguage();

  const tags = [t("authority.tag1"), t("authority.tag2"), t("authority.tag3")];

  return (
    <section id="sobre" className="bg-background" style={{ padding: "var(--section-py) 0" }}>
      <div className="mx-auto px-[var(--section-px)]" style={{ maxWidth: "var(--container-max)" }} ref={ref}>
        {/* Linhagem */}
        <div className="animate-hidden text-center mb-20">
          <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
            {t("authority.lineageEyebrow")}
          </span>
          <h2 className="text-foreground mb-6">{t("authority.lineageTitle")}</h2>
          <img
            src={lineageImg}
            alt={t("authority.lineageImageAlt")}
            className="w-full max-w-2xl mx-auto rounded-[var(--radius-md)] object-cover mb-8"
          />
          <p className="font-body text-text-secondary text-lg leading-relaxed max-w-3xl mx-auto">
            {t("authority.lineageText")}
          </p>
        </div>

        {/* Coach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-hidden">
            <img
              src={coachImg}
              alt={t("authority.coachAlt")}
              className="w-full rounded-[var(--radius-md)] object-cover aspect-[3/4]"
            />
          </div>

          <div className="animate-hidden stagger-2">
            <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
              {t("authority.coachEyebrow")}
            </span>
            <h2 className="text-foreground mb-6">{t("authority.coachName")}</h2>
            <p className="font-body text-text-secondary text-base leading-relaxed mb-4">
              {t("authority.coachP1")}
            </p>
            <p className="font-body text-text-secondary text-base leading-relaxed mb-6">
              {t("authority.coachP2")}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-primary/15 border border-primary/40 text-accent-light rounded-full px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
