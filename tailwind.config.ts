import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lexend-deca": "var(--font-lexend-deca)",
      },
      backgroundImage: {
        'title-gradient': 'radial-gradient(ellipse at top, var(--accent), var(--background) 70%)',
      }
    }
  },
  plugins: [],
};
export default config;
