import { useI18n, type Locale } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  return (
    <div className={cn("inline-flex items-center gap-1 text-xs font-semibold tracking-widest", className)} role="group" aria-label="Language">
      {LOCALES.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1">
          <button type="button" onClick={() => setLocale(l.code)} aria-pressed={locale === l.code}
            className={cn("px-1 py-0.5 transition-colors", locale === l.code ? "border-b-2 border-[var(--brand-lime)]" : "opacity-60 hover:opacity-100")}>
            {l.label}
          </button>
          {i < LOCALES.length - 1 && <span className="opacity-40">·</span>}
        </span>
      ))}
    </div>
  );
}