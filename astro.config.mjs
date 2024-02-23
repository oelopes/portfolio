import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), icon()],
  output: "server",
  adapter: vercel({
    webAnalytics: {enabled: true}
  }),
  i18n: {
    defaultLocale: "br",
    locales: ["br", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});