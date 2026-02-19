import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
      <span className="text-accent text-lg font-semibold">{initials}</span>
    </div>
  );
}

export function Testimonials() {
  const ref = useScrollReveal();
  const { t } = useTranslation();
  const item = t.testimonials.items[0];

  return (
    <section className="py-20 lg:py-28 bg-surface/50">
      <Container>
        <div ref={ref} className="reveal">
          <SectionHeading
            overline={t.testimonials.overline}
            heading={t.testimonials.heading}
          />
          <div className="max-w-3xl mx-auto text-center">
            {/* Large quote mark */}
            <svg
              className="w-12 h-12 text-accent/30 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M11.3 2.5c-1.4.7-2.5 1.5-3.4 2.5C6.6 6.3 6 7.9 6 9.8c0 .5.1.9.2 1.2h1.3c1.6 0 2.8.5 3.7 1.4.9 1 1.3 2.2 1.3 3.6 0 1.5-.5 2.7-1.4 3.6-1 .9-2.1 1.4-3.5 1.4-1.7 0-3-.6-4-1.9C2.5 17.8 2 16 2 13.7c0-2.7.8-5 2.3-7.1C5.8 4.5 8.1 3 11.3 2.5zm11 0c-1.4.7-2.5 1.5-3.4 2.5-1.3 1.3-1.9 2.9-1.9 4.8 0 .5.1.9.2 1.2h1.3c1.6 0 2.8.5 3.7 1.4.9 1 1.3 2.2 1.3 3.6 0 1.5-.5 2.7-1.4 3.6-1 .9-2.1 1.4-3.5 1.4-1.7 0-3-.6-4-1.9-1.1-1.3-1.6-3.1-1.6-5.4 0-2.7.8-5 2.3-7.1 1.5-2.1 3.8-3.6 7-4.1z" />
            </svg>

            <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#F5F5F7] leading-relaxed font-medium">
              &ldquo;{item.quote}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Avatar name={item.name} />
              <div className="text-left">
                <p className="text-base font-semibold text-[#F5F5F7]">
                  {item.name}
                </p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
