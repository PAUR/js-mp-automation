export default require('angular')
    .module('app.main', [])
    .config(require('./main.states'))
    .name;