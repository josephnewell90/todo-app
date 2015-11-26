angular
  .module('TodoApp', [
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
      .when('/characterSheet', {
        templateUrl: '/partials/characterSheet-controller.html',
        controller: 'characterSheet-controller',
        controllerAs: 'characterSheet'
      })
      .otherwise('/login');
    }
  ]);
