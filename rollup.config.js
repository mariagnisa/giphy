import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/scripts/index.js',
  dest: 'public/assets/scripts/giphy.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    resolve({
      jsnext: true,
      browser: true
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
};
