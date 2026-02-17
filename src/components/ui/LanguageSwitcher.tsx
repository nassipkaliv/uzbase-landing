import { useTranslation } from "../../i18n/LanguageContext";
import type { Locale } from "../../i18n/types";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "ru", label: "РУ" },
  { code: "uz", label: "UZ" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center gap-1 bg-white/[0.04] rounded-lg p-0.5">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={[
            "px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer",
            locale === code
              ? "bg-accent text-midnight"
              : "text-muted hover:text-[#F5F5F7]",
          ].join(" ")}
          aria-label={label}
          aria-pressed={locale === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
