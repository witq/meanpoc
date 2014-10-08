(function (angular) {

  'use strict';

  function RouteService ($route) {

    this.get = function () {
      var routes = $route.routes,
        filteredRoutes = {};
      angular.forEach(routes, function filterRoute (route, url) {
        if (!route.redirectTo) {
          filteredRoutes[url] = route;
        }
      });
      return filteredRoutes;
    };

  }

  angular
    .module('appCommon')
    .service('RouteService', [
      '$route',
      RouteService
    ]);

})(this.angular);
