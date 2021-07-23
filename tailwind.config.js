module.exports = {
  darkMode: false, // or 'media' or 'class'
  plugins: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
}
