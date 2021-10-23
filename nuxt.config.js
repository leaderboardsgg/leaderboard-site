import { config } from 'dotenv';
config();

export default {
  // auth configuration: https://auth.nuxtjs.org/
  auth: {
    redirect: {
      home: '/',
      login: '/login',
      logout: '/',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            method: 'post',
            url: `${process.env.BACKEND_URL}/api/v1/login`,
          },
          logout: {
            method: 'post',
            url: `${process.env.BACKEND_URL}/api/v1/logout`,
          },
          user: {
            method: 'get',
            url: `${process.env.BACKEND_URL}/api/v1/me`,
          },
        },
        token: {
          global: true,
          property: 'token',
        },
        user: {
          property: 'data',
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: `${process.env.BACKEND_URL}/api/v1/`,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        include: /node_modules/,
        test: /\.mjs$/,
        type: 'javascript/auto',
      });
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://tailwindcss.com
    '@nuxtjs/tailwindcss',
    // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    link: [{ href: '/favicon.ico', rel: 'icon', type: 'image/x-icon' }],
    meta: [
      { charset: 'utf-8' },
      { content: 'width=device-width, initial-scale=1', name: 'viewport' },
      { content: '', hid: 'description', name: 'description' },
      { content: 'telephone=no', name: 'format-detection' },
    ],
    title: 'speedrun-website',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // https://nuxtjs.org/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/
  publicRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
};
