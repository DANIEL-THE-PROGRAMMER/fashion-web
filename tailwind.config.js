/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1736px',
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        blue2: 'rgba(var(--f-blue-2), <alpha-value>)',
        black2: 'rgba(var(--f-black-2), <alpha-value>)',
        gray2: 'rgba(var(--f-gray-2), <alpha-value>)',
        brown2: 'rgba(var(--f-brown-2), <alpha-value>)',
        white2: 'rgba(var(--f-white-2), <alpha-value>)',
        yellow2: 'rgba(var(--f-yellow-2), <alpha-value>)',
      }
    },
  },
  plugins: [],
}

