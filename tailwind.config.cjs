/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],

  theme: {
    colors: {
      lilla: "#CFB9CD",

      blaagraa: "#7D9FC4",

      lyseblaa: "#2877A5",

      blaa: "#000EFF",

      hvid: "#FFFFFF",

      graalilla: "#A3ABC6",

      knaekkethvid: "#F4F0E6",

      beige: "#7B736C",

      morkbeige: "#584B40",
    },

    fontSize: {
      brodtekst_mobil: "0.5rem",

      brodtekst_web: "0.8rem",

      h3_web: "1.5rem",
    },

    extend: {
      backgroundImage: {
        bg: "url('img/background.jpg')",
      },
    },
  },

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
