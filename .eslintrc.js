module.exports = {
  root: true,
  extends: 'eslint:recommended', // You can also use other configurations like 'airbnb', 'react-app', etc.
  env: {
    browser: true, // This ensures that browser globals are available
    es2021: true,  // Set the environment for ES2021
  },
  parserOptions: {
    ecmaVersion: 'latest', // Allows the use of the latest JavaScript features
    sourceType: 'module',  // Allows the use of ES Modules
  },
  rules: {
    // Your custom linting rules
  },
};
