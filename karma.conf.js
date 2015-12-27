'use strict';

const
    env = require('./env'),
    config = require('./config')(env),
    isparta = require("isparta"),
    istanbul = require('browserify-istanbul');

module.exports = function(karmaConfig) {

    var configuration = {
        files: [].concat(
            config.paths.test.config,
            config.patterns.src.tests
        ),

        singleRun: true,

        autoWatch: false,

        frameworks: ['browserify', 'mocha'],

        browsers: ['PhantomJS'],

        preprocessors: (() => {
            const preprocessors = {};
            preprocessors[config.paths.test.config] = ['browserify'];
            preprocessors[config.patterns.src.scripts] = ['browserify', 'coverage'];
            preprocessors[config.patterns.src.tests] = ['browserify'];
            return preprocessors;
        })(),

        browserify: {
            debug: true,
            configure: function(bundle) {
                bundle.once('prebundle', function() {
                    bundle
                        .transform('babelify')
                        .plugin('proxyquire-universal')
                        .transform(istanbul({
                            instrumenter: isparta,
                            ignore: ['**/*.spec.js'],
                            defaultIgnore: true
                        }));
                });
            }
        },

        reporters: ['progress'],

        coverageReporter: {
            type: 'lcov',
            dir: config.paths.reports,
            reporters : [{
                type: 'html',
                subdir: 'coverage'
            }],
            instrumenters: {
                isparta: isparta
            },
            instrumenter: (() => {
                const instrumenter = {};
                instrumenter[config.patterns.src.scripts] = 'isparta';
                return instrumenter;
            })()
        }
    };

    karmaConfig.set(configuration);
};