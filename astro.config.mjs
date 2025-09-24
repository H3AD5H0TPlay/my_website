import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // The output must be 'static' for GitHub Pages.
  // This is the default, so we can remove the 'output' line.
  
  // Set the site and base for the GitHub Pages URL
  site: 'https://H3AD5H0TPlay.github.io',
  base: '/my_website',
  
  integrations: [tailwind()],
});