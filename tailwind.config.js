/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#e040fb',
          purple: '#9c27b0',
          teal: '#00bcd4',
          orange: '#ff9800',
          blue: '#2196f3',
        },
        dark: {
          DEFAULT: '#0f1117',
          card: '#1a1d27',
          border: '#2a2d3a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(224,64,251,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(224,64,251,0.8)' },
        },
      },
    },
  },
  plugins: [],
}
