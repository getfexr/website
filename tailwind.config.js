/* eslint-disable global-require */
module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
};
