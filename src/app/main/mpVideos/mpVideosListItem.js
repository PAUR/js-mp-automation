export default  mpPhotosListItemDirective;

/*@ngInject*/
function mpPhotosListItemDirective() {
    return {
        restrict: 'E',
        require: ['^mpVideos'],
        replace: true,
        transclude: true,
        templateUrl: __dirname + '/mp-videos-list-item.html'
    };
}