/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        primary: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        korean: [
          'Pretendard',
          'Noto Sans KR',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
        logo: ['Pretendard', 'Noto Sans KR', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Soft Purple - Tím nhẹ nhàng
        purple: {
          50: '#faf7ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        // Warm Yellow - Vàng ấm áp
        yellow: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Soft Amber - Vàng cam nhẹ
        amber: {
          50: '#fffbf0',
          100: '#fef4e1',
          200: '#fde6c4',
          300: '#fbd2a0',
          400: '#f8b870',
          500: '#f59e0b',
          600: '#e07c24',
        },
        // Warm Gray
        gray: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #f59e0b 0%, #a855f7 100%)',
        'gradient-soft': 'linear-gradient(135deg, #fef3c7 0%, #f3e8ff 100%)',
        'gradient-hero':
          'linear-gradient(135deg, #fffbeb 0%, #faf7ff 50%, #f3e8ff 100%)',
        'gradient-warm': 'linear-gradient(45deg, #fbbf24 0%, #c084fc 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        bounceSoft: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      boxShadow: {
        soft: '0 2px 15px rgba(0, 0, 0, 0.08)',
        medium: '0 4px 20px rgba(0, 0, 0, 0.12)',
        large: '0 8px 30px rgba(0, 0, 0, 0.15)',
        glow: '0 0 20px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
};
