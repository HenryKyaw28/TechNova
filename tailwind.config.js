/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"],
  theme: {
    extend: {
      colors: {
        'forText': '#02040a',
        'primary': '#007bff ', 
        'secondary': '#6c757d ', 
        'tertiary': '#f8f9fa ',
        'accent': '#ff5722 ',
      }, 
      fontFamily: {
        openSans: ['Open Sans'], 
      }
    },
  },
  plugins: [],
}

