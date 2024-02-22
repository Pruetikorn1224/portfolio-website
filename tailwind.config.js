/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      height: {
        '84': '21rem',
        '128': '32rem',
        '112': '28rem'
      },

      animation: {
        fade: 'fadeInR 300ms ease-in-out',
        start: 'fadeInB 500ms ease-in-out'
      },
      keyframes: theme => ({
        fadeInR: {
          '0%': { opacity: 0, transform: 'translate(1%)'},
          '100%': { opacity: 1, transform: 'translate(0)' },
        },
        fadeInB: {
          '0%': { opacity: 0, transform: 'translate(0, 3%)'},
          '100%': { opacity: 1, transform: 'translate(0)' },
        }
      }),
    },
  },
  plugins: [],
}

