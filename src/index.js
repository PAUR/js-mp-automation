import angular from 'angular';
import appModule from './app';

angular
    .element(document)
    .ready(() => {
        angular
            .bootstrap(document, [appModule], {
                strictDi: true
            });
    });