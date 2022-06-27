import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitest/config'
import { ViteConfig } from './vite.config'

export default defineConfig({
  plugins: [vue(), vueJsx(), ...ViteConfig.plugins],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '#app': path.resolve(
        __dirname,
        './node_modules/.pnpm/nuxt@3.0.0-rc.3_vite@2.9.10+webpack@5.73.0/node_modules/nuxt/dist/app',
      ),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['vitest.setup.ts'],
  },
})
