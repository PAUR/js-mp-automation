export default mpMainNewsListItemDirective;

/*@ngInject*/
function mpMainNewsListItemDirective() {
    return {
        restrict: 'E',
        replace: true,
        require: ['^mpMainNews'],
        transclude: true,
        templateUrl: __dirname + '/mp-main-news-list-item.html'
    };
}