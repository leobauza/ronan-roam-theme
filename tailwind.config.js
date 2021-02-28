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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [plugins.sr],
}
