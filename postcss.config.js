const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')

module.exports = ({ options }) => {
  let plugins = [
    require('postcss-easy-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    postcssPresetEnv({
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
      },
    }),
    // cssnano({
    //   preset: 'default',
    // }),
  ]

  return {
    plugins,
  }
}
