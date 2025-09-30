/** @type {import("stylelint").Config} */
export default {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-css-modules"
  ],
  plugins: [
    "stylelint-scss",
    // "stylelint-css-modules-no-global-scoped-selector"
  ],
  rules: {
    // Example SCSS rules
    "scss/dollar-variable-pattern": "^[_]?[a-z0-9]+(-[a-z0-9]+)*$",
  },
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
