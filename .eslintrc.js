const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.resolve("tsconfig.lint.json"),
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import-helpers", "prettier"],
  extends: ["airbnb", "airbnb-typescript", "prettier"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "prettier/prettier": "error",

    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",

    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: ["/^react/", "module", "/^@\\//", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],

    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
