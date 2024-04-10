/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#030712",
      tertiary: {
        100: "#F5F4EF",
      },
      neutral: {
				200: "#D4D5D7",
        800: "#353745",
      },
    },
  },
  plugins: [],
};
