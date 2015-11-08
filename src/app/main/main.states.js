import path from 'path';

export default mainStates;

/*@ngInject*/
function mainStates($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        views: {
            '': {
                templateUrl: path.join(__dirname, '/main.html')
            },
            'header@main': {
                templateUrl: path.join(__dirname, '/header/main-header.html')
            },
            'content@main': {
                templateUrl: path.join(__dirname, '/content/main-content.html')
            }
        }
    });
}