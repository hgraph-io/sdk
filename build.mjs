import esbuild from 'esbuild'
import fs from 'fs'

// https://esbuild.github.io/api/#main-fields-for-package-authors

const common = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: false,
  loader: {
    '.gql': 'text',
    '.graphql': 'text',
  },
}

esbuild.build({
  ...common,
  entryPoints: ['src/server/index.ts'],
  // format: 'cjs',
  platform: 'node',
  target: ['node18'],
  outfile: 'dist/node-cjs.js',
})

esbuild.build({
  ...common,
  entryPoints: ['src/server/index.ts'],
  format: 'esm',
  platform: 'node',
  target: ['node18'],
  outfile: 'dist/node-esm.js',
})

esbuild.build({
  ...common,
  format: 'esm',
  platform: 'browser',
  target: ['chrome58', 'firefox57', 'safari11', 'edge88'],
  outfile: 'dist/browser-esm.js',
})

esbuild.build({
  ...common,
  format: 'cjs',
  platform: 'browser',
  target: ['chrome58', 'firefox57', 'safari11', 'edge88'],
  outfile: 'dist/browser-cjs.js',
})

// fs.mkdir('dist', console.error)
fs.mkdir('dist', () => {})
fs.copyFile('src/types/index.ts', 'dist/index.d.ts', () => {})
