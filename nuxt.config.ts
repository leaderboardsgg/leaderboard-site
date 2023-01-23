import { resolve } from 'path'
import { config } from 'dotenv-safe'

// Need to explicitly import this otherwise vite.config yells at us
import { defineNuxtConfig } from 'nuxt/config'

import { Deutsch } from './i18n/de/index'
import { English } from './i18n/en/index'
import { Español } from './i18n/es/index'
import { Français } from './i18n/fr/index'
import { 日本語 } from './i18n/ja/index'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

// Safely loads the .env file, making sure all the variables are defined
config()

export const nuxtAliases = {
  blocks: resolve(__dirname, './components/blocks'),
  composables: resolve(__dirname, './composables'),
  elements: resolve(__dirname, './components/elements'),
  layouts: resolve(__dirname, './layouts'),
  lib: resolve(__dirname, './lib'),
  pages: resolve(__dirname, './pages'),
  root: resolve(__dirname, './'),
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
  ignore: ['**/*.test.ts', '**/node_modules', '.output', '.dist'],
  // Modules: https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
  modules: [
    // https://tailwindcss.com
    [
      '@nuxtjs/tailwindcss',
      // Global CSS: https://v3.nuxtjs.org/api/configuration/nuxt.config#css
      // css: ['assets/css/tailwind.css'],
      {
        configPath: 'tailwind.config.ts',
        cssPath: './assets/css/tailwind.css',
      },
    ],
    'unplugin-icons/nuxt',
    [
      '@nuxtjs/i18n',
      {
        vueI18n: {
          fallbackLocale: 'en',
          legacy: false,
          locale: 'de',
          messages: {
            // typing this properly is a hassle right now but come TS 4.9 it should be trivial.
            // These anys are safe and can be confirmed by pasting the exact object into the place its used
            de: Deutsch,
            en: English,
            es: Español,
            fr: Français,
            ja: 日本語,
          },
        },
      },
    ],
  ],

  runtimeConfig: {
    public: {
      BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    },
  },

  typescript: {
    // Disabled as using Volar take over mode is the reccomended way to do this
    shim: false,
    strict: true,
  },
})
