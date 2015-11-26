angular
  .module('characterSheet', [
    'characterSheet.auth',
    'characterSheet.users',
  ])
  .value('characterSheetHost', 'http://dgm-todo.herokuapp.com')
  .config([
    '$httpProvider',
    function($httpProvider) {
      $httpProvider.defaults.withCredentials = true;
    }
  ]); //FIND A THIRD PARTY DB API?
