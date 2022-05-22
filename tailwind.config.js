module.exports = {
  content: ["./src/**/*.{html,js}"],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F52A85",
          secondary: "#F5962A",
          accent: "#1ECBEA",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
}
