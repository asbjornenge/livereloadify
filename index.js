var tinylr = require('tiny-lr-fork')
var gaze   = require('gaze')
var path   = require('path')
var utils  = require('./utils')

var lr = function(folder, glob, port) {
	this.folder = folder
	this.port   = port
    this.glob   = glob 
	this.lr     = tinylr()
}
lr.prototype.start = function() {
	this.lr.listen(this.port)
	utils.log('Livereload server running at localhost:'+this.port,'ok')
	gaze(this.folder+'/'+this.glob, function(err, watcher) {
		if (err) { utils.log(err, 'error'); process.exit(1) }
		utils.log('Listening for changes at '+this.folder,'ok')
		watcher.on('all', this.handleChange.bind(this))
	}.bind(this))
}
lr.prototype.handleChange = function(event, filepath) {
    this.lr.changed({
        body: {
            files: path.relative(__dirname, filepath)
        }
    })
}

module.exports = function(folder, glob, port) {
	return new lr(folder, glob || '*.*', port || 35729)
}
