/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        tuscher: {
          text: '#333333',
          blue: {
            DEFAULT: '#012970',
            light: '#1a3d7e',
            dark: '#021b47'
          },
          gray: '#f9f9f9',
          footer: '#09203B'
        }
      },
      height: {
        header: '96px'
      }
    },
  },
  plugins: [],
} 