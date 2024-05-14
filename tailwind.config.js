/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode: 'class',
  theme: {
    extend: {
      backgroundColor:{
        'backPlay': 'url(../../src/assets/Stacked Wave.svg")'
      },
      backgroundImage:{
        'slider1': 'url(../../src/assets/slider1.jpg")'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'raleway': ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [require('daisyui')],
}

