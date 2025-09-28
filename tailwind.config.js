/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#f9fafb',
          500: '#6b7280',
          600: '#4b5563',
        },
      },
      fontFamily: {
        'thai': ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};