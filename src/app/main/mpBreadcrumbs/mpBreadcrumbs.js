export default mpBreadcrumbsDirective;

/*@ngInject*/
function mpBreadcrumbsDirective() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: __dirname + '/mp-breadcrumbs.html'
    };
}