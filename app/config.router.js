(function() {

  'use strict';

  var rootPath="."

  var app = angular
    .module('app')
    .config(config);

  app.config.$inject = ['$routeProvider','$controllerProvider'];

  function config($routeProvider, $controllerProvider) {

    app.registerCtrl = $controllerProvider.register;

    $routeProvider
      .when('/:view', {
        templateUrl: function(rd) {
          return rootPath + '/app/views/' + rd.view + '/' + rd.view + '.html'
        },
        resolve: {
          load: ['$q','$rootScope','$route', function($q, $rootScope, $route) {
              var path = $route.current.params.view;

              var deferred = $q.defer();
              
              requirejs(["app/views/" + path + '/' + path + '.ctrl'], function(util) {
                  $rootScope.$apply(function() {
                    deferred.resolve();
                  });
              });
              return deferred.promise;
          }]
        }
      })
      .otherwise('/');
  }

})();