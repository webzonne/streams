/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '450px',
      },
      colors: {
        blanco: {
          10:'#F8F8F8'
        },
      }
    },
  },
  plugins: [],
}
