'use strict';

const
    browserSync = require('browser-sync');

gulp.task('server', cb => {

    browserSync.instance = browserSync.init({
        port: env.SERVER_PORT,
        startPath: '/',
        server: {
            baseDir: config.paths.www._root
        }
    });

    cb();
});
