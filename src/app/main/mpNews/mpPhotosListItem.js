export default  mpPhotosListItemDirective;

/*@ngInject*/
function mpPhotosListItemDirective() {
    return {
        restrict: 'E',
        require: ['^mpNews'],
        replace: true,
        transclude: true,
        templateUrl: __dirname + '/mp-photos-list-item.html'
    };
}