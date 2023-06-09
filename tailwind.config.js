/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login_img: "url('../src/assets/Login_img.jpeg')",
        logo: "url('../src/assets/logo.png')",
      },
      maxWidth: {
        'login-gradient': '10px',
      },
      colors: {
        color1: '#DCF2E6',
        color2: '#36403A',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'login-template': '1fr,10px,1fr',
      },
    },
  },
  plugins: [],
};
