/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins' : ['Poppins', 'sans-serif'],
      },
      colors : {
        'Purple' : '#854dff',
        'LightRed' : '#ff5757',
        'White' : '#FFF',
        'OffWhite' : '#f0f0f0',
        'LightGrey' : '#dbdbdb',
        'SmokeyGrey' : '#716f6f',
        'OffBlack' : '#141414',
      },
    },
  },
  plugins: [],
}
