/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bungalow: {
          50: '#fdfbf7',
          100: '#f7f2e7',
          200: '#ede0ca',
          300: '#dfca9e',
          400: '#cfad6e',
          500: '#b88e44',
          600: '#9e7336',
          700: '#7e572d',
          800: '#67472a',
          900: '#543b26',
          950: '#2e1e13',
        },
        terracotta: {
          500: '#c85a32',
          600: '#b04723',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
