/* eslint-disable import/no-anonymous-default-export */
import alias from '@rollup/plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss'

import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: './src/index.js',
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
    resolve({
      extensions,
      browser: true,
      preferBuiltins: false,
      modulesOnly: true
    }),
    alias({
      entries: [
        { find: '@configs', replacement: 'src/configs' },
        { find: '@core', replacement: 'src/core' },
        { find: '@layouts', replacement: 'src/layouts' },
        { find: '@context', replacement: 'src/context' }
      ]
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
    postcss({
      plugins: [],
      minimize: true
    }),
    scss(),
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/preset-react',
          {
            runtime: 'automatic'
          }
        ]
      ]
    })
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    'deepmerge',
    'react-is',
    'prop-types',
    'hoist-non-react-statics',
    'react',
    'next',
    'next/router',
    'react/jsx-runtime'
  ]
}
