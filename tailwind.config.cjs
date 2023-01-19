/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'darkblue': '#0D0C1D',
      'deepblue': '#161B33',
      'lightpurple': '#474973',
      'lightslate': '#A69CAC',
      'paperyellow': '#F1DAC4',
      'nicered': '#E63946',
      'offwhite': '#edf2f4'
      
    },
  },
  plugins: [
    require('../bdl/node_modules/flowbite/plugin')
  ],
}
