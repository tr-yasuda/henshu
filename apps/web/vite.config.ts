import path from 'node:path'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import biomePlugin from 'vite-plugin-biome'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), biomePlugin()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  base: '/henshu/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'replace-code',
          transform(code, id) {
            return code.replace(
              /\.then\(\(d\) => d\.Route\)/g,
              '.then((d) => { return d.Route; })',
            )
          },
        },
      ],
    },
  },
})
