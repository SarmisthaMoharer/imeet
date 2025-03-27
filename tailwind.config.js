/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#bc13fe',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon-purple': '0 0 10px #bc13fe, 0 0 20px #bc13fe',
      },
    },
  },
  plugins: [],
}


