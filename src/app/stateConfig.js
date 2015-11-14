export default stateConfig;

/*@ngInject*/
function stateConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}