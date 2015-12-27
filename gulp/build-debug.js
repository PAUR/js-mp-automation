'use strict';

const runSequence = require('run-sequence');

gulp.task('build:debug', done => {

    Object.assign(global.env, {
        ENV: 'development'
    });

    global.config = require('../config')(global.env);

    runSequence('build', done);
});