/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif'],
        notoserifjp: ['Noto Serif JP', 'serif'],
      }
    },
  },
  plugins: [],
}
