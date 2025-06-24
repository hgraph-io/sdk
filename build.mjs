import esbuild from 'esbuild'
import fs from 'fs/promises'

// https://esbuild.github.io/api/#main-fields-for-package-authors

const common = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  loader: {
    '.gql': 'text',
    '.graphql': 'text',
  },
}

const builds = [
  esbuild.build({
    ...common,
    entryPoints: ['src/server/index.ts'],
    format: 'cjs',
    platform: 'node',
    target: ['node18'],
    outfile: 'dist/node-cjs.js',
  }),
  esbuild.build({
    ...common,
    entryPoints: ['src/server/index.ts'],
    format: 'esm',
    platform: 'node',
    target: ['node18'],
    outfile: 'dist/node-esm.js',
    packages: 'external',
  }),
  esbuild.build({
    ...common,
    format: 'esm',
    platform: 'browser',
    target: ['chrome58', 'firefox57', 'safari11', 'edge88'],
    outfile: 'dist/browser-esm.js',
    jsx: 'automatic',
    external: ['react', 'react-dom'],
  }),
  esbuild.build({
    ...common,
    format: 'cjs',
    platform: 'browser',
    target: ['chrome58', 'firefox57', 'safari11', 'edge88'],
    outfile: 'dist/browser-cjs.js',
    jsx: 'automatic',
  }),
]

try {
  await Promise.all(builds)
  await fs.mkdir('dist', { recursive: true })
  await Promise.all([
    fs.copyFile('src/types/index.ts', 'dist/index.d.ts'),
    fs.copyFile('src/types/graphql.ts', 'dist/graphql.d.ts'),
  ])
} catch (err) {
  console.error('Build failed:', err)
  process.exit(1)
}
