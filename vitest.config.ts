/// <reference types="vitest" />
import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import ViteConfig from './vite.config'
import Vue from '@vitejs/plugin-vue'

// TODO: https://github.com/leaderboardsgg/leaderboard-site/issues/503

export default mergeConfig(
  ViteConfig,
  defineConfig({
    plugins: [
      Vue({
        template: {
          compilerOptions: {
            // This is to prevent the following warnings:
            // [Vue warn]: Failed to resolve component: NuxtLink
            // If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.
            //   at <ButtonLink class="nav-link" name="About" to="#" >
            //   at <NavLink name="About" to="#" key="About" >
            //   at <NavLinks>
            //   at <SiteNavbar ref="VTU_COMPONENT" >
            //   at <VTUROOT>
            isCustomElement: (tag) => tag === 'NuxtLink',
          },
        },
      }),
    ],
    test: {
      environment: 'happy-dom',
      setupFiles: ['vitest.setup.ts'],
    },
  }),
)
