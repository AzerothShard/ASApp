(function () {

  'use strict';

  var rootPath = "."

  var app = angular
    .module('azeroth')
    .config(config);

  app.config.$inject = ['$routeProvider', '$controllerProvider', '$resourceProvider'];

  function config($routeProvider, $controllerProvider, $resourceProvider) {

    $resourceProvider.defaults.stripTrailingSlashes = false;

    app.registerCtrl = $controllerProvider.register;

    $routeProvider
      .when('/:view', {
        templateUrl: function (rd) {
          return rootPath + '/app/components/' + rd.view + '/' + rd.view + '.html'
        },
        resolve: {
          load: ['$q', '$rootScope', '$route', function ($q, $rootScope, $route) {
            var path = $route.current.params.view;

            var deferred = $q.defer();

            requirejs([
              "app/components/" + path + '/' + path + '.ctrl'], function (util) {
                $rootScope.$apply(function () {
                  deferred.resolve();
                });
              });
            return deferred.promise;
          }]
        }
      })

      .when('/:view/:title', {
        templateUrl: function (rd) {
          return rootPath + '/app/components/' + rd.view + '/' + rd.view + '.show.html'
        },
        resolve: {
          load: ['$q', '$rootScope', '$route', function ($q, $rootScope, $route) {
            var path = $route.current.params.view;

            var deferred = $q.defer();

            requirejs([
              "app/components/" + path + '/' + path + '.ctrl'], function (util) {
                $rootScope.$apply(function () {
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