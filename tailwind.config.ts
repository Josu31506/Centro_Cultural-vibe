import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#F4DEB2',
        cocoa: '#8B4513',
        coffee: '#4A2C12',
        caramel: '#D1884F',
        cream: '#FFF5E5'
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 36px rgba(139, 69, 19, 0.18)'
      }
    }
  },
  plugins: []
};

export default config;
