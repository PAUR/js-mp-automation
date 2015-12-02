import angular from 'angular';
import mainStatesConfig from './main.states.js';

import mpNewsItemDirective from './mpNewsItem/mpNewsItem.js';

import mpBreadcrumbsDirective from './mpBreadcrumbs/mpBreadcrumbs.js';

import mpSliderDirective from './mpSlider/mpSlider.js';

import mpNewsHeaderDirective from './mpNewsHeader/mpNewsHeader.js';

import mpMainNewsDirective from './mpMainNews/mpMainNews.js';
import mpMainNewsListItemDirective from './mpMainNews/mpMainNewsListItem.js';

import mpNewsDirective from './mpNews/mpNews.js';
import mpNewsListItemDirective from './mpNews/mpNewsListItem.js';
import mpPhotosListItemDirective from './mpNews/mpPhotosListItem.js';

import mpVideosDirective from './mpVideos/mpVideos.js';
import mpVideosListItemDirective from './mpVideos/mpVideosListItem.js';


export default angular
    .module('app.main', [])
    .config(mainStatesConfig)

    .directive('mpNewsItem', mpNewsItemDirective)
    .directive('mpNewsHeader', mpNewsHeaderDirective)

    .directive('mpBreadcrumbs', mpBreadcrumbsDirective)
    .directive('mpSlider', mpSliderDirective)

    .directive('mpMainNews', mpMainNewsDirective)
    .directive('mpMainNewsListItem', mpMainNewsListItemDirective)

    .directive('mpNews', mpNewsDirective)
    .directive('mpNewsListItem', mpNewsListItemDirective)
    .directive('mpPhotosListItem', mpPhotosListItemDirective)

    .directive('mpVideos', mpVideosDirective)
    .directive('mpVideosListItem', mpVideosListItemDirective)

    .name;