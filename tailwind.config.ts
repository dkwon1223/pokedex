import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-to-b-grey': 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
        "gradient-black-nav": "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))"
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio')
  ],
};
export default config;
