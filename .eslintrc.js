module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    "plugin:jest/recommended",
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: [".jsx", ".tsx"] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': ['error', 'always', {js: 'never',ts: 'never',tsx: 'never'}],
  },
  settings: {
    'import/resolver': {node: {extensions: ['.js','.ts','.tsx']}},
},
};
