(function() {

  'use strict';

  angular
    .module('app')
    .registerCtrl('ArenaController', ArenaController);

    ArenaController.$inject = ['$scope'];

    function ArenaController($scope) {

      var ac = this;

      ac.initialize = initialize;

      ac.initialize();

      return ac;

      function initialize() {

        console.log("ArenaController");
        $scope.ctrl = 'ArenaController';

      }
    }

})();