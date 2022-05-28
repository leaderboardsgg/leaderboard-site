import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    // Global page headers: https://v3.nuxtjs.org/api/configuration/nuxt.config#head
    head: {
      link: [{ href: `${process.env.NODE_ENV === 'production' ? '' : 'public'}/favicon.ico`, rel: 'icon', type: 'image/x-icon' }],
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
  components: {
    global: true,
  },

  // Global CSS: https://v3.nuxtjs.org/api/configuration/nuxt.config#css
  css: ['@/assets/css/tailwind.css'],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#ignore
  ignore: [
    '**/__tests__',
  ],

  // Modules: https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
  modules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://tailwindcss.com
    '@nuxtjs/tailwindcss',
    'unplugin-icons/nuxt',
  ],

  vite: {
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
    ],
  }
})
