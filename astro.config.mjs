import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static', // Add this for Cloudflare Pages
  // For 404 handling, instead of using routes, create a 404.astro page
});
