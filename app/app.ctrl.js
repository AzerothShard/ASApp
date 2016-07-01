(function () {

  'use strict';

  angular
    .module('azeroth')
    // .factory('News', News)
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', '$rootScope'];

  function AppController($scope, $rootScope) {

    var ac = this;

    ac.initialize = initialize;

    ac.initialize();

    return ac;

    function initialize() {

      console.log("AppController");

      $rootScope.toggle = function () {
        $("#wrapper").toggleClass("toggled");
        console.log("toggle");
      }

    }
  }

})();