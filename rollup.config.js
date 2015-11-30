import babel from 'rollup-plugin-babel';
import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';
import { name } from './package';

export default {
  entry: 'src/index.js',
  format: 'iife',
  moduleName: name,
  dest: `build/${name}.js`,
  sourceMap: true,

  plugins: [
    babel({sourceMap: true}),
    npm({jsnext: true, main: true}),
    commonjs()
  ]
};