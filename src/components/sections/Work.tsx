import { Container } from "../ui/Container";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";
import type { CaseItem } from "../../i18n/types";

function CaseCard({ study }: { study: CaseItem }) {
  const inner = (
    <div className="work-card group relative flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[440px] h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden rounded-2xl border border-border/[0.06] bg-surface flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/40 transition-all duration-300" />
      </div>
      <div className="p-5 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-semibold text-foreground">{study.title}</h3>
          <div className="flex gap-1.5">
            {study.tags.map((tag) => (
              <span key={tag} className="text-[11px] text-muted bg-overlay/[0.04] border border-border/[0.06] rounded-full px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted line-clamp-2">{study.brief}</p>
      </div>
    </div>
  );

  if (study.url && study.url !== "#") {
    return (
      <a href={study.url} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }
  return inner;
}

export function Work() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  const items = [...t.work.cases, ...t.work.cases, ...t.work.cases];

  return (
    <section id="work" className="py-24 lg:py-32 overflow-hidden">
      <Container>
        <div ref={ref} className="reveal">
          <div className="max-w-xl mb-14">
            <span data-reveal className="text-accent text-sm font-semibold uppercase tracking-widest mb-3 block">
              {t.work.overline}
            </span>
            <h2 data-reveal className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {t.work.heading}
            </h2>
          </div>
        </div>
      </Container>

      <div className="work-marquee-track">
        <div className="work-marquee-content">
          {items.map((study, i) => (
            <CaseCard key={`${study.title}-${i}`} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
