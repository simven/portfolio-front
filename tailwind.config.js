/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  important: true,
  content: [
    "./index.html",
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        boiling: ["Boiling Medium", "serif"]
      },
      colors: {
        green: {
          5: '#8FDCC20C',
          300: '#D4EDE4FF',
          400: '#8FDCC2FF',
          500: '#025A4EFF',
          600: '#4C6763FF',
          650: '#8FDCC233',
          700: '#364442FF',
          750: '#233831B2',
          800: '#233831FF',
        },
        beige: {
          300: '#F4F3F0CC',
          400: '#EDE7DEFF',
          500: '#D4B59BFF',
          600: '#C79A7DFF',
          700: '#A97F61FF',
          750: '#8D6650B2',
          800: '#8D6650FF',
        },
        primary: 'var(--color-primary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'border-primary': 'var(--color-border-primary)',
        'border-secondary': 'var(--color-border-secondary)',
      },
      backgroundColor: {
        green: {
          5: '#8FDCC20C',
          300: '#D4EDE4FF',
          400: '#8FDCC2FF',
          500: '#025A4EFF',
          600: '#4C6763FF',
          650: '#8FDCC233',
          700: '#364442FF',
          750: '#233831B2',
          800: '#233831FF',
        },
        beige: {
          5: '#FFFFFF4C',
          300: '#F4F3F0CC',
          400: '#EDE7DEFF',
          500: '#D4B59BFF',
          600: '#C79A7DFF',
          700: '#A97F61FF',
          750: '#8D6650B2',
          800: '#8D6650FF',
        },
        primary: 'var(--color-primary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'border-primary': 'var(--color-border-primary)',
        'border-secondary': 'var(--color-border-secondary)',
        opaque: 'var(--color-opaque)',
      },
      backdropSaturate: {
        120: 1.2,
        130: 1.3,
        170: 1.7
      },
      boxShadow: {
        'sm-green': '0 0 0 1px var(--color-green650)',
        'md-green': '0 0 0 2px var(--color-green650)',
      },
    },
  },
  plugins: [],
}
