import esbuild from 'esbuild'
import {globSync} from 'glob'

esbuild.build({
  entryPoints: globSync('src/**/*.ts'),
  bundle: false,
  minify: false,
  // platform: 'node',
  // target: ['node16'],
  outdir: 'dist',
  loader: {
    '.gql': 'text',
  },
})

// esbuild.build({
//   entryPoints: ['src/index.ts'],
//   bundle: true,
//   minify: true,
//   format: 'esm',
//   target: ['chrome58', 'firefox57', 'safari11'], //support edge?
//   outfile: 'dist/browser/index.js',
//   loader: {
//     '.gql': 'text',
//   },
// })

//esbuild.build({
//  entryPoints: globSync('examples/*.ts'),
//  bundle: true,
//  platform: 'node',
//  // minify: true,
//  //packages: 'external',
//  //TODO: isomorphic
//  target: ['node16'],
//  outdir: 'dist/examples/',
//  external: ['@hgraph.io/sdk'],
//  loader: {
//    '.gql': 'text',
//  },
//})
