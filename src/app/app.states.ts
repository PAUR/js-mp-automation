/*@ngInject*/
function statesConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}

export = statesConfig;