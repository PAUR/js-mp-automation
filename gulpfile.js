/* global config, env*/

'use strict';

global.gulp = require('gulp');
global.env = require('./env');
global.config = require('./config')(global.env);

require('require-dir')('./gulp');
