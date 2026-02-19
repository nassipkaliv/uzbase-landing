import { Container } from "../ui/Container";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

export function About() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section className="py-24 lg:py-32 spotlight-top">
      <Container>
        <div ref={ref} className="reveal">
          <span data-reveal className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            {t.about.overline}
          </span>
          <h2 data-reveal className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-4xl">
            {t.about.heading}
          </h2>

          <p data-reveal="right" className="mt-8 text-muted text-base lg:text-lg leading-relaxed max-w-xl ml-auto">
            {t.about.description}
          </p>

          <div className="flex flex-wrap gap-12 lg:gap-20 mt-16 pt-10 border-t border-border/[0.06]">
            {t.about.stats.map((stat, index) => (
              <div key={index} data-reveal>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent leading-none">
                  {stat.value}
                </p>
                <p className="text-sm text-muted mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
