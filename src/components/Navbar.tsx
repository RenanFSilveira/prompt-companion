import { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { Menu, X } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Renzo%20Gracie%20Barra%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20de%20Jiu-Jitsu%20Kids.";

const NAV_LINKS = [
  { label: "Programa", href: "#programa" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <a href="#" className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
            Renzo Gracie Barra
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm font-bold uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary font-display text-sm font-bold uppercase tracking-wider text-primary-foreground px-6 py-3 rounded-[var(--radius-btn)] border-2 border-primary hover:bg-accent-light hover:border-accent-light transition-all duration-200"
          >
            <WhatsAppIcon size={16} />
            Agendar Aula Grátis
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[998] bg-background flex flex-col items-center justify-center gap-8 animate-[slideUp_0.3s_ease-out]">
          {NAV_LINKS.map((link) => (
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
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary font-display text-base font-bold uppercase tracking-wider text-primary-foreground px-8 py-4 rounded-[var(--radius-btn)] border-2 border-primary mt-4"
          >
            <WhatsAppIcon />
            Agendar Aula Grátis
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
