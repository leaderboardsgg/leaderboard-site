/// <reference types="vitest" />
import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import { ViteConfig } from './vite.config'
import Vue from '@vitejs/plugin-vue'

// TODO: https://github.com/leaderboardsgg/leaderboard-site/issues/503

export default mergeConfig(
  ViteConfig,
  defineConfig({
    plugins: [Vue()],
    test: {
      environment: 'happy-dom',
      setupFiles: ['vitest.setup.ts'],
    },
  }),
)
