import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

const STEP_NUMBERS = ["01", "02", "03", "04"];

export function Process() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section id="process" className="py-20 lg:py-28 bg-surface/50">
      <Container>
        <div ref={ref} className="reveal">
          <SectionHeading
            overline={t.process.overline}
            heading={t.process.heading}
          />
          <div className="max-w-2xl mx-auto">
            {t.process.steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 pb-10 last:pb-0">
                {index < t.process.steps.length - 1 && (
                  <div className="absolute left-[19px] top-12 bottom-0 w-px bg-white/[0.06]" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center">
                  <span className="text-accent text-sm font-semibold">
                    {STEP_NUMBERS[index]}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-[#F5F5F7] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
