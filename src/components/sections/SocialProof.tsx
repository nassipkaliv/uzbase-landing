import { useTranslation } from "../../i18n/LanguageContext";

const CLIENTS = ["Marpla", "Bonne Clinique", "Бюро 1:36", "LPMS", "Robert AI", "ProDent", "TopHeats", "Мералит"];

export function SocialProof() {
  const { t } = useTranslation();

  // Duplicate for seamless loop
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-10 border-y border-border/[0.04] overflow-hidden">
      <p className="text-center text-xs text-muted uppercase tracking-[0.25em] mb-6">
        {t.socialProof.overline}
      </p>
      <div className="marquee-track">
        <div className="marquee-content">
          {items.map((name, i) => (
            <span key={i} className="flex items-center gap-8 text-muted/60 whitespace-nowrap">
              <span className="text-lg sm:text-xl font-semibold tracking-wide">{name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
