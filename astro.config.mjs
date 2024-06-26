import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: "https://yangricardo.github.io",
  integrations: [tailwind({
    applyBaseStyles: false,
    nesting: true
  }), icon(), mdx(), markdoc()]
});