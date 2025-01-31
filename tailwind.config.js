/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        aladin: ['Aladin', 'serif'],
      },
      colors: {
        'custom-blue': '#243b55',
      },
      boxShadow: {
        custom: '0px 0px 10px 0px rgba(147, 197, 253, 0.4)',
      },
    },
  },
  plugins: [],
};
