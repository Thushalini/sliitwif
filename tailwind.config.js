/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/utilities/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFEBFC',
          100: '#E9D2FF',
          200: '#E0D9FB',
          300: '#914FA8',
          400: '#bf72cc',
          500: '#b150bf',
          600: '#9b3ea6',
          700: '#7a2f7d',
          800: '#591f53',
          900: '#37102a',
          DEFAULT: '#914FA8'
        }
      }
    },
  },
  plugins: [],
};

