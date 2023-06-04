/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
  transparent: twColors.transparent,
  black: '#333333',
  white: twColors.white,
  gray: '#828282',
  'light-gray': '#F2F2F2',
  'dark-green': '#40936B',
  'light-green': '#6FCF97',
  primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      black: '#333333',
      red: '#EB5757',
      gray: '#828282',
      'light-gray': '#B0B0B0',
      'dark-white': '#F2F2F2',
      'dark-green': '#40936B',
      'light-green': '#6FCF97',
    },
    extend: {},
  },
  plugins: [],
}

