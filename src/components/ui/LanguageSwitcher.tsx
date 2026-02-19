import { useState, useRef, useEffect } from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import type { Locale } from "../../i18n/types";

const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "ru", label: "Русский", short: "RU" },
  { code: "uz", label: "O'zbekcha", short: "UZ" },
];

function GlobeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.777.515-3.435 1.404-4.832" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale)!;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium border border-border/10 rounded-lg text-foreground hover:border-accent/40 transition-all duration-200 cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <GlobeIcon />
        {current.short}
        <svg
          className={`w-3 h-3 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 min-w-[140px] bg-surface border border-border/[0.08] rounded-lg shadow-xl overflow-hidden animate-fade-in z-50"
          role="listbox"
        >
          {LOCALES.map(({ code, label, short }) => (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={locale === code}
              onClick={() => {
                setLocale(code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors cursor-pointer ${
                locale === code
                  ? "text-accent bg-accent/5"
                  : "text-foreground hover:bg-overlay/[0.04]"
              }`}
            >
              <span className="text-xs font-semibold w-6">{short}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
