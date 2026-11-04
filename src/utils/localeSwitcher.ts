export type SupportedLocale = "en" | "es" | "pt" | "zh" | "ja" | "tr" | "vi";

export const SUPPORTED_LOCALES: ReadonlyArray<{ code: SupportedLocale; label: string }> = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "tr", label: "Türkçe" },
  { code: "vi", label: "Tiếng Việt" },
];

const LOCALE_STORAGE_KEY = "gibwork_locale";

export function resolvePreferredLocale(navigatorLang?: string): SupportedLocale {
  if (typeof window !== "undefined") {
    try {
      const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY) as SupportedLocale | null;
      if (saved && SUPPORTED_LOCALES.some((l) => l.code === saved)) {
        return saved;
      }
    } catch {}
  }
  const raw = (navigatorLang ?? (typeof navigator !== "undefined" ? navigator.language : "en"))
    .slice(0, 2)
    .toLowerCase();
  const match = SUPPORTED_LOCALES.find((l) => l.code === raw);
  return match ? match.code : "en";
}
