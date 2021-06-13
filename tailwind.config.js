module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'first-section-illustration': "url('/undraw_programmer.svg')",
        'footer-texture': "url('/img/footer-texture.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
