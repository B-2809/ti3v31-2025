/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",  // ← necesario para reconocer clases en /app
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    
  theme: {
    extend: {
      colors: {
        primario: "#D72638",
        secundario: "#1B1F3B",
        mostaza: "#F0C808",
        grisClaro: "#F5F5F5",
        grisCarbon: "#2E2E2E",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

  
