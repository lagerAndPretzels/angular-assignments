(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','MyInfoService'];
function SignUpController(_MenuService_, _MyInfoService_) {
  var $ctrl = this;
  var signUpInfo = null;
  $ctrl.invalidCategory = false;
  $ctrl.lastSubmitSuccess = false;
  var MenuService = _MenuService_;
  var MyInfoService = _MyInfoService_;



  $ctrl.submit = function () {
    var category = null;
    var menu_items = null;
    var number = $ctrl.category.match(/\d/);
    if(number){ //If we match a number
      category = $ctrl.category.substring(0,$ctrl.category.indexOf(number));
      if(category) {
        category = category.toUpperCase();
        MenuService.getMenuItems(category).then(function (response) {
          menu_items = response.menu_items;
          if(menu_items.length > 0){
            var myInfo = {};
            myInfo = {};
            myInfo.firstName = $ctrl.firstName;
            myInfo.lastName = $ctrl.lastName;
            myInfo.email = $ctrl.email;
            myInfo.phone = $ctrl.phone;
            myInfo.category = category;
            myInfo.categoryNumber = $ctrl.category.substring($ctrl.category.indexOf(number));
            MyInfoService.setMyInfo(myInfo);
            $ctrl.invalidCategory = false;
            $ctrl.lastSubmitSuccess = true;
          } else {
            console.log("Menu_items: ", menu_items);
            $ctrl.invalidCategory = true;
            $ctrl.lastSubmitSuccess = false;
          }
        });
      } else {
        $ctrl.invalidCategory = true;
        $ctrl.lastSubmitSuccess = false;
      }
    } else {
      $ctrl.invalidCategory = true;
      $ctrl.lastSubmitSuccess = false;
    }

  }


}

})();
