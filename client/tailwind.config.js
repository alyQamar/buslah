/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
        'custom-white': 'var(--white)',
        'custom-gray-100': 'var(--gray-100)',
        'custom-blue-800': 'var(--blue-800)',
        'custom-blue-600': 'var(--blue-600)'
      },
      filter: {
        'custom-white': 'var(--filter-white)',
        'custom-blue-800': 'var(--filter-blue-800)',
      },},
  },
  plugins: [],
}

