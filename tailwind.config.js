export default {
  content: [
    './app/components/**/*.{vue,js}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        black: 'oklch(0.18 0.0101 285.36)',
        'bg-content': 'oklch(0.22 0.0116 285.41)',
        'bg-table-row': 'oklch(0.22 0.0116 285.41)',
        'bg-table-row-alt': 'oklch(0.24 0.017 285.06)',
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
