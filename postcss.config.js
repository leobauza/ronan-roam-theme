const postcssPresetEnv = require('postcss-preset-env')

module.exports = ({ options }) => {
  let plugins = [
    require('postcss-easy-import'),
    postcssPresetEnv({
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
      },
    }),
  ]

  return {
    plugins,
  }
}