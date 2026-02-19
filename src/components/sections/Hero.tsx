import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { useTranslation } from "../../i18n/LanguageContext";

const SERVICE_ICONS = [
  <svg key="web" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.777.515-3.435 1.404-4.832" />
  </svg>,
  <svg key="bot" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>,
  <svg key="mobile" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>,
  <svg key="desktop" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
  </svg>,
  <svg key="design" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
  </svg>,
];

const SERVICE_LABELS_RU = ["Сайты", "Боты", "Мобайл", "Десктоп", "Дизайн"];
const SERVICE_LABELS_UZ = ["Saytlar", "Botlar", "Mobil", "Desktop", "Dizayn"];

export function Hero() {
  const { t, locale } = useTranslation();
  const serviceLabels = locale === "uz" ? SERVICE_LABELS_UZ : SERVICE_LABELS_RU;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.04] blur-[150px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[100px]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      <Container className="relative z-10 pt-32 pb-32 sm:pt-42 lg:pt-42 lg:pb-0">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badges — staggered entrance */}
          <div className="hero-enter flex flex-wrap justify-center gap-2 mb-8" style={{ animationDelay: "0.1s" }}>
            {serviceLabels.map((label, i) => (
              <span
                key={label}
                className="hero-badge inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted border border-border/[0.06] rounded-full bg-surface/50 backdrop-blur-sm"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <span className="text-accent">{SERVICE_ICONS[i]}</span>
                {label}
              </span>
            ))}
          </div>

          {/* Headline — word-by-word reveal */}
          <h1 className="hero-enter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-foreground" style={{ animationDelay: "0.2s" }}>
            {t.hero.headlineBefore.trim().split(/\s+/).map((word, i) => (
              <span key={i} className="word-reveal inline-block" style={{ animationDelay: `${0.4 + i * 0.06}s` }}>
                {word}&nbsp;
              </span>
            ))}
            <br className="hidden sm:block" />
            {t.hero.headlineAccent.trim().split(/\s+/).map((word, i, arr) => (
              <span key={`a-${i}`} className="word-reveal inline-block text-gradient-accent" style={{ animationDelay: `${0.4 + (t.hero.headlineBefore.trim().split(/\s+/).length + i) * 0.06}s` }}>
                {word}{i < arr.length - 1 ? "\u00a0" : ""}
              </span>
            ))}
            {t.hero.headlineAfter && t.hero.headlineAfter.trim().split(/\s+/).map((word, i) => (
              <span key={`b-${i}`} className="word-reveal inline-block" style={{ animationDelay: `${0.4 + (t.hero.headlineBefore.trim().split(/\s+/).length + t.hero.headlineAccent.trim().split(/\s+/).length + i) * 0.06}s` }}>
                &nbsp;{word}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p className="hero-enter mt-6 text-muted text-lg sm:text-xl leading-relaxed max-w-2xl" style={{ animationDelay: "0.4s" }}>
            {t.hero.subtext}
          </p>

          {/* CTAs */}
          <div className="hero-enter mt-10 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.55s" }}>
            <Button as="a" href="#contact" size="lg">
              {t.hero.ctaPrimary}
            </Button>
            <Button as="a" href="#work" variant="outline" size="lg">
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Trust points */}
          <div className="hero-enter mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3" style={{ animationDelay: "0.7s" }}>
            {t.hero.trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
    </section>
  );
}
