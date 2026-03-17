const Footer = () => (
  <footer className="bg-background border-t border-foreground/5 py-10">
    <div className="mx-auto px-[var(--section-px)] text-center" style={{ maxWidth: "var(--container-max)" }}>
      <p className="font-display text-lg font-bold uppercase tracking-wider text-foreground mb-2">
        Renzo Gracie Barra
      </p>
      <p className="font-body text-sm text-text-secondary mb-1">
        Cobertura da Av. Olegário Maciel, 101 — Jardim Oceânico, Barra da Tijuca, Rio de Janeiro, RJ
      </p>
      <p className="font-body text-xs text-text-secondary/60 mt-4">
        © {new Date().getFullYear()} Renzo Gracie Barra. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
