/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['usa-nextjs'],
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
