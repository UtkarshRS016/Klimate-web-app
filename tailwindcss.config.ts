import type { Config } from "tailwindcss"

const config: Config = {
 content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
  extend: {
   animation: {
    'fade-in': 'fadeIn 0.3s ease-in forwards',
   },
   keyframes: {
    fadeIn: {
     '0%': { opacity: 0 },
     '100%': { opacity: 1 },
    },
   },
  },
 },
 plugins: [],
}

export default config
