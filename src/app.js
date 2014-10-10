(function() {

  'use strict';

  var AppController;

  AppController = function($log, RouteService) {

    var app = this;

    $log.debug('AppController loaded');

    app.routes = RouteService.get();

  };

  angular
    .module('meanPocApp', [
      'ngRoute',
      'appTemplates',
      'appCommon',
      'appHomeView',
      'appListView'
    ])
    .config([
      '$routeProvider',
      function ($routeProvider) {

        $routeProvider
          .when('/', {
            redirectTo: '/home'
          })
          .otherwise({
            redirectTo: '/'
          });

      }
    ])
    .controller('AppController', [
      '$log',
      'RouteService',
      AppController
    ]);

})();
