import path from 'path';

export default mainStates;

/*@ngInject*/
function mainStates($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        views: {
            '': {
                templateUrl: path.join(__dirname, '/main.html')
            }
        }
    });
}