(function (angular) {

  'use strict';

  var routes = [
    {
      href: '/list',
      title: 'List',
      templateUrl: 'app/list/list.tpl.html',
      controller: 'ListViewController',
      controllerAs: 'list'
    }
  ];

  angular
    .module('appListView', [])
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
