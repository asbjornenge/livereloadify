var fs    = require('fs')
var chalk = require('chalk')

var utils = {

    displayVersionMaybe : function (argv) {
        if (!argv.v && !argv.version) return
        var pkg = require('./package.json')
        console.log(chalk.green(pkg.name)+chalk.red(' ❤ ')+chalk.green(pkg.version))
        process.exit(0)
    },

    displayHelpMaybe : function (argv) {
        if (!argv.h && !argv.help) return
        var pkg = require('./package.json')
        console.log(chalk.cyan('USAGE: livereloadify [OPTIONS] folder'))
        console.log(chalk.cyan('OPTIONS:'))
        console.log(chalk.cyan('  --lrport 35729  // Livereload port'))
        process.exit(0)
    },

    validateArgs : function(argv) {
    	if (argv['_'].length == 0) {
    		utils.log('Missing required argument\n  -h for help', 'error')
    		process.exit(1)
    	}
    	if (!utils.dirExistsSync(argv['_'][0])) {
    		utils.log(argv['_'][0]+' is not a directory', 'error')
    		process.exit(1)    		
    	}
    },

	dirExistsSync : function(d) {
	  try { return fs.statSync(d).isDirectory() }
	  catch (er) { return false }
	},

    log : function(message, type) {
    	switch(type) {
    		case 'error':
    			console.log(chalk.red('ERROR: '+message))
    			break
    		case 'ok':
       			console.log(chalk.green('OK: '+message))
    			break
    		default:
    			console.log(chalk.cyan('INFO: '+message))
    	}
    }

}

module.exports = utils