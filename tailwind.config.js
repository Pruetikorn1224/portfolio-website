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
        '128': '32rem',
        '112': '28rem'
      },

      animation: {
        fade: 'fadeIn 300ms ease-in-out',
        color: 'bgColor 300ms'
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0, transform: 'translate(1%)'},
          '100%': { opacity: 1, transform: 'translate(0)' },
        },
        bgColor: {
          '0%': { background: 'rgb(255 255 255)' },
          '100%': { background: 'rgb(30 58 138)' }
        }
      }),
    },
  },
  plugins: [],
}

