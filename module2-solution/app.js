(function(){
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('shoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['shoppingListCheckOffService'];
  function ToBuyController(shoppingListService){
    var controller = this;
    // controller.emptyText = shoppingListService.toBuyItemsEmptyText;
    controller.items = shoppingListService.toBuyItems;
    controller.buyItem = shoppingListService.buyItem;
  };
  AlreadyBoughtController.$inject=['shoppingListCheckOffService'];
  function AlreadyBoughtController(shoppingListService){
    var controller = this;
    controller.items = shoppingListService.alreadyBoughtItems;
    // controller.emptyText = shoppingListService.alreadyBoughtItemsEmptyText;
  };
  function ShoppingListCheckOffService(){
    var service = this;
    // service.toBuyItemsEmptyText = "Everything is bought!";
    // service.alreadyBoughtItemsEmptyText = "Nothing is bought yet.";
    service.toBuyItems = [
      { name: "eggs", quantity: 24},
      { name: "butter", quantity: 1},
      { name: "olive oil", quantity: 1},
      { name: "salmon", quantity: 2},
      { name: "goat cheese", quantity: 2},
    ];
    service.alreadyBoughtItems = [];
    service.buyItem = function buyItem(index){
      // console.log(index);
      if(index === undefined || index >= service.toBuyItems.length){
        //throw new Error('The index is invalid.')
      } else {
        // console.log(service.toBuyItems[index]);
        service.alreadyBoughtItems.push(service.toBuyItems[index]);
        service.toBuyItems.splice(index,1);
      }
    };
  };
})();
