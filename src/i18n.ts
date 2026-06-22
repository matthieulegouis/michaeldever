import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";

export const locales = ["en", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  de: "DE",
};

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

// Open Graph locale codes (language_TERRITORY). The English content uses
// British spelling and the firm is Swiss, hence en_GB / fr_CH / de_CH.
export const ogLocales: Record<Locale, string> = {
  en: "en_GB",
  fr: "fr_CH",
  de: "de_CH",
};

const dictionaries = { en, fr, de } as const;

export type Dictionary = typeof en;

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localizedPath(locale: Locale): string {
  return locale === "en" ? "/" : `/${locale}/`;
}
