export default mpMainNews;

/*@ngInject*/
function mpMainNews() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: __dirname + '/mp-main-news.html'
    };
}