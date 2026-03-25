import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://astro-tina-cms-gray.vercel.app',

  output: 'server',

  adapter: vercel({
    mode: 'standalone' // 🔥 THIS FIXES YOUR ERROR
  }),

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});