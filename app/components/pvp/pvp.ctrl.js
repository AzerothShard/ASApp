(function() {

  'use strict';

  angular
    .module('azeroth')
    .registerCtrl('PVPController', PVPController);
    
    PVPController.$inject = ['$scope'];

    function PVPController($scope) {

      var pc = this;

      pc.initialize = initialize;
      
      pc.initialize();

      return pc;

      function initialize() {

        console.log("PVPController");

      }
    }

})();