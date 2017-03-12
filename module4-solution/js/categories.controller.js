(function () {
  angular.module('MenuApp').controller('categoriesCtrl', CategoryCtrl);

  CategoryCtrl.$inject = ['fetchedCategories'];
  function CategoryCtrl(fetchedCategories) {
    var controller = this;
    controller.categories = fetchedCategories.data;
  };
})();
