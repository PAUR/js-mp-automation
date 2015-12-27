'use strict';

var
    dotenv = require('dotenv'),
    gutil = require('gulp-util'),
    fs = require('fs');

module.exports = tryLoad;

function tryLoad(envPath) {
    try {
        fs.statSync(envPath);
        load(envPath);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
        gutil.log('[' + gutil.colors.red('!Warning') + '] Can\'t load ' + gutil.colors.magenta(envPath) + ' file');
    }
}

function load(envPath) {
    dotenv.config({
        path: envPath
    });
}