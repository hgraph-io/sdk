module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
        diagnostics: false,
      },
    ],
  },
  moduleNameMapper: {
    '\\.(gql|graphql)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^\.\.\/\.\.\/graphql-ws\/src$': '<rootDir>/tests/__mocks__/graphql-ws.js'
  }
};
