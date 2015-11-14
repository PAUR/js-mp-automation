'use strict';

const Layout = require('./lib/layout');

const paths = new Layout({
    src: {
        index: 'index.html',
        mainScript: 'index.js',
        templates: '/app/templates',
        styles: {
            main: 'index.scss',
            icons: '/core/icons/'
        },
        media: {
            fonts: 'fonts',
            icons: 'icons'
        }
    },
    test: {
        config: 'testconfig.js'
    },
    www: {
        fonts: 'fonts',
        icons: 'icons.png',
        images: 'images',
        retinaIcons: 'icons@2x.png'
    },
    reports: 'www/reports'
});

const patterns = new Layout({
    src: {
        scripts: '/**/!(*.spec).js',
        tests: '/**/*.spec.js',
        styles: {
            build: [paths.src.styles.__layout.main, '../app/**/*.scss'],
            all: '../**/*.scss'
        },
        templates: '/app/**/*.html',
        media: {
            icons: {
                all: '/**/*.png',
                retina: '/**/*@2x.png'
            },
            images: '/images/**/*.+(png|jpeg|svg)',
            fonts: '/fonts/**'
        }
    },
    build: {
        all: '/**',
        html: '/**/*.html',
        scripts: '/**/*.js',
        styles: '/**/*.css'
    }
});

function _bundleConfig(env) {
    const config = {
        entries: paths.src.mainScript,
        outputName: 'app.js',
        dest: paths.www._root,
        debug: (env === 'development')
    };
    return config;
}

module.exports = {
    paths: paths,
    patterns: patterns,
    _bundleConfig: _bundleConfig
};
