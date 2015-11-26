angular.module('characterSheetController', [
  'characterSheet.auth',
])
.controller('characterSheetController', [
  'auth',
  '$location',

  function(auth, $location) {
    auth.isLoggedIn().then(function(isLoggedIn) {
      if (!isLoggedIn) {
        $location.url('/login');
      }
    });
  }
]);
