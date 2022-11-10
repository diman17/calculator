/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        worksans: ["Work Sans"],
      },
      width: {
        18: "4.5rem",
        93.75: "23.4375rem",
      },
      colors: {
        tuna: "#2E2F38",
        porcelain: "#F1F2F3",
        mischka: "#D2D3DA",
        trout: "#4E505F",
        woodsmoke: "#17171C",
      },
      padding: {
        0.75: "0.1875rem",
      },
    },
  },
  plugins: [],
};
