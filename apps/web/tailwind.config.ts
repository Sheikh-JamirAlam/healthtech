import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-white": "#fcfffe",
        "primary-black": "#242424",
        "primary-blue": "#4968e0",
      },
    },
  },
  plugins: [],
};
export default config;
