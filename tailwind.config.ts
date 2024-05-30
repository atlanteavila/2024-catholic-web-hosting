// tailwind.config.ts
import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#18232d',
      },
      fontFamily: {
        'fira-sans': ['"Fira Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
