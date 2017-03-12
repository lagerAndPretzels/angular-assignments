(function () {
  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
          url: '/home',
          template: '<p class="link" ui-sref="categories">Categories</p>'
        }
      )
      .state('categories', {
          url: '/categories',
          templateUrl: 'categories.html',
          controller: 'categoriesCtrl as ctrl',
          resolve: {
            fetchedCategories: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
          }
        }
      )
      .state('items', {
          url: '/items/{category}',
          templateUrl: 'items.html',
          controller: 'itemsCtrl as ctrl',
          resolve: {
            fetchedItems: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
              return MenuDataService.getItemsForCategory($stateParams.category);
            }]
          }
      });
  };
})();
