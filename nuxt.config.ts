import { resolve } from 'path'

// Need to explicitly import this otherwise vite.config yells at us
import { defineNuxtConfig } from 'nuxt/config'

import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { supportedLocales } from './i18n/i18nUtils'
import type { ViteConfig } from 'nuxt/schema'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

const nuxtAliases = {
  blocks: resolve(__dirname, './app/components/blocks'),
  composables: resolve(__dirname, './app/composables'),
  elements: resolve(__dirname, './app/components/elements'),
  layouts: resolve(__dirname, './app/layouts'),
  lib: resolve(__dirname, './lib'),
  pages: resolve(__dirname, './app/pages'),
  root: resolve(__dirname, './'),
}

// Used in Vitest
export const viteConfig: ViteConfig = {
  plugins: [
    Icons({
      autoInstall: true,
      compiler: 'vue3',
      customCollections: {
        svg: FileSystemIconLoader('./app/assets/sprite/svg'),
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
        { content: '', name: 'description' },
        { content: 'telephone=no', name: 'format-detection' },
      ],
      title: 'leaderboards.gg',
    },
  },

  devServerHandlers: [],

  i18n: {
    defaultLocale: 'en',
    locales: supportedLocales,
  },

  ignore: ['**/*.test.ts', '**/node_modules', '.output', '.dist'],

  imports: {
    autoImport: false,
  },

  // Modules: https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
  modules: [
    [
      '@nuxtjs/tailwindcss',
      {
        configPath: 'tailwind.config.js',
        cssPath: './app/assets/css/tailwind.css',
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
  compatibilityDate: '2025-08-19',
})
