angular
  .module('toggleDirective', [])
  .directive('passwordToggle', function() {
    return {
      replace: true,
      restrict: 'AE', //Can be an attribute (A) or a tag name (E)
      scope: {
        value: '=',
      },
      template: [
        '<button type="button" ng-click="value = !value" class="btn btn-default" ng-class="{active: value}">',
          '<span ng-if="value" class="glyphicon glyphicon-{{ active }}"></span>',
          '<span ng-if="!value" class="glyphicon glyphicon-{{ inactive }}"></span>',
        '</button>',
      ].join(''), //Stuff that will be going in here. You can also use templateURL and point it to a file with the template in it if it's going to be a long one
      link: function(scope, elem, attrs) {
        scope.active = attrs.active;
        scope.inactive = attrs.inactive;
        console.log(scope);
      },
    };
  });
