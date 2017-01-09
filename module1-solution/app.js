(function(){
  angular.module("app",[])
  .controller("ctrlr", function($scope){
    $scope.lunchList = "";
    $scope.checkTooMuch = function (){$scope.lunchStatus = checkIfTooMuch($scope.lunchList)};
    $scope.lunchStatus = "";
  });
  function checkIfTooMuch(string)
  {
    var response = "";
    var splitItems = removeEmptyListItems(string.split(","));
    if(string.length > 0 && splitItems.length > 0){
      if(splitItems.length > 3) {
        response = "Too much!";
      } else {
        response = "Enjoy!";
      }
    } else {
      response = "Please enter data first";
    }
    return response;
  }
  function removeEmptyListItems(string)
  {
    return string;
  }
})();
