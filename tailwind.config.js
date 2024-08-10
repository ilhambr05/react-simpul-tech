/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      "primary-blue": "#2F80ED",
      "primary-dark": "#333333",
      "primary-dark-grey": "#4F4F4F",
      "primary-grey": "#828282",
      "primary-light-grey": "#E0E0E0",
      "indicator-orange": "#F8B76B",
      "indicator-purple": "#8785FF"
    }
  },
  plugins: [],
}

