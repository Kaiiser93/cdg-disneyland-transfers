import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#090D18',
          light: '#111827',
          card: '#1A2235',
          border: '#263044',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4B77E',
          dark: '#A8853A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
