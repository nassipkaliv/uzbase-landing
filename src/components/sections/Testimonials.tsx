import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

export function Testimonials() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section className="py-24 lg:py-32 bg-surface/50">
      <Container>
        <div ref={ref} className="reveal">
          <SectionHeading
            overline={t.testimonials.overline}
            heading={t.testimonials.heading}
          />

          {/* Staggered 3-column grid */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {t.testimonials.items.map((item, index) => (
              <div
                key={index}
                data-reveal="scale"
                className={`bg-midnight rounded-2xl border border-border/[0.06] p-6 lg:p-8 ${
                  index === 1 ? "md:mt-8" : ""
                }`}
              >
                <p className="text-foreground leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/[0.04]">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent text-sm font-semibold">
                      {item.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
