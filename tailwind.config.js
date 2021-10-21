import { screens } from './breakpoints.js';

export default {
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
    screens,
  },
  variants: {
    extend: {},
  },
};
