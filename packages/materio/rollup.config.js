/* eslint-disable import/no-anonymous-default-export */
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named'
      }
    ],
    external: ['styled-components', 'react', 'next'],
    plugins: [
      resolve(),
      commonjs({
        include: ['./index.js', 'node_modules/**', 'src/**'],
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType'],
          'react-is': ['ForwardRef', 'Memo']
        }
      }),
      external({
        includeDependencies: true
      }),
      postcss({
        plugins: [],
        minimize: true
      }),
      scss(),
      babel({
        exclude: '**/node_modules/**',
        presets: ['@babel/preset-react']
      }),

      terser()
    ]
  }
]
