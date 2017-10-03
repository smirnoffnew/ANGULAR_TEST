import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signInComponent from './signin.component';

let signInModule = angular.module('sign-in', [
  uiRouter
])
.config( ($stateProvider) => {
  "ngInject";
  $stateProvider
      .state('sign-in', {
        url: '/sign-in',
        component: 'signInComponent'
      });
})
.component('signInComponent', signInComponent)
.name;

export default signInModule;
