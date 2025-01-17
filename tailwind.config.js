/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle,rgb(245, 110, 0),rgb(27, 14, 1),rgb(12, 8, 3))',
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'radial-at-t': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'radial-at-b': 'radial-gradient(circle at bottom, var(--tw-gradient-stops))',
        'radial-at-l': 'radial-gradient(circle at left, var(--tw-gradient-stops))',
        'radial-at-r': 'radial-gradient(circle at right, var(--tw-gradient-stops))',
        'grid': 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.1) 21px), repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(255, 255, 255, 0.1) 21px)',
      },
    },
  },
  plugins: [],
}