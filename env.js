'use strict';

const
    getEnv = require('getenv'),
    fs = require('fs'),
    path = require('path');

(function tryLoadEnv() {
    const gutil = require('gulp-util');

    const ENV_PATH = path.join(__dirname, '.env');

    try {
        fs.statSync(ENV_PATH);
        loadEnv();
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
        gutil.log(`[${gutil.colors.red('!Warning')}] Can't load ${gutil.colors.magenta(ENV_PATH)} file`);
    }

    function loadEnv() {
        fs.statSync(ENV_PATH);
        require('dotenv').config({path: ENV_PATH});
    }
})();

const DEFAULT_ENV = 'development';
const DEFAULT_SERVER_PORT = 9000;

const ENV = getEnv('NODE_ENV', DEFAULT_ENV);

module.exports = {
    ENV: ENV, // DEV RELEASE
    SERVER_PORT: getEnv.int('PORT', DEFAULT_SERVER_PORT),
    isDev: (ENV === DEFAULT_ENV),
    isRelease: (ENV !== DEFAULT_ENV)
};
