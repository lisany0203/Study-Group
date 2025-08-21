// postcss.config.js
module.exports = {
  plugins: {
    // The Tailwind CSS PostCSS plugin has moved to @tailwindcss/postcss
    '@tailwindcss/postcss': {}, // Updated from 'tailwindcss'
    autoprefixer: {},
  },
};
