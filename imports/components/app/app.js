'use strict';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './app.less';
import template from './app.html';

import sidebar from '../sidebar/index';
import navbar from '../navbar/index';
import places from '../places/index';

class AppCtrl {
  constructor() { }
}

export default angular
  .module('app', [
    angularMeteor,
    uiRouter,
    places,
    sidebar,
    navbar
  ])
  .component('app', {
    template,
    controller: AppCtrl
  })
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/locais');
  })
  .name;
