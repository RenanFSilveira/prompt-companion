import coachImg from "@/assets/coach-portrait.jpg";
import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tags = ["Renzo Gracie Team", "Head Coach", "Jardim Oceânico"];

const AuthoritySection = () => {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="bg-background" style={{ padding: "var(--section-py) 0" }}>
      <div className="mx-auto px-[var(--section-px)]" style={{ maxWidth: "var(--container-max)" }} ref={ref}>
        {/* Linhagem */}
        <div className="animate-hidden text-center mb-20">
          <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
            A Linhagem
          </span>
          <h2 className="text-foreground mb-6">Uma das maiores linhagens do Jiu-Jitsu mundial</h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed max-w-3xl mx-auto">
            Renzo Gracie é um dos nomes mais respeitados da história das artes marciais. Nossa unidade é filiada diretamente a ele — não é franquia, não é licença. É uma extensão legítima de uma das maiores linhagens do Jiu-Jitsu mundial.
          </p>
        </div>

        {/* Coach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-hidden">
            <img
              src={coachImg}
              alt="Head Coach mito Pontual"
              className="w-full rounded-[var(--radius-md)] object-cover aspect-[3/4]"
            />
          </div>

          <div className="animate-hidden stagger-2">
            <span className="block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
              Head Coach
            </span>
            <h2 className="text-foreground mb-6">Mito Pontual</h2>
            <p className="font-body text-text-secondary text-base leading-relaxed mb-4">
              Mito Pontual lidera a metodologia técnica da academia com foco na formação completa do aluno — dentro e fora do tatame. Com anos de dedicação ao Jiu-Jitsu e uma abordagem que equilibra rigor técnico com acolhimento, ele é a referência para centenas de alunos.
            </p>
            <p className="font-body text-text-secondary text-base leading-relaxed mb-6">
              Uma cobertura exclusiva no coração do Jardim Oceânico. Um ambiente seguro, familiar e pensado para quem valoriza qualidade — sem precisar enfrentar o trânsito da Barra.
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
