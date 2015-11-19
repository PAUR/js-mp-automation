import angular from 'angular';
import mainStatesConfig from './main.states.js';
import mpBreadcrumbsDirective from './mpBreadcrumbs/mpBreadcrumbs.js';

export default angular
    .module('app.main', [])
    .config(mainStatesConfig)
    .directive('mpBreadcrumbs', mpBreadcrumbsDirective)
    .name;