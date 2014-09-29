(function() {

  'use strict';

  var AppController = function($log) {

    $log.debug('AppController loaded');

  };

  angular
    .module('meanPocApp', [])
    .controller('AppController', [
      '$log',
      AppController
    ]);

})();
