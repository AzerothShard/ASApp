(function() {

  'use strict';

  angular
    .module('azeroth')
    .registerCtrl('StatusController', StatusController);
    
    StatusController.$inject = ['$scope'];

    function StatusController($scope) {

      var sc = this;

      sc.initialize = initialize;
      
      sc.initialize();

      return sc;

      function initialize() {

        console.log("StatusController");

      }
    }

})();