'use strict';

const runSequence = require('run-sequence');

gulp.task('build:release', done => {

    Object.assign(global.env, {
        ENV: 'production'
    });

    global.config = require('../config')(global.env);

    runSequence('build', done);
});