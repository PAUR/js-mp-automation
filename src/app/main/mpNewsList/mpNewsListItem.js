export default  mpNewsListItemDirective;

/*@ngInject*/
function mpNewsListItemDirective() {
    return {
        restrict: 'E',
        require: ['^mpNewsList'],
        replace: true,
        transclude: true,
        templateUrl: __dirname + '/mp-news-list-item.html'
    };
}