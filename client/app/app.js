import ngMaterial from 'angular-material';
import ngCookies from 'angular-cookies';
import ngMessages from 'angular-messages';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import YouTubeEmbed from 'ng-videosharing-embed';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngMaterial,
    ngMessages,
    ngCookies,
    Common,
    Components,
    YouTubeEmbed
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', AppComponent)


.run(function($trace) {
    "ngInject";
    $trace.enable('TRANSITION');
})
.run(function($transitions) {
    "ngInject";

    $transitions.onStart({ }, function(trans) {
        var AccessService = trans.injector().get('AuthenticationService');
        console.log('before');
    });

    $transitions.onStart({ }, function(trans) {
        var AccessService = trans.injector().get('AuthenticationService');
        console.log('start');
    });
});

