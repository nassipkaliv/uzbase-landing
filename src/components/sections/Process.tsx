import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

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
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {t.process.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center mx-auto mb-5">
                  <span className="text-accent text-lg font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F5F5F7] mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
