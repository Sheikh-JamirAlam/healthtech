import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx}", "../../packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-white": "#fcfffe",
        "primary-black": "#242424",
        "primary-blue": "#4968e0",
        "primary-grey": "#6b6768",
        "light-blue": "#f3f8fc",
      },
    },
  },
  plugins: [],
};
export default config;
