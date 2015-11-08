'use strict';

const
    gutil = require('gulp-util'),
    prettyHrtime = require('pretty-hrtime');

let startTime;

module.exports = {
    start(filePath) {
        startTime = process.hrtime();
        gutil.log(`Bundling ${gutil.colors.green(filePath)} ...`);
    },

    error(error) {
        gutil.log(`Bundling error ${gutil.colors.red(error)} ...`);
    },

    end(filepath) {
        const taskTime = process.hrtime(startTime);
        const prettyTime = prettyHrtime(taskTime);
        gutil.log(`Bundled  ${gutil.colors.green(filepath)} in ${gutil.colors.magenta(prettyTime)}`);
    }
};