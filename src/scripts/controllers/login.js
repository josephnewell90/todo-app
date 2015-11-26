angular
  .module('LoginController', [
    'characterSheet.auth',
    'characterSheet.users'
  ])
  .controller('LoginController', [
    'auth',
    'users',
    function (auth) {

      this.signin = function(email, password) {
        auth.login(email, password)
          .then(function(res) {
            console.log(res.data);
          })
          .catch(function(res) {
            console.log('error', res.data);
          });
      };

      this.register = function(email, password, confirmPassword) {
        users
          .create({
            email: email,
            password: password,
          })
          .then(function(res) {
            console.log(res.data);
          })
          .catch(function(res) {
            console.log('error', res.data);
          });
      };
    },
  ]);
