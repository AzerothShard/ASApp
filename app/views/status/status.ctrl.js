(function() {

  'use strict';

  angular
    .module('app')
    .registerCtrl('StatusController', StatusController);
    
    StatusController.$inject = ['$scope'];

    function StatusController($scope) {

      var sc = this;

      sc.initialize = initialize;
      
      sc.initialize();

      return sc;

      function initialize() {

        console.log("StatusController");
        $scope.ctrl = 'StatusController';

      }
    }

})();