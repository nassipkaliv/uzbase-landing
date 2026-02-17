import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { useTranslation } from "../../i18n/LanguageContext";

function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      <svg viewBox="0 0 400 400" className="w-full h-auto" aria-hidden="true">
        <defs>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00B8D4" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="url(#glow1)" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.3" />
        <rect x="145" y="145" width="110" height="110" rx="16" fill="url(#grad1)" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.2" className="animate-float" />
        <circle cx="300" cy="120" r="24" fill="url(#grad2)" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.25" className="animate-float" style={{ animationDelay: "2s" }} />
        <rect x="95" y="280" width="32" height="32" rx="4" fill="url(#grad2)" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.2" transform="rotate(45, 111, 296)" className="animate-float" style={{ animationDelay: "4s" }} />
        <circle cx="320" cy="280" r="4" fill="#00E5FF" fillOpacity="0.4" />
        <circle cx="80" cy="160" r="3" fill="#00E5FF" fillOpacity="0.3" />
        <circle cx="260" cy="80" r="2" fill="#00E5FF" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

const TRUST_ICONS = [
  <svg key="speed" className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  <svg key="code" className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>,
  <svg key="chat" className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>,
];

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 noise-bg overflow-hidden">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#F5F5F7]">
              {t.hero.headlineBefore}
              <span className="text-gradient-accent">{t.hero.headlineAccent}</span>
              {t.hero.headlineAfter}
            </h1>
            <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
              {t.hero.subtext}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="a" href="#contact" size="lg">
                {t.hero.ctaPrimary}
              </Button>
              <Button as="a" href="#work" variant="outline" size="lg">
                {t.hero.ctaSecondary}
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {t.hero.trustPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  {TRUST_ICONS[i]}
                  <span className="text-sm text-muted">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
