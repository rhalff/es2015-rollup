import babel from 'rollup-plugin-babel'
import npm from 'rollup-plugin-npm'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

export default {
  format: 'iife',
  sourceMap: true,

  plugins: [
    json(),
    babel({sourceMap: true}),
    npm({jsnext: true, main: true}),
    commonjs()
  ]
}