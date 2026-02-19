import { useState, useCallback, type FormEvent } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Toast } from "../ui/Toast";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

export function Contact() {
  const ref = useScrollReveal();
  const { t } = useTranslation();
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowToast(true);
    (e.target as HTMLFormElement).reset();
  }, []);

  const handleCloseToast = useCallback(() => setShowToast(false), []);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-surface border-t border-border/[0.06] relative overflow-hidden">
      <div className="orb orb-mixed w-[700px] h-[700px] -top-80 left-1/2 -translate-x-1/2 opacity-30" />
      <Container className="relative z-10">
        <div ref={ref} className="reveal">
          {/* Email large */}
          <div className="mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest block mb-6">
              {t.contact.overline}
            </span>
            <a
              href={`mailto:${t.contact.emailLabel}`}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground hover:text-accent transition-colors"
            >
              {t.contact.emailLabel}
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl">
            {/* Left — heading + contacts */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {t.contact.heading}
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                {t.contact.pitch}
              </p>
              <div className="flex flex-wrap gap-4">
                {/* Telegram */}
                <a href="https://t.me/UZBasestudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Telegram
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/uzbase.studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
                {/* YouTube */}
                <a href="https://youtube.com/@uzbase" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>

            {/* Right — form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  {t.contact.form.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-midnight border border-border/[0.06] rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  {t.contact.form.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-midnight border border-border/[0.06] rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  {t.contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-midnight border border-border/[0.06] rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                {t.contact.form.submit}
              </Button>
            </form>
          </div>
        </div>
      </Container>

      {showToast && (
        <Toast
          message={t.contact.toast}
          onClose={handleCloseToast}
        />
      )}
    </section>
  );
}
