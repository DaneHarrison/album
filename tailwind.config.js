/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage-green': 'rgb(188, 207, 177)',
        'charcoal': 'rgb(54, 69, 79)',
        'seafoam': '#9FE2BF'
      }
    },
  },
  plugins: [],
}