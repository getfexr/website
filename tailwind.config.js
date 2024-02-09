/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        accent: '#3D9970',
        'accent-dark': '#000',
        white: '#FFFFFF',
        green: '#10b981',
        orange: '#FEB240',
        red: '#EF4444',
        blue: '#428AF8',
        'light-base': '#F4F4F6',
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
      boxShadow: {
        none: 'none',
        sm: '0px 1px 2px 0px rgba(13, 16, 45, 0.1)',
        base: '0px 1px 2px -1px rgba(13, 16, 45, 0.1), 0px 2px 4px 0px rgba(13, 16, 45, 0.1)',
        md: '0px 2px 4px -2px rgba(13, 16, 45, 0.1), 0px 4px 6px -1px rgba(13, 16, 45, 0.1)',
        lg: '0px 4px 6px -4px rgba(13, 16, 45, 0.1), 0px 10px 15px -3px rgba(13, 16, 45, 0.1)',
        xl: '0px 8px 10px -6px rgba(13, 16, 45, 0.1), 0px 20px 25px -5px rgba(13, 16, 45, 0.1)',
        '2xl':
          '0px 25px 50px -12px rgba(13, 16, 45, 0.1), 0px 12px 24px 0px rgba(13, 16, 45, 0.1)',
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
};
