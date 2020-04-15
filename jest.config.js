module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
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
