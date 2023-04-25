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
      'accent-1': '#1C1C1C',
      'accent-2': '#BDBDBD'
    },
    fontFamily: {
      'maven': ['Maven Pro', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        'navigation': '20% 20% 1fr 20%',
        'postBanner': '12% 1fr 30%',
      },
      gridTemplateRows: {
        // 'postStack': '1fr 20%',

      }
    }
  },
  plugins: [],
} satisfies Config;
