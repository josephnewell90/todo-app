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
    self.errorMessage = '';

    self.selectedFilter = self.characterSheetFilters;

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
      console.log('In resetCreateForm');
      self.create = {
        name: '',
        description: '',
        tags: '',
      };
    }
    resetCreateForm();

    self.createCharacterSheet = function (data) {
      self.errorMessage = '';

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
      characterSheets.create(self.currentUser.id, characterSheet)
        .then(function() {
          readCharacterSheets();
          resetCreateForm();
          console.log('success');
        })
        .catch(function(res) {
          console.log(res.data);
          //TODO Error handling
        });
    };

      self.updateCharacterSheet = function(characterSheet) {
        var updatedCharacterSheet = {
          completed: characterSheet.completed,
          name: characterSheet.name,
          archived: characterSheet.archived,
        };


        characterSheets.update(self.currentUser.id, characterSheet.id, updatedCharacterSheet)
          .then(function () {
            readCharacterSheets();
          })
          .catch(function (err) {
            console.log(err);
          });
      };

      self.archiveCharacterSheet = function(characterSheet) {
        characterSheet.archived = true;
        self.updateCharacterSheet(characterSheet);
      };

  },
]);
