#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2), {
    default : {
        lrport : 35729
    }
})

var utils = require('./utils')
utils.displayVersionMaybe(argv)
utils.displayHelpMaybe(argv)
utils.validateArgs(argv)

require('./index')(argv['_'][0], argv.lrport).start()
