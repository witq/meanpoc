(function (angular) {

  'use strict';

  function ListViewController ($log) {

    var list = this;

    $log.debug('ListViewController loaded');

    list.slogan = 'This is the list view';

  }

  angular
    .module('appListView')
    .controller('ListViewController', ListViewController);

})(this.angular);
