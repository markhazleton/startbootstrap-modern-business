// ESLint configuration for Modern Business project
export default [
  {
    files: ["src/**/*.js", "scripts/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly"
      }
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"]
    }
  }
];
