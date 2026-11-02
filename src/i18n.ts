import en from "./locales/en.json";

// FR/DE are paused until the updated translations are ready.
export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "EN",
};

export const localeLabels: Record<Locale, string> = {
  en: "English",
};

// Open Graph locale codes (language_TERRITORY). The English content uses
// British spelling, hence en_GB.
export const ogLocales: Record<Locale, string> = {
  en: "en_GB",
};

const dictionaries = { en } as const;

export type Dictionary = typeof en;

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localizedPath(locale: Locale): string {
  return locale === "en" ? "/" : `/${locale}/`;
}
