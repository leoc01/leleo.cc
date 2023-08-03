/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        resolvoo: "#825aba",
      },
      keyframes: {
        blurer: {
          "0%": {
            display: "none",
            opacity: "0",
          },
          "1%": {
            display: "block",
            opacity: "0",
          },
          "100%": {
            display: "block",
            opacity: "1",
          },
        },
        desblurer: {
          "0%": {
            display: "block",
            opacity: "1",
          },
          "40%": {
            display: "block",
            opacity: "1",
          },
          "99%": {
            display: "block",
            opacity: "0",
          },
          "100%": {
            display: "none",
            opacity: "0",
          },
        },
        abremenu: {
          "0%": {
            display: "none",
            top: "-100%",
          },
          "1%": {
            display: "block",
            top: "-100%",
          },
          "50%": {
            display: "block",
            top: "-100%",
          },
          "100%": {
            display: "block",
            top: "0",
          },
        },
        fechamenu: {
          "0%": {
            display: "block",
            top: "0",
          },
          "90%": {
            display: "block",
            top: "-100%",
          },
          "99%": {
            display: "block",
            top: "-100%",
          },
          "100%": {
            display: "hidden",
            top: "-100%",
          },
        },
      },
    },
  },
  plugins: [],
};
