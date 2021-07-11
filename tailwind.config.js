module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'first-section-illustration': "url('/undraw_programmer.svg')",
        'step-one-illustration': "url('/undraw_agreement.svg')",
        'step-two-illustration': "url('/undraw_coworkers.svg')",
        'step-three-illustration': "url('/undraw_codereview.svg')",
        'step-four-illustration': "url('/undraw_projectcompleted.svg')",
        'not-found-illustration': "url('/undraw_empty.svg')",
        'server-error-illustration': "url('/undraw_warning.svg')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
