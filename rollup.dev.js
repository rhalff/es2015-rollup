import config from './rollup.base'
import { name } from './package'

config.entry = 'src/index.js'
config.moduleName = name
config.dest = `build/${name}.js`

export default config
