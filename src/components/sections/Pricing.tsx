import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

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

const TIER_META = [
  { highlighted: false },
  { highlighted: true },
  { highlighted: false },
];

export function Pricing() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section id="pricing" className="py-24 lg:py-32 spotlight-top">
      <Container>
        <div ref={ref} className="reveal">
          <div className="text-center mb-16">
            <span data-reveal className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 block">
              {t.pricing.overline}
            </span>
            <h2 data-reveal className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {t.pricing.heading}
            </h2>
            <p data-reveal className="mt-4 text-muted text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.pricing.subtext}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 items-start">
            {t.pricing.tiers.map((tier, index) => {
              const isPopular = TIER_META[index].highlighted;
              return (
                <div
                  key={index}
                  data-reveal="scale"
                  className={`relative flex flex-col rounded-2xl border p-6 lg:p-8 transition-all duration-300 ${
                    isPopular
                      ? "bg-surface border-accent/20 glow-accent-sm md:-mt-4 md:mb-4"
                      : "bg-surface border-border/[0.06] hover:border-accent/15"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-6 bg-accent text-[#0A0A0F] text-xs font-bold px-3 py-1 rounded-full">
                      {t.pricing.mostPopular}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-foreground">
                    {tier.name}
                  </h3>
                  <p className="text-3xl lg:text-4xl font-bold text-foreground mt-3">
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
                    variant={isPopular ? "primary" : "outline"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
