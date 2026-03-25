import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yoursite.com',

  output: 'server',

  adapter: vercel(), // ✅ IMPORTANT

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});