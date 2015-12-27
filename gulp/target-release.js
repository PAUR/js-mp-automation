'use strict';

const runSequence = require('run-sequence');

gulp.task('target:release', done => {

    Object.assign(global.env, {
        ENV: 'production'
    });

    global.config = require('../config')(global.env);

    runSequence('compile', done);
});