/* global config, env*/

'use strict';

const envUtil = require('./lib/envUtil');

global.gulp = require('gulp');
global.config = require('./config');
global.env = require('./env');

config.bundleConfig = config._bundleConfig(env.ENV);

envUtil.log(env);

require('require-dir')('./gulp');
