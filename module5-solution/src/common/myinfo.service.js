(function () {
"use strict";

angular.module('common')
.service('MyInfoService',MyInfoService);


function MyInfoService() {
  var service = this;
  var myInfo = null;

  service.getMyInfo = function () {
    return myInfo;
  };

  service.setMyInfo = function (_myInfo_) {
    myInfo = _myInfo_;
  };

}



})();
