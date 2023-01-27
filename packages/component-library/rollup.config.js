import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'

import pkg from './package.json'

const extensions = ['.ts', '.tsx']

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    visualizer({
      filename: './bundle-report.html',
      open: false
    }),
    external(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    postcss(),
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
