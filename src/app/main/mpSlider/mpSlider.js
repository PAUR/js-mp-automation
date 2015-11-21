export default mpSliderDirective;

/*@ngInject*/
function mpSliderDirective() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: __dirname + '/mp-slider.html'
    };
}