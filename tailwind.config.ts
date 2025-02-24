import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3c096c",
        secondary: "#240046",
        green: "#00C4B3",
        bay: "#3D4DB7",
        red: "#FF3D57",
      },
      fontFamily: {
        header: ["Montserrat", "Roboto", "sans-serif"],
        body: ["Open Sans", "Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
