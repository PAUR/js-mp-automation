/*@ngInject*/
function mpTechGroupDirective() {
    return {
        restrict: 'E',
        replace: false,
        scope: {
            techGroup: '='
        },
        templateUrl: '/src/app/main/mpTechGroup/mp-tech-group.html'
    };
}

export = mpTechGroupDirective;