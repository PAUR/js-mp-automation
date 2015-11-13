import MainContentController = require('./content/MainContentController');

/*@ngInject*/
function mainStates($stateProvider) {
    const basePath = '/src/app/main/';
    $stateProvider.state('main', {
        url: '/',
        views: {
            '': {
                templateUrl: basePath + 'main.html'
            },
            'header@main': {
                templateUrl: basePath + 'header/main-header.html'
            },
            'content@main': {
                templateUrl: basePath + 'content/main-content.html',
                controller: MainContentController,
                controllerAs: 'mainContentCtrl'
            }
        }
    });
}

export = mainStates;