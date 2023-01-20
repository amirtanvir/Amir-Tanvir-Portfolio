/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'grey1': '#F8F9FA',
      'grey2': '#E9ECEF',
      'grey3': '#DEE2E6',
      'grey4': '#CED4DA',
      'grey5': '#ADB5BD',
      'grey6': '#6C757D',
      'grey7': '#495057',
      'grey8': '#343A40',
      'grey9': '#212529'
    }
  },
  plugins: [require('flowbite/plugin')],
}