/// <reference types="vitest" />
import { defineVitestConfig } from '@nuxt/test-utils/config'

// TODO: https://github.com/leaderboardsgg/leaderboard-site/issues/503

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    sequence: {
      shuffle: true,
    },
    setupFiles: ['vitest.setup.ts'],
  },
})
