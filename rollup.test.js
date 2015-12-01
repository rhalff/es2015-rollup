import config from './rollup.base'

config.entry = 'test/tests.js'
config.moduleName = 'test'
config.dest = '.tmp/test-bundle.js'

export default config


