import path from 'path';

export default mpTechGroupDirective;

/*@ngInject*/
function mpTechGroupDirective() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            techGroup: '='
        },
        templateUrl: path.join(__dirname, 'mp-tech-group.html')
    }
}