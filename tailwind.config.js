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
        DEFAULT: '1440px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3.75rem',
      },
    },
    // fontSize: theme => ({
    //   ...theme('fontSize'),
      
    // }),
  }
}
