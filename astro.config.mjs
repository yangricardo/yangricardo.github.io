import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig( {
  site: "https://yangricardo.github.io",
  integrations: [ tailwind(
    {
      applyBaseStyles: false,
      nesting: true,
    }
  ) ]
} );