export default mpTechDirective;

/*@ngInject*/
function mpTechDirective() {
    return {
        restrict: 'E',
        replace: false,
        scope: {
            tech: '='
        },
        templateUrl: '/src/app/main/mpTechGroup/mpTech/mp-tech.html'
    }
}