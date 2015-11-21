import angular from 'angular';
import mainStatesConfig from './main.states.js';
import mpBreadcrumbsDirective from './mpBreadcrumbs/mpBreadcrumbs.js';
import mpSlider from './mpSlider/mpSlider.js';

export default angular
    .module('app.main', [])
    .config(mainStatesConfig)
    .directive('mpBreadcrumbs', mpBreadcrumbsDirective)
    .directive('mpSlider', mpSlider)
    .name;