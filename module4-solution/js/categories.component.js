(function () {
  angular.module('MenuApp').component('categoriesComp',{
    templateUrl: 'categoriesComponent.html',
    bindings: {
      categories: '<'
    }
  });
})();
