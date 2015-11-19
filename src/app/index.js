import angular from 'angular';
import vendorModules from './vendorModules.js';
import templatesModule from './templates';
import mainModule from './main';
import utilModule from './util';
import stateConfig from './stateConfig.js';

export default angular
    .module('app', [].concat(
        vendorModules,
        templatesModule,
        mainModule,
        utilModule
    ))
    .config(stateConfig)
    .name;