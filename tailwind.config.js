const plugins = require('@viget/tailwindcss-plugins')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      skew: {
        20: '20deg',
        '-20': '-20deg',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [plugins.sr],
}
