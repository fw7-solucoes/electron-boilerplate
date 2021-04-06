module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": <true></true>
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "alias": {
        "map": [
          ["~", "./src"]
        ],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "yield-star-spacing": "off",
    "react/jsx-uses-react": "off",
    "generator-star-spacing": "off",
    "react/react-in-jsx-scope": "off",
    "space-before-function-paren": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": ["error", { "allow": ["arrowFunctions"] }]
  }
}
