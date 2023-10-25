/** @type {import('@types/eslint').ESLint.ConfigData} */
const OFF = 0;
const WARNING = 1;
// eslint-disable-next-line no-unused-vars
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@docusaurus/recommended',
    'airbnb',
  ],
  plugins: [
    '@docusaurus',
  ],
  rules: {
    'react/jsx-filename-extension': [WARNING, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': [OFF, { ignore: ['^@theme', '^@docusaurus', '^@site'] }],
  },
};
