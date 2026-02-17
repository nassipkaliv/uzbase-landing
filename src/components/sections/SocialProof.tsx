import { Container } from "../ui/Container";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

const CLIENTS = [
  "Vertex AI",
  "NovaPay",
  "GreenField",
  "Archline Studio",
  "Forma.uz",
  "CloudBase",
];

export function SocialProof() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section className="py-12 lg:py-16 border-y border-white/[0.04]">
      <Container>
        <div ref={ref} className="reveal">
          <p className="text-center text-sm text-muted mb-6 uppercase tracking-widest">
            {t.socialProof.overline}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {CLIENTS.map((name) => (
              <span
                key={name}
                className="px-5 py-2 text-sm text-muted border border-white/[0.06] rounded-full bg-white/[0.02] whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
