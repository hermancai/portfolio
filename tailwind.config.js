module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(100%)" },
        },
        customSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.25s ease-in-out",
        customSpin: "customSpin 4s infinite",
      },
    },
  },
  plugins: [],
};
