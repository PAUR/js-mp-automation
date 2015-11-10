export default require('angular')
    .module('app.main', [])
    .config(require('./main.states'))
    .directive('mpTechGroup', require('./mpTechGroup/mpTechGroup.directive.js'))
    .directive('mpTech', require('./mpTechGroup/mpTech/mpTech.directive.js'))
    .name;