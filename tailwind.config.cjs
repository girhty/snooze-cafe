/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1D120D',
        roast: '#3A2116',
        caramel: '#B76C36',
        cream: '#FFF7ED',
        sand: '#EBD8C2',
        sage: '#78916D'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(56, 30, 16, .14)',
        glow: '0 15px 45px rgba(183, 108, 54, .28)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-3deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' }
        },
        marquee: {
          to: { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite'
      }
    }
  },
  plugins: []
};