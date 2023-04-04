import esbuild from 'esbuild'
import {globSync} from 'glob'

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  target: ['node16'],
  outdir: 'dist/sdk',
  loader: {
    '.gql': 'text',
  },
})

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  target: ['chrome58'],
  outdir: 'dist/sdk/browser',
  // TODO: copy files instead for tree shaking?
  loader: {
    '.gql': 'text',
  },
})

esbuild.build({
  entryPoints: globSync('examples/*.ts'),
  bundle: true,
  platform: 'node',
  // minify: true,
  //packages: 'external',
  //TODO: isomorphic
  target: ['node16'],
  outdir: 'dist/examples/',
  external: ['@hgraph.io/sdk'],
  loader: {
    '.gql': 'text',
  },
})
