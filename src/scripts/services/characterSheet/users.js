angular
  .module('characterSheet.users', [
    'characterSheet'
  ])
  .factory('users', [
    '$http',
    'characterSheetHost',
    function($http, host) {
      var users = {
        create: function(user) {
          return $http.post(host + '/users', user);
        }
      };

      return users;
      
    },
  ]);
