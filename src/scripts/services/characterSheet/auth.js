angular
  .module('characterSheet.auth', [
    'characterSheet'
  ])
  .factory('auth', [
    '$http',
    'characterSheetHost',
    function($http, host) {
      var auth = {
        login: function(email, password) {
          // return $http({
          //   method: 'POST',
          //   url: host + '/session',
          //   data: {
          //     email: email,
          //     password: password,
          //   }
          // });
          return $http
            .post(host + '/session', {
              email: email,
              password: password,
            });
        },
      };
      return auth;
    },
  ]);
