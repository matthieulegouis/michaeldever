// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://michael-dever.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Redirect pages must not be advertised as translated content.
      filter: (page) => new URL(page).pathname === "/",
      i18n: {
        defaultLocale: "en",
        locales: { en: "en" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
