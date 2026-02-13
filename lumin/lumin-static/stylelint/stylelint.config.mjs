/** @type {import("stylelint").Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-css-modules",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended"
  ],
  plugins: [
    "stylelint-scss",
    // "stylelint-css-modules-no-global-scoped-selector"
  ],
  rules: {
    // Example SCSS rules
    "scss/dollar-variable-pattern": "^[_]?[a-z0-9]+(-[a-z0-9]+)*$",
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]*(-[a-z0-9]+)*$",
      {
        message:
        "Expected class selector to be camelCase or kebab-case",
      },
    ]
  },
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
