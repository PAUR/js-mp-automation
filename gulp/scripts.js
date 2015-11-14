'use strict';

const
    browserify = require('browserify'),
    watchify = require('watchify'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    bundleLogger = require('../lib/bundleLogger');

const watchifyConfig = {
    cache: {},
    packageCache: {},
    fullPaths: false
};

let bundler = browserify(Object.assign({}, watchifyConfig, config.bundleConfig));
bundler.transform('babelify');

gulp.task('scripts', ['templates'], () => {
    return bundle(bundler, config.bundleConfig);
});

gulp.task('scripts:watch', ['templates'], () => {

    bundler = watchify(bundler);

    bundler.on('update', () => {
        bundleWatch(bundler);
    });

    return bundleWatch(bundler);
});

function bundleWatch(bundler) {
    return bundle(bundler)
        .pipe(browserSync.reload({stream: true}))
}

function bundle(bundler) {
    const bundleConfig = bundler._options;

    bundleLogger.start(bundleConfig.outputName);

    let bundleStream = bundler
        .bundle()
        .on('error', function (error) {
            bundleLogger.error(error);
            this.emit('end');
        })
        .pipe(source(bundleConfig.outputName))
        .pipe(buffer())
        .pipe(ngAnnotate());

    if (env.isDev) {
        bundleStream = bundleStream
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./maps'));
    } else {
        bundleStream
            .pipe(uglify())
    }

    return bundleStream
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', () => bundleLogger.end(bundleConfig.outputName));
}
