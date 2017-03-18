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
    MenuService.getMenuItems($ctrl.category).then(function (response) {
      var menu_items = response.menu_items;
      if(menu_items.length){
        //that indicates a successful category lookup
        $ctrl.invalidCategory = false;
        signUpInfo = {};
        signUpInfo.firstName = $ctrl.firstName;
        signUpInfo.lastName = $ctrl.lastName;
        signUpInfo.email = $ctrl.email;
        signUpInfo.phone = $ctrl.phone;
        signUpInfo.category = $ctrl.category;
        console.log("Setting sign up info: ", signUpInfo);
        MyInfoService.setMyInfo(signUpInfo);
        $ctrl.lastSubmitSuccess = true;
      } else {
        console.log("invalid category");
        $ctrl.invalidCategory = true;
        $ctrl.lastSubmitSuccess = false;
      }

    });
  }


}

})();
