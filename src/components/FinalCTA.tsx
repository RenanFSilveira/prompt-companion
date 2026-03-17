import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCTA = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-bg-secondary" style={{ padding: "var(--section-py) 0" }}>
      <div
        className="mx-auto px-[var(--section-px)] text-center"
        style={{ maxWidth: "var(--container-max)" }}
        ref={ref}
      >
        <div className="animate-hidden max-w-3xl mx-auto">
          <h2 className="text-foreground mb-6">
            A primeira aula é gratuita. O próximo passo é simples.
          </h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed mb-10">
            Você não está matriculando seu filho em uma academia de luta. Você está dando a ele uma ferramenta para a vida: disciplina para estudar, respeito para conviver, resiliência para não desistir quando for difícil.
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
