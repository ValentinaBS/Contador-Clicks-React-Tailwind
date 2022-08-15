/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Slab'],
      },
      backgroundImage: {
        'pared': "url('./imagenes/pared-fondo.jpg')",
      }
    },
  },
  plugins: [],
}
