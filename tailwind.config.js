const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FFBF00',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#FFBF00',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    container: {
      maxWidth: {
        DEFAULT: '1240px',
      },
      padding: {
        DEFAULT: '1.25rem',
        sm: '1rem',
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
  }
}
