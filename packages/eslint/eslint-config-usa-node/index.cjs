/** @type {import('eslint').Linter.Config} */
module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "import", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "commonjs",
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "inline-type-imports",
      },
    ],
    "class-methods-use-this": "off",
    "dot-notation": "off",
    "import/extensions": "off",
    "import/no-default-export": "error",
    "import/no-extraneous-dependencies": ["error", { packageDir: ["./"] }],
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "#**",
            group: "internal",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/prefer-default-export": "off",
    "no-empty-function": "off",
    "no-useless-constructor": "off",
  },
  overrides: [
    {
      files: ["./*"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "import/no-default-export": "off",
        "import/prefer-default-export": "off",
      },
    },
    {
      files: ["./*.*js"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
