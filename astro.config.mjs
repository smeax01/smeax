// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://smeax01.github.io',
  base: '/smeax',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});