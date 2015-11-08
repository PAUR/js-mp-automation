import angular from 'angular';

angular
    .element(document)
    .ready(() => {
        angular
            .bootstrap(document, [require('./app')], {
                strictDi: true
            });
    });