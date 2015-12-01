import angular from 'angular';
import mainStatesConfig from './main.states.js';

import mpNewsItemDirective from './mpNewsItem/mpNewsItem.js';

import mpBreadcrumbsDirective from './mpBreadcrumbs/mpBreadcrumbs.js';

import mpSliderDirective from './mpSlider/mpSlider.js';

import mpNewsHeaderDirective from './mpNewsHeader/mpNewsHeader.js';

import mpMainNewsDirective from './mpMainNews/mpMainNews.js';

import mpNewsListDirective from './mpNewsList/mpNewsList.js';
import mpNewsListItemDirective from './mpNewsList/mpNewsListItem.js';
import mpPhotosListItemDirective from './mpNewsList/mpPhotosListItem.js';


export default angular
    .module('app.main', [])
    .config(mainStatesConfig)
    .directive('mpBreadcrumbs', mpBreadcrumbsDirective)
    .directive('mpSlider', mpSliderDirective)
    .directive('mpNewsHeader', mpNewsHeaderDirective)
    .directive('mpMainNews', mpMainNewsDirective)
    .directive('mpNewsList', mpNewsListDirective)
    .directive('mpNewsListItem', mpNewsListItemDirective)
    .directive('mpPhotosListItem', mpPhotosListItemDirective)
    .directive('mpNewsItem', mpNewsItemDirective)
    .name;