import commonjs from '@rollup/plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-ts'
import visualizer from 'rollup-plugin-visualizer'

import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

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
    resolve({
      extensions,
      modulesOnly: true
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      transpiler: 'babel'
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
