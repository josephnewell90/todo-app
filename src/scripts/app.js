angular
  .module('charSheetApp', [
    'ngRoute',
    'LoginController',
    'characterSheetController',
  ])
  .config([
    '$routeProvider',
    function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '/partials/login-controller.html',
        controller: 'LoginController',
        controllerAs: 'login',
      })
      .when('/characterSheetList', {
        templateURL: '/partials/characterSheetList-controller.html',
        controller: 'characterSheetListController',
        controllerAs: 'characterSheetList',
      })
      .when('/characterSheetList/:id', {
        controller: 'characterSheetController',
        controllerAs: 'characterSheet'
      })
      .otherwise('/login');
    }
  ]);
