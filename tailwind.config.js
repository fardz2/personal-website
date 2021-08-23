module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      zIndex: {

        '-10': '-10',
      },
      width: {

        custom: "22rem"
      },
      colors: {
        my_color: '#4dcb7a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}