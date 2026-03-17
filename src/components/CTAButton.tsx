import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_LINK =
  "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Renzo%20Gracie%20Barra%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20de%20Jiu-Jitsu%20Kids.";

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2.5 bg-primary font-display text-base font-bold uppercase tracking-widest text-primary-foreground rounded-[var(--radius-btn)] border-2 border-primary px-10 py-[18px] transition-all duration-200 hover:bg-accent-light hover:border-accent-light hover:-translate-y-0.5 active:translate-y-0 animate-[pulseAccent_3s_ease-in-out_infinite] hover:animate-none ${className}`}
    style={{
      boxShadow: "var(--shadow-btn)",
    }}
    onMouseEnter={(e) => { (e.currentTarget.style.boxShadow) = "var(--shadow-btn-hover)"; }}
    onMouseLeave={(e) => { (e.currentTarget.style.boxShadow) = "var(--shadow-btn)"; }}
  >
    <WhatsAppIcon />
    Agendar Aula Experimental Gratuita
  </a>
);

export default CTAButton;
