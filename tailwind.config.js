module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'title' : ['IM Fell DW Pica SC', 'serif'],
        'serif': ['EB Garamond', 'serif']
      },
      colors: {
        ocre: '#c1a085',
        marron: '#3a220a'
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
