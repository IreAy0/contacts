module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    customForms: theme => ({
      default: {
        input: {
        '&:focus': {
          boxShadow: undefined,
          borderColor: undefined,
        },
      },
    }
  }),
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
