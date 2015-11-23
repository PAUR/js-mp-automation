export default  mpNewsHeaderDirective;

/*@ngInject*/
function mpNewsHeaderDirective() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: __dirname + '/mp-news-header.html'
    };
}