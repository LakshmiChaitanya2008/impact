module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseo: "131413",
        base: "#1C1C1C",
        primary: "#34B27B",
        white: "#EDEDED",
        gray: "#2E2E2E",
      },

      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
