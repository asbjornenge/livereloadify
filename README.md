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
    --glob      // Glob pattern       (default *.*)

## API

	var lify = require('livereloadify')
	lify(<folder>,<glob>,<port>).start()

## Changelog

### 2.0.0

* Added glob pattern as parameter

### 1.0.0

* Initial release :tada:

enjoy
