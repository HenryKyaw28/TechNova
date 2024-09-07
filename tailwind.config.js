/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Open Sans'],
      },
      colors: {
        'primary': '#007bff ',
        'secondary': '#6c757d ',
        'teritiary': '#f8f9fa ',
        'accent': '#ff5722 ',
        },
      },
    },
  },
  plugins: [],
}

