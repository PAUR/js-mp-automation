export default  mpNewsListDirective;

/*@ngInject*/
function mpNewsListDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: __dirname + '/mp-news-list.html'
    };
}