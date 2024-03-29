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
        info: "url('../src/assets/info.png')",
        compte: "url('../src/assets/compte.png')",
        annuaire: "url('../src/assets/annuaire.png')",
        logout: "url('../src/assets/logout.png')",
        home: "url('../src/assets/home.png')",
        comingSoon: "url('../src/assets/comingSoon.gif')",
        prev: "url('../src/assets/prev.png')",
        next: "url('../src/assets/next.png')",
        plus: "url('../src/assets/plus.png')",
      },
      maxWidth: {
        'login-gradient': '10px',
      },
      colors: {
        color1: '#cde0fe',
        color2: '#525965',
        color3: '#e3e7ee',
        color4: '#f2f6fe',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'login-template': '1fr,10px,1fr',
      },
      boxShadow: { Important: '2px 2px 2px #525965' },
      minWidth: {
        '4/5': '80%',
        64: '18rem',
        '10rem': '8rem',
      },
      minHeight: { '4/5': '80%' },
      spacing: {
        '15vw': '15vw',
      },
    },
  },
  plugins: [],
};
