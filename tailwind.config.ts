import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#5A9AFF', // azul corporativo
          hover:  '#508DF0',
        },
      },
      borderRadius: {
        xl2: '1.5rem',       // esquinas 2XL
      },
    },
  },
  plugins: [],
};
export default config;
