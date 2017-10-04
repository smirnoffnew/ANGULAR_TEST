import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';

let aboutModule = angular.module('aboutModule', [
  uiRouter
])
.config( ($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('about', {
            url: '/about',
            component: 'aboutComponent',
            data: {
                'isOnlyForAuthUser': false
            }
    });
})
.component('aboutComponent', aboutComponent)
.name;

export default aboutModule;
