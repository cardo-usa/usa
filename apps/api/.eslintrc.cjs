/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['usa-node'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
  },
};
