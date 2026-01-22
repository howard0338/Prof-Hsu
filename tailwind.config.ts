import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Biomedical Blue - Professional, Trustworthy
        bio: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53', // Primary
          900: '#102a43', // Darker Primary
        },
        // Bio-active Green/Teal - Regeneration, Life
        regen: {
          50: '#eefcf6',
          100: '#c6f7e2',
          200: '#8eedc7',
          300: '#54d19f',
          400: '#2bb081',
          500: '#199473', // Secondary
          600: '#147d64',
          700: '#0d6253',
          800: '#084c41',
          900: '#063730',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-bg-overlay.png')", // Placeholder for future texture
      },
      animation: {
        'float-slow': 'float 15s infinite ease-in-out',
        'float-medium': 'float 10s infinite ease-in-out',
        'float-fast': 'float 7s infinite ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;