/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['usa-esm'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
    },
  },
};
