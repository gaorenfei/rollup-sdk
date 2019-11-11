import json from 'rollup-plugin-json';
import license from 'rollup-plugin-license';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import moment from 'moment';
import { version, name, author } from './package.json';

const banner = `/*!
* ${name} v${version} ${author}
*
* Copyright ${moment().format()}
*
*/`;
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [ 
    resolve(),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      runtimeHelpers: true
    }),
    uglify(),
    license({ banner })
  ]
};