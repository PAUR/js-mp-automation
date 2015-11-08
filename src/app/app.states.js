export default statesConfig;

/*@ngInject*/
function statesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}