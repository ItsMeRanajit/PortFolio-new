import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        fontLogo: ["Source Code Pro", "sans-serif"],
        fontLogo2: ["Jaro", "sans-serif"],
        fontLogo3: ["Ubuntu", "sans-serif"],
      },
      fontSize: {
        Newmd: "0.9375rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
