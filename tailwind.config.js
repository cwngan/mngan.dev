/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{njk,md,svg}"],
  theme: {
    fontFamily: {
      "mono": ["Roboto Mono", ...defaultTheme.fontFamily.mono]
    },
    extend: {},
  },
  plugins: [],
}

