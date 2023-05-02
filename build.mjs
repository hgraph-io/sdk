import esbuild from 'esbuild'

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

esbuild.build({
  ...common,
  format: 'cjs',
  platform: 'node',
  target: ['node16'],
  outfile: 'dist/node-cjs.js',
})

esbuild.build({
  ...common,
  format: 'esm',
  platform: 'node',
  target: ['node16'],
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
