import WhatsAppIcon from "./WhatsAppIcon";
import { useLanguage } from "@/lib/i18n";

const CTAButton = ({ className = "" }: { className?: string }) => {
  const { t } = useLanguage();
  const link = `https://wa.me/5521981877700?text=${encodeURIComponent(t("wa.message"))}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-cta inline-flex items-center gap-2.5 bg-primary font-display text-base font-bold uppercase tracking-widest text-primary-foreground rounded-[var(--radius-btn)] border-2 border-primary px-10 py-[18px] transition-all duration-200 hover:bg-accent-light hover:border-accent-light hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      <WhatsAppIcon />
      {t("cta.full")}
    </a>
  );
};

export default CTAButton;
