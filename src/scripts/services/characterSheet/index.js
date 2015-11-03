angular
  .module('characterSheet', [
    'characterSheet.auth',
    'characterSheet.users',
  ])
  .value('characterSheetHost', 'http://dgm-todo.herokuapp.com'); //FIND A THIRD PARTY DB API?
