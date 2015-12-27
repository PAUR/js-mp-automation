'use strict';

const runSequence = require('run-sequence');

gulp.task('target:build-watch', done => {

    global.env.isWatch = true;

    runSequence('target:build', 'watch', done);
});
