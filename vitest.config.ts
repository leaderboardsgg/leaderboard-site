/// <reference types="vitest" />
import { resolve } from 'path'
import * as dotenv from 'dotenv-safe'
import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import ViteConfig from './vite.config'
import Vue from '@vitejs/plugin-vue'

// TODO: https://github.com/leaderboardsgg/leaderboard-site/issues/503

const { parsed } = dotenv.config({
  example: resolve(__dirname, '.env.example'),
  path: resolve(__dirname, '.env.test'),
})

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
    resolve: {
      alias: {
        // '#app': resolve(__dirname, './node_modules/.pnpm/nuxt@3.0.0-rc.12_wyqvi574yv7oiwfeinomdzmc3m/node_modules/nuxt/dist/app'),
        '#app': resolve(__dirname, './node_modules/nuxt/dist/app'),
        // '#app': resolve(__dirname, './.nuxt/app'),
        // '#build': resolve(__dirname, './.nuxt'),
        // ...baseTsConfig.compilerOptions.paths,
      },
    },
    test: {
      environment: 'happy-dom',
      env: parsed,
      globals: true,
      sequence: {
        shuffle: false, // change back to true later
      },
      setupFiles: ['vitest.setup.ts'],
    },
  }),
)
