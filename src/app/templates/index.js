import angular from 'angular';
import templateCache from './templateCache.js';

export default angular
    .module('app.templates', [])
    .run(templateCache)
    .name;
