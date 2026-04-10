import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        finance: {
          light: '#e0e7ff', // indigo-100
          DEFAULT: '#1e3a8a', // blue-900 (Deep Blue/Royal Blue)
          dark: '#172554', // blue-950
          accent: '#3b82f6', // blue-500
        }
      },
    },
  },
  plugins: [],
};
export default config;
