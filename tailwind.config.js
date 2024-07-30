/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inter'
    },
    colors: {
        'rose-light': '#ffe4e6',
        'rose-medium': '#ff94a7',
        'rose-dark': '#ff4f72',
        'gray-light': '#f1f5f9',
      },
  },
  },
  plugins: [],
}