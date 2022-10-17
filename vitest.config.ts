/// <reference types="vitest" />
// import vueJsx from '@vitejs/plugin-vue-jsx'
import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import { ViteConfig } from './vite.config'

// TODO: https://github.com/leaderboardsgg/leaderboard-site/issues/503

export default mergeConfig(
  ViteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      // deps: {
      //   // Needed otherwise usage in the test files throws an error
      //   inline: [/@nuxt\/test-utils-edge/, /vitest/],
      // },
      globals: true,
      setupFiles: ['vitest.setup.ts'],
    },
  }),
)
