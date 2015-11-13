declare const angular:any;

import mainStatesConfig from './main.states';
import TECH_GROUPS from './TECH_GROUPS';
import mpTechGroupDirective from './mpTechGroup/mpTechGroup.directive';
import mpTechDirective from './mpTechGroup/mpTech/mpTech.directive';

export default angular
    .module('app.main', [])
    .config(mainStatesConfig)
    .constant('TECH_GROUPS', TECH_GROUPS)
    .directive('mpTechGroup', mpTechGroupDirective)
    .directive('mpTech', mpTechDirective)
    .name;