import { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { trackWhatsappLead } from "@/lib/gtm";
import logoImg from "@/assets/Logo Renzo Gracie Team.png";

const buildWhatsappLink = (message: string) =>
  `https://wa.me/5521981877700?text=${encodeURIComponent(message)}`;

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("nav.programa"), href: "#programa" },
    { label: t("nav.sobre"), href: "#sobre" },
    { label: t("nav.depoimentos"), href: "#depoimentos" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  const whatsappLink = buildWhatsappLink(t("wa.message"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,10,10,0.95)] backdrop-blur-[12px] shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-[var(--section-px)] py-4" style={{ maxWidth: "var(--container-max)" }}>
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="Renzo Gracie Barra">
            <img
              src={logoImg}
              alt="Renzo Gracie Team"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm font-bold uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right side: language + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <LanguageSwitcher />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsappLead}
              className="inline-flex items-center gap-2 bg-primary font-display text-sm font-bold uppercase tracking-wider text-primary-foreground px-6 py-3 rounded-[var(--radius-btn)] border-2 border-primary hover:bg-accent-light hover:border-accent-light transition-all duration-200"
            >
              <WhatsAppIcon size={16} />
              {t("nav.cta")}
            </a>
          </div>

          {/* Mobile right side: language + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher compact />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[998] bg-background flex flex-col items-center justify-center gap-8 animate-[slideUp_0.3s_ease-out]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-bold uppercase tracking-wider text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsappLead}
            className="inline-flex items-center gap-2 bg-primary font-display text-base font-bold uppercase tracking-wider text-primary-foreground px-8 py-4 rounded-[var(--radius-btn)] border-2 border-primary mt-4"
          >
            <WhatsAppIcon />
            {t("nav.cta")}
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
