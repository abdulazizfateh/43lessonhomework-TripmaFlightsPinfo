/ @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./public/images/hero-bg.png')",
        'gradient-to-r': 'linear-gradient(to right, #605DEC, #764ac9)',
      }
    },
  },
  plugins: [],
}