import { useState, useCallback, type FormEvent } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
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
    <section id="contact" className="py-20 lg:py-28 bg-surface/50">
      <Container>
        <div ref={ref} className="reveal">
          <SectionHeading
            overline={t.contact.overline}
            heading={t.contact.heading}
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Left info */}
            <div>
              <p className="text-muted leading-relaxed mb-8">
                {t.contact.pitch}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="text-sm text-[#F5F5F7]">
                    {t.contact.emailLabel}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  <span className="text-sm text-[#F5F5F7]">
                    {t.contact.telegramLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Right form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#F5F5F7] mb-1.5"
                >
                  {t.contact.form.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-midnight border border-white/[0.06] rounded-lg px-4 py-2.5 text-sm text-[#F5F5F7] placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#F5F5F7] mb-1.5"
                >
                  {t.contact.form.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-midnight border border-white/[0.06] rounded-lg px-4 py-2.5 text-sm text-[#F5F5F7] placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#F5F5F7] mb-1.5"
                >
                  {t.contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-midnight border border-white/[0.06] rounded-lg px-4 py-2.5 text-sm text-[#F5F5F7] placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all resize-none"
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
