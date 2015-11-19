import angular from 'angular';
import mpImg from './mpImg.js';

export default angular
    .module('app.util', [])
    .directive('mpImg', mpImg)
    .name;
