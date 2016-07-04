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

    .constant('API_URL', 'https://public-api.wordpress.com/rest/v1.1/sites/azerothshard.org/posts/');

})();