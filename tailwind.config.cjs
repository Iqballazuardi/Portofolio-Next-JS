module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Calm pastel palette
        primary: {
          50: '#f0f7ff',
          100: '#dbefff',
          200: '#bfe6ff',
          300: '#92d8ff',
          400: '#66c9ff',
          500: '#3bbaff',
        },
        accent: {
          50: '#fff7f3',
          100: '#ffece4',
          200: '#ffd6c5',
          300: '#ffbfa5',
          400: '#ff9b80',
          500: '#ff7a5a',
        },
        sage: {
          50: '#f6fbf6',
          100: '#eaf7ea',
          200: '#d9efda',
          300: '#bfe1bf',
          400: '#98cca0',
          500: '#6fb382',
        },
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
};
