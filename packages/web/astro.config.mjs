// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: ['localhost:3000'], // Add your domain
    // Or use remotePatterns for more flexible matching
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/**',
      },
    ],
  },
});
