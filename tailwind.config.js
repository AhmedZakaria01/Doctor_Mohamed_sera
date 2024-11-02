/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#112D4E",
        secondary: "#3F72AF",
        light: "#DBE2EF",
        background: "#F9F7F7",
        gold: "#A78706",
        goldHover: "rgb(224 182 15)",
      },
      screens: {
        "xs": "200px",
        "sm": "370px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
