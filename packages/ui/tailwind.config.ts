import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx}", "../../packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-white": "#fcfffe",
        "primary-black": "#242424",
        "primary-blue": "#4968e0",
        "secondary-blue": "#384469",
        "darker-blue": "#314594",
        "darker-grey": "#424242",
        "primary-grey": "#6b6768",
        "secondary-grey": "#d8e3ed",
        "light-blue": "#f3f8fc",
        "accent-blue": "#bad3e8",
      },
      flex: {
        "100": "0 0 100%",
      },
      screens: {
        mobile: "992px",
      },
      animation: {
        enter: "enter 200ms ease-out",
        leave: "leave 150ms ease-in forwards",
      },
      keyframes: {
        enter: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
