angular.module('characterSheetListController', [
  'characterSheet.auth',
])
.controller('characterSheetListController', [
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
