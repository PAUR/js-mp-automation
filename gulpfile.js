'use strict';

global.gulp = require('gulp');
global.config = require('./config');
global.env = require('./env');

config.bundleConfig = config._bundleConfig(env.ENV);

require('require-dir')('./gulp');
