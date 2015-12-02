export default  mpNewsDirective;

/*@ngInject*/
function mpNewsDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            title: '='
        },
        templateUrl: __dirname + '/mp-news.html'
    };
}