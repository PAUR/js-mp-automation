declare const angular:any;
import vendorModules from './vendorModules';
import templatesModule from './templates';
import mainModule from './main';
import appStates from './app.states';

export = angular
    .module('app', [].concat(
        vendorModules,
        templatesModule,
        mainModule
    ))
    .config(appStates)
    .name;