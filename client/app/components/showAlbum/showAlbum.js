import angular from 'angular';
import uiRouter from 'angular-ui-router';
import showAlbumComponent from './showAlbum.component';

let showAlbumModule = angular.module('showAlbum', [
  uiRouter
])
.config( ($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('album', {
            url: '/album/:id',
            component: 'showAlbum',
            data: {
                'isOnlyForAuthUser': true
            }
        });
})
.component('showAlbum', showAlbumComponent)
.name;

export default showAlbumModule;
