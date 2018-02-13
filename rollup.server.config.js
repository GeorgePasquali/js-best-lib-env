import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

import postcss from 'rollup-plugin-postcss';

export default {
  input: 'dev-server.js',
  output: {
    file: "server/dev-server.js",
    format: "umd"
  },
  external: ['express', 'hbs'],
  sourceMap: true,
  plugins: [

    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false, }),
        cssnano(),
      ],
      modules: true,
      extensions: [ '.css' ],
    })
  ]
};
