'use strict';

const
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    bundleLogger = require('../lib/bundleLogger');

const bundleConfig = config.vendorBundleConfig;

gulp.task('scripts:vendor', () => {

    bundleLogger.start(bundleConfig.outputName);

    const bundleStream = browserify(bundleConfig)
        .bundle()
        .on('error', error => {
            bundleLogger.error(error);
            this.emit('end');
        })
        .pipe(source(bundleConfig.outputName))
        .pipe(buffer());

    if (env.isRelease) {
        bundleStream
            .pipe(uglify())
    }

    return bundleStream
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', () => bundleLogger.end(bundleConfig.outputName));
});