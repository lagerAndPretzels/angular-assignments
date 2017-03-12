(function () {
  angular.module('MenuApp').controller('itemsCtrl', ItemsCtrl);

  ItemsCtrl.$inject = ['fetchedItems','$scope'];
  function ItemsCtrl(fetchedItems, $scope) {
    var controller = this;
    controller.items = fetchedItems.data.menu_items;
  };
})();
