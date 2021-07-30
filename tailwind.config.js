module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'heading' : ['Sora'],
      'body' : ['Monserrat']
    },
    colors: {
      white:{
        default : '#FFFFFF' 
      },
      blue:{
        light : '#219ED9',
        dark : '#173DA6'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
