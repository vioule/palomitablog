module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
        module: 'commonjs',
        esModuleInterop: true,
      },
      babelConfig: '<rootDir>/.babelrc',
    },
  },
};
