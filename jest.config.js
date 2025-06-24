module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
      diagnostics: false
    }
  },
  moduleNameMapper: {
    '\\.(gql|graphql)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^\.\.\/\.\.\/graphql-ws\/src$': '<rootDir>/tests/__mocks__/graphql-ws.js'
  }
};
