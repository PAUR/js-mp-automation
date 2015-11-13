declare const angular:any;

import app = require('./app');

angular
    .element(document)
    .ready(() => {
        angular
            .bootstrap(document, [app], {
                strictDi: true
            });
    });