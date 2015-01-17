#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2), {
    default : {
        lrport : 35729,
        glob   : '*.*'
    }
})

var utils = require('./utils')
utils.displayVersionMaybe(argv)
utils.displayHelpMaybe(argv)
utils.validateArgs(argv)

require('./index')(argv['_'][0], argv.glob, argv.lrport).start()
