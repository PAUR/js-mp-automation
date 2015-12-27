'use strict';

var gutil = require('gulp-util');

module.exports = log;

function log(env) {
    gutil.log(gutil.colors.green('ENV configuration'));

    logVariable(env, 'ENV');

    gutil.log('');
}

function logVariable(env, name) {
    Object.keys(env).forEach(function (variableName) {

        var value = env[variableName];

        if (typeof value === 'object') {
            logVariable(value, name + ' ' + gutil.colors.blue('[' + variableName + ']'));
        } else {
            if (typeof value === 'function' && value.length === 0) {
                value = env[variableName]();
            }
            gutil.log(gutil.colors.green(name) + ' ' + gutil.colors.blue('[' + variableName + ']') + ' : ' + value);
        }

    });
}