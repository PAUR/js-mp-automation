'use strict';

const runSequence = require('run-sequence');

gulp.task('target:build', done => {

    Object.assign(global.env, {
        ENV: 'development'
    });

    global.config = require('../config')(global.env);

    runSequence('compile', done);
});