/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGreen: "#fff3d9",
        green: "#ffcc73",
        orange:"#528938"
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 0, 0, 0.5)' },
          '50%': { boxShadow: '0 0 15px rgba(255, 0, 0, 0.75)' },
          '100%': { boxShadow: '0 0 5px rgba(255, 0, 0, 0.5)' },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite alternate',
      },
    },
  },
  plugins: [],
};
