(function () {
  angular.module('MenuApp').component('itemsComp',{
    templateUrl: 'itemsComponent.html',
    bindings: {
      items: '<'
    }
  });
})();
