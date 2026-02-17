import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        asphalt: "#131416",
        charcoal: "#1c1d20",
        steel: "#70757f",
        brand: "#f28a20"
      },
      boxShadow: {
        card: "0 18px 35px rgba(0, 0, 0, 0.25)"
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
