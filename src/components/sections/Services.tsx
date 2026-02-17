import { type ReactNode } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

const ICONS: ReactNode[] = [
  <svg key="design" className="w-8 h-8" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="2" width="28" height="28" rx="6" stroke="#00E5FF" strokeWidth="1.5" strokeOpacity="0.6" />
    <circle cx="16" cy="16" r="6" stroke="#00E5FF" strokeWidth="1.5" />
    <path d="M16 10V2M16 30V22M10 16H2M30 16H22" stroke="#00E5FF" strokeWidth="1" strokeOpacity="0.3" />
  </svg>,
  <svg key="dev" className="w-8 h-8" viewBox="0 0 32 32" fill="none">
    <path d="M10 8L4 16L10 24" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 8L28 16L22 24" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 6L14 26" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
  </svg>,
  <svg key="brand" className="w-8 h-8" viewBox="0 0 32 32" fill="none">
    <circle cx="12" cy="14" r="8" stroke="#00E5FF" strokeWidth="1.5" strokeOpacity="0.5" />
    <circle cx="20" cy="14" r="8" stroke="#00E5FF" strokeWidth="1.5" strokeOpacity="0.5" />
    <circle cx="16" cy="20" r="8" stroke="#00E5FF" strokeWidth="1.5" strokeOpacity="0.5" />
  </svg>,
  <svg key="growth" className="w-8 h-8" viewBox="0 0 32 32" fill="none">
    <path d="M4 24L10 18L16 21L22 12L28 8" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="28" cy="8" r="3" stroke="#00E5FF" strokeWidth="1.5" fill="#00E5FF" fillOpacity="0.15" />
  </svg>,
];

export function Services() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 lg:py-28">
      <Container>
        <div ref={ref} className="reveal">
          <SectionHeading
            overline={t.services.overline}
            heading={t.services.heading}
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {t.services.items.map((service, index) => (
              <Card key={index}>
                <div className="mb-4">{ICONS[index]}</div>
                <h3 className="text-lg font-semibold text-[#F5F5F7] mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
