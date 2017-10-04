import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signOutComponent from './signout.component';

let SignOutModule = angular.module('signout', [
  uiRouter
])
.config( ($stateProvider) => {
  "ngInject";

  $stateProvider
      .state('sign-out', {
          url: '/sign-out',
          component: 'signOutComponent',
          data: {
              'isOnlyForAuthUser': true
          }
      });
})
.component('signOutComponent', signOutComponent)
.name;

export default SignOutModule;
