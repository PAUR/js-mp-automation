export default  mpVideosDirective;

/*@ngInject*/
function mpVideosDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: __dirname + '/mp-videos.html'
    };
}