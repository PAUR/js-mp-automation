export default require('angular')
    .module('app.main', [])
    .config(require('./main.states'))
    .constant('TECH_GROUPS', require('./TECH_GROUPS.json'))
    .directive('mpTechGroup', require('./mpTechGroup/mpTechGroup.directive.js'))
    .directive('mpTech', require('./mpTechGroup/mpTech/mpTech.directive.js'))
    .name;