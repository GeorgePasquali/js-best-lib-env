import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';
import postcss from 'rollup-plugin-postcss';

import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

export default [
  // browser-friendly UMD build
  {
    input: 'src/main.js',
    output: [{
      name: 'howLongUntilWeAreFree',
      file: pkg.browser,
      format: 'umd'
    },{
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }],
    plugins: [

      postcss({
        plugins: [
          simplevars(),
          nested(),
          cssnext({ warnForDuplicates: false, }),
          cssnano(),
        ],
        modules: true,
        extensions: [ '.css','.sass' ],
      }),

      resolve(), // so Rollup can find `ms`

      commonjs(), // so Rollup can convert `ms` to an ES module

      babel({ // We put the .babelrc file in the src folder
        //in order to be able to use different configs for different purposes(for example tests).
        exclude: 'node_modules/**' // only transpile our source code
      }),

      eslint({
        exclude: [
          'styles/**',
        ]
      }),
      uglify()
    ],
    sourcemap: true
  },

];
