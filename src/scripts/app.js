angular
  .module('charSheetApp', [
    'ngRoute',
    'LoginController',
    'characterSheetController',
    'logoutDirective',
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
        templateUrl: '/partials/characterSheetList-controller.html',
        controller: 'characterSheetController',
        controllerAs: 'characterSheets',
      })
      // .when('/characterSheetList/:id', {
      //   controller: 'characterSheetController',
      //   controllerAs: 'characterSheet'
      // })
      .otherwise('/login');
    }
  ]);
