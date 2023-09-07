/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'about': {'min': '640px', 'max': '767px'},
      },
    },
  },
  plugins: [],
}

