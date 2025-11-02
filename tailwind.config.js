/** @type {import('tailwindcss').Config} */
module.exports = {
  // O 'content' agora escaneia as pastas originais E as novas subpastas dentro de 'screens'
  content: [
    './screens/**/*.{js,jsx,ts,tsx}',      // <-- Original (Auth)
    './components/**/*.{js,jsx,ts,tsx}',  // <-- Original (Auth)
    './App.tsx',
    
    // Caminhos ADICIONADOS para o código do 'front-pacientes-'
    './screens/pages/**/*.{js,jsx,ts,tsx}', 
    './screens/components/**/*.{js,jsx,ts,tsx}',
    './screens/animations/**/*.{js,jsx,ts,tsx}',
    './screens/contexts/**/*.{js,jsx,ts,tsx}',
    './screens/utils/**/*.{js,jsx,ts,tsx}',
    './screens/BottomNav.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#00A2E8',
        'primary-dark': '#0083E8',
        'secondary-light': '#B3E5FC',
        'secondary-dark': '#81D4FA',
        'accent-light': '#FFC107',
        'accent-dark': '#FFA000',
        'text-light': '#FFFFFF',
        'text-dark': '#212121',
        'background-light': '#F5F5F5',
        'background-dark': '#E0E0E0',
        'success-light': '#4CAF50',
        'success-dark': '#388E3C',
        'error-light': '#F44336',
        'error-dark': '#D32F2F',
        'warning-light': '#FF9800',
        'warning-dark': '#F57C00',
      },
    },
  },
  plugins: [],
};