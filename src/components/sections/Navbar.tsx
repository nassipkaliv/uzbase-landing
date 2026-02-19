import { useState } from "react";
import { Button } from "../ui/Button";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useTranslation } from "../../i18n/LanguageContext";
import logoSrc from "../../assets/logo.png";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const NAV_LINKS = [
    { label: t.nav.links.services, href: "#services" },
    { label: t.nav.links.work, href: "#work" },
    { label: t.nav.links.process, href: "#process" },
    { label: t.nav.links.pricing, href: "#pricing" },
    { label: t.nav.links.faq, href: "#faq" },
    { label: t.nav.links.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 py-3 rounded-2xl bg-surface/60 backdrop-blur-2xl border border-border/[0.08] shadow-[0_2px_24px_-4px_rgba(0,0,0,0.3)]">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img src={logoSrc} alt="UZBASE" className="h-8 w-auto logo-adaptive" />
        </a>

        {/* Desktop nav links — centered */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3.5 py-2 text-sm text-muted hover:text-foreground transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-px bg-accent group-hover:w-4/5 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop right controls */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <LanguageSwitcher />
          <ThemeToggle />
          <div className="w-px h-5 bg-border/[0.08] mx-1" />
          <Button as="a" href="#contact" size="sm">
            {t.nav.cta}
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="relative w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block w-[18px] h-[1.5px] bg-foreground transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""
                }`}
              />
              <span
                className={`block w-[18px] h-[1.5px] bg-foreground transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 transition-all duration-400 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-midnight/98 backdrop-blur-2xl" />
        <div className="relative z-10 flex flex-col h-full pt-24 px-6">
          <div className="flex items-center gap-3 mb-8">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-2xl font-medium text-muted hover:text-foreground py-3 border-b border-border/[0.04] transition-all duration-300 ${
                  mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: mobileOpen ? `${i * 50 + 100}ms` : "0ms" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto pb-12">
            <Button
              as="a"
              href="#contact"
              size="lg"
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
