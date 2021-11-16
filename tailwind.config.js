/* eslint-disable vue/sort-keys */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  plugins: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
};
