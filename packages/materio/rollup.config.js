import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'

import typescript from 'rollup-plugin-ts'

import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

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

    resolve({
      extensions,
      modulesOnly: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement'
        ],
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
        'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef', 'Memo']
      }
    }),
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
    'react/jsx-runtime',
    '@babel/runtime/helpers/extends',
    'stylis',
    'date-fns',
    '@mui/icons-material/Circle'
  ]
}
