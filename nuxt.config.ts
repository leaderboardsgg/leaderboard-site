import { resolve } from 'path'

// Need to explicitly import this otherwise vite.config yells at us
import { defineNuxtConfig } from 'nuxt/config'

import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import { supportedLocales } from './configUtils'
import type { ViteConfig } from 'nuxt/schema'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

const nuxtAliases = {
  blocks: resolve(__dirname, './components/blocks'),
  composables: resolve(__dirname, './composables'),
  elements: resolve(__dirname, './components/elements'),
  layouts: resolve(__dirname, './layouts'),
  lib: resolve(__dirname, './lib'),
  pages: resolve(__dirname, './pages'),
  root: resolve(__dirname, './'),
}

// Used in Vitest
export const viteConfig: ViteConfig = {
  plugins: [
    Icons({
      autoInstall: true,
      compiler: 'vue3',
      customCollections: {
        svg: FileSystemIconLoader('./assets/sprite/svg'),
      },
    }),
    Components({
      dts: true,
      resolvers: [
        IconResolver({
          customCollections: ['svg'],
        }),
      ],
    }),
    // eslintPlugin({ cache: true, failOnWarning: true, fix: true }),
    // Needed this on my machine to prevent this erroneous error of
    // ✘ [ERROR] Top-level await is not available in the configured
    // target environment ("chrome87", "edge88", "es2020", "firefox78", "safari13" + 2 overrides)
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  resolve: {
    alias: nuxtAliases,
  },
}

export default defineNuxtConfig({
  alias: nuxtAliases,
  app: {
    // Global page headers: https://v3.nuxtjs.org/api/configuration/nuxt.config#head
    head: {
      link: [
        {
          href: '/favicon.ico',
          rel: 'icon',
          type: 'image/x-icon',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { content: 'width=device-width, initial-scale=1', name: 'viewport' },
        { content: '', hid: 'description', name: 'description' },
        { content: 'telephone=no', name: 'format-detection' },
      ],
      title: 'leaderboards.gg',
    },
  },
  devServerHandlers: [],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#components
  // https://v3.nuxtjs.org/guide/directory-structure/components/

  // https://v8.i18n.nuxtjs.org/getting-started/setup

  // TODO: someone who's brain lets them, figure out more proper setup with lazy loading
  // i tried and couldn't figure it out unfortunately

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#ignore
  i18n: {
    defaultLocale: 'en',
    locales: supportedLocales,
    vueI18n: './i18n.config.ts',
    // vueI18n: {
    //   fallbackLocale: 'en',
    //   legacy: false,
    //   locale: 'en',
    //   // TODO: can this be cleaner via some sort of iteration? (not sure)
    //   messages: localeMessages,
    // },
  },

  ignore: ['**/*.test.ts', '**/node_modules', '.output', '.dist'],
  imports: {
    dirs: [
      './composables',
      './utils',
      './composables/api',
      './composables/useApi',
    ],
  },
  // Modules: https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
  modules: [
    // https://tailwindcss.com
    [
      '@nuxtjs/tailwindcss',
      // Global CSS: https://v3.nuxtjs.org/api/configuration/nuxt.config#css
      // css: ['assets/css/tailwind.css'],
      {
        configPath: 'tailwind.config.js',
        cssPath: './assets/css/tailwind.css',
      },
    ],
    'unplugin-icons/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
  ],

  runtimeConfig: {
    public: {
      backendBaseUrl: '',
    },
  },

  ssr: false,
  vite: viteConfig,
})
