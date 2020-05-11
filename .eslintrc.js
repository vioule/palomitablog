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
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: [".jsx"] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': ['error', 'always', {js: 'never',jsx: 'never'}],
    'react/prop-types': 'off',
    'no-shadow': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': ["error", { "allow": ["_id"] }]
  },
  settings: {
    'import/resolver': {node: {extensions: ['.js','.jsx']}},
},
};
