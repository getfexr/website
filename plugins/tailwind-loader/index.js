const postcss = require('postcss-import');
const tailwindcss = require('tailwindcss');
const presetEnv = require('postcss-preset-env');

module.exports = () => ({
  name: 'postcss-tailwindcss-loader',
  configurePostCss(postcssOptions) {
    postcssOptions.plugins.push(
      postcss,
      tailwindcss,
      presetEnv(
        {
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 4,
        },
      ),
    );
    return postcssOptions;
  },
});
