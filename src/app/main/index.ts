declare const angular:any;

import mainStatesConfig = require('./main.states');
import TECH_GROUPS = require('./TECH_GROUPS');
import mpTechGroupDirective = require('./mpTechGroup/mpTechGroup.directive');
import mpTechDirective = require('./mpTechGroup/mpTech/mpTech.directive');

export = angular
    .module('app.main', [])
    .config(mainStatesConfig)
    .constant('TECH_GROUPS', TECH_GROUPS)
    .directive('mpTechGroup', mpTechGroupDirective)
    .directive('mpTech', mpTechDirective)
    .name;