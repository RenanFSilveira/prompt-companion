import painImg from "@/assets/pain-screen.jpg";
import painImgMobile from "@/assets/pain-screen-mobile.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PainSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background" style={{ padding: "var(--section-py) 0" }}>
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-[var(--section-px)]"
        style={{ maxWidth: "var(--container-max)" }}
        ref={ref}
      >
        <div className="animate-hidden">
          <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
            O problema que você já conhece
          </span>
          <h2 className="text-foreground mb-6">
            Horas de tela. Zero disciplina. Nenhuma mudança real.
          </h2>
          <p className="font-body text-text-secondary text-base leading-relaxed mb-4">
            A maioria das crianças hoje passa mais de 6 horas por dia em frente a telas. O resultado? Falta de concentração, dificuldade em aceitar limites, sedentarismo, e uma geração que não sabe lidar com frustração.
          </p>
          <p className="font-body text-text-secondary text-base leading-relaxed">
            Você já tentou limitar o tempo de tela. Já tentou outras atividades. Mas nada parece criar aquela mudança real de comportamento que você quer ver no seu filho.
          </p>
        </div>

        <div className="animate-hidden stagger-2">
          <img
            src={painImgMobile}
            alt="Criança exposta a telas"
            className="w-full rounded-[var(--radius-md)] object-cover aspect-square md:hidden"
          />
          <img
            src={painImg}
            alt="Criança exposta a telas"
            className="w-full rounded-[var(--radius-md)] object-cover aspect-square hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default PainSection;
