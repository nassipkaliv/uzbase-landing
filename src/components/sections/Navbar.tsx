import { useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useScrolledNavbar } from "../../hooks/useScrolledNavbar";
import { useTranslation } from "../../i18n/LanguageContext";
import logoSrc from "../../assets/logo.png";

export function Navbar() {
  const isScrolled = useScrolledNavbar();
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-border/[0.06]"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-16 lg:h-18">
        <a href="#" className="flex items-center">
          <img src={logoSrc} alt="UZBASE" className="h-10 w-auto logo-adaptive" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button as="a" href="#contact" size="sm">
            {t.nav.cta}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-200 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-foreground transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </Container>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-midnight/95 backdrop-blur-xl z-40 animate-fade-in">
          <Container className="flex flex-col gap-6 pt-8">
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button as="a" href="#contact" size="lg" onClick={() => setMobileOpen(false)}>
              {t.nav.cta}
            </Button>
          </Container>
        </div>
      )}
    </nav>
  );
}
