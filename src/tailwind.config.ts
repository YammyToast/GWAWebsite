import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'coral': {
        DEFAULT: '#FF4D6D',
        hover: '#CC1A3A'
      },
      'background': {
        DEFAULT: '#141414',
        alt: '#111111'
      },
      'text': '#f5f5f5',
      'accent-1': '#333333',
      'accent-2': '#BDBDBD'
    },
    fontFamily: {
      'maven': ['Maven Pro', 'sans-serif']

    }
  },
  plugins: [],
} satisfies Config;
