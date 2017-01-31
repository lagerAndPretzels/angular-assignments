(function(){
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var controller = this;
    controller.found = [];
    controller.nothingFound = false;//Start off false because we have yet to make a search
    controller.searchFilter = "";
    controller.narrowIt = function(){
      MenuSearchService.matchedMenuItems(controller.searchFilter)
        .then(function (result){
            controller.found = result;
            controller.nothingFound = controller.found.length == 0;
        });
    };
    controller.remove = function(index){
      controller.found.splice(index,1);
    };
  };
  MenuSearchService.$inject=['$http'];
  function MenuSearchService($http){
    var service = this;
    service.matchedMenuItems = function(searchFilter){
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      })
      .then(
        function (response){
          var foundItems = [];
          if(response.data !== undefined && response.data.menu_items !== undefined){
            response.data.menu_items.forEach(function(item,index){
              if(item.description.includes(searchFilter)) {
                foundItems.push(item);
              }
            });
          }
          return foundItems;
        },
        function (response){
          return [];
      });
    };
  };
  function FoundItems(){
    var ddo = {
     scope: {
           items: "<",
           onRemove: "&"
     },
     templateUrl: "foundItems.html",
     controller: function(){},
     bindToController: true,
     controllerAs: "ctrlr"
   };
    return ddo;
  };
})();
