/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        main: "#635985",
        primary: "#443C68",
        imp: "#393053",
        highlight: "#31294A",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "100%",
          },
          "100%": {
            opacity: "0",
            display: "none"
          },
        },
      },
      animation: {
        appear: "appear 2.5s ease-in-out",
      },
    },
    // screens: {
    //   'xxs': "280px",
    //   'xs': "375px",

    // }
  },
  plugins: [],
};
