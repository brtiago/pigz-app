/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'color1': '#FFFFFF',
        'color2': '#FAFAFA',
        'color3': '#333333',
        'color4': '#00000052',
        'color5': '#676767',
        'color6': '#666666',
        'color7': '#00000000',
        'color8': '#9F9F9F',
        'color9': '#FA641E',
        'color10': '#FF881F',
        'color11': '#00000014',
        'color12': '#FF671F',
        'color13': '#FF671F52',
        'color14': '#9F9F9F',
        'color15': '#CCCCCC',
        'color16': '#F0F0F0',
        'color17': '#000000',
        'color18': '#EEEEEE',
      },

      fontSize: {
        'xxs': '0.625rem',
      },
      
      spacing: {
        '65': '17rem',
      },

      width: {
        '81': '21rem',
      },
    },
  },
  plugins: [],
}
