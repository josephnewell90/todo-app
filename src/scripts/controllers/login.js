angular
  .module('LoginController', [
    'characterSheet.auth',
    'characterSheet.users'
  ])
  .controller('LoginController', [
    'auth',
    'users',
    function (auth) {

      this.inputType = 'signin';

      this.submit = function(email, password)
      {
        this[this.inputType](email, password)
          .then(function(res) {
            // TODO redirect to the character sheet selection page
          })
          .catch(function(res) {
            console.log(res.status, res.data);
          });
      };

      this.signin = function(email, password) {
        return auth.login(email, password);
      };

      this.register = function(email, password, confirmPassword) {
        return users
          .create({
            email: email,
            password: password,
          })
          .then(function(res) {
            return auth.login(email, password);
          });
      };
    },
  ]);
