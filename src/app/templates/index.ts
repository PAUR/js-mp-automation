declare const angular:any;
import templateCache = require('./templateCache');

export = angular
    .module('app.templates', [])
    .run(templateCache)
    .name;
