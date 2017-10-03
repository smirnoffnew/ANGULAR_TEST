import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videoItemComponent from './videoItem.component';

let videoItemModule = angular.module('videoItem', [
  uiRouter
])

.component('videoItem', videoItemComponent)

.name;

export default videoItemModule;
