// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    blocks: resolve(__dirname, './components/blocks'),
    elements: resolve(__dirname, './components/elements'),
    layouts: resolve(__dirname, './layouts'),
    pages: resolve(__dirname, './pages'),
    root: resolve(__dirname, './'),
  },
  app: {
    // Global page headers: https://v3.nuxtjs.org/api/configuration/nuxt.config#head
    head: {
      link: [
        {
          href: `${
            process.env.NODE_ENV === 'production' ? '' : 'public'
          }/favicon.ico`,
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

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#components
  // https://v3.nuxtjs.org/guide/directory-structure/components/

  // Global CSS: https://v3.nuxtjs.org/api/configuration/nuxt.config#css
  css: ['assets/css/tailwind.css'],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#ignore
  ignore: ['**/__tests__'],
  // Modules: https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
  modules: [
    // https://go.nuxtjs.dev/typescript
    // '@nuxt/typescript-build',
    // https://tailwindcss.com
    '@nuxtjs/tailwindcss',
    'unplugin-icons/nuxt',
    // '@nuxtjs/eslint-module',
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
