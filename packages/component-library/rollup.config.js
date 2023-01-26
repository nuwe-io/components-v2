import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import visualizer from 'rollup-plugin-visualizer'

import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import external from 'rollup-plugin-peer-deps-external'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const extensions = ['.ts', '.tsx']

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    visualizer({
      filename: './bundle-report.html',
      open: false
    }),
    external({
      includeDependencies: true
    }),
    resolve({
      extensions,
      modulesOnly: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-react',
          {
            runtime: 'automatic'
          }
        ]
      ]
    }),
    postcss({
      plugins: [],
      minimize: true
    }),
    scss(),
    terser()
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    'deepmerge',
    'react-is',
    'prop-types',
    'hoist-non-react-statics',
    'react',
    'react-dom',
    'react/jsx-runtime',
    '@mui/icons-material/Circle',
    '@mui/material',
    '@babel/runtime/helpers/extends',
    'stylis',
    'date-fns'
  ]
}
