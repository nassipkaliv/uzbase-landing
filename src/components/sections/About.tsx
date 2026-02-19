import { Container } from "../ui/Container";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

export function About() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div ref={ref} className="reveal">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — text */}
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 block">
                {t.about.overline}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
                {t.about.heading}
              </h2>
            </div>

            {/* Right — description */}
            <div className="lg:pt-10">
              <p className="text-muted text-base lg:text-lg leading-relaxed">
                {t.about.description}
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/[0.06]">
            {t.about.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">
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
