/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter'],
    },
    extend: {
      boxShadow: {
        sm: '0px 0px 6px 0px #0000000D',
      },
      colors: {
        background: '#F8F8F8',
        card: {
          DEFAULT: '#FFFFFF',
          border: '#E5E7EB',
        },
        orange: {
          100: '#FFEED5',
          400: '#FFC267',
          500: '#E29A2D',
        },
        green: {
          100: '#C5F2DA',
          500: '#2DD179',
          600: '#4CAF79',
        },
        blue: {
          100: '#BAD7FA',
          500: '#3B82F6',
        },
        gray: {
          100: '#DFDFDF',
          200: '#D3D3D3',
          500: '#DBDBDB',
          600: '#CDCDCD',
          700: '#A5A5A5',
          800: '#585757',
          900: '#252525',
        },
      },
    },
  },
  plugins: [],
};
