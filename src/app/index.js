export default require('angular')
    .module('app', [].concat(
        require('./vendorModules'),
        require('./templates'),
        require('./main')
    ))
    .config(require('./app.states'))
    .name;