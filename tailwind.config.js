/* eslint-disable global-require */
module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: ['class', '[data-theme="dark"]'],
};
