/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
    },
  },
  
  plugins: [nextui()],
 
}


export default config;

