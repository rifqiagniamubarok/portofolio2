/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primarybluebg: '#284B63',
        primarywhitebg: '#eaebed',
        primaryblue: '#007EA7',
        secondarymain: '#EABA6B',
      },
      fontFamily: {
        nilai: ['Satisgy'],
      },
    },
  },
  plugins: [],
};
