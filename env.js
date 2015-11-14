'use strict';

const
    envUtil = require('./lib/envUtil'),
    getEnv = require('getenv'),
    path = require('path');

const ENV_PATH = path.join(__dirname, '.env');

envUtil.load(ENV_PATH);

const DEV_ENV = 'development';
const DEFAULT_SERVER_PORT = 9000;

const NODE_ENV = getEnv('NODE_ENV', DEV_ENV).toLowerCase();

module.exports = {
    ENV: NODE_ENV, // development | * (tract as production otherwise)
    SERVER_PORT: getEnv.int('PORT', DEFAULT_SERVER_PORT),
    isDev: (NODE_ENV === DEV_ENV),
    isRelease: (NODE_ENV !== DEV_ENV)
};
