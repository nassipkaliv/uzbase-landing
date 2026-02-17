import { Container } from "../ui/Container";
import { useTranslation } from "../../i18n/LanguageContext";
import logoSrc from "../../assets/logo.png";

const HREFS = [
  "#services",
  "#work",
  "#process",
  "#pricing",
  "#faq",
  "#contact",
] as const;

export function Footer() {
  const { t } = useTranslation();

  const links = [
    { label: t.nav.links.services, href: HREFS[0] },
    { label: t.nav.links.work, href: HREFS[1] },
    { label: t.nav.links.process, href: HREFS[2] },
    { label: t.nav.links.pricing, href: HREFS[3] },
    { label: t.nav.links.faq, href: HREFS[4] },
    { label: t.nav.links.contact, href: HREFS[5] },
  ];

  return (
    <footer className="py-10 border-t border-white/[0.06]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="inline-block">
              <img src={logoSrc} alt="UZBASE" className="h-8 w-auto" />
            </a>
            <p className="text-xs text-muted mt-1">{t.footer.tagline}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-[#F5F5F7] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted">
            {t.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
