/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      'ltc-l': ['ltc-light', 'sans-serif'],
      'ltc-r': ['ltc-regular', 'sans-serif'],
      'ltc-m': ['ltc-medium', 'sans-serif'],
      'ltc-b': ['ltc-bold', 'sans-serif']
    },
    screens: {
      ...defaultTheme.screens,
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1440px'
    },
    extend: {
      colors: {
        'primary-light': '#649c00', // glow Medusa green
        primary: '#006A4D', // Victoria green (primary)
        'primary-dark': '#024731', // dark green
        white: '#FFFFFF', //  - white
        black: '#333', // black
        'light-grey': '#F1F1F1' // light-grey
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries')
  ]
};
