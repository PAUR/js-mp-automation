export default require('angular')
    .module('app.templates', [])
    .run(require('./templateCache.js'))
    .name;
