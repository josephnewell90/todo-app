angular.module('characterSheet.characterSheetList', [
  'characterSheet',
])
.factory('characterSheets', [
  '$http',
  'characterSheetHost',
  function($http, host) {
    return {
      create: function(userId, data) {
        return $http
          .post(host + '/users/' + userId + '/todos', data)
          .then(function(res) {
            return res.data;
          });
      },
      read: function(userId) {
        return $http
          .get(host + '/users/' + userId + '/todos', data)
          .then(function(res) {
            return res.data;
          });
      },
      update: function(userId, id, data) {
        return $http
          .put(host + '/users/' + userId + '/todos/' + id, data)
          .then(function(res) {
            return res.data;
          });
      },
      delete: function(userId, id) {
        return $http
          .delete(host + '/users/' + userId + '/todos/' + id)
          .then(function(res) {
            return res.data;
          });
      }
    };
  },
]);
// .controller('characterSheet', [
//   'auth',
//   '$location',
//   function(auth, $location) {
//     auth.isLoggedIn().then(function(isLoggedIn) {
//       if (!isLoggedIn) {
//         $location.url('/login');
//       }
//     });
//   }
// ]);
