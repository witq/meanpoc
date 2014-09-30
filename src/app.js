(function() {

  'use strict';

  var AppController, routes;

  routes = [
    {
      href: '/one',
      title: 'One',
      templateUrl: 'views/one.html',
      controller: 'OneViewController',
      controllerAs: 'one'
    },
    {
      href: '/two',
      title: 'Two',
      templateUrl: 'views/two.html',
      controller: 'TwoViewController',
      controllerAs: 'two'
    }
  ];

  AppController = function($log) {

    var app = this;

    $log.debug('AppController loaded');

    app.routes = routes;

  };

  angular
    .module('meanPocApp', [
      'ngRoute'
    ])
    .config([
      '$routeProvider',
      function($routeProvider) {

        // angular.forEach(routes, function(route) {
        //   $routeProvider.when(route, {
        //     title: route.title,
        //     templateUrl: route.templateUrl,
        //     controller: route.controller,
        //     controllerAs: route.controllerAs
        //   });
        // });

      }
    ])
    .controller('AppController', [
      '$log',
      AppController
    ]);

})();
