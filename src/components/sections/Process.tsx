import { Container } from "../ui/Container";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

export function Process() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section id="process" className="py-24 lg:py-32 bg-surface/50">
      <Container>
        <div ref={ref} className="reveal">
          <div className="max-w-xl ml-auto mb-16 text-right">
            <span data-reveal="right" className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 block">
              {t.process.overline}
            </span>
            <h2 data-reveal="right" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {t.process.heading}
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

            <div className="space-y-12 lg:space-y-16">
              {t.process.steps.map((step, index) => (
                <div key={index} data-reveal="left" className="relative flex gap-8 lg:gap-12 group">
                  <div className="relative shrink-0 w-12 lg:w-16 flex justify-center pt-1">
                    <div className="w-3 h-3 rounded-full bg-accent/40 ring-4 ring-midnight group-hover:bg-accent group-hover:ring-accent/20 transition-all duration-300" />
                  </div>

                  <div>
                    <span className="text-accent/40 text-xs font-mono uppercase tracking-widest mb-2 block">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted text-base leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
