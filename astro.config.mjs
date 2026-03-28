import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yoursite.com',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap(), tailwind(), react()],
});