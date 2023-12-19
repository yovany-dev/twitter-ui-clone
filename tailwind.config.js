/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'primary-white': 'rgb(231, 233, 234)',
        'twitter': 'rgb(29, 155, 240)',
        'dark-gray': 'rgb(113, 118, 123)',
        'very-dark-gray': 'rgb(47, 51, 54)'
      }
    },
  },
  plugins: [],
}

