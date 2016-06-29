(function() {

  'use strict';

  angular
    .module('azeroth')
    .registerCtrl('MapController', MapController);
    
    MapController.$inject = ['$scope'];

    function MapController($scope) {

      var pc = this;

      pc.initialize = initialize;
      
      pc.initialize();

      return pc;

      function initialize() {

        console.log("MapController");

      }
    }

})();