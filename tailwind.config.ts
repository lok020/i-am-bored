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
      },
      animation: {
        typewriter: 'typewriter 2s steps(10) forwards, blink 1s steps(10) infinite 2s',
        caret: 'typewriter 2s steps(10) forwards, blink 1s steps(10) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {left: '100%'},
        },
        blink: {
          '0%': {opacity: '0'},
          '0.1%': {opacity: '1'},
          '50%': {opacity: '1'},
          '50.1%': {opacity: '0'},
          '100%': {opacity: '0'},
        },
      },
    },
  },
  plugins: [],
};
export default config;
