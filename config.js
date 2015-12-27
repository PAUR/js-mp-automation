'use strict';

const Layout = require('./lib/layout');

function buildConfig(env) {

    const paths = new Layout({
        src: {
            index: 'index.html',
            mainScript: 'index.js',
            templates: '/app/templates',
            styles: {
                main: 'index.scss',
                icons: '/base'
            },
            media: {
                fonts: 'fonts',
                icons: 'icons'
            }
        },
        test: {
            config: 'testconfig.js'
        },
        target: {
            _root: `target/${env.isDev() ? 'debug' : 'release'}`,
            fonts: 'fonts',
            icons: 'icons.png',
            images: 'images'
        },
        reports: 'target'
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

    return {
        paths: paths,
        patterns: patterns,
        bundleConfig: {
            entries: paths.src.mainScript,
            outputName: 'app.js',
            dest: paths.target._root,
            debug: env.isDev()
        }
    };
}

module.exports = buildConfig;
