// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ycompris.com',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/gerse202606') &&
        !page.includes('/expertise') &&
        !page.includes('/livre') &&
        !page.includes('/ressources') &&
        !page.includes('/methode') &&
        !page.includes('/faq') &&
        !page.includes('/ia-esg'),
    }),
  ],
});
