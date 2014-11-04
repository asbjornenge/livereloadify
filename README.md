# Livereloadify

Livereloadify will start a livereload server and emit changes to files in a given folder.

Combined with some other great tools like [watchify](https://github.com/substack/watchify) and [node-static](https://github.com/cloudhead/node-static) it can create an efficient development environment, without the need for a task runner besides [npm](https://www.npmjs.org/).

Example npm scripts section:

	"scripts": {
	  "start": "npm run watch & npm run livereload & npm run static",
	  "watch": "watchify app/app.js -o app/bundle.js",
	  "livereload": "livereloadify app",
	  "static": "static app"
	}

## Install

    npm install -g livereloadify

## Use

    livereloadify /path/to/folder

## CLI Options

	--lrport    // Livereload port    (default 35729)

## API

	var lify = require('livereloadify')
	lify(<folder>,<port>).start()

enjoy
