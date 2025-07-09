const { rules } = require("eslint-config-prettier");

module.exports = {
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // disable the base ESLint rule
    "no-unused-vars": "off",
    // enable TS-aware version
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  }, // rules: {
  //   "no-console": "error",
  // },
  env: {
    node: true,
    es6: true,
  },

  overrides: [
    {
      files: ["**/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
};
