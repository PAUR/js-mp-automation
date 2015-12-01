export default mpNewsItemDirective;

/*@ngInject*/
function mpNewsItemDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            link: '=',
            origin: '=',
            isMain: '=',
            hasPhotos: '=',
            hasVideos: '='
        },
        templateUrl: __dirname + '/mp-news-item.html'
    };
}