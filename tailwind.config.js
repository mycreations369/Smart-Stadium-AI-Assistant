/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      colors: {
        wc: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bcd9ff',
          300: '#8ec1ff',
          400: '#599dff',
          500: '#2f78ff',
          600: '#1657f5',
          700: '#1244dc',
          800: '#143ab1',
          900: '#15378b',
          950: '#0e2058',
        },
        gold: {
          50: '#fffaeb',
          100: '#fff1c6',
          200: '#ffe188',
          300: '#ffc94b',
          400: '#ffb31f',
          500: '#f99007',
          600: '#dd6a02',
          700: '#b74a06',
          800: '#94380c',
          900: '#7a2f0d',
        },
        pitch: {
          50: '#ecfdf3',
          100: '#d1fadf',
          200: '#a6f4c5',
          300: '#6ce9a6',
          400: '#32d583',
          500: '#12b767',
          600: '#039855',
          700: '#027a48',
          800: '#05603a',
          900: '#054d31',
        },
        danger: {
          500: '#ef4d4d',
          600: '#dc2626',
        },
      },
      backgroundImage: {
        'wc-gradient': 'linear-gradient(135deg, #1657f5 0%, #1244dc 50%, #15378b 100%)',
        'gold-gradient': 'linear-gradient(135deg, #ffb31f 0%, #f99007 100%)',
        'pitch-gradient': 'linear-gradient(135deg, #32d583 0%, #039855 100%)',
        'stadium-radial': 'radial-gradient(ellipse at top, #2f78ff33 0%, transparent 60%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(15, 23, 42, 0.12)',
        'glass-lg': '0 16px 48px 0 rgba(15, 23, 42, 0.18)',
        glow: '0 0 24px 0 rgba(47, 120, 255, 0.45)',
        'glow-gold': '0 0 24px 0 rgba(255, 179, 31, 0.5)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-fast': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'sos-pulse': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(239, 77, 77, 0.7)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 12px rgba(239, 77, 77, 0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'width-bounce': {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(1.15)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'voice-wave': {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
        'fade-in-fast': 'fade-in-fast 0.2s ease-out both',
        'scale-in': 'scale-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-down': 'slide-down 0.4s ease-out both',
        'pulse-ring': 'pulse-ring 1.8s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'sos-pulse': 'sos-pulse 1.4s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 1.6s ease-in-out infinite',
        breathe: 'breathe 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        'width-bounce': 'width-bounce 1.2s ease-in-out infinite',
        ticker: 'ticker 40s linear infinite',
        'voice-wave': 'voice-wave 0.9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
