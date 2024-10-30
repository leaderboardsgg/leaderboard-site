export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        lbgreen: '#50CC9A',
        lbred: '#CC5277',
        lbyellow: '#FFCE78',
        lbwhite: '#FFFFFF',
        lbgray: '#2F2F3B',
        lbdarkgray: '#1F1F29',
        lbblack: '#1A1A21',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
}
