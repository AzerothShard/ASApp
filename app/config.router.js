(function() {

  'use strict';

  var rootPath="."

  var app = angular
    .module('azeroth')
    .config(config);

  app.config.$inject = ['$routeProvider','$controllerProvider', '$sceDelegateProvider'];

  function config($routeProvider, $controllerProvider, $sceDelegateProvider) {

      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://*.azerothshard.org/**',
        'https://azerothshard.org/**'
      ]);

    app.registerCtrl = $controllerProvider.register;

    $routeProvider
      .when('/:view', {
        templateUrl: function(rd) {
          return rootPath + '/app/components/' + rd.view + '/' + rd.view + '.html'
        },
        resolve: {
          load: ['$q','$rootScope','$route', function($q, $rootScope, $route) {
              var path = $route.current.params.view;

              var deferred = $q.defer();
              
              requirejs(["app/components/" + path + '/' + path + '.ctrl'], function(util) {
                  $rootScope.$apply(function() {
                    deferred.resolve();
                  });
              });
              return deferred.promise;
          }]
        }
      })
      .otherwise('/arena');
  }

})();