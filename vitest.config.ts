/// <reference types="vitest" />
import { mergeConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitest/config'
import { ViteConfig } from './vite.config'

export default mergeConfig(
  ViteConfig,
  defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
    test: {
      environment: 'jsdom',
      deps: {
        // Needed otherwise usage in the test files throws an error
        inline: [/@nuxt\/test-utils-edge/, /vitest/],
      },
      globals: true,
      setupFiles: ['vitest.setup.ts'],
    },
  }),
)
