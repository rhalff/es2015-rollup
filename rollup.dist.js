import config from './rollup.base'
import { name } from './package'

config.entry = 'src/index.js'
config.moduleName = name
config.dest = `dist/${name}.js`

export default config
