/// <reference types="vitest" />
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    sequence: {
      shuffle: true,
    },
    setupFiles: ['../vitest.setup.ts', './test/vue-test-util.plugin.ts'],
  },
})
