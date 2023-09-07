/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'about': {'min': '550px', 'max': '767px'},
        
      },
    },
  },
  plugins: [],
}

