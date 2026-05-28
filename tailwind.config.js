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
          DEFAULT: '#5C1A2E',
          deep: '#3F0F1F',
        },
        secondary: {
          DEFAULT: '#1A2940',
          deep: '#0E1827',
        },
        accent: {
          DEFAULT: '#B5854A',
          soft: '#D4A86A',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          warm: '#F0EBE1',
        },
        ink: {
          DEFAULT: '#1A1515',
          soft: '#3D3535',
        },
        neutral: {
          50: '#FAF7F2',
          100: '#F0EBE1',
          200: '#E5DCC9',
          700: '#3D3535',
          900: '#1A1515',
        },
        success: '#4A7C59',
        warning: '#C9943A',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        28: '7rem',
        36: '9rem',
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
      boxShadow: {
        'card': '0 8px 40px rgba(92, 26, 46, 0.08)',
        'card-hover': '0 12px 48px rgba(92, 26, 46, 0.16)',
        'cta': '0 12px 32px rgba(92, 26, 46, 0.25)',
        'photo': '0 25px 60px rgba(14, 24, 39, 0.55)',
      },
    },
  },
  plugins: [],
}
