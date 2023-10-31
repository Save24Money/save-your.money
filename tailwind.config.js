/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      'inner': 'inset 0 0 70px #4a4a4a',
    },
    colors: {
      brand : {
        900: '#013215',
        800: '#035223',
        700: '#0a7636',
        600: '#13a950',
        500: '#3de27a',
        400: '#61ed95',
        300: '#89f5ab',
        200: '#9ff6bb',
        100: '#e0ffec',
        50: '#f7fffa',
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
