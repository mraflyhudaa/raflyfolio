/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'transform-text': 'change-text 6s infinite',
      },
      keyframes: {
        'change-text': {
          '35%': {
            transform: 'translateY(-122%)',
          },
          '65%': {
            transform: 'translateY(-110%)',
          },
        },
      },
      colors: {
        dark: {
          primarybg: '#16161a',
          bg: '#242629',
          cardbg: '#16161a',
          headline: '#fffffe',
          subhead: '#94a1b2',
          primary: '#7f5af0',
          primaryhover: '#6647c4',
          secondary: '#72757e',
          tertiary: '#2cb67d',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
