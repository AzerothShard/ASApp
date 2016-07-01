(function () {
  'use strict';

  angular
    .module('azeroth', [
      'ngRoute',
      'ngResource'
    ])

    .filter('to_trusted', ['$sce', function ($sce) {
      return function (text) {
        return $sce.trustAsHtml(text);
      };
    }])

    .constant('API_URL', 'http://asapp-api.azurewebsites.net/news.php/');

})();