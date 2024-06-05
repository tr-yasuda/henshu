/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#B4F1D9',
          light: '#6EE7B7',
          DEFAULT: '#00C58E',
          dark: '#007A4D',
          darker: '#004F2E',
        },
        secondary: {
          lighter: '#EFD6FF',
          light: '#D9AFFF',
          DEFAULT: '#C285FF',
          dark: '#A96BFF',
          darker: '#8C4FFF',
        },
        info: {
          lighter: '#D6F0FF',
          light: '#ADDFFF',
          DEFAULT: '#85CAFF',
          dark: '#5CB5FF',
          darker: '#2E9FFF',
        },
        success: {
          lighter: '#D6FFD6',
          light: '#ADFFAD',
          DEFAULT: '#85FF85',
          dark: '#5FFF5F',
          darker: '#2EFF2E',
        },
        warning: {
          lighter: '#FFFAD6',
          light: '#FFF5AD',
          DEFAULT: '#FFEF85',
          dark: '#FFEA5F',
          darker: '#FFE52E',
        },
        error: {
          lighter: '#FFD6D6',
          light: '#FFADAD',
          DEFAULT: '#FF8585',
          dark: '#FF5F5F',
          darker: '#FF2E2E',
        },
        gray: {
          100: '#F9FAFB',
          200: '#F4F6F8',
          300: '#DFE3E8',
          400: '#C4CDD5',
          500: '#919EAB',
          600: '#637381',
          700: '#454F5B',
          800: '#212B36',
          900: '#161C24',
        },
      },
    },
  },
  plugins: [],
}
