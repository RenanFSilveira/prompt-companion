import { Award, Users, Shield } from "lucide-react";

const items = [
  { icon: Award, text: "[X] anos de história" },
  { icon: Users, text: "+[X] alunos formados" },
  { icon: Shield, text: "Filiação direta Renzo Gracie" },
];

const CredibilityBar = () => (
  <section className="bg-primary py-5">
    <div className="mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-3 px-[var(--section-px)]" style={{ maxWidth: "var(--container-max)" }}>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <item.icon size={20} className="text-primary-foreground" />
          <span className="font-display text-base font-bold uppercase text-primary-foreground">
            {item.text}
          </span>
          {i < items.length - 1 && (
            <span className="hidden md:inline ml-9 text-primary-foreground/40">|</span>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default CredibilityBar;
