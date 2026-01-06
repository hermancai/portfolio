import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway"],
      },
      animation: {
        blink: 'blink 1s infinite steps(1)',
        stretchLeftRight: "stretchLeftRight 1s ease-in-out infinite",
        stretchRightLeft: "stretchRightLeft 1s ease-in-out infinite",
        stretchTopBottom: "stretchTopBottom 1s ease-in-out infinite",
        stretchBottomTop: "stretchBottomTop 1s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        stretchLeftRight: {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: 'left',
          },
          '50%': {
            transform: 'scaleX(1)',
            transformOrigin: 'left',
          },
          '50.001%': {
            transform: 'scaleX(1)',
            transformOrigin: 'right',
          },
          '100%': {
            transform: 'scaleX(0)',
            transformOrigin: 'right',
          }
        },
        stretchRightLeft: {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: 'right',
          },
          '50%': {
            transform: 'scaleX(1)',
            transformOrigin: 'right',
          },
          '50.001%': {
            transform: 'scaleX(1)',
            transformOrigin: 'left',
          },
          '100%': {
            transform: 'scaleX(0)',
            transformOrigin: 'left',
          }
        },
        stretchTopBottom: {
          '0%': {
            transform: 'scaleY(0)',
            transformOrigin: 'top',
          },
          '50%': {
            transform: 'scaleY(1)',
            transformOrigin: 'top',
          },
          '50.001%': {
            transform: 'scaleY(1)',
            transformOrigin: 'bottom',
          },
          '100%': {
            transform: 'scaleY(0)',
            transformOrigin: 'bottom',
          }
        },
        stretchBottomTop: {
          '0%': {
            transform: 'scaleY(0)',
            transformOrigin: 'bottom',
          },
          '50%': {
            transform: 'scaleY(1)',
            transformOrigin: 'bottom',
          },
          '50.001%': {
            transform: 'scaleY(1)',
            transformOrigin: 'top',
          },
          '100%': {
            transform: 'scaleY(0)',
            transformOrigin: 'top',
          }
        },
      },
    },
  },

  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        ".field-sizing-content": {
          "field-sizing": "content",
        }
      })
    })
  ],
};
