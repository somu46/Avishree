module.exports = {
    root: true,
    env: {
      browser: true,
      es2020: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      react: {
        version: '18.2',
      },
    },
    // Remove the `react-refresh` plugin and any associated rules
    plugins: [],
    rules: {
      // Remove the `react-refresh` related rules if they were added
    },
  };
  