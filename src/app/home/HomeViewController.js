(function (angular) {

  'use strict';

  function HomeViewController ($log) {

    var home = this;

    $log.debug('HomeViewController loaded');

    home.slogan = 'This is the home view';

  }

  angular
    .module('appHomeView')
    .controller('HomeViewController', HomeViewController);

})(this.angular);
