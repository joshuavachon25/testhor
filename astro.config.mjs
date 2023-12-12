import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "fr",
    locales: ["en", {
      path: "fr", // no slashes included
      codes: ["fr", "fr-BR", "fr-CA"]
    }],
    routing: {
      prefixDefaultLocale: true
    }
  },

});