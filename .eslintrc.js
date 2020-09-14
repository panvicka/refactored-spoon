module.exports = {
  root: true,
  extends: ["airbnb"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-console": ["warn"],
    "linebreak-style": ["error", "windows"],
  },
  plugins: ["html"],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
