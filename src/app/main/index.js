import angular from 'angular';
import mainStatesConfig from './main.states.js';

export default angular
    .module('app.main', [])
    .config(mainStatesConfig)
    .name;