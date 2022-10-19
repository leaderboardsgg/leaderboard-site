/// <reference types="vitest" />
import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import { ViteConfig } from './vite.config'

// TODO: https://github.com/leaderboardsgg/leaderboard-site/issues/503

export default mergeConfig(
  ViteConfig,
  defineConfig({
    test: {
      // TODO: test using happy-dom, if it works for us its really fast!
      environment: 'jsdom',
      globals: true,
      setupFiles: ['vitest.setup.ts'],
    },
  }),
)
