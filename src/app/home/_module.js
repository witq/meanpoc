(function (angular) {

  'use strict';

  var routes = [
    {
      href: '/home',
      title: 'Home',
      templateUrl: 'app/home/home.tpl.html',
      controller: 'HomeViewController',
      controllerAs: 'home'
    }
  ];

  angular
    .module('appHomeView', [])
    .config([
      '$routeProvider',
      function ($routeProvider) {

        angular.forEach(routes, function (route) {
          $routeProvider.when(route.href, {
            title: route.title,
            templateUrl: route.templateUrl,
            controller: route.controller,
            controllerAs: route.controllerAs
          });
        });

      }
    ]);

})(this.angular);
