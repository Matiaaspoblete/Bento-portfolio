import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://Matiaaspoblete.github.io',
  base: 'Bento-portfolio',
  integrations: [tailwind()],
  buildOptions: {
    ssr: true, // Ensure SSR is enabled
    module: true, // Ensure module support is enabled
  }
});