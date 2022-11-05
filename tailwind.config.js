/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'raleway': 'Raleway, normal',
    },
    extend: {
      colors: {
        black: {
          background: '#191919',
        },
        violet: {
          background: '#4F5EE3',
        },
        blue:  '#4F5EE3',
      },
    }
  },
  plugins: [],
}