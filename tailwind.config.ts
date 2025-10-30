import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#F2F0CB',
        cocoa: '#8C4C24',
        coffee: '#5C2E0F',
        caramel: '#C47A3D',
        cream: '#F8F1DC'
      },
      fontFamily: {
        display: ['\"Poppins\"', 'sans-serif'],
        body: ['\"Poppins\"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(92, 46, 15, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
