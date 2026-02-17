import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";
import type { CaseItem } from "../../i18n/types";

function CaseCard({ study, viewCase }: { study: CaseItem; viewCase: string }) {
  return (
    <div className="group bg-surface rounded-xl border border-white/[0.06] overflow-hidden hover:border-accent/15 transition-all duration-300">
      <div className="h-1 bg-gradient-to-r from-accent/60 to-accent/10" />
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-semibold text-[#F5F5F7] mb-2">
          {study.title}
        </h3>
        <p className="text-muted text-sm mb-4">{study.brief}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-6 mb-6">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-2xl font-bold text-accent">{m.value}</p>
              <p className="text-xs text-muted mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>
        <Button variant="ghost" size="sm">
          {viewCase}
        </Button>
      </div>
    </div>
  );
}

export function Work() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section id="work" className="py-20 lg:py-28">
      <Container>
        <div ref={ref} className="reveal">
          <SectionHeading
            overline={t.work.overline}
            heading={t.work.heading}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {t.work.cases.map((study, i) => (
              <CaseCard key={i} study={study} viewCase={t.work.viewCase} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
