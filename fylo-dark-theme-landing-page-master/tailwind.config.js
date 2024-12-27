module.exports = {
  content: ['./*.html', './src/**/*.js'],  // Asegúrate de que la ruta de tus archivos JS también esté correcta
  theme: {
    extend: {
      colors: {
        'custom-gray': '#181F2B',
        primary: {
          'intro': 'hsl(217, 28%, 15%)',
          'main': 'hsl(218, 28%, 13%)',
          'footer': 'hsl(216, 53%, 9%)',
          'testimonials': 'hsl(219, 30%, 18%)',
        },
        accent: {
          cyan: 'hsl(176, 68%, 64%)',
          blue: 'hsl(198, 60%, 50%)',
          'light-red': 'hsl(0, 100%, 63%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
