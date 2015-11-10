import path from 'path';

export default mpTechDirective;

/*@ngInject*/
function mpTechDirective() {
    return {
        restrict: 'E',
        replace: false,
        scope: {
            tech: '='
        },
        templateUrl: path.join(__dirname, 'mp-tech.html')
    }
}