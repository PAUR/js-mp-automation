export default  mpNewsListItemDirective;

/*@ngInject*/
function mpNewsListItemDirective() {
    return {
        restrict: 'E',
        require: ['^mpNews'],
        replace: true,
        transclude: true,
        scope: {
            isMain: '='
        },
        templateUrl: __dirname + '/mp-news-list-item.html'
    };
}