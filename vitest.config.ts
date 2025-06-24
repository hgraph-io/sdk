import {defineConfig} from 'vitest/config'
import {resolve} from 'path'

export default defineConfig({
  test: {
    environment: 'node',
    exclude: [
      'node_modules',
      'dist',
      '.git',
      '**/node_modules/**',
      'tests/HgraphClient.test.ts',
      'tests/HgraphContract.test.ts',
    ],
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src/utils/**'],
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100,
    },
  },
  resolve: {
    alias: [
      {
        find: '../../graphql-ws/src',
        replacement: resolve(__dirname, 'tests/__mocks__/graphql-ws.js'),
      },
      {
        find: /\.gql$/, // import of GraphQL documents
        replacement: resolve(__dirname, 'tests/__mocks__/fileMock.js'),
      },
    ],
  },
})
