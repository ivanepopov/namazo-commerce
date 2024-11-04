import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      excalifont: ["Excalifont", "sans-serif"],
      comfortaa: ["Comfortaa", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'search': '0px 20px 5px -15px rgba(0, 0, 0, 0.6)',
      },
      height: {
        'page' : 'calc(100vh - 148px)'
      },
      width: {
        'page' : '1280px'
      }
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
};
export default config;
