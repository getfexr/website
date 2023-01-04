/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00D96D',
        'accent-dark': '#00D96D',
        white: '#FFFFFF',
        jacarta: {
          base: '#5A5D79',
          50: '#F4F4F6',
          100: '#E7E8EC',
          200: '#C4C5CF',
          300: '#A1A2B3',
          400: '#7D7F96',
          500: '#5A5D79',
          600: '#363A5D',
          700: '#131740',
          800: '#101436',
          900: '#0D102D',
        },
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '12px',
        '2lg': '0.625rem',
        '2.5xl': '1.25rem',
      },
      animation: {
        fly: 'fly 6s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite',
      },
      keyframes: {
        fly: {
          '0%, 100%': { transform: 'translateY(5%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
};
