import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/snooze-cafe/',
  output: 'static',
  integrations: [tailwind()],
  site: 'https://snooze-cafe.example',
});