angular.module('characterSheetController', [
  'characterSheet.auth',
  'characterSheet.characterSheetList',
])
.controller('characterSheetController', [
  'auth',
  '$location',
  'characterSheets',

  function(auth, $location, characterSheets) {


    var self = this;

    auth.isLoggedIn().then(function(currentUser) {
      if (!currentUser) {
        $location.url('/login');
      }
      else {
        self.currentUser = currentUser;
        readCharacterSheets();
      }
    });

    function readCharacterSheets() {
      characterSheets.read(self.currentUser.id)
        .then(function(characters) {
          self.characterSheets = characters;
        });
    }

    function resetCreateForm() {
      self.create = {
        name: null,
        description: null,
        tags: '',
      };
    }
    resetCreateForm();

    self.createCharacterSheet = function (data) {
      var characterSheet = {
        name: data.name,
        description: data.description || 'No Description',
        tags: (data.tags || '')
          .split(',')
          .map(function (tag) {
            return tag.trim();
          })
          .filter(function(tag) {
            return tag;
          })
      };

      // data.tags = data.tags.split(',').map(function(tag) { return tag.trim(); });
      characterSheets.create(self.currentUser.id, data)
        .then(function() {
          readCharacterSheets();
          resetCreateForm();
          console.log('success');
        })
        .catch(function(err) {
          console.log(err);
          //TODO Error handling
        });
    };
  },
]);
