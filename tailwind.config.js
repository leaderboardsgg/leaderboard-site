const { screens } = require('./breakpoints.js')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  important: true,
  mode: 'jit',
  plugins: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {},
    screens,
  },
  variants: {
    extend: {},
  },
}
