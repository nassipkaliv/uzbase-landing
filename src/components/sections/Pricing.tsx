import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

const TIER_META = [
  { highlighted: false },
  { highlighted: true },
  { highlighted: false },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function Pricing() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section id="pricing" className="py-20 lg:py-28 spotlight-top">
      <Container>
        <div ref={ref} className="reveal">
          <SectionHeading
            overline={t.pricing.overline}
            heading={t.pricing.heading}
            subtext={t.pricing.subtext}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {t.pricing.tiers.map((tier, index) => (
              <Card
                key={index}
                highlighted={TIER_META[index].highlighted}
                className="flex flex-col"
              >
                {TIER_META[index].highlighted && (
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                    {t.pricing.mostPopular}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-foreground">
                  {tier.name}
                </h3>
                <p className="text-2xl lg:text-3xl font-bold text-foreground mt-2">
                  {tier.price}
                </p>
                <p className="text-muted text-sm mt-2 mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-muted">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  as="a"
                  href="#contact"
                  variant={TIER_META[index].highlighted ? "primary" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
