/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { Montserrat: "'Montserrat', sans-serif" },
    extend: {
      backgroundImage: {
        login_img: "url('../src/assets/Login_img.jpeg')",
        logo: "url('../src/assets/logo.png')",
        logo_hour: "url('../src/assets/logo_hour.png')",
        eye: "url('../src/assets/eye-det.png')",
        retard: "url('../src/assets/retard.png')",
        enveloppe: "url('../src/assets/enveloppe.png')",
      },
      maxWidth: {
        'login-gradient': '10px',
      },
      colors: {
        color1: '#DCF2E6',
        color2: '#36403A',
        color3: '#e3e7ee',
        color4: '#f2f6fe',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'login-template': '1fr,10px,1fr',
      },
      boxShadow: { Important: '1px 1px 2px red' },
      minWidth: {
        '4/5': '80%',
      },
      minHeight: { '4/5': '80%' },
    },
  },
  plugins: [],
};
