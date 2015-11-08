export default statesConfig;

/*@ngInject*/
function statesConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}