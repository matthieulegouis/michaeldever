// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://michael-dever.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", fr: "fr", de: "de" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
