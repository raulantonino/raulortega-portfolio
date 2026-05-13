import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://raulortega.cl',
  adapter: cloudflare(),
  redirects: {
    '/sobre-mi': '/',
  },
});
