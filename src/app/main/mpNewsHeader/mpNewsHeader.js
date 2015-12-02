export default  mpNewsHeaderDirective;

/*@ngInject*/
function mpNewsHeaderDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: __dirname + '/mp-news-header.html'
    };
}