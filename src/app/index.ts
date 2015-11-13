declare const angular:any;
import vendorModules = require('./vendorModules');
import templatesModule = require('./templates');
import mainModule = require('./main');
import appStates = require('./app.states');

export = angular
    .module('app', [].concat(
        vendorModules,
        templatesModule,
        mainModule
    ))
    .config(appStates)
    .name;