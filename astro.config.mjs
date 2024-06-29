import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig( {
  site: "https://yang.dev.br",
  integrations: [ tailwind( {
    applyBaseStyles: false,
    nesting: true
  } ), icon( {
    iconDir: '/public/icons'
  } ), mdx(), markdoc(), sitemap() ]
} );