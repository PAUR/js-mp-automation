declare const angular:any;

import templateCache from './templateCache';

export default angular
    .module('app.templates', [])
    .run(templateCache)
    .name;
