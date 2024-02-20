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
    screens: {
      '500': '500px',
      '600': '600px',
      '688': '688px',
      '988': '988px',
      '1008': '1008px',
      '1077': '1077px',
      '1265': '1265px',
      '1500': '1500px',
    },
  },
  plugins: [],
}

