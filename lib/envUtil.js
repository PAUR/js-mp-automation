'use strict';

const
    dotenv = require('dotenv'),
    gutil = require('gulp-util'),
    fs = require('fs');

module.exports = {
    log: log,
    load: tryLoad
};

function log(env) {
    const varColor = gutil.colors.cyan;
    const valueColor = gutil.colors.magenta;

    logSection(() => {
        Object.getOwnPropertyNames(env)
        .map(name => {
            return { name: varColor(name), value: valueColor(env[name]) };
        })
        .forEach(variable => {
            gutil.log(`[${variable.name}] ${variable.value}`);
        });
    });
}

function logSection(fn) {
    const SEPARATOR = Array(40).fill('=').join('');
    gutil.log(SEPARATOR);
    fn();
    gutil.log(SEPARATOR);
}

function tryLoad(envPath) {
    try {
        fs.statSync(envPath);
        load(envPath);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
        gutil.log(`[${gutil.colors.red('!Warning')}] Can't load ${gutil.colors.magenta(envPath)} file`);
    }
}

function load(envPath) {
    dotenv.config({
        path: envPath
    });
}