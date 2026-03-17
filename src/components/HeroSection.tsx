import heroImg from "@/assets/hero-kids.jpg";
import CTAButton from "./CTAButton";

const HeroSection = () => (
  <section
    className="relative min-h-screen w-full flex items-center"
    style={{ paddingTop: 120 }}
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Crianças treinando Jiu-Jitsu" className="w-full h-full object-cover" />
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
          Renzo Gracie Barra · Jardim Oceânico
        </span>

        <h1 className="hero-headline text-foreground mb-6">
          Disciplina. Respeito. Autoconfiança. Seu filho pode desenvolver tudo isso.
        </h1>

        <p className="hero-subheadline font-body text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
          O Projeto Pequenos Samurais usa o Jiu-Jitsu para formar crianças disciplinadas, resilientes e confiantes — em um ambiente familiar e de alto nível na Barra da Tijuca.
        </p>

        <div className="hero-cta">
          <CTAButton />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
