import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { StarRating } from "../ui/StarRating";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
      <span className="text-accent text-sm font-semibold">{initials}</span>
    </div>
  );
}

export function Testimonials() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-surface/50">
      <Container>
        <div ref={ref} className="reveal">
          <SectionHeading
            overline={t.testimonials.overline}
            heading={t.testimonials.heading}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.items.map((item, index) => (
              <Card key={index}>
                <StarRating />
                <blockquote className="mt-4 text-sm text-muted leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar name={item.name} />
                  <div>
                    <p className="text-sm font-medium text-[#F5F5F7]">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
