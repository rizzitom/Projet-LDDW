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
        'server-error-illustration': "url('/undraw_warning.svg')",
        'contact-illustration': "url('/undraw_mailbox.svg')"
      })
    },
    boxShadow: {
      input: '0 0 0 3px rgba(125, 72, 238, 0.4)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
