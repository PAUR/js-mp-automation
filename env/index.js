'use strict';

const loadEnv = require('./load');

loadEnv('.env');

var getEnv = require('getenv');


const DEV_ENV = 'development';
const DEFAULT_SERVER_PORT = 9000;

const NODE_ENV = getEnv('NODE_ENV', DEV_ENV).toLowerCase();

module.exports = {
    ENV: NODE_ENV, // development | * (tract as production otherwise)
    FAKE_BACKEDN: {
        PORT: getEnv.int('FAKE_SERVER_PORT', DEFAULT_SERVER_PORT)
    },
    isDev() {
        return this.ENV === DEV_ENV
    },
    isRelease() {
        return !this.isDev();
    }
};