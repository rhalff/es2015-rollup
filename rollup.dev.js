import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import { name } from './package'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  sourceMap: true,
  dest: `es5/index.js`,
  name: name,

  plugins: [
    json(),
    babel({sourceMap: true})
  ]
}