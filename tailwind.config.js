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
        negro: '#293133',
        rojo: '#9b1b30',
        naranja: '#c46229',
        amarillo: '#ba9546',
        verde: '#466a6d',
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
