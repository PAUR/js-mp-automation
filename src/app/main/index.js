import angular from 'angular';
import mainStatesConfig from './main.states.js';
import mpBreadcrumbsDirective from './mpBreadcrumbs/mpBreadcrumbs.js';
import mpSliderDirective from './mpSlider/mpSlider.js';
import mpNewsHeaderDirective from './mpNewsHeader/mpNewsHeader.js';

export default angular
    .module('app.main', [])
    .config(mainStatesConfig)
    .directive('mpBreadcrumbs', mpBreadcrumbsDirective)
    .directive('mpSlider', mpSliderDirective)
    .directive('mpNewsHeader', mpNewsHeaderDirective);
    .name;