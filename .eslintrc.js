const rules = {
  "arrow-body-style": ["error", "as-needed"],
  "object-curly-spacing": [
    2,
    "always",
    { objectsInObjects: false, objectsInObjects: true }
  ],
  "jsx-quotes": ["error", "prefer-double"],
  "no-multiple-empty-lines": "error",
  "no-trailing-spaces": "error",
  curly: "error",
};

const extendsConfigs = [
  "eslint:recommended",
  "plugin:react/recommended"
];

module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
    "jest/globals": true
  },
  extends: extendsConfigs,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [...extendsConfigs, "plugin:@typescript-eslint/recommended"],
      rules: {
        ...rules,

        "@typescript-eslint/no-use-before-define": "off",

        "react/prop-types": "off",
        "react/no-unescaped-entities": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
      }
    }
  ],
  plugins: ["react-hooks", "jest"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules,
  settings: {
    react: {
      version: "detect"
    }
  }
};
