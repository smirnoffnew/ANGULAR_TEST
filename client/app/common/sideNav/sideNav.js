import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sideNavComponent from './sideNav.component';
import SideNavFactory from './sideNav.factory';

let sideNavModule = angular.module('sideNav', [
  uiRouter
])
.component('sideNav', sideNavComponent)
.factory('SideNavFactory', SideNavFactory)
.name;

export default sideNavModule;

