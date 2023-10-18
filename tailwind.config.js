/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      secundary : {
        900: '#72dfd0',
        800: '#7be0d3',
        700: '#7fdbcf',
        600: '#86dbd0',
        500: '#8dd9cf',
        400: '#93d9d0',
        300: '#9fccc6',
        200: '#a7ccc7',
        100: '#bfdeda',
      },
      primary : {
        900: '#03414d',
        800: '#0a444f',
        700: '#0d4954',
        600: '#11505c',
        500: '#145561',
        400: '#1a5e6b',
        300: '#216875',
        200: '#276f7d',
        100: '#317d8c',
      }
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
