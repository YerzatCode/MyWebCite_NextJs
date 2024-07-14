import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // banner: "url('./public/banner.jpg')",
      },
    },
    colors: {
      dark: "#0C0C0C",
      black: "#010302",
      red: "#EA1E3F",
      "red-500": "rgba(234, 30, 63, 0.6)",
      white: "#FCFCFC",
      grey: "#B5B5B5",
    },
    fontFamily: {
      sans: ["Oswald", "sans-serif"],
    },
  },
  plugins: [],
}
export default config
