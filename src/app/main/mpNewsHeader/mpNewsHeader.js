export default  mpNewsHeaderDirective;

/*@ngInject*/
function mpNewsHeaderDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            isMain: '='
        },
        templateUrl: __dirname + '/mp-news-header.html'
    };
}