'use strict';

const
    browserSync = require('browser-sync');

gulp.task('server', cb => {

    browserSync.instance = browserSync.init({
        port: env.FAKE_BACKEND.PORT,
        startPath: '/',
        server: {
            baseDir: config.paths.build._root
        }
    });

    cb();
});
