import { useLanguage } from "@/lib/i18n";
import { trackWhatsappLead } from "@/lib/gtm";
import logoImg from "@/assets/Logo Renzo Gracie Team.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-foreground/5 py-10">
      <div className="mx-auto px-[var(--section-px)] text-center flex flex-col items-center" style={{ maxWidth: "var(--container-max)" }}>
        <img
          src={logoImg}
          alt="Renzo Gracie Team"
          className="h-16 w-auto object-contain mb-4"
        />
        <p className="font-display text-lg font-bold uppercase tracking-wider text-foreground mb-2">
          {t("footer.name")}
        </p>
        <p className="font-body text-sm text-text-secondary mb-1 whitespace-pre-line">
          {t("footer.address")}
        </p>
        <a
          href={`https://wa.me/5521981877700?text=${encodeURIComponent(t("wa.message"))}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsappLead}
          className="font-body text-sm text-text-secondary mt-2 hover:text-foreground transition-colors"
        >
          {t("footer.phoneLabel")}: {t("footer.phone")}
        </a>
        <p className="font-body text-xs text-text-secondary/60 mt-4">
          © {new Date().getFullYear()} {t("footer.name")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
