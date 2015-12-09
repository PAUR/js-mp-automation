export default mpImg;

/*@ngInject*/
function mpImg() {
    return {
        restrict: 'A',
        link: (scope, element) => {
            const domElement = element[0];
            element.attr('src', `https://placekitten.com/g/${domElement.width}/${domElement.height}`);
            element.attr('alt', 'placekitten');
        }
    };
}