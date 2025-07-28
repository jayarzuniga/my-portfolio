/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFBA00',
          dark: '#FFA500',
          light: '#FFD700',
        },
        background: {
          dark: '#2B2B3D',
          darker: '#1E1E2E',
          card: '#33334D',
          overlay: '#282838',
          light: '#3D3D5A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E0E0E8',
          muted: '#A0A0B0',
          dark: '#6B6B80',
        },
        accent: {
          blue: '#4285F4',
          linkedIn: '#0A66C2',
          meta: '#1877F2',
          slack: '#4A154B',
        },
        ui: {
          border: '#44445A',
          hover: '#3D3D5A',
        },
      },
      fontFamily: {
        primary: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        hero: '4rem',
        h1: '3rem',
        h2: '2rem',
        h3: '1.5rem',
        body: '1rem',
        small: '0.875rem',
        caption: '0.75rem',
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3rem',
        xxxl: '4rem',
      },
      borderRadius: {
        small: '0.375rem',
        medium: '0.75rem',
        large: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        small: '0 2px 4px rgba(0,0,0,0.1)',
        medium: '0 4px 6px rgba(0,0,0,0.15)',
        large: '0 10px 15px rgba(0,0,0,0.2)',
        glow: '0 0 20px rgba(255,186,0,0.3)',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
        slideIn: 'slideIn 0.5s ease-out',
        scaleIn: 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { transform: 'scale(0.9)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
      },
      screens: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1440px',
      },
    },
  },
  plugins: [],
}