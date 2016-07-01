(function () {

  'use strict';

  var app = angular
    .module('azeroth');
  app.registerCtrl('NewsController', NewsController);
  app.registerCtrl('NewsShowController', NewsShowController);

  News.$inject = ['$resource', 'API_URL'];

  function News($resource, API_URL) {

    var url = API_URL + ':title';

    var newsFactory = $resource(
      url,
      { title: '@title' },
      {
        getNewses: { method: 'GET', url: url, isArray: true },
        getNews: { method: 'GET', url: url, isArray: false }
      }
    );

    return newsFactory;

  }


  NewsController.$inject = ['$scope', '$resource', 'API_URL'];

  function NewsController($scope, $resource, API_URL) {

    var nic = this;

    nic.initialize = initialize;

    nic.initialize();

    return nic;

    function initialize() {

      console.log('NewsController');

      var news = new News($resource, API_URL);

      news.getNewses().$promise.then(function (res) {
        $scope.newses = res;
      });

    }

  }

  NewsShowController.$inject = ['$scope', '$resource', 'API_URL', '$route'];

  function NewsShowController($scope, $resource, API_URL, $route) {

    var nic = this;

    nic.initialize = initialize;

    nic.initialize();

    return nic;

    function initialize() {

      console.log('NewsShowController');

      var news = new News($resource, API_URL);

      news.getNews({
        title: $route.current.params.title
      }).$promise.then(function (res) {
        console.log(res);
        $scope.news = res;
      });

    }

  }

})();