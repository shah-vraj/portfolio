/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        'light-background': "#f1f1f1",
        'gray-900': '#1a1a1a',
        'gray-100': '#f5f5f5',
        'teal-400': '#38b2ac',
        'teal-500': '#319795',
        'light-theme-color': '#d5fcf3'
      },
    },
  },
  plugins: [],
}


